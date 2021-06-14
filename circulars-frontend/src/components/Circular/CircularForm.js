import React, { useState } from "react";
import "./CircularForm.css";
import axios from "axios";
import useHistory from "react-router-dom";
import FileBase64 from "react-file-base64";

const CircularForm = () => {
  const departments = ["CSE", "EEE", "ECE", "ASE"];
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    departments: [],
    files: [],
  });

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log("Called", reader);
        baseURL = reader.result;
        // console.log(baseURL);
        resolve(baseURL);
      };
      // console.log(fileInfo);
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    if (name !== "files" && name !== "departments") {
      const value = e.target.value;

      setFormData({ ...formData, [name]: value });
    } else if (name === "departments") {
      let value = Array.from(
        e.target.selectedOptions,

        (option) => option.value
      );
      setFormData({ ...formData, [name]: value });
    } else {
      const files = e.target.files;
      setFormData({ ...formData, [name]: files });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    var fd = new FormData();
    var fileList = [];

    Object.keys(formData).map((key) => {
      if (key !== "files") fd.append(key, formData[key]);
    });

    console.log(formData.files[0].name);
    for (var i = 0; i < formData.files.length; i++) {
      console.log(formData.files[i]);
      fd.append("files", formData.files[i]);
    }

    /* var base64files = [];
    for (var i = 0; i < formData.files.length; i++) {
      var f = formData.files[i];
      getBase64(f)
        .then((result) => {
          base64files[i] = result;
          // console.log("File Is", f);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setFo rmData({ ...formData, ["files"]: base64files });*/

    axios
      .post("http://localhost:5000/api/create", fd, config)
      .then((res) => console.log("Data submitted successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="circular__form">
      <h1>Post new Circular</h1>
      <form
        enctype="multipart/form-data"
        method="post"
        action="http://localhost:5000/api/create"
        onSubmit={handleSubmit}
      >
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder="title"
            onChange={handleChange}
            value={formData.title}
          />
        </div>
        <div class="form-group">
          <label for="message">Description</label>
          <textarea
            name="message"
            id="message"
            class="form-control"
            placeholder="description"
            onChange={handleChange}
          >
            {formData.message}
          </textarea>
        </div>
        <div class="form-group">
          <label for="department">Department</label>
          <select
            name="departments"
            id="department"
            class="form-control"
            placeholder="department"
            onChange={handleChange}
            multiple
          >
            {departments.map((d) => {
              return (
                <option key={d} value={d}>
                  {d}
                </option>
              );
            })}
          </select>
        </div>
        <div class="form-group">
          <label for="files">Circulars</label>
          <input
            type="file"
            name="files"
            id="files"
            multiple
            onChange={handleChange}
            accept="application/pdf"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CircularForm;
