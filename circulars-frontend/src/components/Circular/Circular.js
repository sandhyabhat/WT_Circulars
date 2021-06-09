import React from "react";
import "./Circular.css";
import FileCard from "./FileCard";

const Circular = ({ circular }) => {
  console.log(circular);
  const { title, message, departments, selectedFile, createdAt } = circular;
  return (
    <div className="circular__detail">
      <div className="circular__header">
        <div className="header__title">{title}</div>
        <div className="header__date">{createdAt.slice(0, 10)}</div>
      </div>
      <p className="circular__description">{message}</p>

      <div className="circular__files">
        <FileCard name="circular1" />
        <FileCard name="circular2" />
      </div>
    </div>
  );
};

export default Circular;
