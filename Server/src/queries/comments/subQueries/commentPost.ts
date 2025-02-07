import { CommentResolvers } from "../../../types.js";

export const post: CommentResolvers["post"] = async (parent, _, { dataSources }) => {
    return dataSources.db.post.findUniqueOrThrow({
      where: {
        id: parent.postId,
      },
    });
  }