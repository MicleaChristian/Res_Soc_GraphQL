import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../types.js";
import {getUser} from '../../modules/auth.js'
import { Token } from "graphql";

export const createPost: MutationResolvers['createPost'] = async (_, {title, content, authorId,token}, context) => {
    try {
      const authenticatedUser = getUser(token);
      if(!authenticatedUser){
        return {
          code: 401,
          message: "User not signed in",
          success:false,
          post: null
      }
      }
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
        if (error instanceof PrismaClientKnownRequestError) {
            return {
                code: 401,
                message: error.message,
                success:false,
                post: null
            }
        }
        return {
            code: 400,
            message: (error as Error).message,
            success: false,
            post: null
        }
    }
  };