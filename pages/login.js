// pages/login.js
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import { motion } from "framer-motion";

const Login = () => {
  const handleGoogleLogin = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="login-page">
      <motion.div
        className="login-box"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="title">JPShop Login</h1>
        <button className="login-button" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
