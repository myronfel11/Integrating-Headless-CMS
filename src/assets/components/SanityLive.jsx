import React, { useEffect, useState } from 'react';
import client from '../../sanityClient'; // Make sure this is your correct Sanity client

const EVENTS_QUERY = `*[_type == "event"] {name, slug, eventType, date, image {asset -> {_id, url}}}`;

export const SanityLive = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(EVENTS_QUERY);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching live events:', error);
      }
    };

    fetchData(); // Initial fetch when component mounts

    const intervalId = setInterval(fetchData, 5000); // Re-fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="hidden">
      {/* Optionally, you can log the events or handle them in some way */}
      {events.length > 0 && (
        <p className="absolute bottom-0 left-0 p-4 bg-blue-500 text-white">
          {events.length} events are live!
        </p>
      )}
    </div>
  );
};
