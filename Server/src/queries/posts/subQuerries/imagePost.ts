import {PostResolvers} from '../../../types.js';


export const photo : PostResolvers["photo"] = async (parent, _, { dataSources }) =>{
      return dataSources.db.image.findMany({
        where: {
          postId: parent.id,
        },
      });
    }