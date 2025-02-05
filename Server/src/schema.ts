import gql from "graphql-tag";
 
export const typeDefs = gql`
  type Query {
    getPeople: [People]!
    getFilms: [Film]!
  }
  type Mutation{
    incrementNumberOfLikes(id: ID!) : incrementNumberOfLikesResponse!
    createUser(username: String!, password: String!): CreateUserResponse
    
  }

  type incrementNumberOfLikesResponse {
  code: Int!
  success: Boolean!
  message: String!
  track: Track
  }

  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
 
  type User {
    id: ID!
    username: String!
  }
 
  type Film {
    id: ID
    title: String
    people: [People]
  }
  
  type People {
    id: ID
    name : String
    eyeColor: String
    films: [Film]
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    numberOfViews: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String!
  }
  
`;

