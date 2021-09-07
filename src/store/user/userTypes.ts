import { IUser } from '../../common/formatTypes/User';

export const GET_USER_LIST = 'GET_USER_LIST';
export interface IUserRow extends IUser {
    key: string;
}