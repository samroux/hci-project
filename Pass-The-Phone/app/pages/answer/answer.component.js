"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
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
            console.log(this.roundDataProvider.currentPlayer.name + "Player is having: " + this.roundDataProvider.currentPlayer.runningPointsTotal);
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
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBR3pDLDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFRRSx5QkFBMkIsTUFBYyxFQUFVLGlCQUFvQztRQUE1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNyRixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsY0FBYyxDQUFBO1FBRXZELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFFOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM5RCwyREFBMkQ7WUFFM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBRUgsQ0FBQztJQUVNLG1DQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsNkVBQTZFO1FBQzdFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLHdEQUF3RDtZQUV4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXpELHlDQUF5QztZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5ELHlDQUF5QztZQUN6QyxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO2dCQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM1RCxDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osd0JBQXdCO1lBQzFCLENBQUM7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUd4SSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLE1BQU07UUFFN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ3JELG9CQUFvQjtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLGlCQUFpQjtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFFSCxDQUFDO0lBRU8sOEJBQUksR0FBWixVQUFhLE9BQU8sRUFBQyxjQUFjO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQW5FVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBVW1DLGVBQU0sRUFBNkIsc0NBQWlCO09BUjVFLGVBQWUsQ0FxRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIiBcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiIFxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCIgXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFuc3dlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hbnN3ZXIvYW5zd2VyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hbnN3ZXIvYW5zd2VyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RlZEFuc3dlcjogVHJpdmlhQW5zd2VyO1xuXG4gIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGluZyBhbnN3ZXIuY29tcG9uZW50XCIpO1xuICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuXG4gICAgdGhpcy5jaG9pY2VzLnB1c2gobmV3IFRyaXZpYUFuc3dlcihudWxsLFwiXCIpKTtcblxuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gcm91bmREYXRhUHJvdmlkZXIudHJpdmlhUXVlc3Rpb25cblxuICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbjsgXG5cbiAgICBmb3IgKGxldCBpID0wOyBpPHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMubGVuZ3RoO2krKyl7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInF1ZXN0aW9uOiBcIit0aGlzLmN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbik7XG5cbiAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUFuc3dlcnNbaV0pO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgaWYoYXJncy5pbmRleCA+MCl7XG4gICAgICB0aGlzLnNlbGVjdGVkQW5zd2VyID0gdGhpcy5jaG9pY2VzW2FyZ3MuaW5kZXhdO1xuICAgICAgLy8gY29uc29sZS5sb2cgKFwiQ2hvc2VuOiBcIit0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuXG4gICAgICBsZXQgY29ycmVjdCA9IHRoaXMuY2hlY2tDb3JyZWN0bmVzcyh0aGlzLnNlbGVjdGVkQW5zd2VyKTtcblxuICAgICAgLy9pbmNyZWFzaW5nIGFuc3dlciBjb3VudCBmb3IgdGhpcyBwbGF5ZXJcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5hbnN3ZXJDb3VudCsrO1xuXG4gICAgICAvLyBpbmNyZWFzZSBwbGF5ZXIgcG9pbnRzIGlmIGdvb2QgYW5zd2VyLlxuICAgICAgaWYoY29ycmVjdCl7XG4gICAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwrKztcbiAgICAgIH1lbHNle1xuICAgICAgICAvLyBubyBwb2ludCBnYWluIG9yIGxvc3NcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2codGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLm5hbWUgKyBcIlBsYXllciBpcyBoYXZpbmc6IFwiICsgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCk7XG4gICAgICBcblxuICAgICAgdGhpcy5uZXh0KGNvcnJlY3QsIHRoaXMuc2VsZWN0ZWRBbnN3ZXIuY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NvcnJlY3RuZXNzKGFuc3dlcikgOiBib29sZWFue1xuXG4gICAgaWYodGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQ29ycmVjdEFuc3dlciA9PSBhbnN3ZXIpe1xuICAgICAgLy9hbnN3ZXIgaXMgY29ycmVjdCFcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIGNvcnJlY3QhXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAvL2Fuc3dlciBpcyB3cm9uZ1xuICAgICAgY29uc29sZS5sb2coXCJBbnN3ZXIgaXMgd3JvbmchXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KGNvcnJlY3QsYW5zd2VyX2NvbnRlbnQpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhbnN3ZXJWYWxpZGF0aW9uXCIsIGNvcnJlY3QsYW5zd2VyX2NvbnRlbnRdKTsgICAgXG4gIH1cblxufVxuIl19