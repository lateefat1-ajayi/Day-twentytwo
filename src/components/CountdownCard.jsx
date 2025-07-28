import { useEffect, useState } from "react";

export default function CountdownCard({ name, date, bgColor }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const targetDate = new Date(date).getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  if (!timeLeft) {
    return (
      <div className="text-center text-2xl font-bold text-red-600">
        Time's up! 🎉
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl shadow-xl text-white p-6 text-center w-full max-w-xl mx-auto"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <div className="flex justify-around text-xl font-medium space-x-4">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Mins" value={timeLeft.minutes} />
        <TimeBox label="Secs" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg min-w-[60px]">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-xs">{label}</span>
    </div>
  );
}
