import { QueryResolvers } from "../../types.js";

export const getPosts : QueryResolvers['getPosts']  = async (_, __, { dataSources }) => {
    const logzz = await dataSources.db.post.findMany();
    console.log(logzz);

    return {
      code: 201,
      message: 'All users successfuly returned',
      success: true,
      post: logzz
    }
  }