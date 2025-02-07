import { useState } from "react";
import { Post } from "src/types";

const AddFeed = () => {
  const [error, setError] = useState<string>("");
  const [feed, setFeed] = useState<Post>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            mutation createPost($content: String!) {
              createPost(content: $content) {
                message
                success
              }
            }
          `,
          variables: { content: feed?.content },
        }),
      });

      const result = await response.json();
      const data = result.data.addFeed;

      if (data.success) {
        // redirect to feeds page
        window.location.href = "/";
      } else {
        setError(data.message || "Failed to add feed.");
      }
    } catch (err) {
      setError("An error occurred while adding feed.");
    }
  };

  return (
    <div className="add-feed">
      <h1>Add Feed</h1>
      {error && <p className="error-message">{error}</p>}

      {/* modal form add feed */}
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind?"
          value={feed?.content}
          onChange={(e) => setFeed(feed)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddFeed;
