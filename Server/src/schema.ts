import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    getPosts: getPostsResponse
    getPostById(id: ID!): getPostByIdResponse
    getCommentsByPost(postId: ID!): getCommentsByPostResponse
    getUsers: getUsersResponse
    getUserReactionByPost(userId: ID!, postId: ID!) : getUserReactionByPostResponse
    getUserReactionForAllCommentsInAPost(userId: ID!, commentId: ID!, postId: ID!) : GetUserReactionForAllCommentsInAPostResponse
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
    createReactionForPost(reactionName: ReactionPostStateEnum!, userId: ID!, postId: ID!) : CreateReactionForPostResponse
    createReactionForComment(reactionName: ReactionPostStateEnum!, userId: ID!, commentId: ID!) : CreateReactionForCommentResponse
    createImageForPost(url: String!, postId: ID!) : CreateImageForPostResponse
    createImageForComment(url: String!, commentId: ID!) : CreateImageForCommentResponse
  }

  type GetUserReactionForAllCommentsInAPostResponse {
    code: Int!
    success: Boolean!
    message: String
    reactions: [ReactionForComment]
  }

  type getUserReactionByPostResponse {
    code: Int!
    success: Boolean!
    message: String
    reaction: ReactionForPostClientResponse
  }

  type CreateImageForCommentResponse {
    code: Int!
    success: Boolean!
    message: String
    image: Image
  }

  type CreateImageForPostResponse {
    code: Int!
    success: Boolean!
    message: String
    image: Image
  }
  
  type CreateReactionForCommentResponse {
    code: Int!
    success: Boolean!
    message: String
    reaction: ReactionForCommentClientResponse
  }
  
  type ReactionForCommentClientResponse {
    id: ID!
    reactionName: String!
    userId: String!
    commentId: String!
  }

  type CreateReactionForPostResponse {
    code: Int!
    success: Boolean!
    message: String
    reaction: ReactionForPostClientResponse
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

  type getPostByIdResponse {
    code: Int!
    success: Boolean!
    message: String
    post: Post
  }

  type getCommentsByPostResponse {
    code: Int!
    success: Boolean!
    message: String
    comment: [Comment]
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
  
  type ReactionForPostClientResponse {
    id: ID!
    reactionName: String!
    userId: String!
    postId: String!
  }

  type ReactionForPost {
    id: ID!
    reactionName: ReactionPostStateEnum!
    user: User!
    userId: String!
    postId: String!
    post: Post!
  }
  
  type ReactionForComment {
    id: ID!
    reactionName: ReactionCommentStateEnum!
    user: User!
    userId: String!
    commentId: String!
    comment: Comment!
  }

  enum ReactionCommentStateEnum {
    LIKE
    HEART
    LAUGH
    SMILE
    DISLIKE
  }
  
  enum ReactionPostStateEnum {
    LIKE
    HEART
    LAUGH
    SMILE
    DISLIKE
  }
`;
