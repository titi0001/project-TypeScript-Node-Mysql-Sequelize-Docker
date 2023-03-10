import Match from '../../database/models/MatchesModel';

export default interface IMatch {
  id?: number
  homeTeamId: number
  homeTeamGoals: number
  awayTeamId:number
  awayTeamGoals: number
  inProgress: boolean
}

export interface IServiceMatch {
  create(dto: IMatch): Promise<Match>;
  readAll(): Promise<Match>;
  readById(id: number):Promise<Match>;
  update(id:string, dto: IMatch): Promise<Match>;
  delete(id:string):Promise<void>;
}