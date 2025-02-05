
export type UserModel = {
  id: string;
  name: string;
  photo: ImageModel[];
};

export type PostModel = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  
};

export type CommentModel = {
  id: string;
  name: string;
  photo: string;
};

export type ImageModel = {
  id: string;
  url: string;
  postId: string | null;
  post: PostModel | null;
  userId: string | null;
  user: UserModel | null;
}