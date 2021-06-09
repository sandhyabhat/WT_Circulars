import React from "react";
import "./FileCard.css";
import image from "./1163.jpg";
import pdf from "./pdf.svg";

function FileCard({ name }) {
  return (
    <div className="file__card">
      <img className="file__img" src={pdf} />
      <p className="file__name">{name}.pdf</p>
    </div>
  );
}

export default FileCard;
