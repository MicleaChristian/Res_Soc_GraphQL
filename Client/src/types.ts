export type Comment = {
  id: string;
  title: string;
  postId: string;
  authorId: string;
  content: string;
  published: boolean;
  publishedAt: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  publishedAt: string;
  photo: string;
  comments: Comment[];
};