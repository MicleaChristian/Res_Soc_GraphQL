import { Post, User } from "@prisma/client";

export type PostModel = Post;

export type UserModel = Omit<User, 'password'>
export type CommentModel = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  postId: string;
  publishedAt: Date;
};


export type ImageModel = {
  id: string;
  url: string;
  postId: string | null;
  userId: string | null;
  commentId: string | null;
  publishedAt:   Date;

}

export type ReactionForPostModel = {
  id: string;
  reactionName: string
  userId: string
  postId: string;
  createdAt: Date;
}

export type ReactionForCommentModel = {
  id: string;
  reactionName: string
  userId: string
  commentId: string;
  createdAt: Date;
}