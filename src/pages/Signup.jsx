import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch("https://masteryprep.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data);

        navigate('/login');
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Shaileshbhai Chaudhari"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="shailesh93602@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link">
            SingIn here
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
