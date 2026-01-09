import { useEffect, useState } from "react";
import { getAllPlans, approvePlan, rejectPlan } from "../../services/plan";

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
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
}

export default function AdminPlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleApprove = async (planId: string) => {
    try {
      await approvePlan(planId);
      setPlans(plans.map(p =>
        p._id === planId ? { ...p, status: "APPROVED" } : p
      ));
    } catch (err: any) {
      setError("Failed to approve plan");
      console.error(err);
    }
  };

  const handleReject = async (planId: string) => {
    try {
      await rejectPlan(planId);
      setPlans(plans.map(p =>
        p._id === planId ? { ...p, status: "REJECTED" } : p
      ));
    } catch (err: any) {
      setError("Failed to reject plan");
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
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {plan.status}
                </span>
              </div>

              {plan.status === "PENDING" && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(plan._id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleReject(plan._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
