import React from "react";
import "./FileCard.css";
import image from "./1163.jpg";
import pdf from "./pdf.svg";

const FileCard = ({ name, url }) => {
  var embedFile = null;
  const openFile = async (url) => {
    const src = "http://docs.google.com/gview?url=" + url + "&embedded=true";
    const blob = await fetch(url).then((res) => res.blob());
    console.log(blob);
    const blobUrl = URL.createObjectURL(blob);
    // To keep adblockers away from your window:
    const win = window.open();
    win.document.body.innerHTML = `<embed src="${blobUrl}" type="application/pdf" height="100%" width="100%">`;
  };

  return (
    <div className="file__card" onClick={() => openFile(url)}>
      <img className="file__img" src={pdf} />
      <p className="file__name">{name}.pdf</p>
      {/* {embedFile} */}
    </div>
  );
};

export default FileCard;
