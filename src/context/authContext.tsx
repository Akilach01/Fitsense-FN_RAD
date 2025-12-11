import {createContext, useContext, useEffect, useState } from "react";
import { getMyDetails } from "../services/auth";


const AuthContext = createContext<any>(null);

export const AuthProvider =({children}:any)=>{
    const[user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
        getMyDetails()
        .then((res)=>setUser(res.user))
        .catch(()=>setUser(null))
        .finally(()=>setLoading(false));
    }else{
    setLoading(false);    
        
    }

 },[]);

 return(
    <AuthContext.Provider value={{user, setUser, loading}}>
        {children}
    </AuthContext.Provider>
 );
};

export const useAuth = ()=>useContext(AuthContext);


