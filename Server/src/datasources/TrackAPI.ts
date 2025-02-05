import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel } from "../models.js";


export class TrackAPI extends RESTDataSource {
  baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

  incrementNumberOfLikes(trackId : string){
        return this.patch<TrackModel>(`track/${trackId}/numberOfLikes`);
    }
  
}