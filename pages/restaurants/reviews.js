import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export default function LoadRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://turismo-daw.com/rest/restaurant")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.0.1/tailwind.min.css"
        rel="stylesheet"
      />
      <Helmet>
        <title>Turismo DAW</title>
      </Helmet>
      <div className="flex flex-col h-full">
        <Navbar />
        <h1 className="mt-20 text-3xl ml-20 uppercase">
          
        </h1>
        <Footer />
      </div>
    </>
  );
}
