import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const layout= ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar/>
        
        
        {/* Main Content */}
        <div className="flex-1 p-6">{children}</div>
        <Footer/>
      </div>
    
    
  );
};
export default layout;