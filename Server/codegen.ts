import {CodegenConfig} from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: './context#DataSourceContext',
        mappers: {
          Reaction: './models#ReactionModel',
          Post: './models#PostModel',
          Comment: './models#CommentModel',
          Image: './models#ImageModel',
        }
      }
    }
  }
}
 
export default config