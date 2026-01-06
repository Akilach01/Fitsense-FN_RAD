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

navigate("/home");
    
} catch (err) {
    alert("Invalid email or password");
    console.error(err);
  }
};

return(
    <div className="flex justify-center items-center h-screen">
    <form className="bg-white p-6 rounded shadow w-80 space-y-2">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome back</h2>
      <h2 className="text-xl font-bold mb-4 text-center">Log in to continue your fitness journey</h2>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      
        <button onClick={handleLogin} className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
        Login
      </button>
    </form>
  </div>
);
}

