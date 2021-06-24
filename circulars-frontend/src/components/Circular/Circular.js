import React from "react";
import "./Circular.css";
import FileCard from "./FileCard";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const Circular = ({ circular }) => {
  const iconStyles = () => {
    return {
      deleteIcon: {
        color: "red",
      },
      editIcon: {
        color: "yellow",
      },
    };
  };

  const deleteClick = (e) => {
    var confirmDelete = window.confirm("Do you want to delete this?");
    console.log(confirmDelete);
  };

  const classes = makeStyles(iconStyles)();

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

      <div className="circular__actions">
        <IconButton>
          <EditIcon className="edit-icon" />
        </IconButton>
        <IconButton onClick={deleteClick}>
          <DeleteIcon className="delete-icon" />
        </IconButton>
      </div>
    </div>
  );
};

export default Circular;
