import { useEffect, useState } from "react";
import { getMyPlans } from "../../services/plan";

export default function MyPlans() {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    getMyPlans().then((res) => setPlans(res));
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
             My Fitness Plans
          </h2>

          {plans.length === 0 ? (
            <p className="text-center text-gray-600">
              You haven’t created any plans yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {plans.map((p) => (
                <div
                  key={p._id}
                  className="bg-white rounded-2xl border p-6 shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {p.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">Goal:</span> {p.description}
                  </p>

                  <p className="text-gray-600">
                     <span className="font-medium">Exercises:</span> {p.exercises.join(", ")}
                  </p>

                  <span
                  className={`inline-block mt-4 px-3 py-1 text-sm rounded-full font-medium
                    ${
                      p.status === "APPROVED"
                        ? "bg-green-200 text-green-800"
                        : p.status === "REJECTED"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                >
                  {p.status}
                </span>
                  
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
