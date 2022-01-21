/*  ./components/Navbar.jsx     */
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-300 p-3 ">
        <div class="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in float-right">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide mr-4">
                turismo daw alicante
              </span>
            </a>
          </Link>
          <Link href="/restaurants">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide mr-4">
                donde comer
              </span>
            </a>
          </Link>
          <Link href="/gasStations">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide mr-4">
                donde repostar
              </span>
            </a>
          </Link>
          <Link href="/weather">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide mr-4">
                el tiempo
              </span>
            </a>
          </Link>
          <Link href="/videos">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide mr-4">
                videos
              </span>
            </a>
          </Link>
          <Link href="/news">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide mr-4">
                noticias
              </span>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};
