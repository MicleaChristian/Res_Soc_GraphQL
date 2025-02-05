import React from "react";
import Feeds from "./components/Feeds";
import RightPanel from "./components/RightPanel";
import Sidebar from "./components/SideBar";
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="flex bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen min-w-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Feeds />
      </main>
      <RightPanel />
    </div>
  );
};

export default App;
