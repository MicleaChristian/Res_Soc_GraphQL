import gql from "graphql-tag";
 
export const typeDefs = gql`
  type Query {
      getPosts: [Post]!
      getComments: [Comment]!
    }

  type Mutation{
    createUser(username: String!, password: String!): CreateUserResponse
    createPost(title: String!, content: String!, authorId: ID!) : CreatePostResponse
    createComment(title: String!, content: String!, authorId: ID!, postId: ID!) : CreateCommentResponse
  }
  

  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }

  type CreatePostResponse {
    code: Int!
    success: Boolean!
    message: String!
    post: Post
  }

  type CreateCommentResponse {
    code: Int!
    success: Boolean!
    message: String!
    comment: Comment
  }
 
  type User {
    id: ID!
    email: String!
    password: String!
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

