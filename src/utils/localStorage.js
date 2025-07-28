const STORAGE_KEY = "eventual_events";

export const getEvents = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const addEvent = (event) => {
  const events = getEvents();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...events, event]));
};

export const deleteEvent = (id) => {
  const events = getEvents().filter((e) => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};

export const resetEvent = (id) => {
  const events = getEvents().map((e) =>
    e.id === id ? { ...e, date: new Date(Date.now() + 86400000).toISOString().slice(0, 10) } : e
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};
