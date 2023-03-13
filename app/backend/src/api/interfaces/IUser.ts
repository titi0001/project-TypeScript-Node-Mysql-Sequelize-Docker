import User from '../../database/models/UserModel';

export default interface IUser {
  id?: number
  username?: string
  role?: string
  email: string
  password: string
}

export interface IServiceUser {
  create(dto: IUser): Promise<User>;
  readAll(): Promise<User>;
  readById(id: number):Promise<User>;
  update(id:string, dto: IUser): Promise<User>;
  delete(id:string):Promise<void>;
}
