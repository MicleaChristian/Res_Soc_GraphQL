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

export type UserModel = {
  id: string;
  email: string;
  password: string;
  photo: ImageModel[];
  post: PostModel[];
  comment: CommentModel[];
};