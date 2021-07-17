import React, { useState, useEffect } from "react";
import "./RegisterForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    re_password: "",
    type: "student",
  });

  const [isPasswordsSame, setIsPasswordsSame] = useState(true);
  const [passwordsNotSameHTML, setPasswordsNotSameHTML] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const checkPasswords = (e) => {
    if (data.password !== data.re_password) {
      setIsPasswordsSame(false);
      setPasswordsNotSameHTML(
        <p className="text-danger text-small">
          Passwords are not same. Please recheck the passwords.
        </p>
      );
      console.log(passwordsNotSameHTML);
    } else {
      setIsPasswordsSame(true);
      setPasswordsNotSameHTML(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .post("http://localhost:5000/auth/create", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/login");
          // if response is not successful show a message
        }
      })
      .catch((error) => {
        console.log(error.message);

        setData({
          ...data,
          password: "",
          re_password: "",
        });
        setIsPasswordsSame(true);
        setPasswordsNotSameHTML(null);
      });
  };

  useEffect(() => {
    checkPasswords();
  }, []);

  return (
    <div className="register">
      <h1 style={{ textAlign: "center", margin: "30px" }}>Register</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
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
          <label for="type">Choose type</label>
          <select
            name="type"
            value={data.type}
            className="form-control"
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
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
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label for="re_password">Retype Password</label>
          <input
            type="password"
            name="re_password"
            id="re_password"
            class="form-control"
            placeholder="Re-type password"
            value={data.re_password}
            onChange={handleChange}
            onBlur={checkPasswords}
          />
          {passwordsNotSameHTML}
        </div>

        <button type="submit" className="btn-lg btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
