"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var word_service_1 = require('./word.service');
var user_service_1 = require('../user/user.service');
var WordComponent = (function () {
    //For using the service that provides the data
    function WordComponent(_wordService, _userService) {
        this._wordService = _wordService;
        this._userService = _userService;
        //UserID textbox in HTML
        this.userID = 0;
        //OnInit check variable
        this.ifOnInit = false;
    }
    //This method is used because the OnInit lifecycle hook is implemented
    //This method initializes the Words[] array.
    WordComponent.prototype.ngOnInit = function () {
        this.Words = this._wordService.getWords();
        this.Users = this._userService.getUsers();
        this.syncWords(this.Words, this.Users);
        //this.Words[0].Meaning[0].noOfKudos = 1;//Just some initialization
        //this.Words[1].Meaning[0].noOfKudos = 3;
    };
    //This will raise the like
    WordComponent.prototype.kudosIt = function (wordID, meaningID) {
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
    };
    //Will raise one mark of the word
    WordComponent.prototype.kudosUp = function (wordID, meaningID) {
        var WordFound = false;
        for (var i = 0; i < this.Users[this.userID].myWords.length; i++) {
            if (this.Users[this.userID].myWords[i].wordID == wordID) {
                //When word is found
                WordFound = true;
                var MeaningFound = false;
                for (var j = 0; j < this.Users[this.userID].myWords[i].meanings.length; j++) {
                    if (this.Users[this.userID].myWords[i].meanings[j].meaningID == meaningID) {
                        //When meaning is found
                        MeaningFound = true;
                        if (this.Users[this.userID].myWords[i].meanings[j].rank < 1) {
                            this.Users[this.userID].myWords[i].meanings[j].rank++;
                            var WordIndex = this.findWordIndex(this.Words, this.Users[this.userID].myWords[i].wordID);
                            var MeaningIndex = this.findMeaningIndex(this.Words[i].Meaning, this.Words[i].Meaning[j].meaningId);
                            this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos++;
                        }
                    }
                }
                //If word was found, but meaning not found. Then raise the meaning to 1.
                if (!MeaningFound) {
                    this.Users[this.userID].myWords[i].meanings.push({ meaningID: meaningID, rank: 1 });
                    var WordIndex = this.findWordIndex(this.Words, this.Users[this.userID].myWords[i].wordID);
                    var MeaningIndex = this.findMeaningIndex(this.Words[i].Meaning, this.Words[i].Meaning[j].meaningId);
                    this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos++;
                }
            }
        }
        //If Word was not found.
        if (!WordFound) {
            //Create a temporary word from the parameters above and push it to the user's word list
            var tempWord = { wordID: wordID, meanings: [{ meaningID: meaningID, rank: 1 }] };
            this.Users[this.userID].myWords.push(tempWord);
            //This is for updating in the 'Words' Array, and adding up the no of kudos.
            var WordIndex = this.findWordIndex(this.Words, tempWord.wordID);
            var MeaningIndex = this.findMeaningIndex(this.Words[WordIndex].Meaning, tempWord.meanings[0].meaningID);
            this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos++;
        }
    };
    //Will drop one mark of the word
    WordComponent.prototype.kudosDown = function (wordID, meaningID) {
        var WordFound = false;
        for (var i = 0; i < this.Users[this.userID].myWords.length; i++) {
            if (this.Users[this.userID].myWords[i].wordID == wordID) {
                //When word is found
                WordFound = true;
                var MeaningFound = false;
                for (var j = 0; j < this.Users[this.userID].myWords[i].meanings.length; j++) {
                    if (this.Users[this.userID].myWords[i].meanings[j].meaningID == meaningID) {
                        //When meaning is found
                        MeaningFound = true;
                        if (this.Users[this.userID].myWords[i].meanings[j].rank > 0) {
                            this.Users[this.userID].myWords[i].meanings[j].rank--;
                            var WordIndex = this.findWordIndex(this.Words, this.Users[this.userID].myWords[i].wordID);
                            var MeaningIndex = this.findMeaningIndex(this.Words[i].Meaning, this.Words[i].Meaning[j].meaningId);
                            this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos--;
                        }
                    }
                }
                //If word was found, but meaning not found. Then raise the meaning to 1.
                if (!MeaningFound) {
                    this.Users[this.userID].myWords[i].meanings.push({ meaningID: meaningID, rank: 0 });
                    var WordIndex = this.findWordIndex(this.Words, this.Users[this.userID].myWords[i].wordID);
                    var MeaningIndex = this.findMeaningIndex(this.Words[i].Meaning, this.Words[i].Meaning[j].meaningId);
                    this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos--;
                }
            }
        }
        //If Word was not found.
        if (!WordFound) {
            //Create a temporary word from the parameters above and push it to the user's word list
            var tempWord = { wordID: wordID, meanings: [{ meaningID: meaningID, rank: 1 }] };
            this.Users[this.userID].myWords.push(tempWord);
            //This is for updating in the 'Words' Array, and adding up the no of kudos.
            var WordIndex = this.findWordIndex(this.Words, tempWord.wordID);
            var MeaningIndex = this.findMeaningIndex(this.Words[WordIndex].Meaning, tempWord.meanings[0].meaningID);
            this.Words[WordIndex].Meaning[MeaningIndex].noOfKudos++;
        }
    };
    //This method syncs the words liked in the likedWord list with the users liked words.
    WordComponent.prototype.syncWords = function (words, users) {
        if (users.length < 1) {
            return null;
        }
        else {
            for (var i = 0; i < users.length; i++) {
                var WordIndex = void 0;
                var MeaningIndex = void 0;
                for (var j = 0; j < users[i].myWords.length; j++) {
                    WordIndex = this.findWordIndex(words, users[i].myWords[j].wordID);
                    for (var k = 0; k < users[i].myWords[j].meanings.length; k++) {
                        MeaningIndex = this.findMeaningIndex(words[WordIndex].Meaning, users[i].myWords[j].meanings[k].meaningID);
                        //Add the ranks from User's Word list to the Words List.
                        words[WordIndex].Meaning[MeaningIndex].noOfKudos += users[i].myWords[j].meanings[k].rank;
                    }
                }
            }
        }
    };
    //Finding an item in the Words List
    WordComponent.prototype.findItem = function (words, wordID, meaningID) {
        for (var i = 0; i < words.length; i++) {
            if (words[i].wordId == wordID) {
                for (var j = 0; j < words[i].Meaning.length; j++) {
                    if (words[i].Meaning[j].meaningId == meaningID) {
                        return [i, j]; //The 'i' stores the word location and 'j' stores the meaning location within word
                    }
                }
            }
        }
    };
    //Find the index of Word in the Word Array
    WordComponent.prototype.findWordIndex = function (words, wordID) {
        for (var i = 0; i < words.length; i++) {
            if (words[i].wordId == wordID)
                return i;
        }
        return -1;
    };
    //Find the index of Meaning in the Word Array's Meaning Array.
    WordComponent.prototype.findMeaningIndex = function (meanings, meaningID) {
        for (var i = 0; i < meanings.length; i++) {
            if (meanings[i].meaningId == meaningID)
                return i;
        }
        return -1;
    };
    WordComponent.prototype.findListItem = function () {
        return 0;
    };
    WordComponent = __decorate([
        core_1.Component({
            selector: 'word',
            templateUrl: './app/word/word.component.html'
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService, user_service_1.UserService])
    ], WordComponent);
    return WordComponent;
}());
exports.WordComponent = WordComponent;
//# sourceMappingURL=word.component.js.map