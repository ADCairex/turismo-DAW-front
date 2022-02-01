/*  ./components/Navbar.jsx     */
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="z-50 fixed w-full flex items-center flex-wrap bg-gradient-to-r from-greenA to-greenD p-3">
        <div className="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in float-right">
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
          <Link href="/gasStations">
            <a className="inline-flex items-center p-1 mr-4 ">
              <span className="text-xs text-white font-bold uppercase tracking-wide mr-4">
                donde repostar
              </span>
            </a>
          </Link>
          <Link href="/weather">
            <a className="inline-flex items-center p-1 mr-4 ">
              <span className="text-xs text-white font-bold uppercase tracking-wide mr-4">
                el tiempo
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
        </div>
      </nav>
    </>
  );
};
