import React, { useEffect, useState } from "react";
import { Comment } from "src/gql/graphql";
import { graphql } from '../../gql'
import { useMutation } from '@apollo/client'

const addComment = graphql(`
      mutation createComment($title: String!, $content: String!, $authorId: ID!, $postId: ID!,$token: String!, $published: Boolean!) {
        createComment(title:$title , content: $content, authorId : $authorId, postId : $postId, token: $token , published: $published){
            code
            success
            message
            comment {
              authorId
              content
              id
              published
              postId
            }
          }
        }
    `)

const ShowList = ({ comments }: { comments: Comment[]}) => {
  console.log("comment in showlist", comments);
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

export default function PostComment({ postId, commentsPost }: { postId: string, commentsPost: Comment[]}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const [addCommentToPost, { data, loading, error }] = useMutation(addComment);

  console.log(data);
  if (loading) return 'Submitting...';

  if (error) return `Submission error! ${error.message}`;

  useEffect(() => {
    const loadComments = async () => {
      setComments(commentsPost);
      console.log("loadComment",comments );
    };

    console.log("PostComment -> postId", postId);
    
    loadComments();
    console.log("comments ->", comments);
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }
    // addCommentToPost({ variables: { 
    //   type: input.value,
        // title:$title , 
        // content: $content, 
        // authorId : $authorId, 
        // postId : $postId, 
        // token: $token , 
        // published: $published

    // }});

    // input.value = '';

    // const newComment = await addComment({
    //   title,
    //   content,
    //   authorId: "1",
    //   postId,
    //   published: false,
    // });

    // if (newComment) {
    //   setComments((prev) => [...prev, newComment]);
    //   setTitle("");
    //   setContent("");
    // }
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
