
import { useAuth } from "../context/authContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Myplans from "../pages/plans/MyPlans";
import AdminPlans from "../pages/admin/AdminPlans";
import AdminUsers from "../pages/admin/AdminUsers";
import Register from "../pages/register";
import Home from "../pages/home";
import CreatePlan from "../pages/plans/CreatePlan";
import Layout from "../components/Layout";



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

                 <Route
                    path="/plans/me"
                    element={<RequireAuth role="user"><Myplans /></RequireAuth>}
                />

                 <Route
                    path="/admin/plans"
                    element={<RequireAuth role="admin"><AdminPlans /></RequireAuth>}
                />

                 <Route
                    path="/admin/users"
                    element={<RequireAuth role="admin"><AdminUsers /></RequireAuth>}
                />
                </Route>
            </Routes>
            </BrowserRouter>
        );  
    }
