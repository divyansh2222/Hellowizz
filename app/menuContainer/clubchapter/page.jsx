"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ChapterList = () => {
  const router = useRouter();
  const chapters = [1, 2, 3, 4, 5]; // List of chapter numbers

  const goToChapter = (chapterId) => {
    router.push(`/menuContainer/clubchapter/${chapterId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Chapter List</h1>
      <ul className="space-y-4">
        {chapters.map((chapter) => (
          <li
            key={chapter}
            className="flex justify-between items-center border p-4 rounded-md"
          >
            {/* Chapter Number */}
            <span className="text-lg font-medium">Chapter {chapter}</span>
            
            {/* View Detail Button */}
            <button
              onClick={() => goToChapter(chapter)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              View Detail
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
