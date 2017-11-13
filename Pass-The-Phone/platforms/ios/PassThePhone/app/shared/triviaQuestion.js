"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triviaAnswer_1 = require("./triviaAnswer");
var TriviaQuestion = /** @class */ (function () {
    function TriviaQuestion(category, type, difficulty, question, correct_answer, incorrect_answers) {
        //TODO - To complete when programmin points
        // if(difficulty == "easy"){
        //     this.points = 1;
        // }else if(difficulty == "medium"){
        //     this.points = 2;
        // }else if(difficulty == "hard"){
        //     this.points = 3;
        // }
        this.category = category;
        this.type = type;
        this.difficulty = difficulty;
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers;
        this.triviaCorrectAnswer = new triviaAnswer_1.TriviaAnswer(this, correct_answer);
        //TODO. Need to shuffle where correct answer is.
        //pupulating possible answers array
        this.triviaAnswers = [];
        this.triviaAnswers[0] = this.triviaCorrectAnswer;
        for (var i = 0; i < incorrect_answers.length; i++) {
            this.triviaAnswers[i + 1] = new triviaAnswer_1.TriviaAnswer(this, incorrect_answers[i]);
        }
    }
    return TriviaQuestion;
}());
exports.TriviaQuestion = TriviaQuestion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpdmlhUXVlc3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cml2aWFRdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUEyQztBQUczQztJQUtJLHdCQUNZLFFBQWdCLEVBQ2hCLElBQVksRUFDWixVQUFrQixFQUNsQixRQUFnQixFQUNmLGNBQXNCLEVBQ3RCLGlCQUEyQjtRQUVwQywyQ0FBMkM7UUFDM0MsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixvQ0FBb0M7UUFDcEMsdUJBQXVCO1FBQ3ZCLGtDQUFrQztRQUNsQyx1QkFBdUI7UUFDdkIsSUFBSTtRQWRJLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBVTtRQVdwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBQyxjQUFjLENBQUMsQ0FBQztRQUVqRSxnREFBZ0Q7UUFDaEQsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFFO1FBQ2xELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4vdHJpdmlhQW5zd2VyXCIgXG5cblxuZXhwb3J0IGNsYXNzIFRyaXZpYVF1ZXN0aW9uIHtcbiAgICBwdWJsaWMgcG9pbnRzOiBudW1iZXI7XG4gICAgcHVibGljIHRyaXZpYUFuc3dlcnM6IFRyaXZpYUFuc3dlcltdO1xuICAgIHB1YmxpYyB0cml2aWFDb3JyZWN0QW5zd2VyOiBUcml2aWFBbnN3ZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY2F0ZWdvcnk6IHN0cmluZywgXG4gICAgICAgIHB1YmxpYyAgdHlwZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgIGRpZmZpY3VsdHk6IHN0cmluZyxcbiAgICAgICAgcHVibGljICBxdWVzdGlvbjogc3RyaW5nLFxuICAgICAgICBwcml2YXRlICBjb3JyZWN0X2Fuc3dlcjogc3RyaW5nLFxuICAgICAgICBwcml2YXRlICBpbmNvcnJlY3RfYW5zd2Vyczogc3RyaW5nW11cbiAgICApe1xuICAgICAgICAvL1RPRE8gLSBUbyBjb21wbGV0ZSB3aGVuIHByb2dyYW1taW4gcG9pbnRzXG4gICAgICAgIC8vIGlmKGRpZmZpY3VsdHkgPT0gXCJlYXN5XCIpe1xuICAgICAgICAvLyAgICAgdGhpcy5wb2ludHMgPSAxO1xuICAgICAgICAvLyB9ZWxzZSBpZihkaWZmaWN1bHR5ID09IFwibWVkaXVtXCIpe1xuICAgICAgICAvLyAgICAgdGhpcy5wb2ludHMgPSAyO1xuICAgICAgICAvLyB9ZWxzZSBpZihkaWZmaWN1bHR5ID09IFwiaGFyZFwiKXtcbiAgICAgICAgLy8gICAgIHRoaXMucG9pbnRzID0gMztcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHRoaXMudHJpdmlhQ29ycmVjdEFuc3dlciA9IG5ldyBUcml2aWFBbnN3ZXIodGhpcyxjb3JyZWN0X2Fuc3dlcik7XG5cbiAgICAgICAgLy9UT0RPLiBOZWVkIHRvIHNodWZmbGUgd2hlcmUgY29ycmVjdCBhbnN3ZXIgaXMuXG4gICAgICAgIC8vcHVwdWxhdGluZyBwb3NzaWJsZSBhbnN3ZXJzIGFycmF5XG4gICAgICAgIHRoaXMudHJpdmlhQW5zd2VycyA9IFtdO1xuICAgICAgICB0aGlzLnRyaXZpYUFuc3dlcnNbMF0gPSB0aGlzLnRyaXZpYUNvcnJlY3RBbnN3ZXIgO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGluY29ycmVjdF9hbnN3ZXJzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgICAgICB0aGlzLnRyaXZpYUFuc3dlcnNbaSsxXSA9IG5ldyBUcml2aWFBbnN3ZXIodGhpcyxpbmNvcnJlY3RfYW5zd2Vyc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19