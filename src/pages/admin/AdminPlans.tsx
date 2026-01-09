import { useEffect, useState } from "react";
import { approvePlan, getAllPlans, rejectPlan } from "../../services/plan";

export default function AdminPlans() {
  const [plans, setPlans] = useState<any[]>([]);

  const loadPlans = async () => {
    const res = await getAllPlans();
    setPlans(res.plans);
  };

  useEffect(() => {
    loadPlans();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Fitness Plans Approval 
      </h2>

      {plans.length === 0 && (
        <p className="text-gray-500">No plans submitted yet.</p>
      )}

      <div className="space-y-4">
        {plans.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:justify-between md:items-center"
          >
            {/* PLAN INFO */}
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {p.title}
              </h3>
              <p className="text-gray-600">Goal: {p.goal}</p>
              <p className="text-sm text-gray-500">
                Submitted by: {p.user?.email}
              </p>

              <span
                className={`inline-block mt-2 px-3 py-1 text-sm rounded-full font-medium
                  ${
                    p.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : p.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
              >
                {p.status.toUpperCase()}
              </span>
            </div>

            {/* ACTIONS */}
            {p.status === "pending" && (
              <div className="flex gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => approvePlan(p._id).then(loadPlans)}
                  className="px-4 py-2 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectPlan(p._id).then(loadPlans)}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
