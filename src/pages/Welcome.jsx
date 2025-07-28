import { Link } from "react-router-dom";

export default function Welcome() {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-gray-800 px-4 py-12 sm:px-6 lg:px-8">
  <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-purple-700 drop-shadow-md">
    Welcome to Eventual📆
  </h1>

  <p className="text-base sm:text-lg mb-8 text-center max-w-2xl">
    Track your big moments — from birthdays and vacations to goals and personal milestones.
    Start counting down now!
  </p>

  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
    <Link
      to="/home"
      className="bg-purple-500 text-white text-center px-4 py-2 rounded-lg shadow hover:-translate-y-0.5 transition-all"
    >
      Add New Event
    </Link>

    <Link
      to="/countdown"
      className="bg-pink-400 text-white text-center px-4 py-2 rounded-lg shadow hover:-translate-y-0.5 transition-all"
    >
      View Countdown
    </Link>
  </div>
</div>

  );
}
