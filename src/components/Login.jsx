import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password123") {
      navigate("/"); // Ohereza umukoresha kuri homepage
    } else {
      setError("Email cyangwa Password ntabwo ari byo!");
    }
  };

  return (
    <div 
    id="signup" 
    className="flex justify-center items-center h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hh.png')" }} // Changed background image
  >
    
    <div id="login" className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Nta konti ufite? <Link to="/signup" className="text-blue-500">Iyandikishe</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
