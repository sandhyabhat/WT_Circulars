import { React, useState } from "react";
import Circular from "./Circular";
import "./Circulars.css";

const Circulars = () => {
  const [searchDate, setsearchDate] = useState({
    name: "",
    dept_name:"",
    search_day: undefined,
    search_month: undefined,
    search_year: undefined,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setsearchDate({ [name]: value });
  };



  return (
    <div className="circulars">
      <div>
        <form className="circulars__search">
          <div className="form-group">
            <label for="search_name">Circular name</label>
            <input
              type="text"
              name="search_name"
              id="search_name"
              value={searchDate.name}
              class="form-control"
              placeholder="Example: Circular 1"
              aria-describedby="helpId"
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label for="dept_name">Department name</label>
            <input
              type="text"
              name="dept_name"
              id="dept_name"
              value={searchDate.dept_name}
              class="form-control"
              placeholder="CSE"
              aria-describedby="helpId"
              onChange={handleChange}
            />
          </div>
          
          
          <div className="search__date">
            <div className="form-group">
              <label for="search_day">Circular Day</label>
              <input
                type="text"
                name="search_name"
                id="search_day"
                value={searchDate.search_day}
                class="form-control"
                placeholder="dd"
                pattern="[0-9]{2}"
                title="Day can be 1 to 31"
              />
            </div>

            <div className="form-group">
              <label for="search_month">Circular month</label>
              <input
                type="text"
                name="search_month"
                id="search_month"
                onChange={handleChange}
                value={searchDate.search_month}
                class="form-control"
                placeholder="mm"
                pattern="[0-9]{2}"
                title="Month can be 1 to 12"
              />
            </div>

            <div className="form-group">
              <label for="search_year">Circular year</label>
              <input
                type="text"
                name="search_year"
                id="search_year"
                onChange={handleChange}
                value={searchDate.search_year}
                class="form-control"
                placeholder="yyyy"
                pattern="[0-9]{4}"
                title="Year has at most 4 digits"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-lg btn-primary">
            SEARCH
          </button>
        </form>
      </div>
      <div className="circulars__list">
        <Circular />
        <Circular />
        <Circular />
        <Circular />
        <Circular />
        <Circular />
      </div>
    </div>
  );
};

export default Circulars;
