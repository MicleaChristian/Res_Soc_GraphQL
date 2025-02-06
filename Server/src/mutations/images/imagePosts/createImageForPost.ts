import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../../types.js";

export const createImageForPost: MutationResolvers['createImageForPost'] = async (_, {url, postId}, context) => {
    try {
      const createdImage = await context.dataSources.db.image.create({
        data: {
          url,
          postId
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
          postId: createdImage.postId,
          commentId: null,
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