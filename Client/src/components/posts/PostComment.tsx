import React, { useEffect, useState } from "react";
import { Comment } from "src/types";

const fetchComments = async (postId: string) => {
  try {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            getComments(postId: "${postId}") {
              id
              title
              content
              published
              authorId
              postId
              publishedAt
            }
          }
        `,
      }),
    });

    const data = await response.json();
    return data.data.getComments || [];
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

const addComment = async (comment: Omit<Comment, "id" | "publishedAt">) => {
  try {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        query: `
          mutation {
            createComment(
              title: "${comment.title}",
              content: "${comment.content}",
              authorId: "${comment.authorId}",
              postId: "${comment.postId}"
            ) {
              code
              success
              message
              comment {
                id
                title
                content
                published
                authorId
                postId
                publishedAt
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();
    return data.data?.createComment?.comment || null;
  } catch (error) {
    console.error("Error adding comment:", error);
    return null;
  }
};

const ShowList = ({ comments }: { comments: Comment[] }) => {
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.title}</h3>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default function PostComment({ postId }: { postId: string }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const loadComments = async () => {
      const fetchedComments = await fetchComments(postId);
      setComments(fetchedComments);
    };

    console.log("PostComment -> postId", postId);

    loadComments();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }

    const newComment = await addComment({
      title,
      content,
      authorId: "1",
      postId,
      published: false,
    });

    if (newComment) {
      setComments((prev) => [...prev, newComment]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Comment</button>
      </form>
      <ShowList
        comments={comments
          .filter((comment) => comment.published)
          .sort(
            (a, b) =>
              (b.publishedAt ? new Date(b.publishedAt).getTime() : 0) -
              (a.publishedAt ? new Date(a.publishedAt).getTime() : 0)
          )}
      />
    </div>
  );
}
