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
  post: PostModel | null;
  userId: string | null;
  commentId: string | null;
  comment: CommentModel | null;
  publishedAt:   Date;

}

export type ReactionModel = {
  id: string;
  reactionName: string
  userId: string
  postId: string | null;
  post: PostModel | null;
  commentId: string | null;
  comment: CommentModel | null;
  createdAt: Date;
}