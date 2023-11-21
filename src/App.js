import { Route, Routes } from "react-router-dom";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import AccountInformation from './Screens/account-details';


function App() {
  return (
    <Routes>
      <Route path="/" Component={SignIn} />
      <Route path="/SignUp" Component={SignUp} />
      <Route path="/SignIn" Component={SignIn} />
      <Route path="/AccountInformation" Component={AccountInformation} />
    </Routes>
  );
}

export default App;
