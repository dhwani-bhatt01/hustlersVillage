import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HomePage/Home";
import Register from "./components/Register/Register";
import UserCheck from "./components/UserCheck/UserCheck";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Register" component={Register} />
        <Route path="/Roles" component={UserCheck} />
        {/* <LogIn /> */}
        {/* <Register /> */}
        {/* <UserCheck /> */}
      </Switch>
    </Router>
  );
}

export default App;
