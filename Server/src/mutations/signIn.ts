import { comparePasswords, createJWT } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const signIn: MutationResolvers['signIn'] = async (_, {email, password}, {dataSources}) => {
  try {
    const user = await dataSources.db.user.findFirstOrThrow({where: {email}})
    const isValidPassword = comparePasswords(password, user.password)
  
    if (!isValidPassword) {
      throw new Error('Invalid password')
    }
  
    const token = createJWT(user)
  
    return {
      code: 200,
      message: 'User is signed in',
      success: true,
      user: {
        id: user.id,
        email: user.email
      },
      token,
    }
  } catch {
    return {
      code: 401,
      message: 'bah non',
      success: false,
      token: null
    }
  }
}