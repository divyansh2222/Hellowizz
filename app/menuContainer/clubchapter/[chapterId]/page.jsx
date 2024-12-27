"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ChapterDetail = ({ params: asyncParams }) => {
  const router = useRouter();
  const [chapterId, setChapterId] = useState(null);
  const [selectedClub, setSelectedClub] = useState("default");
  const [description, setDescription] = useState("");

  const clubs = {
    default: "Select a club to see the description.",
    science: "This is the Science Club's description for the chapter.",
    literature: "This is the Literature Club's description for the chapter.",
    arts: "This is the Arts Club's description for the chapter.",
  };

  // Resolve `params` asynchronously
  useEffect(() => {
    asyncParams.then((resolvedParams) => {
      setChapterId(resolvedParams.chapterId);
    });
  }, [asyncParams]);

  const handleClubChange = (event) => {
    const selected = event.target.value;
    setSelectedClub(selected);
    setDescription(clubs[selected]);
  };

  if (!chapterId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Chapter {chapterId} Details
      </h1>

      {/* Chapter Image */}
      <div className="flex justify-center mb-6">
        <img
          src={`/chapter-images/chapter-${chapterId}.jpg`}
          alt={`Chapter ${chapterId}`}
          className="w-40 h-40 object-contain border rounded-lg"
        />
      </div>

      {/* Club Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Select Club</label>
        <select
          value={selectedClub}
          onChange={handleClubChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">-- Select Club --</option>
          <option value="science">Science Club</option>
          <option value="literature">Literature Club</option>
          <option value="arts">Arts Club</option>
        </select>
      </div>

      {/* Description */}
      <div className="p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p>{description}</p>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <button
          onClick={() => router.push("/menuContainer/clubchapter")}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Back to Chapters
        </button>
      </div>
    </div>
  );
};

export default ChapterDetail;
