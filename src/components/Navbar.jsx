import React from "react";
import { useNavigate } from "react-router-dom";
// import "./App.css";

const Navbar = ({ searchTerm, setSearchTerm, eventType, setEventType }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // update parent state
  };
  const handleSelectChange = (e) => {
    setEventType(e.target.value); // update parent state
  };

  return (
    <div className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
        meetup
      </h2>

      <div className="nav-right">
        <input
          type="text"
          placeholder="Search by title and tags"
          value={searchTerm}
          onChange={handleInputChange}
          className="search"
        />

        <select
          className="dropdown"
          value={eventType}
          onChange={handleSelectChange}
        >
          <option value="">Select Event Type</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
