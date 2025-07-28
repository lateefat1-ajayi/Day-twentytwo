import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-gradient-to-r from-pink-300 to-purple-400 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:-translate-y-0.5 transition-transform"
        >
          Eventual
        </Link>

        <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
          <Link
            to="/"
            className={`transition-transform hover:-translate-y-0.5 p-1 rounded ${
              pathname === "/" ? "font-semibold bg-white text-black" : ""
            }`}
          >
            Welcome
          </Link>
          <Link
            to="/home"
            className={`transition-transform hover:-translate-y-0.5 p-1 rounded ${
              pathname === "/home" ? "font-semibold bg-white text-black" : ""
            }`}
          >
            Add Event
          </Link>
          <Link
            to="/countdown"
            className={`transition-transform hover:-translate-y-0.5 p-1 rounded ${
              pathname === "/countdown" ? "font-semibold bg-white text-black" : ""
            }`}
          >
            Countdown
          </Link>
        </div>
      </div>
    </nav>
  );
}
