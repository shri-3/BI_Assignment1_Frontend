import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import events from "../data/events";
import useFetch from "../hooks/useFetch";

const Home = ({ searchTerm, eventType }) => {
  const url = `http://localhost:50001/meetups`;
  const [apiUrl, setApiUrl] = useState(url);

  useEffect(() => {
    let url = `http://localhost:50001/meetups/search?`;
    if (searchTerm) {
      url += `&title=${searchTerm}`;
    } else {
      url += ``;
    }
    if (eventType) {
      url += `&eventType=${eventType}`;
    } else {
      url += ``;
    }
    setApiUrl(url);
  }, [searchTerm, eventType]);
  const { data, loading, error, refetch } = useFetch(apiUrl);

  return (
    <div className="container">
      <h1>Meetup Events</h1>

      <div className="grid">
        {loading ? (
          <p>Loading Data......</p>
        ) : data?.error ? (
          <p>{data?.error}</p>
        ) : (
          data?.map((event, index) => <EventCard key={index} event={event} />)
        )}
      </div>
    </div>
  );
};

export default Home;
