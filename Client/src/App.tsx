import React from "react";
import { Routes, Route } from "react-router-dom";
import Feeds from "@components/Feeds";
import RightPanel from "@components/RightPanel";
import Sidebar from "@components/SideBar";
import LoginPage from "./pages/auth/login"; 
import ProtectedRoute from "@components/auth/ProtectedRoute"; 

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <div className="flex bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen min-w-screen">
              <Sidebar />
              <main className="flex-1 p-6">
                <Feeds />
              </main>
              <RightPanel />
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;