import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const bool = false;
  return (
    <aside className="w-64 bg-white p-6 shadow-md flex flex-col justify-between">
      <div>
        {bool ? (
          <div className="flex shadow-md w-full rounded-2xl p-4 items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gray-300">
              <img
                src="https://placehold.co/600x400"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg text-black font-semibold">Prince</h3>
              <p className="text-gray-500">@prince</p>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className=" shadow-md rounded-2xl p-4 items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-full bg-gray-300">
                <img
                  src="https://placehold.co/600x400"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg text-black font-semibold">Log in</h3>
              </div>
            </Link>
          </div>
        )}
        <nav className="space-y-4 text-black flex flex-col">
          <a href="#newfeed" className="block !text-black font-medium">
            News Feed
          </a>
          <a href="#messages" className="block !text-gray-500">
            Messages
          </a>
          <a href="#forums" className="block !text-gray-500">
            Forums
          </a>
          <a href="#friends" className="block !text-gray-500">
            Friends
          </a>
          <a href="#media" className="block !text-gray-500">
            Media
          </a>
          <a href="#settings" className="block !text-gray-500">
            Settings
          </a>
        </nav>
      </div>
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <div className="">
          <img
            src="/assets/logo-raven.png"
            alt="App"
            className="w-full rounded-full"
          />
        </div>
        <p className="text-center w-full p-0 text-gray-700">
          Télécharger l'app
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
