import { MutationResolvers } from "../../types.js";

export const createReactionForComment: MutationResolvers['createReactionForComment'] = async (parent, {reactionName, userId, commentId}, context) => {
    try {
      const createdReaction = await context.dataSources.db.reactionForComment.create({
        data: {
          reactionName,
          userId,
          commentId,
        }
      })

      return {
        code: 201,
        message: `Reaction created`,
        success: true,
        
      }
    } catch(error) {
      return {
        code: 400,
        message: 'Something bad happened',
        success: false,
        post: null
      }
    }
  }