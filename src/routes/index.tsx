
import { useAuth } from "../context/authContext";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import Login from "../pages/login";



const RequireAuth = ({children, role}:any)=>{
    const {user, loading } = useAuth();

    if (loading) return <p>loading...</p>;
    if (!user) return <Navigate to="/login"/>;

    if (role && user.role !== role) {
        return <p>Access denied</p>;   
    }

    return children;
     };


     export default function Router(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path ="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<RequireAuth><Layout /></RequireAuth>}>
                <Route path="/home" element={<Home />} />

                <Route
                    path="/plans/create"
                    element={<RequireAuth role="user"><CreatePlan /></RequireAuth>}
                />



            </Routes>

            
            
            </BrowserRouter>
        )
     }
     {
        
    }
}