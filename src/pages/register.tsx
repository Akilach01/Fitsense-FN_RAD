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
            
            
        } catch (error) {
            
        }
    }


}