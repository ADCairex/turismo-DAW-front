import Link
 from "next/link";
export const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-light bg-gradient-to-b from-greenD bg-greenB">
        <div
          className="
          container
          flex flex-wrap
          items-center
          justify-center
          px-4
          py-8
          mx-auto
          lg:justify-between
        "
        >
          <div className="flex flex-wrap justify-center ">
            <ul className="flex items-center space-x-4">
              <Link href="/">
                <a className="">
                  <li>Home</li>
                </a>
              </Link>
              <li>About</li>
              <li>Contact</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="flex items-center my-4 lg:my-0">
            <form className="flex flex-wrap items-center justify-center">
              <div className="mb-2 lg:mb-0 lg:mr-2">
                <input
                  type="text"
                  name="newsletter"
                  className="
                  w-full
                  px-3
                  py-2
                  text-gray
                  bg-gray-100
                  border border-gray-light
                  rounded
                  outline-none
                  focus:ring-1
                "
                />
              </div>
              <button
                className="
                px-6
                py-2
                text-white
                bg-red-light
                border-0
                rounded
                focus:outline-none
                hover:bg-red
              "
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex justify-center mt-4 lg:mt-0">
            <a>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-blue"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-blue"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-pink"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6 text-blue"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
