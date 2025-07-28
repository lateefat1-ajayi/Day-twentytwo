import { useState, useEffect } from "react";
import { addEvent, getEvents } from "../utils/localStorage";
import { toast } from "react-toastify";

export default function Home() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [bgColor, setBgColor] = useState("#fde68a");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !date) {
      toast.error("Please fill in both the event name and date.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      name: name.trim(),
      date,
      bgColor,
    };

    addEvent(newEvent);
    setEvents(getEvents());
    toast.success("Event added successfully!");

    // Reset form
    setName("");
    setDate("");
    setBgColor("#fde68a");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-6">
      <h2 className="text-4xl font-bold mb-6 text-purple-700">🎯 Set Your Countdown</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <div>
          <label className="block mb-1 font-semibold">Event Name</label>
          <input
            type="text"
            placeholder="e.g. My Birthday"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Event Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Background Color</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full h-10 rounded p-1 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded hover:-translate-y-0.5 transition-all"
        >
          Save Event
        </button>
      </form>
    </div>
  );
}
