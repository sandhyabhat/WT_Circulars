import React from "react";
import NavBar from "../Register/NavBar";
import Document from "./Document.svg";
import "./home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="header">
          <img src={Document} alt="Circulars" className="header_img" />
          <h1 className="header_title">CircularMaster</h1>
        </div>

        <div className="content" id="content">
          <h2>
            {" "}
            Welcome to <span className="logo_color">CircularMaster</span>{" "}
          </h2>
          <p> This is a website to easily upload circulars and view them</p>
          <p>
            {" "}
            This website overcomes the difficuly in searching for circulars sent
            through mail
          </p>
        </div>

        <h2 className="section_heading">Features</h2>
        <div className="features">
          {/* Create 2 bootstrap cards and place them in grid view */}
          <div className="feature">
            <h3 className="feature_name">Uploading circulars</h3>
            <div className="feature_img">
              <img src={Document} alt="Circulars" />
            </div>
            <div className="feature_text">
              <ul className="feature_list">
                <li>Create a new circular by giving a circular title</li>
                <li>Upload date will be automatically assigned</li>
                <li>Add a description for the circular</li>
                <li>Select the departments for which circular applies </li>
              </ul>
            </div>
          </div>

          <div className="feature">
            <h3 className="feature_name">Viewing circulars</h3>
            <div className="feature_img">
              <img src={Document} alt="Circulars" />
            </div>
            <div className="feature_text">
              <ul className="feature_list">
                <li>
                  Search by multiple filters like department, circular title
                </li>
                <li>Search ony by day, month and year or the entire date</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
