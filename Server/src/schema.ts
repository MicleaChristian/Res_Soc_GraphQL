import gql from "graphql-tag";
 
export const typeDefs = gql`

  type Query {
    add(number1: Float!, number2: Float!): Float
    substract(number1: Float!, number2: Float!): Float
    multiply(number1: Float!, number2: Float!): Float
    divide(number1: Float!, number2: Float!): Float
  }

  type Mutation {
    createUser(email: String!, password: String!): CreateUserResponse
    signIn(email: String!, password: String!): SignInUserResponse
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
    photo: [Image]
    post:  [Post]
    comment:  [Comment]
  }

  type UserClientObject {
    id: ID!
    email: String!
    photo: [Image]
    post:  [Post]
    comment:  [Comment]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    authorId: String!
    author: User!
    photo: [Image]
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
  
`;

