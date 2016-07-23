export interface IMyWords{
    wordID: number;
    meanings: IMyMeaning[];
}

export interface IMyMeaning{
    meaningID: number;
    rank: number;
}