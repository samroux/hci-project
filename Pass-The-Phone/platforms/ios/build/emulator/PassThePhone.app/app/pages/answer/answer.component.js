"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaQuestion_provider_1 = require("../../shared/providers/triviaQuestion.provider");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(router, triviaQuestionProvider) {
        this.router = router;
        this.triviaQuestionProvider = triviaQuestionProvider;
        console.log("Constructing answer.component");
        // this.choices = [];
        // console.log("triviaQuestionProvider.triviaQuestion.triviaAnswers.length: "+ triviaQuestionProvider.triviaQuestion.triviaAnswers.length);
        // for (let i =0; i<triviaQuestionProvider.triviaQuestion.triviaAnswers.length;i++){
        //   console.log("question: "+triviaQuestionProvider.triviaQuestion.question);
        //   this.choices.push(triviaQuestionProvider.triviaQuestion.triviaAnswers[i]);
        // }
    }
    AnswerComponent.prototype.next = function () {
        this.router.navigate(["answerValidation"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBSXpDLDBGQUFxRjtBQVNyRjtJQUtFLHlCQUEyQixNQUFjLEVBQVUsc0JBQThDO1FBQXRFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQy9GLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3QyxxQkFBcUI7UUFFckIsMklBQTJJO1FBRTNJLG9GQUFvRjtRQUNwRiw4RUFBOEU7UUFFOUUsK0VBQStFO1FBQy9FLElBQUk7SUFFTixDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFyQlUsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQU9tQyxlQUFNLEVBQWtDLGdEQUFzQjtPQUx0RixlQUFlLENBdUIzQjtJQUFELHNCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7VHJpdmlhUXVlc3Rpb25Qcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvdHJpdmlhUXVlc3Rpb24ucHJvdmlkZXJcIiBcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5zd2VyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Fuc3dlci9hbnN3ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Fuc3dlci9hbnN3ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFuc3dlckNvbXBvbmVudCB7XG5cbiAgcHVibGljIGNob2ljZXM6IEFycmF5PFRyaXZpYUFuc3dlcj47XG4gIFxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHRyaXZpYVF1ZXN0aW9uUHJvdmlkZXI6IFRyaXZpYVF1ZXN0aW9uUHJvdmlkZXIgKSB7XG4gICAgY29uc29sZS5sb2coXCJDb25zdHJ1Y3RpbmcgYW5zd2VyLmNvbXBvbmVudFwiKTtcbiAgICAvLyB0aGlzLmNob2ljZXMgPSBbXTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwidHJpdmlhUXVlc3Rpb25Qcm92aWRlci50cml2aWFRdWVzdGlvbi50cml2aWFBbnN3ZXJzLmxlbmd0aDogXCIrIHRyaXZpYVF1ZXN0aW9uUHJvdmlkZXIudHJpdmlhUXVlc3Rpb24udHJpdmlhQW5zd2Vycy5sZW5ndGgpO1xuXG4gICAgLy8gZm9yIChsZXQgaSA9MDsgaTx0cml2aWFRdWVzdGlvblByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMubGVuZ3RoO2krKyl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcInF1ZXN0aW9uOiBcIit0cml2aWFRdWVzdGlvblByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uLnF1ZXN0aW9uKTtcblxuICAgIC8vICAgdGhpcy5jaG9pY2VzLnB1c2godHJpdmlhUXVlc3Rpb25Qcm92aWRlci50cml2aWFRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICAvLyB9XG5cbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhbnN3ZXJWYWxpZGF0aW9uXCJdKVxuICB9XG5cbn1cbiJdfQ==