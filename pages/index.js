import { Helmet } from "react-helmet";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Turismo DAW</title>
      </Helmet>
      <div className="flex flex-col">
        <Navbar />
        <div className="w-1/2 m-auto mt-12 flex-col justify-center">
          <h1 className="text-4xl text-black font-bold uppercase mt-4 text-center">
            turismo daw alicante
          </h1>
          <h2 className="text-2xl mt-4 text-center">Qué visitar en Alicante</h2>
          <p className="mt-4 text-center">
            Descubre Alicante a través de tus sentidos: sus fabulosas playas,
            sus impresionantes monumentos y sus impactantes museos son parte del
            gran atractivo de una ciudad que te invitamos a descubrir. Alicante
            es una acogedora ciudad bañada por las aguas del Mediterráneo y
            caracterizada por su gran dinamismo y por un cálido clima,
            típicamente mediterráneo. Es un cruce de culturas que acoge al
            viajero para que se sienta como en casa.
          </p>
          <h2 className="text-2xl mt-4 text-center">Galeria de imagenes</h2>
          <div>
            <Carousel>
              <div>
                <img
                  width="300"
                  height="400"
                  src="https://alicanteout.com/wp-content/uploads/castillo-santa-barbara-alicante.jpg"
                />
              </div>
              <div>
                <img
                  width="300"
                  height="400"
                  src="https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/spain/alicante/destinations-alicante-banner-mobile-1024x553.jpg"
                />
              </div>
              <div>
                <img
                  width="300"
                  height="400"
                  src="https://www.viajablog.com/wp-content/uploads/2017/05/explanada-alicante-min.jpg"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
