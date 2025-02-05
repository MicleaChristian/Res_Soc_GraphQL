import { DataSourceContext } from "./context.js";
import { signIn } from "./mutations/signIn.js";
import { createUser } from "./mutations/users/createUser.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Post: {
    comments: async (parent, _, { dataSources }: DataSourceContext) => {
      return dataSources.db.comment.findMany({
        where: {
          postId: parent.id,
        },
      });
    },
  },
  Comment: {
    post: async (parent, _, { dataSources }: DataSourceContext) => {
      return dataSources.db.post.findUniqueOrThrow({
        where: {
          id: parent.postId,
        },
      });
    },
  },
  Query: {
    // promise getPosts find many post
    getPosts: async (_, __, { dataSources }: DataSourceContext) => {
      const logzz = dataSources.db.post.findMany();
      console.log(logzz);

      return logzz;
    },
  },
  Mutation: {
    createUser,
    signIn,
  },
};
