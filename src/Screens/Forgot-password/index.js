import React from "react";
import "./styles.css";

function Forgotpassword() {
  return (
    <div className="text-center Trouble-logging-main-container">
      
      <h1>Kovela</h1>
      <hr></hr>
      
    
      <div className="forgot-password-container">
        
        <div className="Trouble-logging-in-container">
          <img src="" />
          <h4>Trouble logging in?</h4>
          <p>
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
        </div>

        <div className="forgot-password-input-container">
          <label>Phone number, user or email</label>
          <input
            className="forgot_password_input_field"
            placeholder=""
            type="text"
            id="primaryContact"
          />
        </div>
        <button className="m-3 login-link-button">send Login Link</button>
        <div className="forgot_password_lines">
          <hr className="forgot_password_line1" />
          <p>OR</p>
          <hr className="forgot_password_line2" />
        </div>

        <p>Create New Account</p>

        <button className="Back-to-login-button">Back to login</button>
        
      </div>
    
      
      
      
    </div>
  )
}

export default Forgotpassword