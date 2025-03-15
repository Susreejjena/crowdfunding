import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (isSignup && !formData.name)) {
      alert("Please fill out all fields.");
      return;
    }

    if (isSignup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(`${isSignup ? "Signup" : "Login"} successful!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">{isSignup ? "Sign Up" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />

          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
          )}

          <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <button className="w-full flex items-center justify-center gap-2 bg-white text-purple-600 border border-purple-600 p-2 rounded mt-2">
          <FcGoogle size={20} /> Sign in with Google
        </button>

        {!isSignup && (
          <div className="text-sm text-gray-600 mt-2">
            <Link to="#" className="hover:text-purple-600">Forgot Password?</Link>
          </div>
        )}

        <p className="text-sm text-gray-600 mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="text-purple-600 cursor-pointer" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
