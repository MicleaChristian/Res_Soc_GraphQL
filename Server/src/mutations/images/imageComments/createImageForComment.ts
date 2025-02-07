import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../../types.js";
import {getUser} from '../../../modules/auth.js'


export const createImageForComment: MutationResolvers['createImageForComment'] = async (_, {url, commentId, token}, context) => {
    try {
        
        const authenticatedUser = getUser(token);
            if(!authenticatedUser){
                return {
                code: 401,
                message: "User not signed in",
                success:false,
                image: null
            }
        }
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