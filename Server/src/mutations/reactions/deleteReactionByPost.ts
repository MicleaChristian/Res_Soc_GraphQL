import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../types.js";
import {getUser} from '../../modules/auth.js'

export const deleteReactionByPost : MutationResolvers['deleteReactionByPost'] = async (_, {id, token}, context) => {
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

    const reaction = await context.dataSources.db.reactionForPost.findUnique({
        where: {
            id
        },
        select: {
            userId: true,
        }
    })

    if (reaction?.userId != context.user?.id) {
        return {
            code: 403,
            message: "User is not the author of the Reaction",
            success: false
        }
    }

    const deletedReaction = await context.dataSources.db.reactionForPost.delete({
        where: {
        id,
    }
    })

      return {
        code: 200,
        message: "Reaction deleted",
        success: true,
        reaction: deletedReaction
      }
    } catch(error) {
        if (error instanceof PrismaClientKnownRequestError) {
            return {
                code: 401,
                message: error.message,
                success: false,
                reaction: null
            }
        }
        return {
            code: 400,
            message: (error as Error).message,
            success: false,
            reaction: null
        }
    }
  };