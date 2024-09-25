// import React from 'react';
import './stylesheets/login.css';
import {useAuth} from './AuthCon.js'

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="logo-container">
                    <img src="logo-url" alt="ClickUp Logo" className="logo" />
                    <h3>The everything app for work.</h3>
                </div>
                <div className="login-form">
                    <h2>Welcome back!</h2>
                    <button className="google-login">
                        <img src="google-icon-url" alt="Google Icon" /> Continue with Google
                    </button>
                    <p className="or">OR</p>
                    <form>
                        <div className="input-group">
                            <input type="email" placeholder="Enter your work email" required />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Enter password" required />
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>
                        <button type="submit" className="login-btn">Log In</button>
                        <p className="sso-login">or login with SSO</p>
                    </form>
                </div>
                <p className="signup-text">Don't have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
