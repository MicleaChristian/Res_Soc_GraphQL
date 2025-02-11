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
import { deleteComment } from "./mutations/comments/deleteComment.js";
import { Resolvers } from "./types.js";
import {comments} from "./queries/posts/subQuerries/postComment.js";
import {post} from "./queries/comments/subQueries/commentPost.js";
import {reactions as reactionPost} from "./queries/posts/subQuerries/reactionPost.js";
import {createReactionForComment} from "./mutations/reactions/createReactionForComment.js";
import { deleteReactionByPost } from "./mutations/reactions/deleteReactionByPost.js";
import {createImageForPost} from "./mutations/images/imagePosts/createImageForPost.js";
import {createImageForComment} from "./mutations/images/imageComments/createImageForComment.js";
import {getUserReactionByPost} from "./queries/reactions/getUserReactionByPost.js"
import {getUserReactionForAllCommentsInAPost} from "./queries/reactions/getUserReactionForAllCommentsInAPost.js"
import {photo} from './queries/posts/subQuerries/imagePost.js'

export const resolvers: Resolvers = {
  Post: {
    comments,
    reactions:reactionPost,
    photo
  },
  // find the post that 
  Comment: {
    post
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
    createImageForComment,
    deleteComment,
    deleteReactionByPost,
  },
};
