import { Helmet } from "react-helmet";
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Index() {
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
                className="mx-auto h- w-auto"
                src="https://seeklogo.com/images/A/alicante-ayuntamiento-logo-44A3C216DF-seeklogo.com.png"
                alt="Workflow"
              />
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="email-address" className="sr-only">
                    Username
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-light placeholder-gray-light text-gray rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-light placeholder-gray-light text-gray rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-red border-gray-light rounded"
                  />
                  <label
                    for="remember-me"
                    className="ml-2 block text-sm text-gray"
                  >
                    Remember me
                  </label>
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
            </form>{" "}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
