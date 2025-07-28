const STORAGE_KEY = "eventual_events";

export const getEvents = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Failed to get events:", err);
    return [];
  }
};

export const saveEvents = (events) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (err) {
    console.error("Failed to save events:", err);
  }
};

export const addEvent = (event) => {
  const existing = getEvents();
  const updated = [...existing, event];
  saveEvents(updated);
};

export const deleteEvent = (id) => {
  const existing = getEvents();
  const updated = existing.filter((e) => e.id !== id);
  saveEvents(updated);
};

export const updateEvent = (updatedEvent) => {
  const existing = getEvents();
  const updated = existing.map((e) =>
    e.id === updatedEvent.id ? updatedEvent : e
  );
  saveEvents(updated);
};


export const resetEvent = (id) => {
  const existing = getEvents();
  const updated = existing.map((e) =>
    e.id === id ? { ...e, date: new Date(Date.now() + 3600 * 1000).toISOString() } : e
  );
  saveEvents(updated);
};
