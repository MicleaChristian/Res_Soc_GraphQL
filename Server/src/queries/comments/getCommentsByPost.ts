import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { QueryResolvers } from "../../types.js";

export const getCommentsByPost: QueryResolvers['getCommentsByPost'] = async (_, {postId}, {dataSources}) => {
    try {
      const commentByPost = await dataSources.db.comment.findMany({
        where: {
          postId
        }
      });

      return {
        code: 200,
        message: "Comments successfuly returned",
        success: true,
        comment: commentByPost
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        return {
          code: 401,
          message: error.message,
          success: false,
          comment: null
        }
      }
      return {
        code: 400,
        message: "Comments coudn't be returned",
        success: false,
        comment: null
      }
    }
  }