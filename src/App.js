import { Route, Routes } from "react-router-dom";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";


function App() {
  return (
    <Routes>
      <Route path="/" Component={SignIn} />
      <Route path="/signup" Component={SignUp} />
    </Routes>
  );
}

export default App;
