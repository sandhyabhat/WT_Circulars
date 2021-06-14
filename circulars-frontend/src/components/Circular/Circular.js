import React from "react";
import "./Circular.css";
import FileCard from "./FileCard";

const Circular = ({ circular }) => {
  const { title, message, departments, selectedFile, createdAt } = circular;
  console.log(title, message, departments, selectedFile, createdAt);
  return (
    <div className="circular__detail">
      <div className="circular__header">
        <div className="header__title">{title}</div>
        <div className="header__date">{createdAt.slice(0, 10)}</div>
      </div>
      <p className="circular__description">{message}</p>

      <div className="circular__files">
        {selectedFile.map((url) => (
          <FileCard name={title} url={url} key={title} />
        ))}
      </div>
    </div>
  );
};

export default Circular;
