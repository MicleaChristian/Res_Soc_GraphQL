import React from "react";
import Home from "./pages/home";

const App: React.FC = () => {
  return (
    <div className="flex bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen min-w-screen">
      <Home />
    </div>
  );
};

export default App;
