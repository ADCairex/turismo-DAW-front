import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export default function LoadRestaurants() {
  const router = useRouter();
  const [reviews, setReviews] = useState([]);

  const [description, setDescription] = useState("");
  const [punctuation, setPunctuation] = useState(0);

  const [userData, setUserData] = useState({
    email: "Debes iniciar sesion primero",
  });

  const [username, setUsername] = useState({ username: "Anonimo", email: "" });

  useEffect(async () => {
    if (sessionStorage.getItem("userData")) {
      setUsername(JSON.parse(sessionStorage.getItem("userData")));
    }
  }, []);

  useEffect(async () => {
    if (router.isReady) {
      const idRestuarant = router.query.id;
      const urlReviews =
        "http://turismo-daw.com/rest/reviewByIdRestaurant/" + idRestuarant;

      await fetch(urlReviews)
        .then((response) => response.json())
        .then((data) => {
          setReviews(data);
        });
    }
  }, [router.isReady]);

  const deleteReview = (id, email) => {
    let bodyArray = {
      review_id: id,
    };
    if (email == username.email) {
      fetch("http://turismo-daw.com/rest/deleteReview", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyArray),
        });
    } else {
      alert("Solo puedes eliminar tus reseñas");
    }
  };

  const submitReview = (event) => {
    const idRestuarant = router.query.id;

    if (userData.email != "Debes iniciar sesion primero") {
      event.preventDefault();
      let newReview = {
        description: description,
        punctuation: punctuation,
        email: userData.email,
        restaurant_id: idRestuarant,
      };

      fetch("http://turismo-daw.com/rest/saveReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
    } else {
      event.preventDefault();
      alert("Para crear una review debes iniciar sesion");
      Router.push("/auth/login");
    }
  };
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
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.0.1/tailwind.min.css"
        rel="stylesheet"
      />
      <Helmet>
        <title>Turismo DAW</title>
      </Helmet>
      <div className="flex flex-col h-full">
        <Navbar />
        <h1 className="mt-20 text-3xl ml-20 uppercase"></h1>
        <div className="flex flex-col w-4/5 m-auto">
          <form
            className="flex flex-col mt-20"
            onSubmit={submitReview}
            method="post"
          >
            <h2 className="mb-2">Nueva review:</h2>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>

            <input
              name="email"
              id="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
              value={userData.email}
              readOnly="readonly"
            />
            <label
              id="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Review:
            </label>
            <textarea
              placeholder="Introduce tu opinion del restaurante..."
              cols={50}
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>Puntuacion</label>
            <select
              name="punctuation"
              id="punctuation"
              onChange={(e) => setPunctuation(e.target.value)}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <button className="mb-20 mt-5 bg-yellow hover:bg-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-min">
              Enviar
            </button>
          </form>
          {reviews.map((review, index) => {
            let date = review.created_at.date.replace(".000000", "");

            return (
              <>
                <div className="flex flex-row border-b-2">
                  <div className="w-1/5 m-3">{date}</div>
                  <div className="flex flex-col w-1/5 m-3">
                    <div className="flex flex-row">User: {review.email}</div>
                    <div className="flex flex-row">
                      Nota:
                      <div className="flex flex-row w-min m-auto">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current text-yellow"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current text-yellow"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current text-yellow"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current text-yellow"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current text-gray"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/5 m-3">{review.description}</div>
                  <div>
                    <a onClick={() => deleteReview(review.id, review.email)}>
                      <button className="bg-red hover:bg-red-light text-white font-bold px-2 mt-3 rounded-full">
                        X
                      </button>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
