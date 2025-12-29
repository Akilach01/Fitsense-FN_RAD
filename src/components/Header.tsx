import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";



export default function Header(){
    const navigate = useNavigate();
    const {user} = useAuth();

    const logout = ()=>{
        localStorage.removeItem("token");
        navigate("/login");
    };

    return(
        <header className="flex justify-between p-4 bg-blue-500 text-white">
            <nav className="space-x-4">
                <Link to="/home">Home</Link>

                {user?.role === "user" &&(
                    <>
                    <Link to="/plans/create">Create Plan</Link>
                    <Link to="/plans/me">My Plans</Link>
                    </>
                )}

                {user?.role === "admin" &&(
                    <>
                    <Link to="/admin/plans">Plans</Link>
                    <Link to="/admin/users">Users</Link>
                    </>
                )}
            </nav>

            <div>
                {user?.email}
                <button className="ml-4" onClick={logout}>Logout</button>
            </div>
        </header>
    );
}