import { DataSourceContext } from "./context.js";
import { signIn } from "./mutations/signIn.js";
import { createUser } from "./mutations/users/createUser.js";
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
  Comment: {
    post: async (parent, _, { dataSources }: DataSourceContext) => {
      return dataSources.db.post.findUniqueOrThrow({
        where: {
          id: parent.postId,
        },
      });
    },
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
    }
  },
  Mutation: {
    createPost: async (_, {title, content, authorId}, context) => {
      try {
        const createdPost = await context.dataSources.db.post.create({
          data: {
            title,
            content,
            authorId
          }
        })

        return {
          code: 201,
          message: `Post created`,
          success: true,
          post: {
            id: createdPost.id,
            title: createdPost.title,
            content: createdPost.content,
            published: true,
            publishedAt: createdPost.publishedAt,
            authorId: createdPost.authorId
          }
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
    createComment: async (_, {title, content, authorId, postId}, context) => {
      try {
        const createdComment = await context.dataSources.db.comment.create({
          data: {
            title,
            content,
            authorId,
            postId
          }
        })

        return {
          code: 201,
          message: `Comment created`,
          success: true,
          comment: {
            id: createdComment.id,
            title: createdComment.title,
            content: createdComment.content,
            published: true,
            publishedAt: createdComment.publishedAt,
            authorId: createdComment.authorId,
            postId: createdComment.postId
          }
        }
      } catch(error) {
        return {
          code: 400,
          message: 'Comment not published',
          success: false,
          comment: null
        }
      }
    },
    createUser,
    signIn,
   
  },
};
