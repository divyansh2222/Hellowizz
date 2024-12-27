"use client";
import React from "react";
import { useRouter } from "next/navigation";

const offerList = () => {
  const router = useRouter();
  const offers = [1, 2, 3, 4, 5]; // List of offer numbers

  const goToOffer = (offerId) => {
    router.push(`/menuContainer/offer/${offerId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Offer List</h1>
      <ul className="space-y-4">
        {offers.map((offer) => (
          <li
            key={offer}
            className="flex justify-between items-center border p-4 rounded-md"
          >
            {/* Offer Number */}
            <span className="text-lg font-medium">Offer {offer}</span>
            
            {/* View Detail Button */}
            <button
              onClick={() => goToOffer(offer)}
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

export default offerList;
