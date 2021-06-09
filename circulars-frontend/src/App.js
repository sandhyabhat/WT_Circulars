import "./App.css";
import NavBar from "./components/Register/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterForm from "./components/Register/RegisterForm";
import Login from "./components/Register/Login";
import Departments from "./components/Department/Departments";
import Circular from "./components/Circular/Circular";
import Circulars from "./components/Circular/Circulars";
import CircularForm from "./components/Circular/CircularForm";

export default function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
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
          <Route path="/">
            <NavBar />
            <Circulars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
