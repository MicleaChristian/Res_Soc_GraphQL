import React from "react";

const Feeds: React.FC = () => {
  return (
    <section>
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="text-lg font-semibold">George Lobko</h4>
              <p className="text-gray-500 text-sm">2 hours ago</p>
              <p className="mt-2">
                Hi everyone, today I was on the most beautiful mountain in the
                world! 😍
              </p>
              <div className="mt-4 flex gap-2">
                <img
                  src="/placeholder1.jpg"
                  alt="Post 1"
                  className="w-32 h-32 rounded-md"
                />
                <img
                  src="/placeholder2.jpg"
                  alt="Post 2"
                  className="w-32 h-32 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4 text-gray-500">
            <p>6355 Likes</p>
            <p>Comment</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div>
            <h4 className="text-lg font-semibold">Vitaliy Boyko</h4>
            <p className="text-gray-500 text-sm">3 hours ago</p>
            <p className="mt-2">
              I chose a wonderful coffee today. Latte with coconut! 🥥
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4 text-gray-500">
          <p>6355 Likes</p>
          <p>Comment</p>
        </div>
      </div>
    </section>
  );
};

export default Feeds;
