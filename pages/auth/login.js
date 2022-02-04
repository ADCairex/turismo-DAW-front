import { Helmet } from "react-helmet";
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Index() {
  useEffect(() => {
    if (sessionStorage.getItem("userData")) {
      sessionStorage.removeItem("userData");
    }
  }, []);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    let user = {
      username: username,
      password: pass,
    };

    await fetch("http://turismo-daw.com/rest/checkUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("userData", JSON.stringify(data));
        Router.push("/");
      });
  };
  return (
    <>
      <Helmet>
        <title>Turismo DAW</title>
      </Helmet>
      <div classNameName="flex flex-col">
        <Navbar />
        <div className="mb-48 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 mt-20">
            <div>
              <img
                className="mx-auto h-auto w-32"
                src="https://seeklogo.com/images/A/alicante-ayuntamiento-logo-44A3C216DF-seeklogo.com.png"
                alt="Workflow"
              />
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={submitHandler}
            >
              <h2>Login</h2>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-light placeholder-gray-light text-gray rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nombre de usuario"
                  />
                </div>
                <div>
                  <input
                    onChange={(e) => setPass(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-light placeholder-gray-light text-gray rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray hover:bg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray group-hover:text-red"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>
            </form>
            <Link href="register">
              <a className="underline text-blue">Crear una nueva cuenta</a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
