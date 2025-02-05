import { createUser } from "./mutations/users/createUser.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    getPosts: (_, __, { dataSources }) => {
      return dataSources.RavenAPIS.getPosts();
    },
  },
  Mutation: {
    createUser,
  },
};
