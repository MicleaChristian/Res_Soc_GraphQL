import React from "react";

const RightPanel: React.FC = () => {
  return (
    <aside className="w-80 bg-white p-6 shadow-md">
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Stories</h3>
        <div className="flex gap-4">
          <div className="w-20 h-20 rounded-lg bg-gray-300"></div>
          <div className="w-20 h-20 rounded-lg bg-gray-300"></div>
          <div className="w-20 h-20 rounded-lg bg-gray-300"></div>
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Suggestions</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>Nick Shelburne</p>
            <button className="text-blue-500">Follow</button>
          </div>
          <div className="flex justify-between items-center">
            <p>Brittni Lando</p>
            <button className="text-blue-500">Follow</button>
          </div>
          <div className="flex justify-between items-center">
            <p>Ivan Shevchenko</p>
            <button className="text-blue-500">Follow</button>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white">
            UI/UX
          </div>
          <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-white">
            Music
          </div>
          <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center text-white">
            Hiking
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RightPanel;
