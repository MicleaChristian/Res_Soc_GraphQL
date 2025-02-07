import {ReactionForPostResolvers} from '../../../types.js';


export const post: ReactionForPostResolvers["post"] = async (parent, _, { dataSources }) =>{
      return dataSources.db.post.findUniqueOrThrow({
        where: {
          id: parent.postId,
        },
      });
    }