import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../types.js";

export const createComment: MutationResolvers['createComment'] = async (_, {title, content, authorId, postId}, context) => {
    try {
      const createdComment = await context.dataSources.db.comment.create({
        data: {
          title,
          content,
          authorId,
          postId
        }
      })

      return {
        code: 201,
        message: `Comment created`,
        success: true,
        comment: {
          id: createdComment.id,
          title: createdComment.title,
          content: createdComment.content,
          published: true,
          publishedAt: createdComment.publishedAt,
          authorId: createdComment.authorId,
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