import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPlan } from "../../services/plan";

export default function CreatePlan() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState("");
  const [exercisesInput, setExercisesInput] = useState(""); // optional: comma-separated exercises

  const handleCreate = async () => {
    try {
      // Convert comma-separated exercises input into array
      const exercisesArray = exercisesInput
        ? exercisesInput.split(",").map((ex) => ex.trim())
        : [duration]; // fallback: use duration if exercises not provided

      const payload = {
        title,
        description: goal,
        exercises: exercisesArray,
      };

      await createPlan(payload);
      alert("Plan created! Waiting for admin approval.");
      navigate("/plans/me");
    } catch (err) {
      console.error(err);
      alert("Failed to create plan");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599058917212-d750089bc07b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* FORM CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          🏋️ Create Fitness Plan
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Plan Title
          </label>
          <input
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            placeholder="Beginner Strength Plan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Goal / Description
          </label>
          <input
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            placeholder="Lose fat, build muscle..."
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration (weeks)
          </label>
          <input
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            placeholder="8"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Exercises (comma separated)
          </label>
          <input
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            placeholder="Push-ups, Squats, Plank"
            value={exercisesInput}
            onChange={(e) => setExercisesInput(e.target.value)}
          />
        </div>

        <button
          onClick={handleCreate}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Create Plan
        </button>
      </div>
    </div>
  );
}
