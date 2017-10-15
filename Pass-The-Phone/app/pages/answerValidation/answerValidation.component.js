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
        console.log("answer: " + this.player_answer_content);
        if (this.correct == true) {
            this.correctness = "Right";
        }
        else {
            this.correctness = "Wrong";
        }
        this.correct_answer_content = triviaQuestionProvider.triviaQuestion.triviaCorrectAnswer.content;
    }
    AnswerValidationComponent.prototype.ngOnInit = function () {
        // this.extractData();
        console.log("initializing..");
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCwwQ0FBaUU7QUFJakUsMEZBQXFGO0FBUXJGO0lBUUUsbUNBQTJCLEtBQXFCLEVBQVUsTUFBYyxFQUFTLHNCQUE4QztRQUEvSCxpQkFnQkM7UUFoQjBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDN0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRW5ELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7SUFFbEcsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDRSxzQkFBc0I7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCx3Q0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFqQ1UseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsU0FBUyxFQUFFLENBQUMsb0RBQW9ELENBQUM7U0FDbEUsQ0FBQzt5Q0FVa0MsdUJBQWMsRUFBa0IsZUFBTSxFQUFpQyxnREFBc0I7T0FScEgseUJBQXlCLENBa0NyQztJQUFELGdDQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIiBcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiIFxuaW1wb3J0IHtUcml2aWFRdWVzdGlvblByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy90cml2aWFRdWVzdGlvbi5wcm92aWRlclwiIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5zd2VyVmFsaWRhdGlvblwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2Fuc3dlclZhbGlkYXRpb24uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Fuc3dlclZhbGlkYXRpb24vYW5zd2VyVmFsaWRhdGlvbi1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyVmFsaWRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGNvcnJlY3Q6IGJvb2xlYW47XG5cbiAgLy8gcHVibGljIGNvcnJlY3RfYW5zd2VyOiBUcml2aWFBbnN3ZXI7XG4gIHB1YmxpYyBjb3JyZWN0X2Fuc3dlcl9jb250ZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBwbGF5ZXJfYW5zd2VyX2NvbnRlbnQ6IHN0cmluZztcbiAgcHVibGljIGNvcnJlY3RuZXNzOiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSB0cml2aWFRdWVzdGlvblByb3ZpZGVyOiBUcml2aWFRdWVzdGlvblByb3ZpZGVyICkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLmNvcnJlY3QgPSBwYXJhbXNbXCJjb3JyZWN0XCJdO1xuICAgICAgdGhpcy5wbGF5ZXJfYW5zd2VyX2NvbnRlbnQgPSBwYXJhbXNbXCJhbnN3ZXJcIl07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJjb3JyZWN0OiBcIit0aGlzLmNvcnJlY3QpO1xuICAgIGNvbnNvbGUubG9nKFwiYW5zd2VyOiBcIit0aGlzLnBsYXllcl9hbnN3ZXJfY29udGVudCk7XG5cbiAgICBpZih0aGlzLmNvcnJlY3QgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmNvcnJlY3RuZXNzID0gXCJSaWdodFwiO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5jb3JyZWN0bmVzcyA9IFwiV3JvbmdcIjtcbiAgICB9XG5cbiAgICB0aGlzLmNvcnJlY3RfYW5zd2VyX2NvbnRlbnQgPSB0cml2aWFRdWVzdGlvblByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIuY29udGVudDsgXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemluZy4uXCIpO1xuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0pXG4gIH1cbn1cbiJdfQ==