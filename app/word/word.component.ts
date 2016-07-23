import { Component, OnInit } from '@angular/core';

import { WordService } from './word.service';
import { IWords } from '../interfaces/words.interface';
import { IMyWords } from '../interfaces/my-words.interface';
import { IMeanings } from '../interfaces/meanings.interface';
//import { ILikedWords } from '../interfaces/liked-words.interface';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../user/user.service';

@Component({
    selector: 'word',
    templateUrl:'./app/word/word.component.html'
})
export class WordComponent implements OnInit{
    //UserID textbox in HTML
    userID: number = 0;

    //OnInit check variable
    ifOnInit: boolean= false;

    //This array stores the words retrieved from the service.
    Words: IWords[];
    
    //This is temporary storage for user's words.
    Users: IUser[];

    //For using the service that provides the data
    constructor(private _wordService: WordService, private _userService: UserService){ }

    //This method is used because the OnInit lifecycle hook is implemented
    //This method initializes the Words[] array.
    ngOnInit(): void{
        this.Words = this._wordService.getWords();
        this.Users = this._userService.getUsers();
        this.syncWords(this.Words, this.Users);
        //this.Words[0].Meaning[0].noOfKudos = 1;//Just some initialization
        //this.Words[1].Meaning[0].noOfKudos = 3;
    }

    //This will raise the like
    kudosIt(wordID: number, meaningID: number): void{
        //Word found check
        // let WordFound: boolean = false;
        // for(var i=0; i<this.userLikedWords.length; i++)
        // {
        //     //The check if the specific meaning of the specific word had been liked; Unlike
        //     if(wordID == this.userLikedWords[i].wordID
        //     && meaningID == this.userLikedWords[i].meaningID)
        //     {
        //         this.userLikedWords.splice(i);
        //         let tempIndex = this.findItem(this.Words, wordID, meaningID);
        //         this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos--;
        //         WordFound = true;
        //         break;
        //     }
        //     //The check if another meaning of the specific word had been liked; Like shifted
        //     else if (wordID == this.userLikedWords[i].wordID
        //     && meaningID != this.userLikedWords[i].meaningID)
        //     {
        //         this.userLikedWords[i].meaningID = meaningID;
        //         let tempIndex = this.findItem(this.Words, wordID, meaningID);
        //         this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos++;
        //         WordFound = true;
        //         break;
        //     }
        // }
        // //If word was not found in the liked list then is added to the list.
        // if(!WordFound){
        //     this.userLikedWords[wordID] = { wordID: wordID, meaningID: meaningID};
        //     let tempIndex = this.findItem(this.Words, wordID, meaningID);
        //     this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos++;
        // }

        // let WordFound: boolean = false;
        //  for(var i=0; i<this.Users[this.userID].likedWords.length; i++)
        //  {
        //      if(wordID == this.Users[this.userID].likedWords[i].wordID){
        //          let meanFound = false;
        //          for(var j=0; j<this.Users[this.userID].likedWords.length; j++){
        //              if(meaningID == this.Users[this.userID].likedWords[j].meaningID){
        //                 this.Users[this.userID].likedWords.splice(i);
        //                 let tempIndex = this.findItem(this.Words, wordID, meaningID);
        //                 this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos--;
        //                 WordFound = true;
        //                 meanFound = true;
        //                 break;
        //              }
        //              if(!meanFound){
        //                  //Problem in this line
        //                 let tempIndex = this.findItem(this.Words, wordID, meaningID);
        //                 this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos--;
        //                 this.Users[this.userID].likedWords[i].meaningID = meaningID;
        //                 tempIndex = this.findItem(this.Words, wordID, meaningID);
        //                 this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos++;
        //                 WordFound = true;
        //                 break;
        //              }
        //          }
        //      }
        //      }
            // if(wordID == this.Users[this.userID].likedWords[i].wordID
            // && meaningID == this.Users[this.userID].likedWords[i].meaningID)
            // {
            //     this.Users[this.userID].likedWords.splice(i);
            //     let tempIndex = this.findItem(this.Words, wordID, meaningID);
            //     this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos--;
            //     WordFound = true;
            //     break;
            // }
            // //The check if another meaning of the specific word had been liked; Like shifted
            // else if (wordID == this.Users[this.userID].likedWords[i].wordID
            // && meaningID != this.Users[this.userID].likedWords[i].meaningID)
            // {
            //     this.Users[this.userID].likedWords[i].meaningID = meaningID;
            //     let tempIndex = this.findItem(this.Words, wordID, meaningID);
            //     this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos++;
            //     WordFound = true;
            //     break;
            // }
         
         // //If word was not found in the liked list then is added to the list.
        // if(!WordFound){
        //     this.Users[this.userID].likedWords[wordID] = { wordID: wordID, meaningID: meaningID};
        //     let tempIndex = this.findItem(this.Words, wordID, meaningID);
        //     this.Words[tempIndex[0]].Meaning[tempIndex[1]].noOfKudos++;
        // }

    }
    //Will raise one mark of the word
    kudosUp(wordID: number, meaningID: number): void{
        let WordFound: boolean = false;
        for(var i=0; i<this.Users[this.userID].myWords.length; i++){
            if(this.Users[this.userID].myWords[i].wordID == wordID){
                //When word is found
                WordFound = true;
                let MeaningFound: boolean = false;
                for(var j=0; j<this.Users[this.userID].myWords[i].meanings.length; j++){
                    if(this.Users[this.userID].myWords[i].meanings[j].meaningID == meaningID){
                        //When meaning is found
                        MeaningFound = true;
                        if(this.Users[this.userID].myWords[i].meanings[j].rank<1){
                            this.Users[this.userID].myWords[i].meanings[j].rank++;
                            let WordIndex = this.findWordIndex(this.Words, this.Users[this.userID].myWords[i].wordID);
                            let MeaningIndex = this.findMeaningIndex(this.Words[i].Meaning,this.Words[i].Meaning[j].meaningId);
                            this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos++;
                        }
                    }
                }
                //If word was found, but meaning not found. Then raise the meaning to 1.
                if(!MeaningFound){
                    this.Users[this.userID].myWords[i].meanings.push({meaningID:meaningID, rank:1});
                    let WordIndex = this.findWordIndex(this.Words, this.Users[this.userID].myWords[i].wordID);
                    let MeaningIndex = this.findMeaningIndex(this.Words[i].Meaning,this.Words[i].Meaning[j].meaningId);
                    this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos++;
                }
            }
        }
        //If Word was not found.
        if(!WordFound){
            //Create a temporary word from the parameters above and push it to the user's word list
            let tempWord: IMyWords = {wordID: wordID, meanings:[{meaningID:meaningID, rank:1}]};
            this.Users[this.userID].myWords.push(tempWord);
            
            //This is for updating in the 'Words' Array, and adding up the no of kudos.
            let WordIndex = this.findWordIndex(this.Words, tempWord.wordID);
            let MeaningIndex = this.findMeaningIndex(this.Words[WordIndex].Meaning, tempWord.meanings[0].meaningID);
            this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos++;
        }
    }
    //Will drop one mark of the word
    kudosDown(wordID: number, meaningID: number): void{
        let WordFound: boolean = false;
        for(var i=0; i<this.Users[this.userID].myWords.length; i++){
            if(this.Users[this.userID].myWords[i].wordID == wordID){
                //When word is found
                WordFound = true;
                let MeaningFound: boolean = false;
                for(var j=0; j<this.Users[this.userID].myWords[i].meanings.length; j++){
                    if(this.Users[this.userID].myWords[i].meanings[j].meaningID == meaningID){
                        //When meaning is found
                        MeaningFound = true;
                        if(this.Users[this.userID].myWords[i].meanings[j].rank>0){
                            this.Users[this.userID].myWords[i].meanings[j].rank--;
                            let WordIndex = this.findWordIndex(this.Words, this.Users[this.userID].myWords[i].wordID);
                            let MeaningIndex = this.findMeaningIndex(this.Words[i].Meaning,this.Words[i].Meaning[j].meaningId);
                            this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos--;
                        }
                    }
                }
                //If word was found, but meaning not found. Then raise the meaning to 1.
                if(!MeaningFound){
                    this.Users[this.userID].myWords[i].meanings.push({meaningID:meaningID, rank:0});
                    let WordIndex = this.findWordIndex(this.Words, this.Users[this.userID].myWords[i].wordID);
                    let MeaningIndex = this.findMeaningIndex(this.Words[i].Meaning,this.Words[i].Meaning[j].meaningId);
                    this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos--;
                }
            }
        }
        //If Word was not found.
        if(!WordFound){
            //Create a temporary word from the parameters above and push it to the user's word list
            let tempWord: IMyWords = {wordID: wordID, meanings:[{meaningID:meaningID, rank:1}]};
            this.Users[this.userID].myWords.push(tempWord);
            
            //This is for updating in the 'Words' Array, and adding up the no of kudos.
            let WordIndex = this.findWordIndex(this.Words, tempWord.wordID);
            let MeaningIndex = this.findMeaningIndex(this.Words[WordIndex].Meaning, tempWord.meanings[0].meaningID);
            this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos++;
        }
    }

