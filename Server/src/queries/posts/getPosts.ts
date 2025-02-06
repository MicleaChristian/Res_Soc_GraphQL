import { QueryResolvers } from "../../types.js";

export const getPosts : QueryResolvers['getPosts']  = async (_, __, { dataSources }) => {
    const posts = await dataSources.db.post.findMany();

    return {
      code: 201,
      message: 'All posts successfuly returned',
      success: true,
      post: posts
    }
  }