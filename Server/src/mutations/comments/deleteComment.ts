import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../types.js";
import {getUser} from '../../modules/auth.js'

export const deleteComment: MutationResolvers['deleteComment'] = async (_, {id, token}, context) => {
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

    const comment = await context.dataSources.db.comment.findUnique({
        where: {
            id
        },
        select: {
            authorId: true,
        }
    })

    if (comment?.authorId != context.user?.id) {
        return {
            code: 403,
            message: "User is not the author of the comment",
            success: false
        }
    }

    const deletedComment = await context.dataSources.db.comment.delete({
        where: {
        id,
    }
    })

      return {
        code: 200,
        message: "Comment deleted",
        success: true,
        comment: deletedComment
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