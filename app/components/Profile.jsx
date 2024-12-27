"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [contact, setContact] = useState("+1234567890");
  const [isEditing, setIsEditing] = useState(false);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto shadow-lg p-6 text-center">
      {/* Profile Picture Section */}
      <h1 className="text-xl mb-4">Profile</h1>
      <div className="flex justify-center items-center mb-6">
        <div className="relative">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          {!profilePic && (
            <label
              htmlFor="file-upload"
              className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer"
            >
              Upload
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </label>
          )}
        </div>
      </div>

      {/* Name, Email, and Contact Details */}
      {!isEditing ? (
        <div className="text-center mb-6">
          <div className="text-xl font-semibold">{name}</div>
          <div className="text-gray-600">{email}</div>
          <div className="text-gray-600">{contact}</div>
        </div>
      ) : (
        <form className="mb-6 border border-1 p-4" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-start text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-start text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block  p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-start text-gray-700">
              Contact
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </form>
      )}

      {/* Edit Button */}
      <div className="flex justify-center mb-6">
        {!isEditing && (
          <button
            onClick={toggleEditing}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Edit
          </button>
        )}
      </div>

      {/* Additional Sections (3 separate divs) */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/menuContainer/profile/bussinessProfile">
          <h4 className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/Frame.png"
              alt="Business Profile"
              height={10}
              width={30}
            />
            <p className="text-lg font-semibold">Business Profile</p>
          </h4>
        </Link>

        <Link href="/menuContainer/profile/services">
          <h4 className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:shadow-lg transition-shadow duration-300">
            <Image src="/Frame (1).png" alt="Services" height={10} width={30} />
            <p className="text-lg font-semibold">Services</p>
          </h4>
        </Link>

        <Link href="/menuContainer/profile/events">
          <h4 className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:shadow-lg transition-shadow duration-300">
            <Image src="/Frame (2).png" alt="Events" height={10} width={30} />
            <p className="text-lg font-semibold">Events</p>
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
