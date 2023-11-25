import { Route, Routes } from "react-router-dom";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import AccountInformation from './Screens/account-details';
import { useEffect, useState } from "react";
import ApplicationContext from "./utils/context-api/Context";
import { getAuthTokenDetails,saveUserDetails } from "./utils/preferences/localStorage";  
import Admin from "../src/Screens/admin/Admin"
import Temple1 from "./Temple-redirected-page/Temple1/Temple1";
import Temple2 from "./Temple-redirected-page/Temple2/Temple2";
import Temple3 from "./Temple-redirected-page/Temple3/Temple3";
import Temple4 from "./Temple-redirected-page/Temple4/Temple4";


function App() {

  const [loginDetails, setLoginDetails] = useState(null);

  const getLoginDetails = async () => {
    let authDetails = await getAuthTokenDetails();
    setLoginDetails(authDetails)
  }
  useEffect(() => {
    getLoginDetails();
  }, []);

  const AuthStack = () => {
    return (
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/SignIn" Component={SignIn} />
        <Route path="/Signup" Component={SignUp} />
        <Route path="/AccountInformation" Component={AccountInformation} />
        <Route path="/Admin" Component={Admin} />
        <Route path="/Temple1" Component={Temple1} />
        <Route path="/Temple2" Component={Temple2} />
        <Route path="/Temple3" Component={Temple3} />
        <Route path="/Temple4" Component={Temple4} />
       
        
      </Routes>
    )
  }

  const HomeStack = () => {
    return (
      <Routes>
        <Route path="/AccountInformation" Component={AccountInformation} />
        <Route path="/Admin" Component={Admin} />
        <Route path="/Home" Component={Home} />
      </Routes>
    )
  }

  return (

    <ApplicationContext.Provider
      value={{
        loginDetails,
        setLoginDetails,

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
