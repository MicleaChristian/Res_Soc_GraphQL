import { QueryResolvers } from "../../types.js";

export const getUsers: QueryResolvers["getUsers"] = async (
  _,
  __,
  { dataSources }
) => {
  const users = await dataSources.db.user.findMany();

  return {
    code: 201,
    message: "All users successfuly returned",
    success: true,
    users: users,
  };
};
