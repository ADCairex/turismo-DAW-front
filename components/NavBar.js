/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const Navbar = () => {
  const [userData, setUserData] = useState({ username: "Anonimo", email: "" });
  const [iconWeather, setIconWeather] = useState("");

  fetch("http://turismo-daw.com/rest/weather")
    .then((response) => response.json())
    .then((data) => {
      setIconWeather("http://openweathermap.org/img/wn/" + data.icon + ".png");
    });

  useEffect(async () => {
    if (sessionStorage.getItem("userData")) {
      setUserData(JSON.parse(sessionStorage.getItem("userData")));
    }
  }, []);
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        rel="stylesheet"
      />
      <nav className="z-50 fixed w-full flex items-center flex-wrap bg-gradient-to-r from-greenA to-greenD p-3">
        <div className="w-full relative inline-block mr-2 align-middle select-none transition duration-200 ease-in float-right">
          <Link href="/">
            <a className="inline-flex items-center p-1 mr-4 ">
              <span className="text-l text-white font-bold uppercase tracking-wide mr-4">
                turismo daw alicante
              </span>
            </a>
          </Link>
          <Link href="/restaurants">
            <a className="inline-flex items-center p-1 mr-4 ">
              <span className="text-xs text-white font-bold uppercase tracking-wide mr-4">
                donde comer
              </span>
            </a>
          </Link>
          <Link href="/gas_stations">
            <a className="inline-flex items-center p-1 mr-4 ">
              <span className="text-xs text-white font-bold uppercase tracking-wide mr-4">
                donde repostar
              </span>
            </a>
          </Link>
          <Link href="/news">
            <a className="inline-flex items-center p-1 mr-4 ">
              <span className="text-xs text-white font-bold uppercase tracking-wide mr-4">
                noticias
              </span>
            </a>
          </Link>
          <Link href="/auth/login">
            <a className="flex flex-row text-white float-right text-2xl mr-10">
              <p className="text-xl mr-5">{userData.username}</p>
              <i class="fas fa-user"></i>
            </a>
          </Link>
          <a className="flex flex-row text-white float-right text-2xl mr-10">
            <img src={iconWeather} width="35"/>
          </a>
        </div>
      </nav>
    </>
  );
};
