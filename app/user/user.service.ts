import { Injectable } from '@angular/core';
import { IWords } from '../interfaces/words.interface';
import { IUser } from '../interfaces/user.interface';
@Injectable()
export class UserService{

    //This method returns an array of sample words and its meanings.
    getUsers(): IUser[]{
        return [
            {
               userID:0,
               myWords: [
                    {
                        wordID:0,
                        meanings:[
                            {meaningID:0, rank:1},
                            {meaningID:1, rank:0}
                        ]
                    },
                    {
                        wordID:1,
                        meanings:[
                            {meaningID:0, rank:0},
                            {meaningID:1, rank:1}
                        ]
                    }
                ]
            }
            ,{
               userID:1,
               myWords: [
                    {
                        wordID:0,
                        meanings:[
                            {meaningID:0, rank:1},
                            {meaningID:1, rank:1}
                        ]
                    },
                    {
                        wordID:1,
                        meanings:[
                            {meaningID:0, rank:0},
                            {meaningID:1, rank:0}
                        ]
                    }
                ]
            }
        ]
    }
}
