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
    <form className="bg-white p-6 rounded shadow w-80">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
        <button onClick={handleLogin} className="w-full">
        Login
      </button>
    </form>
  </div>
);
}

