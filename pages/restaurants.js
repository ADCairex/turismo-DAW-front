import React, { useEffect, useState } from "react";
export default function LoadRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
      LoadRestaurants();
      return () => {}
  })
  function getRestaurants() {
    const res = await fetch("http://turismo-daw.com/rest/restaurant");
    return await res.text();
  }

  return (
    <h1 className="text-3xl font-bold">Listado de restaurantes de Alicante</h1>
  );
}
