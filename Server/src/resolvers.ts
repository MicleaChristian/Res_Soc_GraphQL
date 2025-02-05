import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";
import {createUser} from './mutations/users/createUser.js'


export const resolvers: Resolvers = {
  Query: {
    getFilms: (_,__,{dataSources}) => {
      return dataSources.ghibliAPI.getFilms();
    },
    getPeople: (_,__,{dataSources}) => {
      const baseUrlString = "https://ghibliapi.dev/people/";
      const peopleList = dataSources.ghibliAPI.getPeople().then(
        (value) => {
          console.log(value);
          // Expected output: "Success!"
    })
      return dataSources.ghibliAPI.getPeople();
    },
  },
  Mutation:{
    incrementNumberOfLikes: async (_,{id},dataSources)=> {
      try {
        const track = await dataSources.dataSources.trackAPI.incrementNumberOfLikes(id)
        const message = `Successfully incremented number of likes for track ${id}`
  
        return {
          code: 200,
          message,
          success: true,
          track
        }
      } catch (err) {
        return {
          code: 304,
          message: (err as Error)?.message ?? 'Resource not modified, an internal error occured',
          success: false,
          track: null,
        }
      }
    },
    createUser,
  }
}