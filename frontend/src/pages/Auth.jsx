import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Try backend JWT login; fall back to localStorage simple auth if backend not reachable
  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      // Attempt to call standard DRF SimpleJWT token obtain endpoint
      const resp = await axios.post("/api/token/", { username, password });
      // store token and optionally username
      localStorage.setItem("access_token", resp.data.access);
      if (resp.data.refresh) localStorage.setItem("refresh_token", resp.data.refresh);
      localStorage.setItem("username", username);
      navigate("/products");
    } catch (e) {
      // If backend returns 4xx, show message. If network error (no backend), fall back to localStorage check
      if (e.response) {
        setError(e.response.data.detail || "Invalid credentials");
      } else {
        const storedUser = localStorage.getItem("user");
        if (storedUser && JSON.parse(storedUser).password === password && JSON.parse(storedUser).username === username) {
          localStorage.setItem("username", username);
          navigate("/products");
        } else {
          setError("Invalid credentials or no backend available.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setError("");
    setLoading(true);
    try {
      // Try calling backend user creation endpoint if available
      await axios.post("/api/users/", { username, password }).then(() => {
        alert("Signup successful! Please log in.");
        setIsLogin(true);
      }).catch(() => {
        // ignore and fallback to localStorage below
      });

      // Fallback: store simple user locally for demo purposes
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Signup saved locally. Please log in.");
      setIsLogin(true);
    } catch (e) {
      setError("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }
    if (isLogin) handleLogin();
    else handleSignup();
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {error && <div className="auth-error">{error}</div>}
      <form onSubmit={handleAuth}>
        <input
          aria-label="username"
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          aria-label="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button type="submit" disabled={loading}>{loading ? "Please wait..." : (isLogin ? "Login" : "Sign Up")}</button>
          <button type="button" onClick={() => { setUsername(""); setPassword(""); setIsLogin(!isLogin); setError(""); }}>
            {isLogin ? "Switch to Sign Up" : "Switch to Login"}
          </button>
        </div>
      </form>
      <p style={{ marginTop: 12, fontSize: 13, color: "#666" }}>
        By continuing you agree to the app terms.
      </p>
    </div>
  );
}

export default Auth;
