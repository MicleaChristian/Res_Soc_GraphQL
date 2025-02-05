
export type UserModel = {
  id: string;
  email: string;
  password: string;
  photo: ImageModel[];
  post:     PostModel[];
  comment:  CommentModel[];
};

export type PostModel = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  author: UserModel;
  photo: ImageModel[];
  comments: CommentModel[];
  publishedAt: Date; 
};

export type CommentModel = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  author: UserModel;
  postId: string;
  post: PostModel;
  photo: ImageModel[];
  publishedAt:   Date;
};

export type ImageModel = {
  id: string;
  url: string;
  postId: string | null;
  post: PostModel | null;
  userId: string | null;
  user: UserModel | null;
  commentId: string | null;
  comment: CommentModel | null;
  publishedAt:   Date;

}