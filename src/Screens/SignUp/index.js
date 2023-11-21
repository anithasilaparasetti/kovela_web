import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signupcontainer">
      <div className="signup p-3">
        <div className="main">
          <h2>Instagram</h2>
          <p>Signup to see photos and videos from your friends</p>

          <button className="btn btn-primary">Log in </button>

          <div className="horizontal">
            <hr className="hrline" />
            <p className="or mt-1">OR</p>
            <hr className="hrline" />
          </div>

          <div className="inputcontainer">
            <input className="signupinput" type="text" placeholder="Mobile Number or email"></input>
            <input className="signupinput"  type="text" placeholder="Fullname"></input>
            <input className="signupinput"  type="text" placeholder="Username"></input>
            <input className="signupinput"  type="password" placeholder="password"></input>
          </div>

          <div className="mt-3 generaltext">
            <p>
              People who use our service may have uploaded your contact
              information to Instagram. Learn More{" "}
            </p>

            <p>
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>
          </div>

          <button className="btn btn-primary">Sign up</button>
        </div>
      </div>

      <div className="mt-3 p-2 have-an-account">
        <p>
          Have an account <a href="/">Log in? </a>
        </p>
      </div>

      <div className="get-app mt-3">
        <p className="apptext">Get the App</p>
        <div className="get-app-containers">
          <img
            className="get-app-stores"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
          ></img>
          <img
            className="get-app-stores"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/2560px-Get_it_from_Microsoft_Badge.svg.png"
          ></img>
        </div>
      </div>

      <div className="footersection mt-3">
        <p>Kovela</p>
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
        <p>API</p>
        <p>Contact us</p>
      </div>
    </div>
  );
};

export default SignUp;
