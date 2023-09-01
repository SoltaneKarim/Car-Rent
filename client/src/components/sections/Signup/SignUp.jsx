import React, { useState } from "react";
import "./SignUp.css";

function SignUp({ changeToLogin, changeToHome }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/client", {
        // Replace with your API endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password, address }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("Sign up successful!");
        changeToHome();
      } else {
        alert("Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div id="login-box">
      <div class="left">
        <h1>Sign up</h1>

        <input
          type="text"
          placeholder="FullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <input
          type="submit"
          name="signup_submit"
          value="Sign me up"
          onClick={handleSignUp}
        />
      </div>

      <div class="right">
        <span class="loginwith">
          Sign in with
          <br />
          social network
        </span>

        <button class="social-signin facebook">Log in with facebook</button>
        <button class="social-signin twitter">Log in with Twitter</button>
        <button class="social-signin google">Log in with Google+</button>
      </div>
      <div class="or">OR</div>
    </div>
  );
}

export default SignUp;
