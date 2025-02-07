import { PostResolvers } from "../../../types.js";

export const comments : PostResolvers["comments"] =  async (parent, _, { dataSources }) => {
      return dataSources.db.comment.findMany({
        where: {
          postId: parent.id,
        },
      });
}