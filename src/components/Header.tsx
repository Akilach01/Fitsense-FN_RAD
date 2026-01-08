import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600"> 
          FitSense
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {!user && (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}

          {user?.role === "user" && (
            <>
              <Link to="/plans/create" className="hover:text-blue-600">
                Create Plan
              </Link>
              <Link to="/plans/me" className="hover:text-blue-600">
                My Plans
              </Link>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <Link to="/admin/plans" className="hover:text-blue-600">
                Plans
              </Link>
              <Link to="/admin/users" className="hover:text-blue-600">
                Users
              </Link>
            </>
          )}

          {user && (
            <>
              <span className="text-sm text-gray-600">{user.email}</span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
