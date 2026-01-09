
import { useAuth } from "../context/authContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import AdminPlans from "../pages/admin/AdminPlans";
import AdminUsers from "../pages/admin/AdminUsers";
import Register from "../pages/register";
import Home from "../pages/home";
import CreatePlan from "../pages/plans/CreatePlan";
import Layout from "../components/Layout";
import AdminDashboard from "../pages/adminDashboard";
import MyPlans from "../pages/plans/MyPlans";
import UserDashboard from "../pages/userDashboard";



const RequireAuth = ({children, role}:any)=>{
    const {user, loading } = useAuth();

    if (loading) return <p>loading...</p>;
    if (!user) return <Navigate to="/login"/>;

    if (role && user.role !== role) {
        return <Navigate to="/" />;   
    }

    return children;
     };


     export default function Router(){
        return(
           <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth><Layout /></RequireAuth>}>
      {/* User */}
      <Route path="/user/dashboard" element={<RequireAuth role="user"><UserDashboard /></RequireAuth>} />
      <Route path="/plans/create" element={<RequireAuth role="user"><CreatePlan /></RequireAuth>} />
      <Route path="/plans/me" element={<RequireAuth role="user"><MyPlans /></RequireAuth>} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<RequireAuth role="admin"><AdminDashboard /></RequireAuth>} />
      <Route path="/admin/plans" element={<RequireAuth role="admin"><AdminPlans /></RequireAuth>} />
      <Route path="/admin/users" element={<RequireAuth role="admin"><AdminUsers /></RequireAuth>} />
    </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter> 
        );  
    }
