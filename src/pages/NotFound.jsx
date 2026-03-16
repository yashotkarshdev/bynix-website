import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function NotFound() {

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">

        <div className="text-center max-w-xl">

          {/* Big 404 */}
          <h1 className="text-8xl font-extrabold text-custom-orenge drop-shadow-lg">
            404
          </h1>

          {/* Title */}
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-3 text-gray-600 text-lg">
            The page you're looking for might have been removed, renamed,
            or is temporarily unavailable.
          </p>

          {/* Illustration */}
          <div className="mt-8 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              alt="404 illustration"
              className="w-40 opacity-90"
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <Link
              to="/"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Go Back
            </button>

          </div>

        </div>

      </div>
    </>
  );

}

export default NotFound;