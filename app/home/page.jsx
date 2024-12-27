import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Welcome to Hello-Bizz</h2>
        <p className="text-lg">Explore your favorite sections and footer</p>

        {/* Add more content here */}
        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="flex bg-blue-50 flex-col items-center p-4 border rounded-lg shadow-lg">
            <img
              src="/Frame (3).png"
              alt="Profile"
              className="w-10 h-10 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Profile</h3>
            <Link href="/menuContainer/profile" className="text-blue-500 hover:underline">
              Profile
            </Link>
          </div>

          {/* News Section */}
          <div className="flex flex-col bg-yellow-50 items-center p-4 border rounded-lg shadow-lg">
            <img
              src="/Vector.png"
              alt="News"
              className="w-10 h-10 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">News</h3>
            <Link href="/menuContainer/news" className="text-blue-500 hover:underline">
              View News
            </Link>
          </div>

          {/* Clubs and Chapters Section */}
          <div className="flex bg-red-50 flex-col items-center p-4 border rounded-lg shadow-lg">
            <img
              src="/Vector (1).png"
              alt="Clubs"
              className="w-10 h-10 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Clubs and Chapters</h3>
            <Link href="/menuContainer/clubchapter" className="text-blue-500 hover:underline">
              Explore Clubs
            </Link>
          </div>

          {/* Offers Section */}
          <div className="flex bg-red-50 flex-col items-center p-4 border rounded-lg shadow-lg">
            <img
              src="/Vector (2).png"
              alt="Offers"
              className="w-8 h-8 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Offers</h3>
            <Link href="/menuContainer/offer" className="text-blue-500 hover:underline">
              Check Offers
            </Link>
          </div>

          {/* Biz Reels Section */}
          <div className="flex bg-yellow-50 flex-col items-center p-4 border rounded-lg shadow-lg">
            <img
              src="/Frame 4.png"
              alt="Biz Reels"
              className="w-10 h-10 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Biz Reels</h3>
            <Link href="/bizreel" className="text-blue-500 hover:underline">
              Watch Reels
            </Link>
          </div>

          {/* Community Section */}
          <div className="flex bg-blue-50 flex-col items-center p-4 border rounded-lg shadow-lg">
            <img
              src="/Frame 5.png"
              alt="Community"
              className="w-10 h-10 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <Link href="/community" className="text-blue-500 hover:underline">
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
