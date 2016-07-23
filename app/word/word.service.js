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
var WordService = (function () {
    function WordService() {
    }
    //This method returns an array of sample words and its meanings.
    WordService.prototype.getWords = function () {
        return [
            {
                wordId: 0,
                word: 'Car',
                Meaning: [
                    {
                        meaningId: 0,
                        meaningValue: 'Gaadi',
                        noOfKudos: 0
                    },
                    {
                        meaningId: 1,
                        meaningValue: 'Sawari',
                        noOfKudos: 0
                    }
                ]
            },
            {
                wordId: 1,
                word: 'House',
                Meaning: [
                    {
                        meaningId: 0,
                        meaningValue: 'Ghar',
                        noOfKudos: 0
                    },
                    {
                        meaningId: 1,
                        meaningValue: 'Makan',
                        noOfKudos: 0
                    }
                ]
            }
        ];
    };
    WordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WordService);
    return WordService;
}());
exports.WordService = WordService;
//# sourceMappingURL=word.service.js.map