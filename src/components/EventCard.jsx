import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/dateFormatters";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate("/event-details/" + event._id)}
    >
      <div className="image-container">
        <img src={event.eventImage} alt={event.title} />
        <span className="badge">{event.eventType} Event</span>
      </div>

      <p className="date">{formatDate(event.startDate)}</p>
      <h3>{event.title}</h3>
    </div>
  );
};

export default EventCard;
