import React from "react";
import "./Circular.css";
import FileCard from "./FileCard";

function Circular() {
  return (
    <div className="circular__detail">
      <div className="circular__header">
        <div className="header__title">
            Circular 1
        </div>
        <div className="header__date">
            15-05-2021
        </div>
      </div>
      <p className="circular__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue quisque egestas diam in arcu cursus euismod quis. Nibh praesent tristique magna sit amet purus gravida quis. Enim ut sem viverra aliquet eget sit. Nec sagittis aliquam malesuada bibendum arcu vitae
      </p>
      <div className="circular__files">
          <FileCard name="circular1"/>
          <FileCard name="circular2"/>
      </div>
    </div>
  );
}

export default Circular;
