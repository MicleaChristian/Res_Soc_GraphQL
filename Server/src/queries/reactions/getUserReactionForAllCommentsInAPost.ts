import {QueryResolvers} from '../../types.js';


export const getUserReactionForAllCommentsInAPost: QueryResolvers["getUserReactionForAllCommentsInAPost"] = async (parent, {userId, commentId, postId}, { dataSources }) =>{
    const reaction = await dataSources.db.reactionForComment.findFirstOrThrow({
        where: {
            userId: userId,
            commentId: commentId
        },
            
    });
    return {
        code: 200,
        message: 'user reaction successfuly returned',
        success: true,
        reaction: reaction
    }
}