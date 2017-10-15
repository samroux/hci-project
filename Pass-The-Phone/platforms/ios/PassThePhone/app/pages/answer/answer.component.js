"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var questionPresenter_component_1 = require("../questionPresenter/questionPresenter.component");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(router, questionPresenter) {
        this.router = router;
        this.questionPresenter = questionPresenter;
        this.choices = questionPresenter.choices;
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
        __metadata("design:paramtypes", [router_1.Router, questionPresenter_component_1.QuestionPresenterComponent])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBSXpDLGdHQUEyRjtBQVMzRjtJQUtFLHlCQUEyQixNQUFjLEVBQVMsaUJBQTZDO1FBQXBFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQzdGLElBQUksQ0FBQyxPQUFPLEdBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQVhVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FPbUMsZUFBTSxFQUE0Qix3REFBMEI7T0FMcEYsZUFBZSxDQWEzQjtJQUFELHNCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7UXVlc3Rpb25QcmVzZW50ZXJDb21wb25lbnR9IGZyb20gXCIuLi9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci5jb21wb25lbnRcIiBcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5zd2VyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Fuc3dlci9hbnN3ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Fuc3dlci9hbnN3ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFuc3dlckNvbXBvbmVudCB7XG5cbiAgcHVibGljIGNob2ljZXM6IEFycmF5PFRyaXZpYUFuc3dlcj47XG4gIFxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgcXVlc3Rpb25QcmVzZW50ZXI6IFF1ZXN0aW9uUHJlc2VudGVyQ29tcG9uZW50ICkge1xuICAgIHRoaXMuY2hvaWNlcz0gcXVlc3Rpb25QcmVzZW50ZXIuY2hvaWNlcztcbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhbnN3ZXJWYWxpZGF0aW9uXCJdKVxuICB9XG5cbn1cbiJdfQ==