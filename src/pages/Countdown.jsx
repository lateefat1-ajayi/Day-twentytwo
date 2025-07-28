import CountdownCard from "../components/CountdownCard";

export default function Countdown() {
  const event = JSON.parse(localStorage.getItem("eventual_event"));

  if (!event) {
    return (
      <div className="text-center text-xl mt-10">
        No event found. Please go back and set one.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <CountdownCard
        name={event.name}
        date={event.date}
        bgColor={event.bgColor}
      />
    </div>
  );
}
