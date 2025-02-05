import { GhibliAPI } from "./datasources/GhibliAPI.js";
import { TrackAPI } from "./datasources/TrackAPI.js";
import { AuthenticatedUser } from "./modules/auth.js";
import { PrismaClient } from "@prisma/client"

export type DataSourceContext = {
  dataSources: {
    ghibliAPI: GhibliAPI;
    trackAPI: TrackAPI;
    db: PrismaClient;
  };
  user: AuthenticatedUser | null;
};