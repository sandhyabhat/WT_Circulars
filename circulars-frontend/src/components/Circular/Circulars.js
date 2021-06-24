import { React, useState, useEffect } from "react";
import Circular from "./Circular";
import axios from "axios";
import "./Circulars.css";
import Cookies from "js-cookie";

const Circulars = () => {
  const [circulars, setCirculars] = useState([]);

  const [searchDate, setsearchDate] = useState({
    title: "",
    dept_name: "",
    search_day: undefined,

    search_month: undefined,
    search_year: undefined,
  });

  useEffect(() => {
    const res = axios
      .get("api/")
      .then((response) => setCirculars(response.data))
      .catch((e) => console.log(e));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("api/search/", {
        params: searchDate,
      })
      .then((response) => {
        setCirculars(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setsearchDate({ ...searchDate, [name]: value });
  };

  return (
    <div className="circulars">
      <div>
        <form
          action="/api/search/"
          className="circulars__search"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label for="title">Circular name</label>
            <input
              type="text"
              name="title"
              id="title"
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
                name="search_day"
                id="search_day"
                value={searchDate.search_day}
                class="form-control"
                placeholder="dd"
                onChange={handleChange}
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
        {circulars.length > 0 ? (
          circulars.map((circular) => <Circular circular={circular} />)
        ) : (
          <div className="jumbotron empty">There are no circulars</div>
        )}
      </div>
    </div>
  );
};

export default Circulars;
