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
import {comments} from "./queries/posts/subQuerries/postComment.js";
import {post} from "./queries/comments/subQueries/commentPost.js";
import {post as reactionPost} from "./queries/reactions/subQueries/reactionPost.js";


export const resolvers: Resolvers = {
  Post: {
    comments,
  },
  // find the post that 
  Comment: {
    post
  },
  ReactionForPost: {
    post: reactionPost,
  },
  Query: {
    getUsers,
    // promise getPosts find many post
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
