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
import {createReactionForComment} from "./mutations/reactions/createReactionForComment.js";
import {createImageForPost} from "./mutations/images/imagePosts/createImageForPost.js";
import {createImageForComment} from "./mutations/images/imageComments/createImageForComment.js";
import {getUserReactionByPost} from "./queries/reactions/getUserReactionByPost.js"
import {getUserReactionForAllCommentsInAPost} from "./queries/reactions/getUserReactionForAllCommentsInAPost.js"

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
    getCommentsByPost,
    getUserReactionByPost,
    getUserReactionForAllCommentsInAPost
  },
  Mutation: {
    createPost,
    createComment,
    createUser,
    signIn,
    createReactionForPost,
    createReactionForComment,
    createImageForPost,
    createImageForComment
  },
};
