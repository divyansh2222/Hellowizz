"use client"
import React, { useState } from "react"
// import Image from "next/image";
let  layout = require("../../../components/Layout");
const BusinessProfile = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessContact, setBusinessContact] = useState("");
  const [businessWebsite, setBusinessWebsite] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [uin, setUin] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setUploadedFiles([...uploadedFiles, ...Array.from(files).map((file) => file.name)]);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Business Profile Saved!");
  };

  return (
    <layout>
    <div className="max-w-2xl mx-auto pl-6 pt-4 pb-4 border rounded-md bg-red-400">
      <h1 className="text-2xl font-semibold mb-4">Business Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Business Details */}
        <div className="mb-2">
          <label className="block text-sm font-medium">Name of the Business</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium">Business Contact</label>
          <input
            type="text"
            value={businessContact}
            onChange={(e) => setBusinessContact(e.target.value)}
            className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium">Business Website</label>
          <input
            type="text"
            value={businessWebsite}
            onChange={(e) => setBusinessWebsite(e.target.value)}
            className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium">Business Email</label>
          <input
            type="email"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium">Address of the Office</label>
          <textarea
            value={officeAddress}
            onChange={(e) => setOfficeAddress(e.target.value)}
            className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium">UIN</label>
          <input
            type="text"
            value={uin}
            onChange={(e) => setUin(e.target.value)}
            className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium">GST No. (Optional)</label>
          <input
            type="text"
            value={gstNo}
            onChange={(e) => setGstNo(e.target.value)}
            className="mt-1 block w-2/3 rounded-md border-gray-300 shadow-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Business/Service Category */}
        <div className="mb-6">
          <label className="block text-sm font-medium">Business/Service Category</label>
          <div className="flex gap-4 mt-2">
            <label>
              <input
                type="radio"
                value="Trader"
                checked={businessCategory === "Trader"}
                onChange={(e) => setBusinessCategory(e.target.value)}
              />{" "}
              Trader
            </label>
            <label>
              <input
                type="radio"
                value="Manufacturer"
                checked={businessCategory === "Manufacturer"}
                onChange={(e) => setBusinessCategory(e.target.value)}
              />{" "}
              Manufacturer
            </label>
            <label>
              <input
                type="radio"
                value="Service provider"
                checked={businessCategory === "Service provider"}
                onChange={(e) => setBusinessCategory(e.target.value)}
              />{" "}
              Service provider
            </label>
            <label>
              <input
                type="radio"
                value="Professional"
                checked={businessCategory === "Professional"}
                onChange={(e) => setBusinessCategory(e.target.value)}
              />{" "}
              Professional
            </label>
          </div>
        </div>

        {/* Upload Buttons */}
        <div className="max-w-4xl mx-auto pb-4">
     

      {/* Upload Button */}
      <button
        onClick={toggleModal}
        className=" px-4 py-2 text-white rounded-md bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-black"
      >
        Upload Files
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Upload Image/Video</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Choose Files</label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFileUpload}
              />
            </div>

            {/* Display Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium">Uploaded Files:</h3>
                <ul className="text-sm text-gray-600 mt-2">
                  {uploadedFiles.map((file, index) => (
                    <li key={index}>{file}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save
        </button>
      </form>
      </div>
    </layout>
  );
};

export default BusinessProfile;


