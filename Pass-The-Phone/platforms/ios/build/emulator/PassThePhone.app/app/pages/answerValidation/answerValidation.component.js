"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaQuestion_provider_1 = require("../../shared/providers/triviaQuestion.provider");
var AnswerValidationComponent = /** @class */ (function () {
    function AnswerValidationComponent(route, router, triviaQuestionProvider) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.triviaQuestionProvider = triviaQuestionProvider;
        this.route.params.subscribe(function (params) {
            _this.correct = params["correct"];
            _this.player_answer_content = params["answer"];
        });
        console.log("correct: " + this.correct);
        // console.log("answer: "+this.player_answer_content);
        if (this.correct) {
            this.correctness = "Right";
        }
        else {
            this.correctness = "Wrong";
        }
        this.correct_answer_content = triviaQuestionProvider.triviaQuestion.triviaCorrectAnswer.content;
    }
    AnswerValidationComponent.prototype.next = function () {
        this.router.navigate(["summary"]);
    };
    AnswerValidationComponent = __decorate([
        core_1.Component({
            selector: "answerValidation",
            templateUrl: "pages/answerValidation/answerValidation.html",
            styleUrls: ["pages/answerValidation/answerValidation-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, triviaQuestion_provider_1.TriviaQuestionProvider])
    ], AnswerValidationComponent);
    return AnswerValidationComponent;
}());
exports.AnswerValidationComponent = AnswerValidationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUU7QUFJakUsMEZBQXFGO0FBUXJGO0lBUUUsbUNBQTJCLEtBQXFCLEVBQVUsTUFBYyxFQUFTLHNCQUE4QztRQUEvSCxpQkFnQkM7UUFoQjBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDN0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLHNEQUFzRDtRQUV0RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzdCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzdCLENBQUM7UUFFRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztJQUVsRyxDQUFDO0lBRUQsd0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBNUJVLHlCQUF5QjtRQU5yQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLG9EQUFvRCxDQUFDO1NBQ2xFLENBQUM7eUNBVWtDLHVCQUFjLEVBQWtCLGVBQU0sRUFBaUMsZ0RBQXNCO09BUnBILHlCQUF5QixDQTZCckM7SUFBRCxnQ0FBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiIFxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCIgXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9uUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3RyaXZpYVF1ZXN0aW9uLnByb3ZpZGVyXCIgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJWYWxpZGF0aW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Fuc3dlclZhbGlkYXRpb24vYW5zd2VyVmFsaWRhdGlvbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyVmFsaWRhdGlvbi9hbnN3ZXJWYWxpZGF0aW9uLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJWYWxpZGF0aW9uQ29tcG9uZW50e1xuICBwdWJsaWMgY29ycmVjdDogYm9vbGVhbjtcbiAgXG4gIC8vIHB1YmxpYyBjb3JyZWN0X2Fuc3dlcjogVHJpdmlhQW5zd2VyO1xuICBwdWJsaWMgY29ycmVjdF9hbnN3ZXJfY29udGVudDogc3RyaW5nO1xuICBwdWJsaWMgcGxheWVyX2Fuc3dlcl9jb250ZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBjb3JyZWN0bmVzczogc3RyaW5nO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgdHJpdmlhUXVlc3Rpb25Qcm92aWRlcjogVHJpdmlhUXVlc3Rpb25Qcm92aWRlciApIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5jb3JyZWN0ID0gcGFyYW1zW1wiY29ycmVjdFwiXTtcbiAgICAgIHRoaXMucGxheWVyX2Fuc3dlcl9jb250ZW50ID0gcGFyYW1zW1wiYW5zd2VyXCJdO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdDogXCIrdGhpcy5jb3JyZWN0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImFuc3dlcjogXCIrdGhpcy5wbGF5ZXJfYW5zd2VyX2NvbnRlbnQpO1xuXG4gICAgaWYodGhpcy5jb3JyZWN0KXtcbiAgICAgIHRoaXMuY29ycmVjdG5lc3MgPSBcIlJpZ2h0XCI7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmNvcnJlY3RuZXNzID0gXCJXcm9uZ1wiO1xuICAgIH1cbiAgXG4gICAgdGhpcy5jb3JyZWN0X2Fuc3dlcl9jb250ZW50ID0gdHJpdmlhUXVlc3Rpb25Qcm92aWRlci50cml2aWFRdWVzdGlvbi50cml2aWFDb3JyZWN0QW5zd2VyLmNvbnRlbnQ7IFxuICAgIFxuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0pXG4gIH1cbn1cbiJdfQ==