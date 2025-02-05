import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
import { GhibliAPI } from './datasources/GhibliAPI.js';
import { TrackAPI } from './datasources/TrackAPI.js';
import {getUser } from './modules/auth.js';
import db from './datasources/db.js';

const server = new ApolloServer({
  typeDefs,
  resolvers
});
 
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({req}) => {
    const authorization = (req.headers.authorization)?.split('Bearer ')?.[1]
    const user = authorization ? getUser(authorization) : null;
    const {cache} = server
    return {
      dataSources: {
        ghibliAPI: new GhibliAPI({cache}),
        trackAPI: new TrackAPI({cache}),
        db
      },
      user
    }
  }
});
 
console.log(`🚀  Server ready at: ${url}`);