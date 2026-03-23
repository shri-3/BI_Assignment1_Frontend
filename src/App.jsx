import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import EventDetails from "./pages/Details/EventDetails";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("");

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        eventType={eventType}
        setEventType={setEventType}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home searchTerm={searchTerm} eventType={eventType} />}
        />
        <Route path="/event-details/:id" element={<EventDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
