import Image from "next/image";
const Sidebar = () => {
    return (
      <div className="w-64 bg-custom-red text-white h-screen p-4">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
        <li className="hover:bg-gray-700 p-2 rounded-md flex items-center justify-start gap-4">
            <Image src="/Frame.png" alt="" height={10} width={30} />
            <a href="/profile">Home</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md flex items-center justify-start gap-4">
            <Image src="/Frame (4).png" alt="" height={10} width={30} />
            <a href="/profile">Biz-Reels</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md flex items-center justify-start gap-4">
            <Image src="/Frame (2).png" alt="" height={10} width={30} />
            <a href="/profile">Community</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md flex items-center justify-start gap-4">
            <Image src="/Frame (3).png" alt="" height={10} width={30} />
            <a href="/profile">Find nearest Chapter or Club</a>
          </li>
          
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  