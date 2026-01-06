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
         <div className="flex justify-center items-center h-screen">
    <form className="bg-white p-6 rounded shadow w-96 space-y-2">
      <h2 className="text-xl font-bold mb-4 text-center">Create a Account</h2>


      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    
       <select value={role} onChange={(e) => setRole(e.target.value)}className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

     <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition" onClick={handleRegister}>Register</button>

        </form>
        </div>
    );
}
