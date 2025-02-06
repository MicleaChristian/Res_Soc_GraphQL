import { useEffect, useState } from "react";

const Feeds: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const getPosts = async () => {
    try {
      // fetch posts
      const posts = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              posts {
                id
                title
                content
                image
              }
            }
          `,
        }),
      });

      console.log(posts.text());

      if (!posts.ok) {
        setError(true);
        setLoading(false);
      }

      const postsData = await posts.json();

      setData(postsData);

      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loading)
    return (
      <div className="text-black-500 text-center shadow-lg p-4 bg-white rounded-lg">
        Loading...
      </div>
    );

  if (error || !data)
    return (
      <div className="text-black-500 text-center shadow-lg p-4 bg-white rounded-lg">
        No posts found
      </div>
    );

  return (
    <section>
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow p-5 mb-4">
          <div className="flex items-start gap-4 text-black">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="text-lg font-semibold">George Lobko</h4>
              <p className="text-gray-500 text-sm">2 hours ago</p>
              <p className="mt-2 ">
                Hi everyone, today I was on the most beautiful mountain in the
                world! 😍
              </p>
              {/*  carousel image with dots */}
              <div className="mt-4 relative">
                <div className="flex gap-4">
                  <div className="mt-4 flex gap-2">
                    <img
                      src="https://placehold.co/600x400?text=Hello+World"
                      alt="Post 1"
                      className="w-full h-[500] rounded-md"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
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
        <div className="flex items-start gap-4 text-black">
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

      {/* pagination load more */}
      <div className="justify-center items-center fixed bottom-10 w-full left-0 right-0 flex">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Voir plus
        </button>
      </div>
    </section>
  );
};

export default Feeds;
