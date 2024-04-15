
export interface IUser {
  email: string;
  name: string;
  genger: string;
  birth_date: Date;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IUserState {
  user: IUser | null;
  token: string | null;
}