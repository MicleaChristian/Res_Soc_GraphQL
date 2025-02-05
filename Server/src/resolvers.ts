import { GraphQLError,GraphQLScalarType, Kind } from "graphql";
import { Resolvers } from "./types.js";
import {createUser} from './mutations/users/createUser.js'


export const resolvers: Resolvers = {
  Query: {
    getPosts: (_, __, {dataSources}) => {
      return dataSources.RavenAPIS.getPosts();
    }
  },
  Mutation:{
    createUser,
  }
}