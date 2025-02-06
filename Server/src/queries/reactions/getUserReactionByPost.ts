import {QueryResolvers} from '../../types.js';


export const getUserReactionByPost: QueryResolvers["getUserReactionByPost"] = async (parent, {userId, postId}, { dataSources }) =>{
    const reaction = await dataSources.db.reactionForPost.findFirstOrThrow({
        where: {
            userId: userId,
            postId: postId
        },
            
    });
    return {
        code: 200,
        message: 'user reaction successfuly returned',
        success: true,
        reaction: reaction
    }
}