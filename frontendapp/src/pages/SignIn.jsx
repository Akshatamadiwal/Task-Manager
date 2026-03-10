import { useState } from "react";
import axios from "axios";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate   = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await axios.post(
      "http://localhost:5000/auth/signin",
      formData
    );

    console.log("Signin response:", res.data);

    // Store userId
    localStorage.setItem("userId", res.data._id);

    console.log("Stored userId:", localStorage.getItem("userId"));

    // Navigate to Dashboard
    navigate("/dashboard", { replace: true });

  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }
};
  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign In</button>
        <p className="signup-link" style={{color:"white"}}>
  Don't have an account? <a href="/signup">Sign up</a>
</p>
      </form>
    </div>
  );
}

export default SignIn;
