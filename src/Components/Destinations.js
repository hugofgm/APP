import { collection, onSnapshot } from "@firebase/firestore";
import { useState, useEffect } from "react";
import db from "./firebase";
import "../App.css";
import image from "../Assets/raquelgira.JPG";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "DESTINOS"), (snapshot) => {
      setDestinations(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

  return (
    <div>
      {destinations.map((destination) => (
        <div className="card" id={destinations.id} key={destinations.id}>
          <div className="container">
            <div className="title"> {destination.Country} </div>
            <div className="description"> {destination.Description} </div>
          </div>
          <div>
            <img className="img" src={image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
