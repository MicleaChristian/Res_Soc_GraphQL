/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  photo: Maybe<Array<Maybe<Image>>>;
  post: Post;
  postId: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  publishedAt: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  code: Scalars['Int']['output'];
  comment: Maybe<Comment>;
  message: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateImageForCommentResponse = {
  __typename?: 'CreateImageForCommentResponse';
  code: Scalars['Int']['output'];
  image: Maybe<Image>;
  message: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateImageForPostResponse = {
  __typename?: 'CreateImageForPostResponse';
  code: Scalars['Int']['output'];
  image: Maybe<Image>;
  message: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  code: Scalars['Int']['output'];
  message: Maybe<Scalars['String']['output']>;
  post: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type CreateReactionForCommentResponse = {
  __typename?: 'CreateReactionForCommentResponse';
  code: Scalars['Int']['output'];
  message: Maybe<Scalars['String']['output']>;
  reaction: Maybe<ReactionForCommentClientResponse>;
  success: Scalars['Boolean']['output'];
};

export type CreateReactionForPostResponse = {
  __typename?: 'CreateReactionForPostResponse';
  code: Scalars['Int']['output'];
  message: Maybe<Scalars['String']['output']>;
  reaction: Maybe<ReactionForPostClientResponse>;
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user: Maybe<UserClientObject>;
};

export type DeleteCommentResponse = {
  __typename?: 'DeleteCommentResponse';
  code: Scalars['Int']['output'];
  comment: Maybe<Comment>;
  message: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GetUserReactionForAllCommentsInAPostResponse = {
  __typename?: 'GetUserReactionForAllCommentsInAPostResponse';
  code: Scalars['Int']['output'];
  message: Maybe<Scalars['String']['output']>;
  reactions: Maybe<Array<Maybe<ReactionForComment>>>;
  success: Scalars['Boolean']['output'];
};

export type Image = {
  __typename?: 'Image';
  comment: Maybe<Comment>;
  commentId: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  post: Maybe<Post>;
  postId: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  user: Maybe<User>;
  userId: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Maybe<CreateCommentResponse>;
  createImageForComment: Maybe<CreateImageForCommentResponse>;
  createImageForPost: Maybe<CreateImageForPostResponse>;
  createPost: Maybe<CreatePostResponse>;
  createReactionForComment: Maybe<CreateReactionForCommentResponse>;
  createReactionForPost: Maybe<CreateReactionForPostResponse>;
  createUser: Maybe<CreateUserResponse>;
  deleteComment: Maybe<DeleteCommentResponse>;
  signIn: Maybe<SignInUserResponse>;
};


export type MutationCreateCommentArgs = {
  authorId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
  published: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateImageForCommentArgs = {
  commentId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationCreateImageForPostArgs = {
  postId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  authorId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  photo: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateReactionForCommentArgs = {
  commentId: Scalars['ID']['input'];
  reactionName: ReactionPostStateEnum;
  userId: Scalars['ID']['input'];
};


export type MutationCreateReactionForPostArgs = {
  postId: Scalars['ID']['input'];
  reactionName: ReactionPostStateEnum;
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['ID']['output'];
  comments: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  photo: Maybe<Array<Maybe<Image>>>;
  published: Scalars['Boolean']['output'];
  publishedAt: Scalars['String']['output'];
  reactions: Maybe<Array<Maybe<ReactionForPost>>>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCommentsByPost: Maybe<GetCommentsByPostResponse>;
  getPostById: Maybe<GetPostByIdResponse>;
  getPosts: Maybe<GetPostsResponse>;
  getUserReactionByPost: Maybe<GetUserReactionByPostResponse>;
  getUserReactionForAllCommentsInAPost: Maybe<GetUserReactionForAllCommentsInAPostResponse>;
  getUsers: Maybe<GetUsersResponse>;
};


export type QueryGetCommentsByPostArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserReactionByPostArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetUserReactionForAllCommentsInAPostArgs = {
  commentId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export enum ReactionCommentStateEnum {
  Dislike = 'DISLIKE',
  Heart = 'HEART',
  Laugh = 'LAUGH',
  Like = 'LIKE',
  Smile = 'SMILE'
}

export type ReactionForComment = {
  __typename?: 'ReactionForComment';
  commentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  reactionName: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ReactionForCommentClientResponse = {
  __typename?: 'ReactionForCommentClientResponse';
  commentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  reactionName: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ReactionForPost = {
  __typename?: 'ReactionForPost';
  id: Scalars['ID']['output'];
  postId: Scalars['String']['output'];
  reactionName: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ReactionForPostClientResponse = {
  __typename?: 'ReactionForPostClientResponse';
  id: Scalars['ID']['output'];
  postId: Scalars['String']['output'];
  reactionName: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export enum ReactionPostStateEnum {
  Dislike = 'DISLIKE',
  Heart = 'HEART',
  Laugh = 'LAUGH',
  Like = 'LIKE',
  Smile = 'SMILE'
}

export type SignInUserResponse = {
  __typename?: 'SignInUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token: Maybe<Scalars['String']['output']>;
  user: Maybe<UserClientObject>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
};

export type UserClientObject = {
  __typename?: 'UserClientObject';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type GetCommentsByPostResponse = {
  __typename?: 'getCommentsByPostResponse';
  code: Scalars['Int']['output'];
  comment: Maybe<Array<Maybe<Comment>>>;
  message: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GetPostByIdResponse = {
  __typename?: 'getPostByIdResponse';
  code: Scalars['Int']['output'];
  message: Maybe<Scalars['String']['output']>;
  post: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type GetPostsResponse = {
  __typename?: 'getPostsResponse';
  code: Scalars['Int']['output'];
  message: Maybe<Scalars['String']['output']>;
  post: Maybe<Array<Maybe<Post>>>;
  success: Scalars['Boolean']['output'];
};

export type GetUserReactionByPostResponse = {
  __typename?: 'getUserReactionByPostResponse';
  code: Scalars['Int']['output'];
  message: Maybe<Scalars['String']['output']>;
  reaction: Maybe<ReactionForPostClientResponse>;
  success: Scalars['Boolean']['output'];
};

export type GetUsersResponse = {
  __typename?: 'getUsersResponse';
  code: Scalars['Int']['output'];
  message: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  users: Maybe<Array<Maybe<UserClientObject>>>;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', getPosts: { __typename?: 'getPostsResponse', code: number, message: string | null, post: Array<{ __typename?: 'Post', authorId: string, id: string, content: string, published: boolean, publishedAt: string, title: string, photo: Array<{ __typename?: 'Image', id: string, url: string } | null> | null, reactions: Array<{ __typename?: 'ReactionForPost', id: string, reactionName: string } | null> | null, comments: Array<{ __typename?: 'Comment', id: string, published: boolean, title: string, publishedAt: string | null, content: string } | null> | null } | null> | null } | null };

export type CreateCommentMutationVariables = Exact<{
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
  authorId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
  published: Scalars['Boolean']['input'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'CreateCommentResponse', code: number, success: boolean, message: string | null, comment: { __typename?: 'Comment', authorId: string, content: string, id: string, published: boolean, postId: string } | null } | null };


export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reactionName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"published"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"published"},"value":{"kind":"Variable","name":{"kind":"Name","value":"published"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;