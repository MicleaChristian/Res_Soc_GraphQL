export type PostModel = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  publishedAt: Date;
};

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
  // post: PostModel | null;
  userId: string | null;
  commentId: string | null;
  // comment: CommentModel | null;
  publishedAt:   Date;

}

export type ReactionForPostModel = {
  id: string;
  reactionName: string
  userId: string
  postId: string;
  // post: PostModel;
  createdAt: Date;
}

export type ReactionForCommentModel = {
  id: string;
  reactionName: string
  userId: string
  commentId: string;
  // comment: CommentModel;
  createdAt: Date;
}