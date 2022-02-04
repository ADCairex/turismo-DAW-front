import { useEffect, useState } from "react";
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet";
import IMAGES_GASSTATION from "../../components/constants";

export default function Index() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://turismo-daw.com/rest/new")
      .then((response) => response.json())
      .then((data) => setNews(data));
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
        <h1 className="mt-20 text-3xl ml-20 uppercase">
          gasolineras de alicante
        </h1>
        <Navbar />
        <div className="flex flex-col p-1">
          {news.map((newItem, index) => {
            return (
              <>
                <a className="w-4/5 m-auto mt-5 c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      hot <i class="fab fa-hotjar"></i>
                    </span>
                    <h2 className="mt-2 mb-2  font-bold">{newItem.title}</h2>
                    <br />
                    <p className="text-sm">{newItem.description}</p>
                    <br />
                    <a href={newItem.url} className="text-blue">
                      Ir a la noticia
                    </a>
                  </div>
                  <div className="p-4 border-t border-b text-xs text-gray-700">
                    <span className="flex items-center mb-1">
                      <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
                      3 Tags
                    </span>
                    <span className="flex items-center">
                      <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Gerente
                    </span>
                  </div>
                </a>
              </>
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
}
