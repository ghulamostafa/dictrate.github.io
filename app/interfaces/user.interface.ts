import { IMyWords } from './my-words.interface';
export interface IUser{
    userID: number;
    myWords: IMyWords[];
}