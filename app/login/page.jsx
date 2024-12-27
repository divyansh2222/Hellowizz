"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between Login and Signup
  const [mobile, setMobile] = useState(" ");
  const [otp, setOtp] = useState(" ");
  const [otpsignup, setOtpSignup]= useState(" ")
  const router = useRouter();

  const handleLogin = () => {
    if (otp) {
      alert("Logged in successfully!");
     router.push("/homepage");
    } else {
      alert("Invalid OTP");
    }
  };


  const handleSignup = () => {
    if (otpsignup) {
      alert("Registration successfully!");
     router.push("/homepage");
    } else {
      alert("Invalid OTP");
    }
  };
  const handleSwitch = () => {
    setIsSignup(!isSignup); // Toggle between Login and Signup
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side (Common for both Login and Signup) */}
      <div className="w-1/2 bg-gradient-to-br from-blue-500 to-purple-700 text-white flex flex-col justify-center items-center p-8">
        <img src="/text.png" alt="Logo" className="w-40 h-40 mb-4" />
        <h1 className="text-4xl mt-5  text-black text-shadow-lg"> 
          <span className=" text-red-500">Hello</span>-Bizz
        </h1>
        <p className="text-lg mt-2 text-gray-200">Welcome to YourApp!</p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center p-8">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            {isSignup ? "Sign Up" : "Login"}
          </h2>

          {/* Conditional form rendering based on the isSignup state */}
          {!isSignup ? (
            // Login Form
            <>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-600 font-medium">
                  Enter Mobile Number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile Number"
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                onClick={() => alert("OTP sent!")}
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-red-900 transition"
              >
                Send OTP
              </button>

              <div className="mb-4 mt-4">
                <label htmlFor="otp" className="block text-gray-600 font-medium">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-red-900 transition"
              >
                Login
              </button>
            </>
          ) : (
            // Signup Form
            <>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-600 font-medium">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                onClick={() => alert("OTP sent!")}
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-red-900 transition"
              >
                Send OTP
              </button>

              <div className="mb-4 mt-4">
                <label htmlFor="otp" className="block text-gray-600 font-medium">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  onChange={(e) => setOtpSignup(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                onClick={handleSignup}
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-red-900 transition"
              >
                Sign Up
              </button>
            </>
          )}

          <p className="text-gray-600 text-sm text-center mt-4">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <span
              onClick={handleSwitch}
              className="text-blue-500 cursor-pointer hover:underline ml-1"
            >
              {isSignup ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
