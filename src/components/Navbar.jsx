import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-gradient-to-r from-pink-300 to-purple-400 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">Eventual</Link>
        <div className="flex gap-6 text-sm md:text-base">
          <Link
            to="/"
            className={`hover:-translate-y-0.5 ${pathname === "/" ? "font-semibold bg-white p-1 text-black rounded" : ""}`}
          >
            Welcome
          </Link>
          <Link
            to="/home"
            className={`hover:-translate-y-0.5 ${pathname === "/home" ? "font-semibold bg-white p-1 text-black rounded " : ""}`}
          >
            Add Event
          </Link>
          <Link
            to="/countdown"
            className={`hover:-translate-y-0.5 ${pathname === "/countdown" ? "font-semibold bg-white p-1 text-black rounded" : ""}`}
          >
            Countdown
          </Link>
        </div>
      </div>
    </nav>
  );
}
