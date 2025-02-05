import { createUser } from "./mutations/users/createUser.js";
import { QueryResolvers, Resolvers } from "./types.js";
import { signIn } from "./mutations/signIn.js";
import { DataSourceContext } from "./context.js";


export const resolvers: Resolvers = {
  Query: {
    getPosts: async (_, __, context) => {
      try {
        const posts = await context.dataSources.db.post.findMany({
          include: {
            photo: {
              include: {
                post: true,
                comment: true,
              }
            },
            comments: true,
          },
        });
  
        return {
          code: 200,
          success: true,
          message: "Posts fetched successfully",
          post: posts,
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: "Error",
          post: [],
        };
      }
    }
  },
  Mutation: {
    createUser,
    signIn
  }
  
}