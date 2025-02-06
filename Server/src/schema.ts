import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    add(number1: Float!, number2: Float!): Float
    substract(number1: Float!, number2: Float!): Float
    multiply(number1: Float!, number2: Float!): Float
    divide(number1: Float!, number2: Float!): Float
    getPosts: getPostsResponse
    getUsers: getUsersResponse
  }

  type getUsersResponse {
    code: Int!
    success: Boolean!
    message: String
    users: [UserClientObject]
  }

  type Mutation {
    createUser(email: String!, password: String!): CreateUserResponse
    signIn(email: String!, password: String!): SignInUserResponse
    createPost(title: String!, content: String!, authorId: ID!) : CreatePostResponse
    createComment(title: String!, content: String!, authorId: ID!, postId: ID!) : CreateCommentResponse
    createReactionForPost(reactionName: ReactionStateEnum!, userId: ID!, postId: ID!) : CreateReactionResponse
  }

  type CreateReactionResponse {
    code: Int!
    success: Boolean!
    message: String
    reaction: Reaction
  }

  type CreatePostResponse {
    code: Int!
    success: Boolean!
    message: String
    post: Post
  }

  type CreateCommentResponse {
    code: Int!
    success: Boolean!
    message: String
    comment: Comment
  }

  type CreatePostResponse {
    code: Int!
    success: Boolean!
    message: String
    post: Post
  }

  type getPostsResponse {
    code: Int!
    success: Boolean!
    message: String
    post: [Post]
  }

  type SignInUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
  }

  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: UserClientObject
  }

  type User {
    id: ID!
    email: String!
    password: String!
  }

  type UserClientObject {
    id: ID!
    email: String!
  }

type Post {
  id: ID!
  authorId: ID!
  title: String!
  content: String!
  published: Boolean!
  publishedAt: String!
  photo: String
  comments: [Comment]
}

  type Comment {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    authorId: String!
    author: User!
    postId: String!
    post: Post!
    photo: [Image]
  }

  type Image {
    id: ID!
    url: String!
    postId: String
    post: Post
    userId: String
    user: User
    commentId: String
    comment: Comment
  }

  type Reaction {
    id: ID!
    reactionName: ReactionStateEnum!
    user: User!
    userId: String!
    postId: String
    post: Post
    commentId: String
    comment: Comment
  }
  
  enum ReactionStateEnum {
    LIKE
    HEART
    LAUGH
    SMILE
    DISLIKE
  }
`;
