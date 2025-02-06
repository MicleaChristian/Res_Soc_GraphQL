import { DataSourceContext } from "./context.js";
import { signIn } from "./mutations/signIn.js";
import { createUser } from "./mutations/users/createUser.js";
import { createPost } from "./mutations/posts/createPost.js";
import { createReactionForPost } from "./mutations/reactions/createReactionForPost.js";
import { getUsers } from "./queries/users/getUsers.js";
import { getPostById } from "./queries/posts/getPostById.js";
import { getPosts } from "./queries/posts/getPosts.js";
import { getCommentsByPost } from "./queries/comments/getCommentsByPost.js";
import { createComment } from "./mutations/comments/createdComment.js";
import { Resolvers } from "./types.js";


export const resolvers: Resolvers = {
  Post: {
    comments: async (parent, _, { dataSources }: DataSourceContext) => {
      return dataSources.db.comment.findMany({
        where: {
          postId: parent.id,
        },
      });
    },
  },
  // find the post that 
  Comment: {
    post: async (parent, _, { dataSources }: DataSourceContext) => {
      return dataSources.db.post.findUniqueOrThrow({
        where: {
          id: parent.postId,
        },
      });
    },
  },
  ReactionForPost: {
    post: async (parent, _, { dataSources }: DataSourceContext) =>{
      return dataSources.db.post.findUniqueOrThrow({
        where: {
          id: parent.postId,
        },
      });
    }
  },
  Query: {
    // promise getPosts find many post
    getUsers,
    getPosts,
    getPostById,
    // Get all comments of a post
    getCommentsByPost
  },
  Mutation: {
    createPost,
    createComment,
    createUser,
    signIn,
    createReactionForPost
   
  },
};
