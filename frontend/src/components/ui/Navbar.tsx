import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/about" className="mr-4 hover:underline">About</Link>
        <Link to="/projects" className="mr-4 hover:underline">Projects</Link>
        <Link to="/contact" className="mr-4 hover:underline">Contact</Link>
      </div>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/admin" className="mr-4 hover:underline">Dashboard</Link>
            <button onClick={handleLogout} className="hover:underline">Logout</button>
          </>
        ) : (
          <Link to="/admin/login" className="hover:underline">Admin Login</Link>
        )}
      </div>
    </nav>
  );
};
