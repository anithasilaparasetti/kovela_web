import React, { useContext, useState } from "react";
import "./styles.css"
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { Login, generateOTP, userSignUp } from "../../utils/api";
import { RegisterValidationSchema } from "../../commons/schemas";
import { saveLoginSessionDetails } from "../../utils/preferences/localStorage";
import ApplicationContext from "../../utils/context-api/Context";

const SignUp = () => {
  const [message, setMessage] = useState(false);
  const { setLoginDetails, setUserDetails } = useContext(ApplicationContext);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [otpError, setOtpError] = useState("");

  const signinHandler = async (data) => {
    console.log("function call");
    let payload = {
      primaryContact: data?.primaryContact,
      password: data.password,
    };

    console.log("payload", payload);
    try {
      let result = await Login(payload);
      console.log("ACCESS_TOKEN", result);
      if (result && result.status === 200) {
        const {
          data: { accessToken, tokenType },
        } = result;
        await saveLoginSessionDetails(tokenType, accessToken);
        setLoginDetails(accessToken);
        let ROLES = result?.data?.roles;
        var roleAdmin = ROLES?.indexOf('ROLE_ADMIN') > -1;
        var roleAgent = ROLES?.indexOf('ROLE_AGENT') > -1;
        var roleUser = ROLES?.indexOf('ROLE_USER') > -1;
        console.log('role', roleAdmin, roleAgent, roleUser);
        if (roleAdmin || roleAgent) {
          navigate("/Home")
        } else if (roleUser) {
          navigate("/AccountInformation")
        }
      } else {
        setMessage(result?.message);
        console.log(message)
      }
    } catch (error) {
      console.log("error in signin", error);
    }
  };

  const otpGenerate = async (data) => {
    let otpPayLoad = {
      otpType: "SIGNUP",
      primaryContact: data?.primaryContact
    }

    try {
      let result = await generateOTP(otpPayLoad);
      console.log("trigger otp result", result);
      if (result && result.status === 200) {
        setOtp(result?.data?.otp);
        setLoading(true);
      } else {
        console.log("otp error", result?.data?.message);

        if(result?.data?.message === "Primary Contact Is Required"){
          setOtpError("phoneNumber is required");
        }

      }
    } catch (error) {
      console.log("otp error", error);
    }
  }

  console.log("otp details", otp);


  const UserRegistration = async (data) => {
    console.log("signup")
    const payLoad = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      primaryContact: data?.primaryContact,
      email: data?.email,
      password: data?.password,
      otp: otp
    }

    try {
      let result = await userSignUp(payLoad);
      console.log("SIGN UP RESULT", result);
      if (result && result.status === 200) {
        signinHandler(data);
        console.log("msg", result?.data?.message);
      } else {
        console.log("something went wrong", result?.response?.data?.message);

        if (result?.response?.data?.message === "Error: phoneNumber is already taken!") {
          setMessage("phoneNumber is already taken!");
        } else if (result?.response?.data?.message === "Error: Email is already in use!") {
          setMessage("Email is already in use!");
        }

      }
    } catch (error) {
      console.log("error", error);
      alert(error);

    }
  }

  return (
    <div className="signupcontainer">

      <div className="signup p-3">
        <div className="main">
          <h2>Kovela</h2>
          <p>Signup to see photos and videos from your friends</p>

          <div className="horizontal">
            <hr className="hrline" />
            <p className="or mt-1">OR</p>
            <hr className="hrline" />
          </div>

          <Formik
            onSubmit={(values, formikAction) => {
              console.log("formik calling", values);
              const { firstName, lastName, primaryContact, email, password, otp } = values;

              // if (loading) {
              //   UserRegistration(values, formikAction);
              //   console.log("user registered calling", values);
              // } else {
              //   alert("formik exception");
              // }

            }}

            validationSchema={RegisterValidationSchema}
            initialValues={{
              firstName: '',
              lastName: '',
              primaryContact: '',
              email: '',
              password: '',
              otp: ''
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,

            }) => {
              return (
                <div>


                  <div className="inputcontainer">
                    <input
                      className="signupinput"
                      placeholder="first name"
                      type="text"
                      value={values?.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="firstName"
                    />
                  </div>
                  <div className="error-alignment">
                    {errors.firstName && (
                      <p className="error">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="inputcontainer">
                    <input
                      className="signupinput"
                      placeholder="last name"
                      type="text"
                      value={values?.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="lastName"
                    />
                  </div>
                  <div className="error-alignment">
                    {errors.lastName && (
                      <p className="error">{errors.lastName}</p>
                    )}
                  </div>

                  <div className="inputcontainer">
                    <input
                      className="signupinput"
                      placeholder="userName"
                      type="text"
                      value={values?.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="email"
                    />
                  </div>
                  <div className="error-alignment">
                    {errors.email && (
                      <p className="error">{errors.email}</p>
                    )}
                  </div>

                  <div className="inputcontainer">
                    <input
                      className="signupinput"
                      placeholder="password"
                      type="password"
                      value={values?.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="password"
                    />
                  </div>
                  <div className="error-alignment">
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>

                  <div className="inputcontainer">
                    <input
                      className="signupinput"
                      placeholder="mobileNumber"
                      type="number"
                      value={values?.primaryContact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="primaryContact"
                    />
                  </div>
                  <div className="error-alignment">
                    {message || errors.primaryContact && (
                      <p className="error">{errors.primaryContact}</p>
                    )}
                  </div>

                  <div className="otp">
                    <input
                      className=""
                      placeholder="otp"
                      type="text"
                      value={otp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="otp"

                    />
                    <button
                      style={{ color: "white", backgroundColor: "blue", borderRadius: "20px" }} type="button" onClick={() => otpGenerate(values, handleBlur)}>getOTP</button>
                  </div>

                  <div className="error-alignment">
                    {otp == null || otp == '' && (
                      <p className="error">{errors.otp}</p>
                    )}
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
                  <div>
                    <button className="btn btn-primary" type="submit" onClick={() => UserRegistration(values)}>Sign up</button>
                  </div>

                  <div className="error">
                    {message && <p>{message}</p>}
                  </div>
                </div>
              )
            }}
          </Formik>
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
