import { GraphQLError,GraphQLScalarType, Kind } from "graphql";
import { Resolvers } from "./types.js";
import {createUser} from './mutations/users/createUser.js'


export const resolvers: Resolvers = {
  Query: {
    getPosts: async (_,__, context) => {
      try {
        const getPosts = await context.dataSources.db.post.findMany();

        return {
          code: 200,
          message: "Posts successfuly fetch",
          succes: true
        }
      } catch {
        return {
          code: 400,
          message: "Couldn't get posts",
          success: false
        }
      }
    },
  },
  Mutation:{
    createUser,
  }
}