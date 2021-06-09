import React from "react";
import Department from "./Department";
import "./Departments.css";

const data = [
  {
    id: 1,
    name: "CSE",
    abbr: "Computer science and Engineering",
  },
  {
    id: 2,
    name: "ECE",
    abbr: "Electronics and communication",
  },
  {
    id: 3,
    name: "EEE",
    abbr: "Electrical and Electronics Engineering",
  },
  {
    id: 4,
    name: "TE",
    abbr: "Telecom Engineering",
  },
  {
    id: 5,
    name: "EIE",
    abbr: "Electronics and Instrumentation Engineering",
  },
];

function Departments() {
  return (
    <div className="departments-grid">
      {data.map((dept) => (
        <div className="departments-flex">
          <Department dept={dept} />
        </div>
      ))}
    </div>
  );
}

export default Departments;
