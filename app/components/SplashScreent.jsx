"use client";

import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div
      className="flex flex-row items-center p-6 rounded-lg shadow-lg"
      style={{
        borderTop: "5px solid",  // Border thickness
        borderImage: "linear-gradient(to right, red, black) 1", // Gradient border
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center pr-6 mr-6">
        <Image src="/text.png" alt="Logo" height={80} width={80} />
        <h1 className="text-4xl mt-8">
          <span className="text-red-500">Hello</span>-Bizz
        </h1>
      </div>
      {/* Right Section */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl">An application for</h2>
        <h1 className="text-3xl">
          <span className="text-red-700">Biz</span>-Network
        </h1>
        <p className="text-xl mt-4">
          Designed and crafted by{" "}
          <span className="text-red-700">Willskrakt</span>
        </p>
      </div>
    </div>
  </div>
  

  );
};

export default SplashScreen;
