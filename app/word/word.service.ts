import { Injectable } from '@angular/core';
import { IWords } from '../interfaces/words.interface';

@Injectable()
export class WordService{

    //This method returns an array of sample words and its meanings.
    getWords(): IWords[]{
        return [
            {
                wordId:0,
                word:'Car',
                Meaning:[
                    {
                        meaningId:0,
                        meaningValue:'Gaadi',
                        noOfKudos:0
                    },
                    {
                        meaningId:1,
                        meaningValue:'Sawari',
                        noOfKudos:0
                    }
                ]
            },
            {
                wordId:1,
                word:'House',
                Meaning:[
                    {
                        meaningId:0,
                        meaningValue:'Ghar',
                        noOfKudos:0
                    },
                    {
                        meaningId:1,
                        meaningValue:'Makan',
                        noOfKudos:0
                    }
                ]
            }
        ];
    }

}