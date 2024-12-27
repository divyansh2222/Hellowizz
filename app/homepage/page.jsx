"use client";
import ImageSlider from '../components/ImageSlider';
import Layout from '../components/Layout';
// import Navbar from '../components/Navbar';
const HomePage = () => {
  return (
    <layout>
      
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-3xl font-bold mb-4">Welcome to Hello-Bizz</h2>
      <p className="text-lg">Explore your favorite sections  and footer </p>
      <ImageSlider/>
      {/* Add more content here */}
    </div>
  </layout>
  );
};

export default HomePage;
