"use client"
const SearchBar = () => {
    return (
      <div className="flex justify-center items-center p-2 mt-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full  p-2 pl-3 rounded-full border-1 text-white bg-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    );
  };
  
  export default SearchBar;
  