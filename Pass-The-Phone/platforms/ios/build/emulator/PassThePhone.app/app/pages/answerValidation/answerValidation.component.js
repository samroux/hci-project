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
        if (this.correct) {
            this.correctness = "Right";
        }
        else {
            this.correctness = "Wrong";
        }
        this.correct_answer_content = roundDataProvider.triviaQuestion.triviaCorrectAnswer.content;
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, roundData_provider_1.RoundDataProvider])
    ], AnswerValidationComponent);
    return AnswerValidationComponent;
}());
exports.AnswerValidationComponent = AnswerValidationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUU7QUFJakUsZ0ZBQTJFO0FBUTNFO0lBUUUsbUNBQTJCLEtBQXFCLEVBQVUsTUFBYyxFQUFTLGlCQUFvQztRQUFySCxpQkFnQkM7UUFoQjBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDbkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLHNEQUFzRDtRQUV0RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzdCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzdCLENBQUM7UUFFRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsaUJBQWlCLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztJQUU3RixDQUFDO0lBRUQsd0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBNUJVLHlCQUF5QjtRQU5yQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLG9EQUFvRCxDQUFDO1NBQ2xFLENBQUM7eUNBVWtDLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIsc0NBQWlCO09BUjFHLHlCQUF5QixDQTZCckM7SUFBRCxnQ0FBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiIFxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCIgXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIiBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFuc3dlclZhbGlkYXRpb25cIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyVmFsaWRhdGlvbi9hbnN3ZXJWYWxpZGF0aW9uLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2Fuc3dlclZhbGlkYXRpb24tY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFuc3dlclZhbGlkYXRpb25Db21wb25lbnR7XG4gIHB1YmxpYyBjb3JyZWN0OiBib29sZWFuO1xuICBcbiAgLy8gcHVibGljIGNvcnJlY3RfYW5zd2VyOiBUcml2aWFBbnN3ZXI7XG4gIHB1YmxpYyBjb3JyZWN0X2Fuc3dlcl9jb250ZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBwbGF5ZXJfYW5zd2VyX2NvbnRlbnQ6IHN0cmluZztcbiAgcHVibGljIGNvcnJlY3RuZXNzOiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIgKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuY29ycmVjdCA9IHBhcmFtc1tcImNvcnJlY3RcIl07XG4gICAgICB0aGlzLnBsYXllcl9hbnN3ZXJfY29udGVudCA9IHBhcmFtc1tcImFuc3dlclwiXTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcImNvcnJlY3Q6IFwiK3RoaXMuY29ycmVjdCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJhbnN3ZXI6IFwiK3RoaXMucGxheWVyX2Fuc3dlcl9jb250ZW50KTtcblxuICAgIGlmKHRoaXMuY29ycmVjdCl7XG4gICAgICB0aGlzLmNvcnJlY3RuZXNzID0gXCJSaWdodFwiO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5jb3JyZWN0bmVzcyA9IFwiV3JvbmdcIjtcbiAgICB9XG4gIFxuICAgIHRoaXMuY29ycmVjdF9hbnN3ZXJfY29udGVudCA9IHJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIuY29udGVudDsgXG4gICAgXG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3VtbWFyeVwiXSlcbiAgfVxufVxuIl19