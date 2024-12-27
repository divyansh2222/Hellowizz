"use client";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";

const ChapterDetail = () => {
  const router = useRouter();
  const params = useParams(); // Use this hook to access route params
  const chapterId = params.chapterId; // Get the chapterId from params

  const [selectedClub, setSelectedClub] = useState("default");
  const [description, setDescription] = useState("");

  const clubs = {
    default: "Select a club to see the description.",
    science: "The idea of nourishment in plants and other organisms is the main topic of this chapter. The notes emphasize the role that nutrition plays in the growth and health of plants. The explanation of nutrition modes covers both autotrophic and heterotrophic organisms.",
    literature: "The definition of literature broadly encompasses written works used to transmit culture. However, literature is not always limited to the written word. The literature meaning can include stories told in the oral tradition and visual literature, such as drama that is intended to be performed before an audience.",
    arts: "Art is a creative expression that can be visual or experiential, and is made through skill or imagination. It can be a physical object, such as a painting, sculpture, or printmaking, or it can be a performing art, such as theater or dance. Art can also be a branch of learning, such as literature, or a skill, such as cooking. ",
  };

  const handleClubChange = (event) => {
    const selected = event.target.value;
    setSelectedClub(selected);
    setDescription(clubs[selected]);
  };

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
