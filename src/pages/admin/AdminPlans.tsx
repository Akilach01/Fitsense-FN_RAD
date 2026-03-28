import { useEffect, useState } from "react";
import { getAllPlans, reviewPlan } from "../../services/plan";

interface Plan {
  _id: string;
  user?: {
    _id: string;
    name: string;
    email: string;
  } | null;
  title: string;
  description: string;
  exercises: string[];
  status: "PENDING" | "APPROVED" | "REJECTED" | "NEEDS_UPDATE";
  feedback?: string;
  createdAt: string;
}

interface ReviewModalProps {
  plan: Plan | null;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

function ReviewModal({ plan, onClose, onSubmit }: ReviewModalProps) {
  const [status, setStatus] = useState(plan?.status || "PENDING");
  const [feedback, setFeedback] = useState(plan?.feedback || "");
  const [title, setTitle] = useState(plan?.title || "");
  const [description, setDescription] = useState(plan?.description || "");
  const [exercises, setExercises] = useState(plan?.exercises.join("\n") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const exerciseArray = exercises.split("\n").filter(ex => ex.trim());
    onSubmit({
      status,
      feedback: feedback.trim() || undefined,
      title: title.trim() || undefined,
      description: description.trim() || undefined,
      exercises: exerciseArray.length > 0 ? exerciseArray : undefined,
    });
  };

  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">Review Plan: {plan.title}</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="APPROVED">Approve</option>
                <option value="REJECTED">Reject</option>
                <option value="NEEDS_UPDATE">Needs Update</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Feedback (required for Reject/Needs Update)</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 border rounded-lg h-24"
                placeholder="Explain why the plan was rejected or what needs to be improved..."
                required={status === "REJECTED" || status === "NEEDS_UPDATE"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Title (optional edit)</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description (optional edit)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-lg h-20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Exercises (one per line, optional edit)</label>
              <textarea
                value={exercises}
                onChange={(e) => setExercises(e.target.value)}
                className="w-full p-2 border rounded-lg h-32"
                placeholder="Exercise 1&#10;Exercise 2&#10;Exercise 3"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function AdminPlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const loadPlans = async () => {
    try {
      setLoading(true);
      const res = await getAllPlans();
      console.log("Plans response:", res);
      setPlans(res.plans || []);
      setError(null);
    } catch (err: any) {
      console.error("Error loading plans:", err);
      setError(err.response?.data?.message || "Failed to load plans");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlans();
  }, []);

  const handleReview = async (data: any) => {
    if (!selectedPlan) return;
    
    try {
      await reviewPlan(selectedPlan._id, data);
      setPlans(plans.map(p =>
        p._id === selectedPlan._id ? { ...p, ...data } : p
      ));
      setSelectedPlan(null);
      setError(null);
    } catch (err: any) {
      setError("Failed to review plan");
      console.error(err);
    }
  };

  if (loading) return <div className="text-center py-8">Loading plans...</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Fitness Plans Approval
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      {plans.length === 0 && (
        <p className="text-gray-500">No plans submitted yet.</p>
      )}

      <div className="space-y-4">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-white rounded-2xl shadow p-6"
          >
            {/* PLAN HEADER */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {plan.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Submitted by: <strong>{plan.user?.name || "Unknown"}</strong> ({plan.user?.email || "N/A"})
              </p>
            </div>

            {/* PLAN DETAILS */}
            <div className="mb-4 space-y-3 bg-gray-50 p-4 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">Description:</p>
                <p className="text-gray-700 mt-1">{plan.description}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Exercises:</p>
                <ul className="mt-2 ml-4 space-y-1">
                  {plan.exercises.map((exercise, idx) => (
                    <li key={idx} className="text-gray-700 list-disc">
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* STATUS & ACTIONS */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    plan.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : plan.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : plan.status === "REJECTED"
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {plan.status}
                </span>
                {plan.feedback && (
                  <div className="mt-2 p-2 bg-gray-50 rounded text-sm text-gray-700">
                    <strong>Feedback:</strong> {plan.feedback}
                  </div>
                )}
              </div>

              {plan.status === "PENDING" && (
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
                >
                  Review Plan
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <ReviewModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          onSubmit={handleReview}
        />
      )}
    </div>
  );
}
