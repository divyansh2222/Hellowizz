"use client";
import React, { useState } from "react";
let  layout = require("../../../components/Layout");
const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isServiceListOpen, setIsServiceListOpen] = useState(false);

  const addService = () => {
    if (title && description) {
      setServices([...services, { title, description }]);
      setTitle("");
      setDescription("");
    } else {
      alert("Please fill in both the title and description.");
    }
  };

  const toggleServiceList = () => {
    setIsServiceListOpen(!isServiceListOpen);
  };

  return (
    <layout>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Service Page</h1>

      {/* Service Logo */}
      <div className="flex justify-center mb-6">
        <img
          src="/Frame (1).png"
          alt="Service Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Input Form */}
      <div className="mb-6 shadow-md  border-2 rounded-md p-4">  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Service Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter service title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Service Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter service description"
          ></textarea>
        </div>

        <button
          onClick={addService}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Save Service
        </button>
      </div>

      {/* Add Another Service Button */}
      <div className="mb-6">
        <button
          onClick={() => {
            setTitle("");
            setDescription("");
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Another Service
        </button>
      </div>

      {/* List of Services Button */}
      <div>
        <button
          onClick={toggleServiceList}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          {isServiceListOpen ? "Close Service List" : "View List of Services"}
        </button>
      </div>

      {/* Service List Modal */}
      {isServiceListOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={toggleServiceList}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">List of Services</h2>
            <ul className="text-lg flex items-center justify-between text-black">
                <li>Title</li> 
                <li>Description</li>
                
                </ul>
                <hr />
            {services.length > 0 ? (
              <ul className="text-sm  text-gray-600">
                
                {services.map((service, index) => (
                  <li key={index} className="mb-4 flex gap-10 justify-between items-center">
                    <h3 className="font-semibold">{service.title}</h3>
                    <p>{service.description}</p>
                    
                  </li>
                  

                ))}
               
              </ul>
            ) : (
              <p className="text-gray-600">No services added yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
    </layout>
  );
};

export default ServicePage;