    //This method syncs the words liked in the likedWord list with the users liked words.
    syncWords(words: IWords[], users: IUser[]): void{
        if(users.length < 1){
            return null;
        }
        else{
            for(var i=0; i<users.length; i++){
                let WordIndex: number;
                let MeaningIndex: number;
                for(var j=0; j<users[i].myWords.length; j++){
                    WordIndex = this.findWordIndex(words, users[i].myWords[j].wordID);
                    for(var k=0; k<users[i].myWords[j].meanings.length; k++){
                        MeaningIndex = this.findMeaningIndex(words[WordIndex].Meaning, users[i].myWords[j].meanings[k].meaningID);

                        //Add the ranks from User's Word list to the Words List.
                        words[WordIndex].Meaning[MeaningIndex].noOfKudos += users[i].myWords[j].meanings[k].rank;

                    }
                }
            }
        }

    }

    //Finding an item in the Words List
    findItem(words: IWords[], wordID: number, meaningID: number): number[]{
        for(var i=0; i<words.length; i++){
            if(words[i].wordId == wordID){
                for(var j=0; j<words[i].Meaning.length; j++){
                    if(words[i].Meaning[j].meaningId == meaningID){
                        return [i,j]; //The 'i' stores the word location and 'j' stores the meaning location within word
                    }
                }
            }
        }
    }

    //Find the index of Word in the Word Array
    findWordIndex(words: IWords[], wordID: number): number{
        for(var i=0; i<words.length; i++){
            if(words[i].wordId == wordID)
                return i;
        }
        return -1;
    }

    //Find the index of Meaning in the Word Array's Meaning Array.
    findMeaningIndex(meanings: IMeanings[], meaningID: number): number{
        for(var i=0; i<meanings.length; i++){
            if(meanings[i].meaningId == meaningID)
                return i;
        }
        return -1;
    }
    findListItem(): number{
        return 0;
    }

}