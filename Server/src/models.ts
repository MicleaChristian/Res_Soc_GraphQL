export type PostModel = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
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
  commentId: string | null;
  comment: CommentModel | null;
  publishedAt:   Date;

}