import { useEffect, useState } from "react";
import client from "../sanityClient";

const LiveComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "yourDocumentType"]';
    
    // Initial fetch
    client.fetch(query).then(setData);

    // Listen for real-time updates
    const subscription = client.listen(query).subscribe((update) => {
      setData((prevData) => {
        // Update the state based on the new data
        return prevData.map((item) =>
          item._id === update.result._id ? update.result : item
        );
      });
    });

    return () => subscription.unsubscribe(); // Clean up listener
  }, []);

  return (
    <div>
      <h1>Live Sanity Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveComponent;