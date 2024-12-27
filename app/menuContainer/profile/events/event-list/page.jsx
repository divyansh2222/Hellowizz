"use client";
import React, { useEffect, useState } from "react";

const EventListPage = () => {
  const [events, setEvents] = useState([]); // State for events
  const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    // Ensure localStorage access is client-side
    if (typeof window !== "undefined") {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
      setEvents(storedEvents);
    }
  }, []); // Empty dependency array ensures it runs only once

  const viewEventDetails = (event) => {
    setSelectedEvent(event); // Set the selected event
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedEvent(null); // Clear the selected event
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Event List</h1>

      {events.length > 0 ? (
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
              </div>
              <button
                onClick={() => viewEventDetails(event)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No events added yet.</p>
      )}

      {/* Modal for Event Details */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-3/4 max-w-xl shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              {/* Event Image */}
              {selectedEvent.files && selectedEvent.files.length > 0 && (
                <img
                  src={selectedEvent.files[0]} // Assuming the first file is an image
                  alt="Event"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              {/* Event Title */}
              <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>

              {/* Event Description */}
              <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventListPage;
