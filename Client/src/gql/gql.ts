/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n      query GetPosts {\n        getPosts {\n          code\n          message\n          post {\n            authorId\n            id\n            content\n            published\n            publishedAt\n            title\n            photo {\n              id\n              url\n            }\n            reactions {\n              id\n              reactionName\n            }\n            comments {\n              id\n              published\n              title\n              publishedAt\n              content\n            }\n          }\n        }\n      }\n    ": typeof types.GetPostsDocument,
    "\n      mutation createComment($title: String!, $content: String!, $authorId: ID!, $postId: ID!,$token: String!, $published: Boolean!) {\n        createComment(title:$title , content: $content, authorId : $authorId, postId : $postId, token: $token , published: $published){\n            code\n            success\n            message\n            comment {\n              authorId\n              content\n              id\n              published\n              postId\n            }\n          }\n        }\n    ": typeof types.CreateCommentDocument,
};
const documents: Documents = {
    "\n      query GetPosts {\n        getPosts {\n          code\n          message\n          post {\n            authorId\n            id\n            content\n            published\n            publishedAt\n            title\n            photo {\n              id\n              url\n            }\n            reactions {\n              id\n              reactionName\n            }\n            comments {\n              id\n              published\n              title\n              publishedAt\n              content\n            }\n          }\n        }\n      }\n    ": types.GetPostsDocument,
    "\n      mutation createComment($title: String!, $content: String!, $authorId: ID!, $postId: ID!,$token: String!, $published: Boolean!) {\n        createComment(title:$title , content: $content, authorId : $authorId, postId : $postId, token: $token , published: $published){\n            code\n            success\n            message\n            comment {\n              authorId\n              content\n              id\n              published\n              postId\n            }\n          }\n        }\n    ": types.CreateCommentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetPosts {\n        getPosts {\n          code\n          message\n          post {\n            authorId\n            id\n            content\n            published\n            publishedAt\n            title\n            photo {\n              id\n              url\n            }\n            reactions {\n              id\n              reactionName\n            }\n            comments {\n              id\n              published\n              title\n              publishedAt\n              content\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetPosts {\n        getPosts {\n          code\n          message\n          post {\n            authorId\n            id\n            content\n            published\n            publishedAt\n            title\n            photo {\n              id\n              url\n            }\n            reactions {\n              id\n              reactionName\n            }\n            comments {\n              id\n              published\n              title\n              publishedAt\n              content\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation createComment($title: String!, $content: String!, $authorId: ID!, $postId: ID!,$token: String!, $published: Boolean!) {\n        createComment(title:$title , content: $content, authorId : $authorId, postId : $postId, token: $token , published: $published){\n            code\n            success\n            message\n            comment {\n              authorId\n              content\n              id\n              published\n              postId\n            }\n          }\n        }\n    "): (typeof documents)["\n      mutation createComment($title: String!, $content: String!, $authorId: ID!, $postId: ID!,$token: String!, $published: Boolean!) {\n        createComment(title:$title , content: $content, authorId : $authorId, postId : $postId, token: $token , published: $published){\n            code\n            success\n            message\n            comment {\n              authorId\n              content\n              id\n              published\n              postId\n            }\n          }\n        }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;