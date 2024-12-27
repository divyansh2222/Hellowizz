"use client";
import React, { useState } from "react";
import jsPDF from "jspdf";
let  layout = require("../../components/Layout");

const newsData = [
  {
    title: "Breaking News 1",
    image: "https://th-i.thgim.com/public/incoming/et3pbi/article69030979.ece/alternates/FREE_1200/PTI6_6_2011_000190B.JPEG-0c817.jpg",
    description: "Leaders of the Indian industry and people from the world of business paid rich tributes to Late former Prime Minister Dr. Manmohan Singh and the architect of modern India, who passed away on Thursday (December 26, 2024) at the age of 92 following age-related ailment.",
  },
  {
    title: "Breaking News 2",
    image: "https://th-i.thgim.com/public/incoming/i9tmhf/article69029646.ece/alternates/LANDSCAPE_1200/India_World_Water_Day.JPEG-09117.jpg",
    description: "China approves world’s largest, $137-billion dam on the Brahmaputra close to the Indian border.China has approved the construction of the world's largest dam, stated to be the planet's biggest infra project costing $137 billion, on the Brahmaputra River in Tibet close to the Indian border, raising concerns in riparian states — India and Bangladesh.",
  },
  {
    title: "Breaking News 3",
    image: "https://www.eurasiantimes.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-26-at-1.33.27-AM.jpeg",
    description: "Miraculous Landing” After Shootdown By Russian SAM: Azerbaijan Plane Crash Reminds Of ‘Very Similar’ 2003 Incident. The miracle story of how Aloha Airlines Flight 243 landed safely despite losing a part of its roof is one of the most incredible, yet shocking moments in aviation history. On April 28, 1988, a huge section of the roof of an Aloha Airlines jet between Hilo and Honolulu in Hawaii, carrying 89 passengers and six crew tore loose and peeled off mid-flight. What resulted after that was pure horror and a moment that transformed the aviation industry forever. ",
  },
];

const NewsPage = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const currentNews = newsData[currentNewsIndex];

  const handlePrevious = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : newsData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex < newsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text(currentNews.title, 10, 10);
    pdf.setFontSize(14);
    pdf.text(currentNews.description, 10, 30);
    pdf.save(`${currentNews.title}.pdf`);
  };

  return (
    <layout>
    <div className="max-w-4xl mx-auto p-6">
      {/* News Logo */}
      <div className="flex  gap-10 justify-center mb-6">
        <img
          src="/Vector.png"
          alt="News Logo"
          className="w-10 h-10 object-contain"
        />
         <h1 className="text-2xl font-semibold text-center mb-4">
        {currentNews.title}
      </h1>
      </div>

      {/* News Title */}
     

      {/* News Image */}
      <div className="flex justify-center mb-4">
        <img
          src={currentNews.image}
          alt="News Image"
          className="w-full h-64 object-cover rounded-md"
        />
      </div>

      {/* News Description */}
      <div className="mb-4">
        <p className="text-gray-700 text-lg">{currentNews.description}</p>
      </div>

      {/* Download PDF Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleDownloadPDF}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download as PDF
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
    </layout>
  );
};

export default NewsPage;
