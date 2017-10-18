"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        // console.log("Constructing answer.component");
        this.choices = [];
        this.choices.push(new triviaAnswer_1.TriviaAnswer(null, ""));
        this.currentQuestion = roundDataProvider.triviaQuestion;
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
            //increasing answer count for this player
            this.roundDataProvider.currentPlayer.answerCount++;
            // increase player points if good answer.
            if (correct) {
                this.roundDataProvider.currentPlayer.runningPointsTotal++;
            }
            else {
                // no point gain or loss
            }
            console.log(this.roundDataProvider.currentPlayer.name +
                "Player is having: " +
                this.roundDataProvider.currentPlayer.runningPointsTotal);
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
        this.router.navigate(["answerValidation", correct, answer_content], { clearHistory: true });
    };
    AnswerComponent = __decorate([
        core_1.Component({
            selector: "answer",
            templateUrl: "pages/answer/answer.html",
            styleUrls: ["pages/answer/answer-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFRRSx5QkFBMkIsTUFBd0IsRUFBVSxpQkFBb0M7UUFBdEUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQy9GLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUFZLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUE7UUFFdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUU5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzlELDJEQUEyRDtZQUUzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFFSCxDQUFDO0lBRU0sbUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQiw2RUFBNkU7UUFDN0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0Msd0RBQXdEO1lBRXhELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFekQseUNBQXlDO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFbkQseUNBQXlDO1lBQ3pDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVELENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDSix3QkFBd0I7WUFDMUIsQ0FBQztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJO2dCQUNuRCxvQkFBb0I7Z0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUd6RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLE1BQU07UUFFN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ3JELG9CQUFvQjtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLGlCQUFpQjtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFFSCxDQUFDO0lBRU8sOEJBQUksR0FBWixVQUFhLE9BQU8sRUFBQyxjQUFjO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQXJFVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBVW1DLHlCQUFnQixFQUE2QixzQ0FBaUI7T0FSdEYsZUFBZSxDQXVFM0I7SUFBRCxzQkFBQztDQUFBLEFBdkVELElBdUVDO0FBdkVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIiBcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiIFxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCIgXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFuc3dlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hbnN3ZXIvYW5zd2VyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hbnN3ZXIvYW5zd2VyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RlZEFuc3dlcjogVHJpdmlhQW5zd2VyO1xuXG4gIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJDb25zdHJ1Y3RpbmcgYW5zd2VyLmNvbXBvbmVudFwiKTtcbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcblxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKG5ldyBUcml2aWFBbnN3ZXIobnVsbCxcIlwiKSk7XG5cbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IHJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uXG5cbiAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb247IFxuXG4gICAgZm9yIChsZXQgaSA9MDsgaTx0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgLy8gY29uc29sZS5sb2coXCJxdWVzdGlvbjogXCIrdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb24pO1xuXG4gICAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPjApe1xuICAgICAgdGhpcy5zZWxlY3RlZEFuc3dlciA9IHRoaXMuY2hvaWNlc1thcmdzLmluZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZEFuc3dlci5jb250ZW50KTtcblxuICAgICAgbGV0IGNvcnJlY3QgPSB0aGlzLmNoZWNrQ29ycmVjdG5lc3ModGhpcy5zZWxlY3RlZEFuc3dlcik7XG5cbiAgICAgIC8vaW5jcmVhc2luZyBhbnN3ZXIgY291bnQgZm9yIHRoaXMgcGxheWVyXG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIuYW5zd2VyQ291bnQrKztcblxuICAgICAgLy8gaW5jcmVhc2UgcGxheWVyIHBvaW50cyBpZiBnb29kIGFuc3dlci5cbiAgICAgIGlmKGNvcnJlY3Qpe1xuICAgICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsKys7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgLy8gbm8gcG9pbnQgZ2FpbiBvciBsb3NzXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5uYW1lICsgXG4gICAgICAgIFwiUGxheWVyIGlzIGhhdmluZzogXCIgKyBcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwpO1xuICAgICAgXG5cbiAgICAgIHRoaXMubmV4dChjb3JyZWN0LCB0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDb3JyZWN0bmVzcyhhbnN3ZXIpIDogYm9vbGVhbntcblxuICAgIGlmKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIgPT0gYW5zd2VyKXtcbiAgICAgIC8vYW5zd2VyIGlzIGNvcnJlY3QhXG4gICAgICBjb25zb2xlLmxvZyhcIkFuc3dlciBpcyBjb3JyZWN0IVwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgLy9hbnN3ZXIgaXMgd3JvbmdcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIHdyb25nIVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgbmV4dChjb3JyZWN0LGFuc3dlcl9jb250ZW50KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYW5zd2VyVmFsaWRhdGlvblwiLCBjb3JyZWN0LGFuc3dlcl9jb250ZW50XSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7ICAgIFxuICB9XG5cbn1cbiJdfQ==