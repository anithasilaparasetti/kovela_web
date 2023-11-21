import { Route, Routes } from "react-router-dom";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import AccountInformation from './Screens/account-details';
import { useEffect, useState } from "react";
import ApplicationContext from "./utils/context-api/Context";
import Home from "./Screens/Home";
import { getAuthTokenDetails } from "./utils/preferences/localStorage";


function App() {

  const [loginDetails, setLoginDetails] = useState(null);

  const getLoginDetails = async () => {
    let authDetails = await getAuthTokenDetails();
    console.log("---jkhkjhkjhkj", authDetails);
    setLoginDetails(authDetails)

  }
  console.log("what is response", loginDetails);
  useEffect(() => {
    getLoginDetails();
  }, []);

  const AuthStack = () => {
    return (
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/SignIn" Component={SignIn} />
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/AccountInformation" Component={AccountInformation} />
        <Route path="/Home" Component={Home} />
      </Routes>
    )
  }

  const HomeStack = () => {
    return (
      <Routes>
        <Route path="/AccountInformation" Component={AccountInformation} />
      </Routes>
    )
  }

  return (

    <ApplicationContext.Provider
      value={{
        loginDetails,
        setLoginDetails
      }}>
      {loginDetails ? (
        <AuthStack />
      ) : (

        <HomeStack />
      )}
    </ApplicationContext.Provider>

  );
}

export default App;
