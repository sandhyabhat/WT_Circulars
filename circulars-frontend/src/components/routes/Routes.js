import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../Register/NavBar";
import Circulars from "../Circular/Circulars";
import CircularForm from "../Circular/CircularForm";
import Login from "../Register/Login";
import RegisterForm from "../Register/RegisterForm";
import Departments from "../Department/Department";
import Home from "../Home/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <NavBar />
          <Login />
        </Route>
        <Route path="/departments">
          <NavBar />
          <Departments />
        </Route>
        <Route path="/post">
          <NavBar />
          <CircularForm />
        </Route>
        <Route path="/register">
          <NavBar />
          <RegisterForm />
        </Route>
        <Route path="/view">
          <NavBar />
          <RegisterForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
