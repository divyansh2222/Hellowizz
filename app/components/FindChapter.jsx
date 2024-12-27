"use client"
import React, { useState } from "react";

// Sample Data
const locationsData = [
    {
      id: "1",
      name: "Community Hall A",
      image:
        "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Downtown, City A",
      incharge: "John Doe",
      contact: "+1 123 456 7890",
    },
    {
      id: "2",
      name: "Sports Arena B",
      image:
        "https://images.unsplash.com/photo-1579158949482-3e9e0ac69333?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Uptown, City B",
      incharge: "Jane Smith",
      contact: "+1 987 654 3210",
    },
    {
      id: "3",
      name: "Library C",
      image:
        "https://plus.unsplash.com/premium_photo-1712665535102-fddaf87dbc17?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Midtown, City C",
      incharge: "Samuel Lee",
      contact: "+1 555 123 4567",
    },
    {
      id: "4",
      name: "Innovation Center D",
      image:
        "https://images.unsplash.com/photo-1578589385251-045f05a6faa5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Tech Park, City D",
      incharge: "Sophia Johnson",
      contact: "+1 234 567 8901",
    },
    {
      id: "5",
      name: "Art Gallery E",
      image:
    "https://images.unsplash.com/photo-1578589318514-262b58e01f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlJTIwb2YlMjBsb2NhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      location: "Cultural District, City E",
      incharge: "Michael Brown",
      contact: "+1 654 321 0987",
    },
    {
      id: "6",
      name: "Wellness Center F",
      image:
    "https://plus.unsplash.com/premium_photo-1712679697258-b92e63ed26dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGltYWdlJTIwb2YlMjBsb2NhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      location: "Health Street, City F",
      incharge: "Emily Davis",
      contact: "+1 789 123 4567",
    },
    {
      id: "7",
      name: "Event Hall G",
      image:
    "https://images.unsplash.com/photo-1578589318514-262b58e01f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlJTIwb2YlMjBsb2NhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      location: "Event Avenue, City G",
      incharge: "Christopher Wilson",
      contact: "+1 321 654 9870",
    },
    {
      id: "8",
      name: "Startup Incubator H",
      image:
        "https://plus.unsplash.com/premium_photo-1712866130888-9385e0bc192c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGltYWdlJTIwb2YlMjBsb2NhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      location: "Business Bay, City H",
      incharge: "Olivia Martinez",
      contact: "+1 456 789 1234",
    },
    {
      id: "9",
      name: "Tech Hub I",
      image:
    "https://images.unsplash.com/photo-1576158129605-fb0c93eeedfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGltYWdlJTIwb2YlMjBsb2NhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      location: "Silicon Valley, City I",
      incharge: "David Lee",
      contact: "+1 987 123 6540",
    },
    {
      id: "10",
      name: "Conference Center J",
      image:
        "https://images.unsplash.com/photo-1579818637899-9ecd338746e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGltYWdlJTIwb2YlMjBsb2NhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      location: "Downtown, City J",
      incharge: "Sophia Taylor",
      contact: "+1 654 987 1230",
    },
   

  ];
  

const FindChapter = () => {
  const [query, setQuery] = useState(""); // State for search input
  const [filteredResults, setFilteredResults] = useState(locationsData); // Filtered data

  // Handle search query
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    setFilteredResults(
      locationsData.filter((item) =>
        item.name.toLowerCase().includes(value) || 
        item.location.toLowerCase().includes(value) ||
        item.incharge.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Search  Club / Chapter</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, location, or in-charge"
        className="w-full p-3 border border-gray-300 rounded-lg mb-6"
        value={query}
        onChange={handleSearch}
      />

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="text-gray-600">
                <strong>In-Charge:</strong> {item.incharge}
              </p>
              <p className="text-gray-600">
                <strong>Contact:</strong> {item.contact}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FindChapter;
