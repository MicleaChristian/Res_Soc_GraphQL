import { GraphQLResolveInfo } from 'graphql';
import { FilmModel, PeopleModel, TrackModel, AuthorModel } from './models';
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

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo: Scalars['String']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Film = {
  __typename?: 'Film';
  id?: Maybe<Scalars['ID']['output']>;
  people?: Maybe<Array<Maybe<People>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUserResponse>;
  incrementNumberOfLikes: IncrementNumberOfLikesResponse;
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationIncrementNumberOfLikesArgs = {
  id: Scalars['ID']['input'];
};

export type People = {
  __typename?: 'People';
  eyeColor?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getFilms: Array<Maybe<Film>>;
  getPeople: Array<Maybe<People>>;
};

export type Track = {
  __typename?: 'Track';
  author: Author;
  id: Scalars['ID']['output'];
  numberOfViews?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type IncrementNumberOfLikesResponse = {
  __typename?: 'incrementNumberOfLikesResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
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
  Author: ResolverTypeWrapper<AuthorModel>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  Film: ResolverTypeWrapper<FilmModel>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  People: ResolverTypeWrapper<PeopleModel>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<TrackModel>;
  User: ResolverTypeWrapper<User>;
  incrementNumberOfLikesResponse: ResolverTypeWrapper<Omit<IncrementNumberOfLikesResponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: AuthorModel;
  Boolean: Scalars['Boolean']['output'];
  CreateUserResponse: CreateUserResponse;
  Film: FilmModel;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  People: PeopleModel;
  Query: {};
  String: Scalars['String']['output'];
  Track: TrackModel;
  User: User;
  incrementNumberOfLikesResponse: Omit<IncrementNumberOfLikesResponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
};

export type AuthorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['People']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'password' | 'username'>>;
  incrementNumberOfLikes?: Resolver<ResolversTypes['incrementNumberOfLikesResponse'], ParentType, ContextType, RequireFields<MutationIncrementNumberOfLikesArgs, 'id'>>;
};

export type PeopleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  eyeColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getFilms?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  getPeople?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
};

export type TrackResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementNumberOfLikesResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['incrementNumberOfLikesResponse'] = ResolversParentTypes['incrementNumberOfLikesResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Author?: AuthorResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  incrementNumberOfLikesResponse?: IncrementNumberOfLikesResponseResolvers<ContextType>;
};

