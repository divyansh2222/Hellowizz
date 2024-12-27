import Footer from './Footer';
import Navbar from './Navbar';



const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar/>
      <div className="flex flex-row">
        
        
        {/* Main Content */}
        <div className="flex-1 p-6">{children}</div>
      </div>
     <Footer/>
    </div>
  );
};

export default Layout;
