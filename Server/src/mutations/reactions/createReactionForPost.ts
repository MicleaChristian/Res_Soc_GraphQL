import { MutationResolvers } from "../../types.js";

export const createReactionForPost: MutationResolvers['createReactionForPost'] = async (parent, {reactionName, userId, postId}, context) => {
    try {
      
      const createdReaction = await context.dataSources.db.reactionForPost.create({
        data: {
          reactionName,
          userId,
          postId,
        }
      })

      return {
        code: 201,
        message: `Reaction created`,
        success: true,
        reaction:{
          id: createdReaction.id, 
          postId: createdReaction.postId, 
          reactionName: createdReaction.reactionName, 
          userId: createdReaction.userId
        }
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