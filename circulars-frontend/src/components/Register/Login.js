import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import UserProfile from "UserProfile.js";

const Login = () => {
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", data)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        console.log(res);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} method="POST">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            class="form-control"
            placeholder="abc@example.com"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div class="form-group">
          <label for="email">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <button type="submit" className="btn btn-lg btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
