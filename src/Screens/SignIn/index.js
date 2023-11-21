import React, { useContext } from "react";
import "./styles.css";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { LoginValidationSchema } from "../../commons/schemas";
import { Login } from "../../utils/api";
import { saveLoginSessionDetails } from "../../utils/preferences/localStorage";
import ApplicationContext from "../../utils/context-api/Context";



const SignIn = () => {
  const [data, setData] = useState("");
  const {setLoginDetails, setUserDetails} = useContext(ApplicationContext);
  const navigate = useNavigate();
  const [message , setMessage ] = useState('');

  const signinHandler = async (data, actions) => {
    console.log("function call");
    let payload = {
      primaryContact: data?.primaryContact,
      password: data.password,
    };

    console.log("payload", payload);
    try {
      let result = await Login(payload);
      console.log("ACCESS_TOKEN", result)
      if (result && result.status === 200) {
        const {
          data: { accessToken, tokenType },
        } = result;
        await saveLoginSessionDetails(tokenType, accessToken);
        setData(accessToken);
        setLoginDetails(accessToken);
        actions.setSubmitting(false);
        navigate("/AccountInformation")
      } else {
        actions.setSubmitting(false);
        alert('Error', result?.message);
      }
    } catch (error) {
      console.log('error in signin', error);
      actions.setSubmitting(false);
    }
  };

  console.log(" call", data)

  return (
    <div className="App">
      <div className="images">

        <img
          className="mobile2"
          src="https://media0.giphy.com/media/hsDY1IPzpP4DcB1Ba5/giphy.gif?cid=ecf05e472t4fr9ci0ry2dpg4muku2715nejhiodxpcbcbidv&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        />
      </div>

      <div>
        <div className="login-container">
          <div className="top-part ">
            <h3 className="instagram-font">Kovela</h3>
            <p>A platform for all devotions</p>

            <Formik
              onSubmit={(values, formikAction) => {
                const { primaryContact, password } = values;
                signinHandler(values, formikAction)
              }}
              initialValues={{
                primaryContact: '',
                password: '',
              }}
              validationSchema={LoginValidationSchema}
            >
              {({
                errors,
                touched,
                values,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => {
                return (
                  <div>
                    <div className=" mb-4">
                      <div className="inputfieldContainer">
                        <label>Phone number, user or email</label>
                        <input
                          className="input_field"
                          placeholder=""
                          type="text"
                          value={values?.primaryContact}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="primaryContact"
                        />
                      </div>
                      {errors.primaryContact && <p className="error">{errors.primaryContact}</p>}
                      <div className="inputfieldContainer">
                        <label>Password</label>
                        <input
                          className="input_field"
                          placeholder=""
                          type="password"
                          value={values?.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="password"   
                        />
                      </div>
                      {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <div>
                      <button className="button mb-3" type="submit" onClick={handleSubmit}>Login</button>
                    </div>
                  </div>
                )
              }}

            </Formik>
            <div className="lines">
              <hr className="line" />
              <p>OR</p>
              <hr className="line" />
            </div>

            <div className="facebookcontainer">

            </div>

            <p className="forgotpassword">forgot password?</p>
          </div>

          <div className="bottom mt-2 mb-2">
            <p className="account-signup">
              Don't have an account?<Link to="/AccountInformation">click here</Link>
            </p>
          </div>

          <div className="storesection">
            <div className="getApp ">
              <h3>Get the App</h3>
            </div>

            <div className="store">
              <div>
                <img
                  className="stores"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/2560px-Get_it_from_Microsoft_Badge.svg.png"
                ></img>
              </div>
              <div>
                <img
                  className="stores"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row footer-section mt-5">
          <p>Kovela</p>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>API</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;