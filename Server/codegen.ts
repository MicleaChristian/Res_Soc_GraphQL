import {CodegenConfig} from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: './context#DataSourceContext',
        mappers: {
          ReactionForPostModel: './models#ReactionForPostModel',
          Post: './models#PostModel',
          Comment: './models#CommentModel',
          Image: './models#ImageModel',
          ReactionForCommentModel: './models#ReactionForCommentModel',
        }
      }
    }
  }
}
 
export default config