"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var AnswerValidationComponent = /** @class */ (function () {
    function AnswerValidationComponent(route, router, roundDataProvider) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.route.params.subscribe(function (params) {
            _this.correct = params["correct"];
            _this.player_answer_content = params["answer"];
        });
        console.log("correct: " + this.correct);
        // console.log("answer: "+this.player_answer_content);
        if (this.correct == "true") {
            this.correctness = "Right";
        }
        else {
            this.correctness = "Wrong";
        }
        this.correct_answer_content = roundDataProvider.triviaQuestion.triviaCorrectAnswer.content;
    }
    AnswerValidationComponent.prototype.next = function () {
        // TODO need to check if needs to go to summary or not.
        this.router.navigate(["summary"]);
    };
    AnswerValidationComponent = __decorate([
        core_1.Component({
            selector: "answerValidation",
            templateUrl: "pages/answerValidation/answerValidation.html",
            styleUrls: ["pages/answerValidation/answerValidation-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, roundData_provider_1.RoundDataProvider])
    ], AnswerValidationComponent);
    return AnswerValidationComponent;
}());
exports.AnswerValidationComponent = AnswerValidationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUU7QUFJakUsZ0ZBQTJFO0FBUTNFO0lBUUUsbUNBQTJCLEtBQXFCLEVBQVUsTUFBYyxFQUFTLGlCQUFvQztRQUFySCxpQkFnQkM7UUFoQjBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDbkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLHNEQUFzRDtRQUV0RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDN0IsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDN0IsQ0FBQztRQUVELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDO0lBRTdGLENBQUM7SUFFRCx3Q0FBSSxHQUFKO1FBQ0UsdURBQXVEO1FBRXZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBOUJVLHlCQUF5QjtRQU5yQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLG9EQUFvRCxDQUFDO1NBQ2xFLENBQUM7eUNBVWtDLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIsc0NBQWlCO09BUjFHLHlCQUF5QixDQStCckM7SUFBRCxnQ0FBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiIFxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCIgXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIiBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFuc3dlclZhbGlkYXRpb25cIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyVmFsaWRhdGlvbi9hbnN3ZXJWYWxpZGF0aW9uLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2Fuc3dlclZhbGlkYXRpb24tY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFuc3dlclZhbGlkYXRpb25Db21wb25lbnR7XG4gIHB1YmxpYyBjb3JyZWN0OiBzdHJpbmc7XG4gIFxuICAvLyBwdWJsaWMgY29ycmVjdF9hbnN3ZXI6IFRyaXZpYUFuc3dlcjtcbiAgcHVibGljIGNvcnJlY3RfYW5zd2VyX2NvbnRlbnQ6IHN0cmluZztcbiAgcHVibGljIHBsYXllcl9hbnN3ZXJfY29udGVudDogc3RyaW5nO1xuICBwdWJsaWMgY29ycmVjdG5lc3M6IHN0cmluZztcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlciApIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5jb3JyZWN0ID0gcGFyYW1zW1wiY29ycmVjdFwiXTtcbiAgICAgIHRoaXMucGxheWVyX2Fuc3dlcl9jb250ZW50ID0gcGFyYW1zW1wiYW5zd2VyXCJdO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdDogXCIrdGhpcy5jb3JyZWN0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImFuc3dlcjogXCIrdGhpcy5wbGF5ZXJfYW5zd2VyX2NvbnRlbnQpO1xuXG4gICAgaWYodGhpcy5jb3JyZWN0ID09IFwidHJ1ZVwiKXtcbiAgICAgIHRoaXMuY29ycmVjdG5lc3MgPSBcIlJpZ2h0XCI7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmNvcnJlY3RuZXNzID0gXCJXcm9uZ1wiO1xuICAgIH1cbiAgXG4gICAgdGhpcy5jb3JyZWN0X2Fuc3dlcl9jb250ZW50ID0gcm91bmREYXRhUHJvdmlkZXIudHJpdmlhUXVlc3Rpb24udHJpdmlhQ29ycmVjdEFuc3dlci5jb250ZW50OyBcbiAgICBcbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICAvLyBUT0RPIG5lZWQgdG8gY2hlY2sgaWYgbmVlZHMgdG8gZ28gdG8gc3VtbWFyeSBvciBub3QuXG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdKVxuICB9XG59XG4iXX0=