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
    <div className="p-8">
      <h1>Login</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
);
}

