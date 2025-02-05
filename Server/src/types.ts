import { GraphQLResolveInfo } from 'graphql';
import { PostModel, CommentModel, ImageModel } from './models';
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

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<UserClientObject>;
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
  createUser?: Maybe<CreateUserResponse>;
  signIn?: Maybe<SignInUserResponse>;
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
  author: User;
  authorId: Scalars['String']['output'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  photo?: Maybe<Array<Maybe<Image>>>;
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  add?: Maybe<Scalars['Float']['output']>;
  divide?: Maybe<Scalars['Float']['output']>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  multiply?: Maybe<Scalars['Float']['output']>;
  substract?: Maybe<Scalars['Float']['output']>;
};


export type QueryAddArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QueryDivideArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QueryMultiplyArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QuerySubstractArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};

export type SignInUserResponse = {
  __typename?: 'SignInUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  comment?: Maybe<Array<Maybe<Comment>>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  photo?: Maybe<Array<Maybe<Image>>>;
  post?: Maybe<Array<Maybe<Post>>>;
};

export type UserClientObject = {
  __typename?: 'UserClientObject';
  comment?: Maybe<Array<Maybe<Comment>>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  photo?: Maybe<Array<Maybe<Image>>>;
  post?: Maybe<Array<Maybe<Post>>>;
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
  CreateUserResponse: ResolverTypeWrapper<Omit<CreateUserResponse, 'user'> & { user?: Maybe<ResolversTypes['UserClientObject']> }>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Image: ResolverTypeWrapper<ImageModel>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<PostModel>;
  Query: ResolverTypeWrapper<{}>;
  SignInUserResponse: ResolverTypeWrapper<SignInUserResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<Omit<User, 'comment' | 'photo' | 'post'> & { comment?: Maybe<Array<Maybe<ResolversTypes['Comment']>>>, photo?: Maybe<Array<Maybe<ResolversTypes['Image']>>>, post?: Maybe<Array<Maybe<ResolversTypes['Post']>>> }>;
  UserClientObject: ResolverTypeWrapper<Omit<UserClientObject, 'comment' | 'photo' | 'post'> & { comment?: Maybe<Array<Maybe<ResolversTypes['Comment']>>>, photo?: Maybe<Array<Maybe<ResolversTypes['Image']>>>, post?: Maybe<Array<Maybe<ResolversTypes['Post']>>> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: CommentModel;
  CreateUserResponse: Omit<CreateUserResponse, 'user'> & { user?: Maybe<ResolversParentTypes['UserClientObject']> };
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Image: ImageModel;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Post: PostModel;
  Query: {};
  SignInUserResponse: SignInUserResponse;
  String: Scalars['String']['output'];
  User: Omit<User, 'comment' | 'photo' | 'post'> & { comment?: Maybe<Array<Maybe<ResolversParentTypes['Comment']>>>, photo?: Maybe<Array<Maybe<ResolversParentTypes['Image']>>>, post?: Maybe<Array<Maybe<ResolversParentTypes['Post']>>> };
  UserClientObject: Omit<UserClientObject, 'comment' | 'photo' | 'post'> & { comment?: Maybe<Array<Maybe<ResolversParentTypes['Comment']>>>, photo?: Maybe<Array<Maybe<ResolversParentTypes['Image']>>>, post?: Maybe<Array<Maybe<ResolversParentTypes['Post']>>> };
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

export type CreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserClientObject']>, ParentType, ContextType>;
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
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password'>>;
  signIn?: Resolver<Maybe<ResolversTypes['SignInUserResponse']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>;
};

export type PostResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  photo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  add?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryAddArgs, 'number1' | 'number2'>>;
  divide?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryDivideArgs, 'number1' | 'number2'>>;
  getPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  multiply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryMultiplyArgs, 'number1' | 'number2'>>;
  substract?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QuerySubstractArgs, 'number1' | 'number2'>>;
};

export type SignInUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SignInUserResponse'] = ResolversParentTypes['SignInUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  comment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  post?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserClientObjectResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UserClientObject'] = ResolversParentTypes['UserClientObject']> = {
  comment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  photo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  post?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Comment?: CommentResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInUserResponse?: SignInUserResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserClientObject?: UserClientObjectResolvers<ContextType>;
};

