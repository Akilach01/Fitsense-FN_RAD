import { register } from "../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");


    const handleRegister = async(e:any)=>{
        e.preventDefault();

      
        try {
           const data ={name, email, password, role};
           await register(data);
           alert("registration successful");
           navigate("/login"); 
            
        } catch (err) {
            console.error(err);
            alert("Failed to register user");
        }
    };


   return (
  <div className="relative min-h-screen flex items-center justify-center">
    {/* BACKGROUND IMAGE */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1758416916/photo/excercise-equipment-in-a-modern-gym.jpg?s=612x612&w=0&k=20&c=m6kXcTSXHboGOMUFjgVd0-YQi77Vq_gcrtt80obfDFg=')"
      }}
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/60" />

    {/* REGISTER CARD */}
    <form
      onSubmit={handleRegister}
      className="
        relative z-10
        w-full max-w-md
        bg-white/90
        backdrop-blur-md
        rounded-3xl
        shadow-2xl
        p-10
        space-y-6
      "
    >
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Create Account 
        </h2>
        <p className="text-gray-700 mt-3">
          Start your fitness journey with <b>FitSense</b>
        </p>
      </div>

      {/* NAME */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            w-full
            px-4 py-3
            border border-gray-300
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full
            px-4 py-3
            border border-gray-300
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>

      {/* PASSWORD */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full
            px-4 py-3
            border border-gray-300
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="
          w-full
          bg-indigo-600
          text-white
          py-3
          rounded-xl
          font-semibold
          text-lg
          hover:bg-indigo-700
          transition
          shadow-lg
        "
      >
        Register
      </button>

      {/* FOOTER */}
      <p className="text-center text-gray-600 text-sm">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-600 font-medium hover:underline">
          Login
        </a>
      </p>
    </form>
  </div>
);
 
}
