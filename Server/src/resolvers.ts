import { DataSourceContext } from "./context.js";
import { signIn } from "./mutations/signIn.js";
import { createUser } from "./mutations/users/createUser.js";
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
    getPosts: async (_, __, { dataSources }: DataSourceContext) => {
      const logzz = dataSources.db.post.findMany();
      console.log(logzz);

      return logzz;
    },
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
    createUser,
    signIn,
  },
};
