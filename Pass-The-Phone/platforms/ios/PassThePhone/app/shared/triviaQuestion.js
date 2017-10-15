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
        console.log("Building TriviaQuestion");
        this.choices = [];
        this.triviaAnswers = [];
        //TODO. Need to shuffle where correct answer is.
        this.choices[0] = correct_answer;
        this.triviaAnswers[0] = new triviaAnswer_1.TriviaAnswer(this, this.choices[0]);
        for (var i = 0; i < incorrect_answers.length; i++) {
            this.choices[i + 1] = incorrect_answers[i];
            this.triviaAnswers[i + 1] = new triviaAnswer_1.TriviaAnswer(this, this.choices[i + 1]);
        }
    }
    return TriviaQuestion;
}());
exports.TriviaQuestion = TriviaQuestion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpdmlhUXVlc3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cml2aWFRdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUEyQztBQUczQztJQU1JLHdCQUNXLFFBQWdCLEVBQ2YsSUFBWSxFQUNaLFVBQWtCLEVBQ2xCLFFBQWdCLEVBQ2hCLGNBQXNCLEVBQ3RCLGlCQUEyQjtRQUVuQywyQ0FBMkM7UUFDM0MsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixvQ0FBb0M7UUFDcEMsdUJBQXVCO1FBQ3ZCLGtDQUFrQztRQUNsQyx1QkFBdUI7UUFDdkIsSUFBSTtRQWRHLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBVTtRQVduQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFeEIsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDO1FBRWpDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLDJCQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNMLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi90cml2aWFBbnN3ZXJcIiBcblxuXG5leHBvcnQgY2xhc3MgVHJpdmlhUXVlc3Rpb24ge1xuICAgIHB1YmxpYyBwb2ludHM6IG51bWJlcjtcbiAgICBwdWJsaWMgdHJpdmlhQW5zd2VyczogVHJpdmlhQW5zd2VyW107XG5cbiAgICBwcml2YXRlIGNob2ljZXM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nLCBcbiAgICAgICAgcHVibGljICB0eXBlOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyAgZGlmZmljdWx0eTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgIHF1ZXN0aW9uOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyAgY29ycmVjdF9hbnN3ZXI6IHN0cmluZyxcbiAgICAgICAgcHVibGljICBpbmNvcnJlY3RfYW5zd2Vyczogc3RyaW5nW11cbiAgICApe1xuICAgICAgICAvL1RPRE8gLSBUbyBjb21wbGV0ZSB3aGVuIHByb2dyYW1taW4gcG9pbnRzXG4gICAgICAgIC8vIGlmKGRpZmZpY3VsdHkgPT0gXCJlYXN5XCIpe1xuICAgICAgICAvLyAgICAgdGhpcy5wb2ludHMgPSAxO1xuICAgICAgICAvLyB9ZWxzZSBpZihkaWZmaWN1bHR5ID09IFwibWVkaXVtXCIpe1xuICAgICAgICAvLyAgICAgdGhpcy5wb2ludHMgPSAyO1xuICAgICAgICAvLyB9ZWxzZSBpZihkaWZmaWN1bHR5ID09IFwiaGFyZFwiKXtcbiAgICAgICAgLy8gICAgIHRoaXMucG9pbnRzID0gMztcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnVpbGRpbmcgVHJpdmlhUXVlc3Rpb25cIik7XG5cbiAgICAgICAgdGhpcy5jaG9pY2VzID0gW107XG4gICAgICAgIHRoaXMudHJpdmlhQW5zd2VycyA9IFtdO1xuXG4gICAgICAgIC8vVE9ETy4gTmVlZCB0byBzaHVmZmxlIHdoZXJlIGNvcnJlY3QgYW5zd2VyIGlzLlxuICAgICAgICB0aGlzLmNob2ljZXNbMF0gPSBjb3JyZWN0X2Fuc3dlcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudHJpdmlhQW5zd2Vyc1swXSA9IG5ldyBUcml2aWFBbnN3ZXIodGhpcyx0aGlzLmNob2ljZXNbMF0pO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8aW5jb3JyZWN0X2Fuc3dlcnMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlc1tpKzFdID0gaW5jb3JyZWN0X2Fuc3dlcnNbaV07XG4gICAgICAgICAgICB0aGlzLnRyaXZpYUFuc3dlcnNbaSsxXSA9IG5ldyBUcml2aWFBbnN3ZXIodGhpcyx0aGlzLmNob2ljZXNbaSsxXSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19