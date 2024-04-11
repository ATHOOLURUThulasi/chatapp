import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If sign-in is successful, show alert
      window.alert("Sign in successful!");
      navigate("/home");
    } catch (error) {
      // If there's an error, set error state
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="formContainer" style={{backgroundImage:"url('https://images6.alphacoders.com/108/1080642.jpg')",backgroundSize:"cover"}}>
      <div className="formWrapper" style={{ opacity: 0.8}}>
        <span className="logo">TalkSquare</span>
        <span className="title" style={{ fontSize: "15px" }}>Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button style={{ backgroundColor: "violet", borderRadius: "20px", padding: "7px", border: "none" }}>Sign in</button>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
        <p style={{fontSize:"15px"}}>You don't have an account? <Link to="/" style={{textDecoration:"none",color:"black"}}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
