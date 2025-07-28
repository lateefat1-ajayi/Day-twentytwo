import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-gray-800 p-6">
      <h1 className="text-5xl font-bold mb-6 text-center text-purple-700 drop-shadow-md">
        Welcome to Eventual📆
      </h1>

      <p className="text-lg mb-8 text-center max-w-xl">
        Track your big moments — from birthdays and vacations to goals and personal milestones.
        Start counting down now!
      </p>

      <div className="flex gap-4">
        <Link
          to="/home"
          className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:-translate-y-0.5 transition-all"
        >
          Add New Event
        </Link>

        <Link
          to="/countdown"
          className="bg-pink-400 text-white px-4 py-2 rounded-lg shadow hover:-translate-y-0.5 transition-all"
        >
          View Countdown
        </Link>
      </div>
    </div>
  );
}
