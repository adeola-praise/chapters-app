// src/pages/Auth/LoginPage.jsx
import React, { useState } from "react";
import { login } from "../../services/authService";
import { Button, Input, message } from "antd";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      if (response) {
        message.success("Login successful!");
      }
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="primary" onClick={handleLogin}>
        Log In
      </Button>
    </div>
  );
};

export default LoginPage;
