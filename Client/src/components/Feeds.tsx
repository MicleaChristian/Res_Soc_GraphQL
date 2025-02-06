import { useEffect, useState } from "react";

import moment from "moment";

type Post = {
  id: string;
  authorId: string;
  title: string;
  content: string;
  photo: string;
  published: boolean;
  publishedAt: string;
  comments: Comment[];
};

const Feeds: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Post[]>();
  const [showLoadMore, setShowLoadMore] = useState(false);

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const calculateScrollPage = () => {
    if (scrollTop + clientHeight >= scrollHeight) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPage);

    return () => {
      window.removeEventListener('scroll', calculateScrollPage);
    }
  }, []);

  const timeAgo = (date: string) => {
    if (!date) return;

    let finalDate = moment(Number.parseInt(date)).format("YYYY-MM-DD");

    // if invalid date
    if (!moment(finalDate).isValid()) return;

    return moment(finalDate).fromNow();
  };

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
          query getPosts {
            getPosts {
              message
              code
              success
              post {
                content
                id
                title
                photo
                authorId
                published
                publishedAt
                comments {
                  content
                  published
                  authorId
                }
              }
            }
          }
            
          `,
        }),
      });

      if (!posts.ok) {
        setError(true);
        setLoading(false);
      }

      const {
        data: {
          getPosts: { post },
        },
      } = await posts.json();

      setData(post);

      console.log(timeAgo(post[0].publishedAt));

      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
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
      {data.length ? (
        data.map((post) => (
          <div className="mb-8" key={post.id}>
            <div className="bg-white rounded-lg shadow p-5 mb-4">
              <div className="flex items-start gap-4 text-black">
                <img
                  src={post.photo || "https://placehold.co/400x400"}
                  alt="Post 1"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold">{post.title}</h4>
                  <p className="text-gray-500 text-sm">
                    {timeAgo(post.publishedAt)}
                  </p>
                  <p className="mt-2 ">
                    {post.content.length > 200
                      ? `${post.content.slice(0, 200)}...`
                      : post.content}
                  </p>
                  {/*  carousel image with dots */}
                  <div className="mt-4 relative">
                    <div className="flex gap-4">
                      <div className="mt-4 flex gap-2">
                        <img
                          src={post.photo || "https://placehold.co/600x400"}
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
                <p>
                  {post.comments.length} Comment
                  {post.comments.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-black-500 text-center shadow-lg p-4 bg-white rounded-lg">
          No posts found
        </div>
      )}

      {/* pagination load more */}
      {showLoadMore && (
        <div className="justify-center items-center fixed bottom-10 w-full left-0 right-0 flex">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Voir plus
          </button>
        </div>
      )}
    </section>
  );
};

export default Feeds;
