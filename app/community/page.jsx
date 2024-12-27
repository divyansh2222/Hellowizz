
import CommunityMembers from "../components/CommunityMember";
// import VideoGallery from "../components/Videocontainer";
import layout from "./layout";
// import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <layout>
      
      <div className="flex items-center justify-center flex-col">
      
      <CommunityMembers/>
      </div>
    </layout>
  );
};

export default Home;

