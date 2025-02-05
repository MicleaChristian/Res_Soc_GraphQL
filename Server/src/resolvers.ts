import { createUser } from "./mutations/users/createUser.js";
import { QueryResolvers, Resolvers } from "./types.js";
import { signIn } from "./mutations/signIn.js";
import { DataSourceContext } from "./context.js";


export const resolvers: Resolvers = {
  Query: {
    getPosts: async (_, __, { dataSources }: DataSourceContext) => {
      return dataSources.db.post.findMany()
    },
  },
  Mutation: {
    createUser,
    signIn
  }
  
}