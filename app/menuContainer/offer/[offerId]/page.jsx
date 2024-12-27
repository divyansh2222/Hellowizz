"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";

const OfferDetail = () => {
  const router = useRouter();
  const params = useParams(); // Retrieve dynamic `offerId` from the URL
  const offerId = params.offerId;

  // Example offer descriptions
  const offerDescriptions = {
    1: "This is the description for Offer 1.",
    2: "This is the description for Offer 2.",
    3: "This is the description for Offer 3.",
    4: "This is the description for Offer 4.",
    5: "This is the description for Offer 5.",
  };

  const description = offerDescriptions[offerId] || "No description available.";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Offer {offerId} Details
      </h1>

      {/* Offer Image */}
      <div className="flex justify-center mb-6">
        <img
          src={`/offer-images/offer-${offerId}.jpg`}
          alt={`Offer ${offerId}`}
          className="w-40 h-40 object-contain border rounded-lg"
        />
      </div>

      {/* Offer Description */}
      <div className="p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p>{description}</p>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <button
          onClick={() => router.push("/menuContainer/offer")}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Back to Offers
        </button>
      </div>
    </div>
  );
};

export default OfferDetail;
