"use client"
import React, { useState } from "react";

// Sample Data
const locationsData = [
    {
      id: "1",
      name: "Community Hall A",
      image:
        "https://images.unsplash.com/photo-1582719478181-d1a30a54001e?w=1887&auto=format&fit=crop",
      location: "Downtown, City A",
      incharge: "John Doe",
      contact: "+1 123 456 7890",
    },
    {
      id: "2",
      name: "Sports Arena B",
      image:
        "https://images.unsplash.com/photo-1508898578281-774ac4893a5e?w=1887&auto=format&fit=crop",
      location: "Uptown, City B",
      incharge: "Jane Smith",
      contact: "+1 987 654 3210",
    },
    {
      id: "3",
      name: "Library C",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1887&auto=format&fit=crop",
      location: "Midtown, City C",
      incharge: "Samuel Lee",
      contact: "+1 555 123 4567",
    },
    {
      id: "4",
      name: "Innovation Center D",
      image:
        "https://images.unsplash.com/photo-1528108971810-dc8535157d6b?w=1887&auto=format&fit=crop",
      location: "Tech Park, City D",
      incharge: "Sophia Johnson",
      contact: "+1 234 567 8901",
    },
    {
      id: "5",
      name: "Art Gallery E",
      image:
        "https://images.unsplash.com/photo-1549893078-3e57767b3760?w=1887&auto=format&fit=crop",
      location: "Cultural District, City E",
      incharge: "Michael Brown",
      contact: "+1 654 321 0987",
    },
    {
      id: "6",
      name: "Wellness Center F",
      image:
        "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1887&auto=format&fit=crop",
      location: "Health Street, City F",
      incharge: "Emily Davis",
      contact: "+1 789 123 4567",
    },
    {
      id: "7",
      name: "Event Hall G",
      image:
        "https://images.unsplash.com/photo-1531053273740-5d4a0c1a9c03?w=1887&auto=format&fit=crop",
      location: "Event Avenue, City G",
      incharge: "Christopher Wilson",
      contact: "+1 321 654 9870",
    },
    {
      id: "8",
      name: "Startup Incubator H",
      image:
        "https://images.unsplash.com/photo-1591696205602-2da90e074c29?w=1887&auto=format&fit=crop",
      location: "Business Bay, City H",
      incharge: "Olivia Martinez",
      contact: "+1 456 789 1234",
    },
    {
      id: "9",
      name: "Tech Hub I",
      image:
        "https://images.unsplash.com/photo-1553649078-8d3d82dbd9bf?w=1887&auto=format&fit=crop",
      location: "Silicon Valley, City I",
      incharge: "David Lee",
      contact: "+1 987 123 6540",
    },
    {
      id: "10",
      name: "Conference Center J",
      image:
        "https://images.unsplash.com/photo-1564252998730-3139fa8c38ae?w=1887&auto=format&fit=crop",
      location: "Downtown, City J",
      incharge: "Sophia Taylor",
      contact: "+1 654 987 1230",
    },
    {
      id: "11",
      name: "Civic Hall K",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1887&auto=format&fit=crop",
      location: "Main Street, City K",
      incharge: "Liam Anderson",
      contact: "+1 890 123 4567",
    },
    {
      id: "12",
      name: "Science Lab L",
      image:
        "https://images.unsplash.com/photo-1508614886908-94f5b7b038d7?w=1887&auto=format&fit=crop",
      location: "University Campus, City L",
      incharge: "Charlotte White",
      contact: "+1 567 890 1234",
    },
    {
      id: "13",
      name: "Innovation Center M",
      image:
        "https://images.unsplash.com/photo-1519648023493-d82b5f8d7d93?w=1887&auto=format&fit=crop",
      location: "Industrial Zone, City M",
      incharge: "Elijah Martinez",
      contact: "+1 321 789 4560",
    },
    {
      id: "14",
      name: "Youth Center N",
      image:
        "https://images.unsplash.com/photo-1485841890310-6a055c88698a?w=1887&auto=format&fit=crop",
      location: "Community Lane, City N",
      incharge: "Amelia Clark",
      contact: "+1 789 654 1234",
    },
    {
      id: "15",
      name: "Training Center O",
      image:
        "https://images.unsplash.com/photo-1519300399480-9da1831f1a3b?w=1887&auto=format&fit=crop",
      location: "Training Avenue, City O",
      incharge: "Benjamin Garcia",
      contact: "+1 456 321 7890",
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
