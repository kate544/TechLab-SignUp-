import React, { useState } from 'react';
import './Signup-SignIn.css';
import logo from '../../assets/TechLab Logo.jpeg';

const SignupSignIn = () => {
  const [action, setAction] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="TechLab Logo" className="logo-img" />
        <div className="brand">TechLab</div>
      </header>

      <div className="form-container">
        <h2 className="title">{action}</h2>
        <p className="subtitle">
          {action === "Sign Up" 
            ? "Join TechLab and start your coding journey." 
            : "Welcome back! Please login to your account."}
        </p>

        <div className="inputs">
          {action === "Sign In" ? null : (
            <div className="input-group">
              <label>Fullname</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          {/* Password Field with Toggle */}
          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter password" 
              />
              <span 
                className="password-toggle" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {action === "Sign In" ? null : (
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="password-wrapper">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm your password" 
                />
                <span 
                  className="password-toggle" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>
          )}
        </div>

        <button className="submit-btn">{action}</button>

        <div className="switch-text">
          {action === "Sign Up" ? "Already have an account?" : "Don't have an account?"} 
          <span onClick={() => setAction(action === "Sign Up" ? "Sign In" : "Sign Up")}>
            {action === "Sign Up" ? " Sign In" : " Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupSignIn;