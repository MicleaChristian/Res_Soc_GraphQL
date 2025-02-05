import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white p-6 shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-gray-300">
            <img
              src="https://placehold.co/600x400"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Bogdan Nikitin</h3>
            <p className="text-gray-500">@nikitinteam</p>
          </div>
        </div>
        <nav className="space-y-4">
          <a href="#" className="block text-black font-medium">
            News Feed
          </a>
          <a href="#" className="block text-gray-500">
            Messages
          </a>
          <a href="#" className="block text-gray-500">
            Forums
          </a>
          <a href="#" className="block text-gray-500">
            Friends
          </a>
          <a href="#" className="block text-gray-500">
            Media
          </a>
          <a href="#" className="block text-gray-500">
            Settings
          </a>
        </nav>
      </div>
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 mb-4"></div>
        <p className="text-center text-gray-700">Download the App</p>
      </div>
    </aside>
  );
};

export default Sidebar;
