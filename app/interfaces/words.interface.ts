import { IMeanings } from './meanings.interface';

//For making a word of dictonary.
export interface IWords{
    wordId: number,
    word: string,
    Meaning: IMeanings[] //Meaning variable is an array of type Meaning, define below.
}

//This type is for meaning of words defined in the IWords.