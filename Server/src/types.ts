import { GraphQLResolveInfo } from 'graphql';
import { ReactionForPostModel, PostModel, CommentModel, ImageModel, ReactionForCommentModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  photo?: Maybe<Array<Maybe<Image>>>;
  post: Post;
  postId: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateImageForCommentResponse = {
  __typename?: 'CreateImageForCommentResponse';
  code: Scalars['Int']['output'];
  image?: Maybe<Image>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateImageForPostResponse = {
  __typename?: 'CreateImageForPostResponse';
  code: Scalars['Int']['output'];
  image?: Maybe<Image>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  code: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type CreateReactionForCommentResponse = {
  __typename?: 'CreateReactionForCommentResponse';
  code: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  reaction?: Maybe<ReactionForCommentClientResponse>;
  success: Scalars['Boolean']['output'];
};

export type CreateReactionForPostResponse = {
  __typename?: 'CreateReactionForPostResponse';
  code: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  reaction?: Maybe<ReactionForPostClientResponse>;
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<UserClientObject>;
};

export type GetUserReactionForAllCommentsInAPostResponse = {
  __typename?: 'GetUserReactionForAllCommentsInAPostResponse';
  code: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Array<Maybe<ReactionForComment>>>;
  success: Scalars['Boolean']['output'];
};

export type Image = {
  __typename?: 'Image';
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
  postId?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<CreateCommentResponse>;
  createImageForComment?: Maybe<CreateImageForCommentResponse>;
  createImageForPost?: Maybe<CreateImageForPostResponse>;
  createPost?: Maybe<CreatePostResponse>;
  createReactionForComment?: Maybe<CreateReactionForCommentResponse>;
  createReactionForPost?: Maybe<CreateReactionForPostResponse>;
  createUser?: Maybe<CreateUserResponse>;
  signIn?: Maybe<SignInUserResponse>;
};


export type MutationCreateCommentArgs = {
  authorId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
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


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['ID']['output'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  published: Scalars['Boolean']['output'];
  publishedAt: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCommentsByPost?: Maybe<GetCommentsByPostResponse>;
  getPostById?: Maybe<GetPostByIdResponse>;
  getPosts?: Maybe<GetPostsResponse>;
  getUserReactionByPost?: Maybe<GetUserReactionByPostResponse>;
  getUserReactionForAllCommentsInAPost?: Maybe<GetUserReactionForAllCommentsInAPostResponse>;
  getUsers?: Maybe<GetUsersResponse>;
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
  comment: Comment;
  commentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  reactionName: ReactionCommentStateEnum;
  user: User;
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
  post: Post;
  postId: Scalars['String']['output'];
  reactionName: ReactionPostStateEnum;
  user: User;
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
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserClientObject>;
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
  comment?: Maybe<Array<Maybe<Comment>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GetPostByIdResponse = {
  __typename?: 'getPostByIdResponse';
  code: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type GetPostsResponse = {
  __typename?: 'getPostsResponse';
  code: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Array<Maybe<Post>>>;
  success: Scalars['Boolean']['output'];
};

export type GetUserReactionByPostResponse = {
  __typename?: 'getUserReactionByPostResponse';
  code: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  reaction?: Maybe<ReactionForPostClientResponse>;
  success: Scalars['Boolean']['output'];
};

export type GetUsersResponse = {
  __typename?: 'getUsersResponse';
  code: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  users?: Maybe<Array<Maybe<UserClientObject>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<CommentModel>;
  CreateCommentResponse: ResolverTypeWrapper<Omit<CreateCommentResponse, 'comment'> & { comment?: Maybe<ResolversTypes['Comment']> }>;
  CreateImageForCommentResponse: ResolverTypeWrapper<Omit<CreateImageForCommentResponse, 'image'> & { image?: Maybe<ResolversTypes['Image']> }>;
  CreateImageForPostResponse: ResolverTypeWrapper<Omit<CreateImageForPostResponse, 'image'> & { image?: Maybe<ResolversTypes['Image']> }>;
  CreatePostResponse: ResolverTypeWrapper<Omit<CreatePostResponse, 'post'> & { post?: Maybe<ResolversTypes['Post']> }>;
  CreateReactionForCommentResponse: ResolverTypeWrapper<CreateReactionForCommentResponse>;
  CreateReactionForPostResponse: ResolverTypeWrapper<CreateReactionForPostResponse>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  GetUserReactionForAllCommentsInAPostResponse: ResolverTypeWrapper<Omit<GetUserReactionForAllCommentsInAPostResponse, 'reactions'> & { reactions?: Maybe<Array<Maybe<ResolversTypes['ReactionForComment']>>> }>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Image: ResolverTypeWrapper<ImageModel>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<PostModel>;
  Query: ResolverTypeWrapper<{}>;
  ReactionCommentStateEnum: ReactionCommentStateEnum;
  ReactionForComment: ResolverTypeWrapper<Omit<ReactionForComment, 'comment'> & { comment: ResolversTypes['Comment'] }>;
  ReactionForCommentClientResponse: ResolverTypeWrapper<ReactionForCommentClientResponse>;
  ReactionForPost: ResolverTypeWrapper<Omit<ReactionForPost, 'post'> & { post: ResolversTypes['Post'] }>;
  ReactionForPostClientResponse: ResolverTypeWrapper<ReactionForPostClientResponse>;
  ReactionPostStateEnum: ReactionPostStateEnum;
  SignInUserResponse: ResolverTypeWrapper<SignInUserResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserClientObject: ResolverTypeWrapper<UserClientObject>;
  getCommentsByPostResponse: ResolverTypeWrapper<Omit<GetCommentsByPostResponse, 'comment'> & { comment?: Maybe<Array<Maybe<ResolversTypes['Comment']>>> }>;
  getPostByIdResponse: ResolverTypeWrapper<Omit<GetPostByIdResponse, 'post'> & { post?: Maybe<ResolversTypes['Post']> }>;
  getPostsResponse: ResolverTypeWrapper<Omit<GetPostsResponse, 'post'> & { post?: Maybe<Array<Maybe<ResolversTypes['Post']>>> }>;
  getUserReactionByPostResponse: ResolverTypeWrapper<GetUserReactionByPostResponse>;
  getUsersResponse: ResolverTypeWrapper<GetUsersResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: CommentModel;
  CreateCommentResponse: Omit<CreateCommentResponse, 'comment'> & { comment?: Maybe<ResolversParentTypes['Comment']> };
  CreateImageForCommentResponse: Omit<CreateImageForCommentResponse, 'image'> & { image?: Maybe<ResolversParentTypes['Image']> };
  CreateImageForPostResponse: Omit<CreateImageForPostResponse, 'image'> & { image?: Maybe<ResolversParentTypes['Image']> };
  CreatePostResponse: Omit<CreatePostResponse, 'post'> & { post?: Maybe<ResolversParentTypes['Post']> };
  CreateReactionForCommentResponse: CreateReactionForCommentResponse;
  CreateReactionForPostResponse: CreateReactionForPostResponse;
  CreateUserResponse: CreateUserResponse;
  GetUserReactionForAllCommentsInAPostResponse: Omit<GetUserReactionForAllCommentsInAPostResponse, 'reactions'> & { reactions?: Maybe<Array<Maybe<ResolversParentTypes['ReactionForComment']>>> };
  ID: Scalars['ID']['output'];
  Image: ImageModel;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Post: PostModel;
  Query: {};
  ReactionForComment: Omit<ReactionForComment, 'comment'> & { comment: ResolversParentTypes['Comment'] };
  ReactionForCommentClientResponse: ReactionForCommentClientResponse;
  ReactionForPost: Omit<ReactionForPost, 'post'> & { post: ResolversParentTypes['Post'] };
  ReactionForPostClientResponse: ReactionForPostClientResponse;
  SignInUserResponse: SignInUserResponse;
  String: Scalars['String']['output'];
  User: User;
  UserClientObject: UserClientObject;
  getCommentsByPostResponse: Omit<GetCommentsByPostResponse, 'comment'> & { comment?: Maybe<Array<Maybe<ResolversParentTypes['Comment']>>> };
  getPostByIdResponse: Omit<GetPostByIdResponse, 'post'> & { post?: Maybe<ResolversParentTypes['Post']> };
  getPostsResponse: Omit<GetPostsResponse, 'post'> & { post?: Maybe<Array<Maybe<ResolversParentTypes['Post']>>> };
  getUserReactionByPostResponse: GetUserReactionByPostResponse;
  getUsersResponse: GetUsersResponse;
};

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  photo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateCommentResponse'] = ResolversParentTypes['CreateCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateImageForCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateImageForCommentResponse'] = ResolversParentTypes['CreateImageForCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateImageForPostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateImageForPostResponse'] = ResolversParentTypes['CreateImageForPostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreatePostResponse'] = ResolversParentTypes['CreatePostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateReactionForCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateReactionForCommentResponse'] = ResolversParentTypes['CreateReactionForCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reaction?: Resolver<Maybe<ResolversTypes['ReactionForCommentClientResponse']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateReactionForPostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateReactionForPostResponse'] = ResolversParentTypes['CreateReactionForPostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reaction?: Resolver<Maybe<ResolversTypes['ReactionForPostClientResponse']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserClientObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetUserReactionForAllCommentsInAPostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['GetUserReactionForAllCommentsInAPostResponse'] = ResolversParentTypes['GetUserReactionForAllCommentsInAPostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReactionForComment']>>>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  commentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  postId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createComment?: Resolver<Maybe<ResolversTypes['CreateCommentResponse']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'authorId' | 'content' | 'postId' | 'title' | 'token'>>;
  createImageForComment?: Resolver<Maybe<ResolversTypes['CreateImageForCommentResponse']>, ParentType, ContextType, RequireFields<MutationCreateImageForCommentArgs, 'commentId' | 'token' | 'url'>>;
  createImageForPost?: Resolver<Maybe<ResolversTypes['CreateImageForPostResponse']>, ParentType, ContextType, RequireFields<MutationCreateImageForPostArgs, 'postId' | 'token' | 'url'>>;
  createPost?: Resolver<Maybe<ResolversTypes['CreatePostResponse']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'authorId' | 'content' | 'title' | 'token'>>;
  createReactionForComment?: Resolver<Maybe<ResolversTypes['CreateReactionForCommentResponse']>, ParentType, ContextType, RequireFields<MutationCreateReactionForCommentArgs, 'commentId' | 'reactionName' | 'userId'>>;
  createReactionForPost?: Resolver<Maybe<ResolversTypes['CreateReactionForPostResponse']>, ParentType, ContextType, RequireFields<MutationCreateReactionForPostArgs, 'postId' | 'reactionName' | 'userId'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password'>>;
  signIn?: Resolver<Maybe<ResolversTypes['SignInUserResponse']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>;
};

export type PostResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  authorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  publishedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCommentsByPost?: Resolver<Maybe<ResolversTypes['getCommentsByPostResponse']>, ParentType, ContextType, RequireFields<QueryGetCommentsByPostArgs, 'postId'>>;
  getPostById?: Resolver<Maybe<ResolversTypes['getPostByIdResponse']>, ParentType, ContextType, RequireFields<QueryGetPostByIdArgs, 'id'>>;
  getPosts?: Resolver<Maybe<ResolversTypes['getPostsResponse']>, ParentType, ContextType>;
  getUserReactionByPost?: Resolver<Maybe<ResolversTypes['getUserReactionByPostResponse']>, ParentType, ContextType, RequireFields<QueryGetUserReactionByPostArgs, 'postId' | 'userId'>>;
  getUserReactionForAllCommentsInAPost?: Resolver<Maybe<ResolversTypes['GetUserReactionForAllCommentsInAPostResponse']>, ParentType, ContextType, RequireFields<QueryGetUserReactionForAllCommentsInAPostArgs, 'commentId' | 'postId' | 'userId'>>;
  getUsers?: Resolver<Maybe<ResolversTypes['getUsersResponse']>, ParentType, ContextType>;
};

export type ReactionForCommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ReactionForComment'] = ResolversParentTypes['ReactionForComment']> = {
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactionName?: Resolver<ResolversTypes['ReactionCommentStateEnum'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReactionForCommentClientResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ReactionForCommentClientResponse'] = ResolversParentTypes['ReactionForCommentClientResponse']> = {
  commentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReactionForPostResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ReactionForPost'] = ResolversParentTypes['ReactionForPost']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reactionName?: Resolver<ResolversTypes['ReactionPostStateEnum'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReactionForPostClientResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ReactionForPostClientResponse'] = ResolversParentTypes['ReactionForPostClientResponse']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reactionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SignInUserResponse'] = ResolversParentTypes['SignInUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserClientObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserClientObjectResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UserClientObject'] = ResolversParentTypes['UserClientObject']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetCommentsByPostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['getCommentsByPostResponse'] = ResolversParentTypes['getCommentsByPostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetPostByIdResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['getPostByIdResponse'] = ResolversParentTypes['getPostByIdResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetPostsResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['getPostsResponse'] = ResolversParentTypes['getPostsResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  post?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetUserReactionByPostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['getUserReactionByPostResponse'] = ResolversParentTypes['getUserReactionByPostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reaction?: Resolver<Maybe<ResolversTypes['ReactionForPostClientResponse']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetUsersResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['getUsersResponse'] = ResolversParentTypes['getUsersResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserClientObject']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Comment?: CommentResolvers<ContextType>;
  CreateCommentResponse?: CreateCommentResponseResolvers<ContextType>;
  CreateImageForCommentResponse?: CreateImageForCommentResponseResolvers<ContextType>;
  CreateImageForPostResponse?: CreateImageForPostResponseResolvers<ContextType>;
  CreatePostResponse?: CreatePostResponseResolvers<ContextType>;
  CreateReactionForCommentResponse?: CreateReactionForCommentResponseResolvers<ContextType>;
  CreateReactionForPostResponse?: CreateReactionForPostResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  GetUserReactionForAllCommentsInAPostResponse?: GetUserReactionForAllCommentsInAPostResponseResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReactionForComment?: ReactionForCommentResolvers<ContextType>;
  ReactionForCommentClientResponse?: ReactionForCommentClientResponseResolvers<ContextType>;
  ReactionForPost?: ReactionForPostResolvers<ContextType>;
  ReactionForPostClientResponse?: ReactionForPostClientResponseResolvers<ContextType>;
  SignInUserResponse?: SignInUserResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserClientObject?: UserClientObjectResolvers<ContextType>;
  getCommentsByPostResponse?: GetCommentsByPostResponseResolvers<ContextType>;
  getPostByIdResponse?: GetPostByIdResponseResolvers<ContextType>;
  getPostsResponse?: GetPostsResponseResolvers<ContextType>;
  getUserReactionByPostResponse?: GetUserReactionByPostResponseResolvers<ContextType>;
  getUsersResponse?: GetUsersResponseResolvers<ContextType>;
};

