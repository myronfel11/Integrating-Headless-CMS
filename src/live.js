import client from "./sanityClient";

const EVENTS_QUERY = `*[
  _type == "event" 
  && defined(slug.current)
]{
  _id, 
  name, 
  slug, 
  date
} | order(date desc)`;

export const fetchEvents = async () => {
  try {
    const data = await client.fetch(EVENTS_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};