import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../../sanityClient'; // Make sure this is your Sanity client

const EVENTS_QUERY = `*[_type == "event"] { _id, name, slug, date } | order(date desc)`;

const Events = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from Sanity using the query
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await client.fetch(EVENTS_QUERY);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents(); // Fetch events on component mount
  }, []); // Empty dependency array ensures this only runs once

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Events</h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {events.length > 0 ? (
          events.map((event) => (
            <li
              className="bg-white p-4 rounded-lg"
              key={event._id || event.slug.current} // Use _id or slug as a fallback
            >
              <Link to={`/events/${event?.slug?.current}`} className="hover:underline">
                <h2 className="text-xl font-semibold">{event?.name}</h2>
                {event?.date && (
                  <p className="text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                )}
              </Link>
            </li>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </ul>
    </main>
  );
};

export default Events;
