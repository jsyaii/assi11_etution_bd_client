import { Link } from "react-router";




const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-[#4f46e5] to-[#8b5cf6] px-4 text-center">
      {/* Error Number */}
      <h1 className="text-6xl sm:text-8xl font-extrabold text-white drop-shadow-lg animate-bounce">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-white/90 text-lg sm:text-2xl font-medium">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Additional Info */}
      <p className="mt-2 text-white/70 text-sm sm:text-base">
        It might have been moved or deleted.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block bg-white text-[#4f46e5] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#e0e7ff] transition transform hover:scale-105"
      >
        Go Back Home
      </Link>

      {/* Decorative Image / SVG */}
      <div className="mt-8">
        <svg
          className="w-64 h-64 mx-auto opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#c7d2fe"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.828a4 4 0 115.656-5.656M4.222 19.778l15.556-15.556"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
