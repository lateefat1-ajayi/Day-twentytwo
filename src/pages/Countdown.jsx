import { useEffect, useState } from "react";
import CountdownCard from "../components/CountdownCard";
import { getEvents, deleteEvent, resetEvent } from "../utils/localStorage";
import { toast } from "react-toastify";

export default function Countdown() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const handleDelete = (id) => {
    deleteEvent(id);
    setEvents(getEvents());
    toast.info("Event deleted.");
  };

  const handleReset = (id) => {
    resetEvent(id);
    setEvents(getEvents());
    toast.success("Countdown reset for 24h.");
  };

  if (!events.length) {
    return (
      <div className="text-center text-xl mt-10">
        No countdowns set. Go add some events!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid gap-6 justify-center">
      {events.map((event) => (
        <CountdownCard
          key={event.id}
          id={event.id}
          name={event.name}
          date={event.date}
          bgColor={event.bgColor}
          onDelete={handleDelete}
          onReset={handleReset}
        />
      ))}
    </div>
  );
}
