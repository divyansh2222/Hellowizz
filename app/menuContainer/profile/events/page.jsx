"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EventPage = () => {
  const router = useRouter();
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files).map((file) => file.name);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleSaveEvent = () => {
    if (eventTitle && eventDescription) {
      const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
      const newEvent = {
        title: eventTitle,
        description: eventDescription,
        files: uploadedFiles,
      };
      localStorage.setItem("events", JSON.stringify([...existingEvents, newEvent]));
      alert("Event saved successfully!");
      setEventTitle("");
      setEventDescription("");
      setUploadedFiles([]);
    } else {
      alert("Please fill in both the title and description.");
    }
  };

  const redirectToEventList = () => {
    router.push("/menuContainer/profile/events/event-list"); // Ensure /event-list is a valid route in your project
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Event Page</h1>

      {/* Event Logo */}
      <div className="flex justify-center mb-6">
        <img
          src="/event-logo.png"
          alt="Event Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Event Form */}
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Event Title</label>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Event Description</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Upload Images/Videos
          </label>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="w-full px-4 py-2 border rounded-md"
          />
          {uploadedFiles.length > 0 && (
            <ul className="text-sm text-gray-600 mt-2">
              {uploadedFiles.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={handleSaveEvent}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Save Event
        </button>
      </div>

      {/* Add Another Event Button */}
      <div className="mb-6">
        <button
          onClick={() => {
            setEventTitle("");
            setEventDescription("");
            setUploadedFiles([]);
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Another Event
        </button>
      </div>

      {/* List of Events Button */}
      <div>
        <button
          onClick={redirectToEventList}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          View List of Events
        </button>
      </div>
    </div>
  );
};

export default EventPage;
