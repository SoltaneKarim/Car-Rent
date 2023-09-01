import React, { useState } from "react";
import "./Login.css";

function Login({ changeToSignUp, changeToHome }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/client"); // Replace with your API endpoint
      const data = await response.json();

      // Simulate a simple check for correct email and password
      const foundUser = data.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        changeToHome();
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit" onClick={handleLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Jump in
        </button>
        <button type="button" onClick={changeToSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
