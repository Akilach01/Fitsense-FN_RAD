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


    return(
        <div>
            <h1>Register</h1>

            <input placeholder="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />

            <input placeholder="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />

            <input placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />

            <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
            </select>

            <button onClick={handleRegister}>Register</button>

        </div>
    );
}
