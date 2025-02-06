import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../../types.js";

export const createImageForPost: MutationResolvers['createImageForPost'] = async (_, {url, postId}, context) => {
    try {
      const createdComment = await context.dataSources.db.image.create({
        data: {
          url,
          postId
        }
      })

      return {
        code: 201,
        message: `image created`,
        success: true,
        comment: {
          id: createdComment.id,
          url: createdComment.url,
          postId: createdComment.postId
        }
      }
    } catch(error) {
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
            message: (error as Error).message,
            success: false,
            comment: null
        }
    }
  };