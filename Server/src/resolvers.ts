import { DataSourceContext } from "./context.js";
import { signIn } from "./mutations/signIn.js";
import { createUser } from "./mutations/users/createUser.js";
import { createPost } from "./mutations/posts/posts.js";
import { createComment } from "./mutations/comments/comments.js";
import { Resolvers } from "./types.js";
import { GraphQLError } from "graphql";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


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
    getUsers: async (_, __, {dataSources}) => {
      const logzz = await dataSources.db.user.findMany();
      
      return {
        code: 201,
        message: 'All users successfuly returned',
        success: true,
        users: logzz
      }
        
    },
    getPosts: async (_, __, { dataSources }) => {
      const logzz = await dataSources.db.post.findMany();
      console.log(logzz);

      return {
        code: 201,
        message: 'All users successfuly returned',
        success: true,
        post: logzz
      }
    },
    getPostById: async (_, {id}, { dataSources }) => {
      try {
        const postById = await dataSources.db.post.findUnique({
          where: {
            id
          }
        });

        return {
          code: 201,
          message: "Post successfuly returned",
          success: true,
          post: postById
        }
      } catch(error) {
        return {
          code: 400,
          message: "Post coudn't be returned",
          success: false,
          post: null
        }
      }
    },
    // Get all comments of a post
    getCommentsByPost: async (_, {postId}, {dataSources}) => {
      try {
        const commentByPost = await dataSources.db.comment.findMany({
          where: {
            postId
          }
        });

        return {
          code: 200,
          message: "Comments successfuly returned",
          success: true,
          comment: commentByPost
        }
      } catch (error) {
        return {
          code: 400,
          message: "Comments coudn't be returned",
          success: false,
          comment: null
        }
      }
    }
  },
  Mutation: {
    createPost,
    createComment,
    createUser,
    signIn,
    createReactionForPost: async (parent, {reactionName, userId, postId}, context) => {
      try {
        const createdReaction = await context.dataSources.db.reactionForPost.create({
          data: {
            reactionName,
            userId,
            postId,
          }
        })

        return {
          code: 201,
          message: `Reaction created`,
          success: true,
          
        }
      } catch(error) {
        return {
          code: 400,
          message: 'Something bad happened',
          success: false,
          post: null
        }
      }
    },
    
   
  },
};
