import { GraphQLError,GraphQLScalarType, Kind } from "graphql";
import { Resolvers } from "./types.js";
import {createUser} from './mutations/users/createUser.js'
import { signIn } from "./mutations/signIn.js";


export const resolvers: Resolvers = {
  Query:{
    
  },
  Mutation:{
    createUser,
    signIn
  }
  
}