import React, { useState } from "react";
import "./RegisterForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterForm = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="register">
      <h1 style={{ textAlign: "center", margin: "30px" }}>Register</h1>
      <form method="post">
        <div style={{ display: "flex" }}>
          <div class="form-group">
            <label for="fname">First name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              class="form-control"
              placeholder="First name"
              value={data.fname}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="lname">Last name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              class="form-control"
              placeholder="Last name"
              value={data.lname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            class="form-control"
            placeholder="abc@example.com"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Last name"
            value={data.password}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
