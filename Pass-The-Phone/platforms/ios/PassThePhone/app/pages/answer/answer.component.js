"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var triviaQuestion_provider_1 = require("../../shared/providers/triviaQuestion.provider");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(router, triviaQuestionProvider) {
        this.router = router;
        this.triviaQuestionProvider = triviaQuestionProvider;
        // console.log("Constructing answer.component");
        this.choices = [];
        this.choices.push(new triviaAnswer_1.TriviaAnswer(null, ""));
        this.currentQuestion = triviaQuestionProvider.triviaQuestion;
        this.question = this.currentQuestion.question;
        for (var i = 0; i < this.currentQuestion.triviaAnswers.length; i++) {
            // console.log("question: "+this.currentQuestion.question);
            this.choices.push(this.currentQuestion.triviaAnswers[i]);
        }
    }
    AnswerComponent.prototype.onItemTap = function (args) {
        // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index > 0) {
            this.selectedAnswer = this.choices[args.index];
            // console.log ("Chosen: "+this.selectedAnswer.content);
            var correct = this.checkCorrectness(this.selectedAnswer);
            this.next(correct, this.selectedAnswer.content);
        }
    };
    AnswerComponent.prototype.checkCorrectness = function (answer) {
        if (this.currentQuestion.triviaCorrectAnswer == answer) {
            //answer is correct!
            console.log("Answer is correct!");
            return true;
        }
        else {
            //answer is wrong
            console.log("Answer is wrong!");
            return false;
        }
    };
    AnswerComponent.prototype.next = function (correct, answer_content) {
        this.router.navigate(["answerValidation", correct, answer_content]);
    };
    AnswerComponent = __decorate([
        core_1.Component({
            selector: "answer",
            templateUrl: "pages/answer/answer.html",
            styleUrls: ["pages/answer/answer-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, triviaQuestion_provider_1.TriviaQuestionProvider])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBR3pDLDBEQUFzRDtBQUN0RCwwRkFBcUY7QUFTckY7SUFRRSx5QkFBMkIsTUFBYyxFQUFVLHNCQUE4QztRQUF0RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUMvRixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsY0FBYyxDQUFBO1FBRTVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFFOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM5RCwyREFBMkQ7WUFFM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBRUgsQ0FBQztJQUVNLG1DQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsNkVBQTZFO1FBQzdFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLHdEQUF3RDtZQUV4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFFTywwQ0FBZ0IsR0FBeEIsVUFBeUIsTUFBTTtRQUU3QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDckQsb0JBQW9CO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osaUJBQWlCO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUVILENBQUM7SUFFTyw4QkFBSSxHQUFaLFVBQWEsT0FBTyxFQUFDLGNBQWM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBdERVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FVbUMsZUFBTSxFQUFrQyxnREFBc0I7T0FSdEYsZUFBZSxDQXdEM0I7SUFBRCxzQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiIFxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCIgXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9uUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3RyaXZpYVF1ZXN0aW9uLnByb3ZpZGVyXCIgXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFuc3dlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hbnN3ZXIvYW5zd2VyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hbnN3ZXIvYW5zd2VyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RlZEFuc3dlcjogVHJpdmlhQW5zd2VyO1xuXG4gIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB0cml2aWFRdWVzdGlvblByb3ZpZGVyOiBUcml2aWFRdWVzdGlvblByb3ZpZGVyICkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQ29uc3RydWN0aW5nIGFuc3dlci5jb21wb25lbnRcIik7XG4gICAgdGhpcy5jaG9pY2VzID0gW107XG5cbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXcgVHJpdmlhQW5zd2VyKG51bGwsXCJcIikpO1xuXG4gICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSB0cml2aWFRdWVzdGlvblByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uXG5cbiAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb247IFxuXG4gICAgZm9yIChsZXQgaSA9MDsgaTx0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgLy8gY29uc29sZS5sb2coXCJxdWVzdGlvbjogXCIrdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb24pO1xuXG4gICAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPjApe1xuICAgICAgdGhpcy5zZWxlY3RlZEFuc3dlciA9IHRoaXMuY2hvaWNlc1thcmdzLmluZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZEFuc3dlci5jb250ZW50KTtcblxuICAgICAgbGV0IGNvcnJlY3QgPSB0aGlzLmNoZWNrQ29ycmVjdG5lc3ModGhpcy5zZWxlY3RlZEFuc3dlcik7XG5cbiAgICAgIHRoaXMubmV4dChjb3JyZWN0LCB0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDb3JyZWN0bmVzcyhhbnN3ZXIpe1xuXG4gICAgaWYodGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQ29ycmVjdEFuc3dlciA9PSBhbnN3ZXIpe1xuICAgICAgLy9hbnN3ZXIgaXMgY29ycmVjdCFcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIGNvcnJlY3QhXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAvL2Fuc3dlciBpcyB3cm9uZ1xuICAgICAgY29uc29sZS5sb2coXCJBbnN3ZXIgaXMgd3JvbmchXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KGNvcnJlY3QsYW5zd2VyX2NvbnRlbnQpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhbnN3ZXJWYWxpZGF0aW9uXCIsIGNvcnJlY3QsYW5zd2VyX2NvbnRlbnRdKTsgICAgXG4gIH1cblxufVxuIl19