
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
import UserDashboard from "../pages/userDashboard";
import AdminDashboard from "../pages/adminDashboard";
import MyPlans from "../pages/plans/MyPlans";



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

        {/* USER ROUTES */}
        <Route
          element={
            <RequireAuth role="user">
              <Layout />
            </RequireAuth>
          }
        >
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/plans/create" element={<CreatePlan />} />
          <Route path="/plans/me" element={<MyPlans />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route
          element={
            <RequireAuth role="admin">
              <Layout />
            </RequireAuth>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/plans" element={<AdminPlans />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter> 
        );  
    }
