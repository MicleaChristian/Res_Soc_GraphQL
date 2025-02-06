import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../../types.js";

export const createImageForComment: MutationResolvers['createImageForComment'] = async (_, {url, commentId}, context) => {
    try {
      const createdImage = await context.dataSources.db.image.create({
        data: {
          url,
          commentId
        }
      })

      return {
        code: 201,
        message: `image created`,
        success: true,
        image: {
          id: createdImage.id,
          url: createdImage.url,
          userId: createdImage.userId,
          postId: null,
          commentId: createdImage.commentId,
          publishedAt: createdImage.publishedAt
        }
      }
    } catch(error) {
        if (error instanceof PrismaClientKnownRequestError) {
            return {
                code: 401,
                message: error.message,
                success: false,
                image: null
            }
        }
        return {
            code: 400,
            message: (error as Error).message,
            success: false,
            image: null
        }
    }
  };