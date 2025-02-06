import { QueryResolvers } from "../../types.js";

export const getPostById : QueryResolvers['getPostById']  = async (_, {id}, { dataSources }) => {
    try {
      const postById = await dataSources.db.post.findUnique({
        where: {
          id
        }
      });

      return {
        code: 201,
        message: "Post successfuly returned",
        success: true,
        post: postById
      }
    } catch(error) {
      return {
        code: 400,
        message: "Post coudn't be returned",
        success: false,
        post: null
      }
    }
  }