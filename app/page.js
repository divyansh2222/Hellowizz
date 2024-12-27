"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreent";
import LoginPage from "./login/page"

const MainPage = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Hide splash screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2-second splash duration

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {showSplash ? <SplashScreen /> : <LoginPage />}
    </div>
  );
};

export default MainPage;
