"use client"
import React, { useState } from 'react';
import members from './Member'; // Import your members data

const CommunityMemberCard = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div>
      {/* Displaying all community members */}
      <div className="grid grid-cols-3 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="border p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal(member)}
          >
            <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-center mt-2">{member.name}</h3>
            <p className="text-center text-sm">{member.designation}</p>
          </div>
        ))}
      </div>

      {/* Modal for detailed member information */}
      {isModalOpen && selectedMember && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={(e) => {
      // Close modal when clicking outside the modal content
      if (e.target.classList.contains('bg-black')) closeModal();
    }}
  >
    <div
      className="relative bg-white p-6 rounded-lg w-1/3"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
    >
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm"
        onClick={closeModal}
      >
        ✕
      </button>

      {/* Modal Content */}
      <div className="flex flex-col items-center">
        <img
          src={selectedMember.photo}
          alt={selectedMember.name}
          className="w-32 h-32 rounded-full"
        />
        <h2 className="text-xl mt-4">{selectedMember.name}</h2>
        <p><strong>Email:</strong> {selectedMember.email}</p>
        <p><strong>Phone:</strong> {selectedMember.phone}</p>
        <p><strong>Designation:</strong> {selectedMember.designation}</p>
        <p><strong>Joined Date:</strong> {selectedMember.joinedDate}</p>
        <p className="mt-2">{selectedMember.description}</p>

        {/* Previous and Next Buttons */}
        <div className="mt-4 flex justify-between w-full">
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => {
              const currentIndex = members.findIndex((m) => m.id === selectedMember.id);
              const previousMember = members[currentIndex - 1] || members[members.length - 1];
              setSelectedMember(previousMember);
            }}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => {
              const currentIndex = members.findIndex((m) => m.id === selectedMember.id);
              const nextMember = members[currentIndex + 1] || members[0];
              setSelectedMember(nextMember);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default CommunityMemberCard;
