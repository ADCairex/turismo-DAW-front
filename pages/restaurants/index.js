import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../../components/NavBar";

export default function LoadRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://turismo-daw.com/rest/restaurant")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);
  return (
    <>
      <Helmet>
        <title>Turismo DAW</title>
      </Helmet>
      <div clasName="flex flex-col">
        <Navbar />
      </div>
    </>
  );
}
