import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useState } from "react";
import { login, getMyDetails } from "../services/auth";


export default function Login(){
    const navigate = useNavigate();
    const {setUser} = useAuth();


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e:any)=>{
    e.preventDefault();


try {
    const res =  await login(email, password);
localStorage.setItem("token",res.token);

const me = await getMyDetails();
setUser(me.user);

//role based redirect
 if (me.user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
    }
    
} catch (err) {
    alert("Invalid email or password");
    console.error(err);
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

    {/* LOGIN CARD */}
    <form
      onSubmit={handleLogin}
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
        <h2 className="text-3xl font-bold text-red-800">FitSense</h2>
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome Back 💪
        </h2>
        <p className="text-gray-600 mt-2">
          Log in to continue your fitness journey
        </p>
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
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
        Login
      </button>

      {/* FOOTER */}
      <p className="text-center text-gray-600 text-sm">
        Don’t have an account?{" "}
        <a href="/register" className="text-indigo-600 font-medium hover:underline">
          Register
        </a>
      </p>
    </form>
  </div>
);

}

