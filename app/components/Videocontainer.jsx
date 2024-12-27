"use client";

import { useState } from "react";

const VideoGallery = () => {
  // Sample video data (replace with your actual video data)
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with thumbnail URLs
      title: "Video Title 1",
      description: "Description for video 1",
      videoUrl:"/Canva 2024-09-10 15-12-49.mp4", // Replace with your video URL
    },
    {
      id: 2,
      thumbnail: "https://plus.unsplash.com/premium_photo-1661596714683-02b6cba67438?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Video Title 2",
      description: "Description for video 2",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 3,
      thumbnail: "https://plus.unsplash.com/premium_photo-1720503226523-dc08be93aae9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Video Title 3",
      description: "Description for video 3",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        id: 4,
        thumbnail: "https://images.unsplash.com/photo-1585314294157-e84eeda2c59e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with thumbnail URLs
        title: "Video Title 4",
        description: "Description for video 1",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your video URL
      },
      {
        id: 5,
        thumbnail: "https://images.unsplash.com/photo-1585314540237-13cb52fe9998?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Video Title 5",
        description: "Description for video 2",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        id: 6,
        thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Video Title 6",
        description: "Description for video 3",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    // Add more videos as needed
  ];


  // State to track the currently selected video
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  // Function to go to the next video
  const goToNextVideo = () => {
    setSelectedVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to the previous video
  const goToPreviousVideo = () => {
    setSelectedVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-4">
      {/* Selected Video View */}
      {selectedVideoIndex !== null ? (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 mb-6">
          <iframe
            width="100%"
            height="400"
            src={videos[selectedVideoIndex].videoUrl}
            title={videos[selectedVideoIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="text-xl font-bold mt-4">
            {videos[selectedVideoIndex].title}
          </h2>
          <p className="text-gray-600 mt-2">
            {videos[selectedVideoIndex].description}
          </p>
          <div className="flex justify-between mt-6">
            {/* Previous Button */}
            <button
              onClick={goToPreviousVideo}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Previous
            </button>
            {/* Back to Gallery */}
            <button
              onClick={() => setSelectedVideoIndex(null)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Back to Gallery
            </button>
            {/* Next Button */}
            <button
              onClick={goToNextVideo}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        // Video Gallery
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideoIndex(index)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{video.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
