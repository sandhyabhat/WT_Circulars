import React, { useState } from "react";
import "./CircularForm.css";

const CircularForm = () => {
  const departments = ["CSE", "EEE", "ECE", "ASE"];
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    departments: [],
    files: [],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    if (name !== "files" && name !== "departments") {
      const value = e.target.value;
      console.log(e.target.value);
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

  return (
    <div className="circular__form">
      <h1>Post new Circular</h1>
      <form enctype="multipart/form-data">
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
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            class="form-control"
            placeholder="description"
            onChange={handleChange}
          >
            {formData.description}
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
            className="file_input"
            multiple
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default CircularForm;
