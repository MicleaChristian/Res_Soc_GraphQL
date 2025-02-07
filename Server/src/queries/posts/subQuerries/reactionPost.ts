import {PostResolvers} from '../../../types.js';


export const reactions : PostResolvers["reactions"] = async (parent, _, { dataSources }) =>{
      return dataSources.db.reactionForPost.findMany({
        where: {
          postId: parent.id,
        },
      });
    }