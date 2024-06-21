import React from "react";
import { Link } from "react-router-dom";

const Type = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col p-2 m-2 ">
          <div className="text-3xl font-medium m-2 text-[#ffb703]">
            Explore All The Categories
          </div>
          <div className="text-sm mx-2 md:text-xl text-stone-500 m-4 text-[#023047]">
            A wide Collections of Different Genres of Books
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 m-8">
            <div className="flex flex-col items-center justify-center p-2">
              <Link to="/category/comedy">
                <div className="flex flex-col items-center px-6 py-2 max-w-xs">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="/assets/Category/Comedy.gif"
                      alt="Reload"
                      className=""
                    />
                  </div>
                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Comedy
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Link to="/category/romance">
                <div className="flex flex-col items-center px-6 py-2 max-w-xs">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="/assets/Category/Love.gif"
                      alt="Reload"
                      className=""
                    />
                  </div>
                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Romance
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Link to="/category/horror">
                <div className="flex flex-col items-center px-6 py-2 max-w-xs">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="/assets/Category/Horror.gif"
                      alt="Reload"
                      className=""
                    />
                  </div>
                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Horror
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Link to="/category/sci-fi">
                <div className="flex flex-col items-center px-6 py-2 max-w-xs">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="/assets/Category/Sci-Fi.gif"
                      alt="Reload"
                      className=""
                    />
                  </div>
                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Sci-fi
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Link to="/category/fantasy">
                <div className="flex flex-col items-center px-6 py-2 max-w-xs">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="/assets/Category/Fantasy.gif"
                      alt="Reload"
                      className=""
                    />
                  </div>
                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Fantasy
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Link to="/category/history">
                <div className="flex flex-col items-center px-6 py-2 max-w-xs">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="/assets/Category/History.gif"
                      alt="Reload"
                      className=""
                    />
                  </div>
                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    History
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Link to="/category/travel">
                <div className="flex flex-col items-center px-6 py-2 max-w-xs">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="/assets/Category/travel1.gif"
                      alt="Reload"
                      className=""
                    />
                  </div>
                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Travel
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Link to="/category/anime">
                <div className="flex flex-col items-center px-6 py-2 max-w-xs">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="/assets/Category/anime4.gif"
                      alt="Reload"
                      className=""
                    />
                  </div>
                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Anime
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};

export default Type;
