import React from "react";
import "./EventDetails.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/dateFormatters";

const EventDetails = () => {
  const { id } = useParams();

  const apiUrl = `http://localhost:50001/api/events/${id}`;
  const { data, loading, error, refetch } = useFetch(apiUrl);

  return (
    <div className="details-container">
      <div className="left-section">
        <h1>{data?.title}</h1>

        <p className="hosted">
          Hosted By: <strong>{data?.hostBy}</strong>
        </p>

        <img className="main-image" src={data?.eventImage} alt={data?.title} />

        <h2>Details:</h2>
        <p className="description">{data?.description}</p>

        <h2>Additional Information:</h2>
        <p>
          <strong>Dress Code:</strong> {data?.dressCode}
        </p>
        <p>
          <strong>Age Restrictions:</strong> {data?.ageRestriction} and above
        </p>

        <h2>Event Tags:</h2>
        <div className="tags">
          {data?.eventTags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="right-section">
        <div className="info-card">
          <p>
            🕒 <span>{formatDate(data?.startDate)}</span> to{" "}
            <span>{formatDate(data?.endDate)}</span>
          </p>
          <p>📍 {data?.location}</p>
          <p>₹ {data?.price}</p>
        </div>

        <h3>Speakers: (2)</h3>

        <div className="speakers">
          <div className="speaker-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
            <h4>Sarah Johnson</h4>
            <p>Marketing Manager</p>
          </div>

          <div className="speaker-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
            <h4>Michael Brown</h4>
            <p>SEO Specialist</p>
          </div>
        </div>

        {/* <button className="rsvp-btn">RSVP</button> */}
      </div>
    </div>
  );
};

export default EventDetails;
