"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var AnswerValidationComponent = /** @class */ (function () {
    function AnswerValidationComponent(route, router, rdp) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.rdp = rdp;
        this.playersRemaining = true;
        this.route.params.subscribe(function (params) {
            _this.correct = params["correct"] == "true";
            _this.player_answer_content = params["answer"];
            console.log("answer: " + rdp.subjectId);
            _this.subjectId = rdp.subjectId;
            _this.playersRemaining = rdp.hasRemainingPlayers;
        });
        // console.log("answer: "+this.player_answer_content);
    }
    AnswerValidationComponent.prototype.ngOnInit = function () {
        console.log("correct: " + this.correct);
        this.rdp.speak("You Answered" + this.player_answer_content);
        if (this.correct) {
            this.successOrFail.nativeElement.src = "~/pages/answerValidation/checkmark.png";
            this.rdp.speak("This is correct!");
        }
        else {
            this.answerRef.nativeElement.visibility = "visible";
            this.answerRef.nativeElement.text = "Correct answer: ".concat(this.rdp.triviaQuestion.triviaCorrectAnswer.content);
            this.successOrFail.nativeElement.src = "~/pages/answerValidation/x-mark.gif";
            this.rdp.speak("This is WRONG!");
            this.rdp.speak("The Correct answer is: " + this.rdp.triviaQuestion.triviaCorrectAnswer.content);
        }
    };
    AnswerValidationComponent.prototype.next = function () {
        if (this.playersRemaining) {
            this.router.navigate(["questionPresenter"], { clearHistory: true });
        }
        else {
            this.router.navigate(["summary"], { clearHistory: true });
        }
    };
    AnswerValidationComponent.prototype.quit = function () {
        this.router.navigate(["start"], { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild("answer"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerValidationComponent.prototype, "answerRef", void 0);
    __decorate([
        core_1.ViewChild("Check"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerValidationComponent.prototype, "successOrFail", void 0);
    AnswerValidationComponent = __decorate([
        core_1.Component({
            selector: "answerValidation",
            templateUrl: "pages/answerValidation/answerValidation.html",
            styleUrls: ["pages/answerValidation/answerValidation-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], AnswerValidationComponent);
    return AnswerValidationComponent;
}());
exports.AnswerValidationComponent = AnswerValidationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRjtBQUNuRiwwQ0FBaUU7QUFDakUsc0RBQTZEO0FBSTdELGdGQUEyRTtBQVEzRTtJQU9FLG1DQUEyQixLQUFxQixFQUFVLE1BQXdCLEVBQVMsR0FBc0I7UUFBakgsaUJBU0M7UUFUMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRDFHLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUV0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUMzQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDL0IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNILHNEQUFzRDtJQUN4RCxDQUFDO0lBSUQsNENBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsd0NBQXdDLENBQUM7WUFDaEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLHFDQUFxQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEcsQ0FBQztJQU1ILENBQUM7SUFFRCx3Q0FBSSxHQUFKO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUVILENBQUM7SUFDTyx3Q0FBSSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFoQ29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFZLGlCQUFVO2dFQUFDO0lBQ3ZCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFnQixpQkFBVTtvRUFBQztJQW5CbkMseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsU0FBUyxFQUFFLENBQUMsb0RBQW9ELENBQUM7U0FDbEUsQ0FBQzt5Q0FTa0MsdUJBQWMsRUFBa0IseUJBQWdCLEVBQWMsc0NBQWlCO09BUHRHLHlCQUF5QixDQW1EckM7SUFBRCxnQ0FBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5zd2VyVmFsaWRhdGlvblwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2Fuc3dlclZhbGlkYXRpb24uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Fuc3dlclZhbGlkYXRpb24vYW5zd2VyVmFsaWRhdGlvbi1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyVmFsaWRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGNvcnJlY3Q6IGJvb2xlYW47XG4gIC8vIHB1YmxpYyBjb3JyZWN0X2Fuc3dlcjogVHJpdmlhQW5zd2VyO1xuICBwdWJsaWMgcGxheWVyX2Fuc3dlcl9jb250ZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBjb3JyZWN0bmVzczogc3RyaW5nO1xuICBwdWJsaWMgc3ViamVjdElkOiBzdHJpbmc7XG4gIHB1YmxpYyBwbGF5ZXJzUmVtYWluaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXIgKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuY29ycmVjdCA9IHBhcmFtc1tcImNvcnJlY3RcIl0gPT0gXCJ0cnVlXCI7XG4gICAgICB0aGlzLnBsYXllcl9hbnN3ZXJfY29udGVudCA9IHBhcmFtc1tcImFuc3dlclwiXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VyOiBcIityZHAuc3ViamVjdElkKTtcbiAgICAgIHRoaXMuc3ViamVjdElkID0gcmRwLnN1YmplY3RJZDtcbiAgICAgIHRoaXMucGxheWVyc1JlbWFpbmluZyA9IHJkcC5oYXNSZW1haW5pbmdQbGF5ZXJzO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYW5zd2VyOiBcIit0aGlzLnBsYXllcl9hbnN3ZXJfY29udGVudCk7XG4gIH1cblxuICBAVmlld0NoaWxkKFwiYW5zd2VyXCIpIGFuc3dlclJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcIkNoZWNrXCIpIHN1Y2Nlc3NPckZhaWw6IEVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCl7XG4gICAgY29uc29sZS5sb2coXCJjb3JyZWN0OiBcIit0aGlzLmNvcnJlY3QpO1xuICAgIHRoaXMucmRwLnNwZWFrKFwiWW91IEFuc3dlcmVkXCIrdGhpcy5wbGF5ZXJfYW5zd2VyX2NvbnRlbnQpO1xuICAgIGlmKHRoaXMuY29ycmVjdCl7XG4gICAgICB0aGlzLnN1Y2Nlc3NPckZhaWwubmF0aXZlRWxlbWVudC5zcmMgPSBcIn4vcGFnZXMvYW5zd2VyVmFsaWRhdGlvbi9jaGVja21hcmsucG5nXCI7XG4gICAgICB0aGlzLnJkcC5zcGVhayhcIlRoaXMgaXMgY29ycmVjdCFcIikgICAgICBcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLmFuc3dlclJlZi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMuYW5zd2VyUmVmLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiQ29ycmVjdCBhbnN3ZXI6IFwiLmNvbmNhdCh0aGlzLnJkcC50cml2aWFRdWVzdGlvbi50cml2aWFDb3JyZWN0QW5zd2VyLmNvbnRlbnQpOyBcbiAgICAgIHRoaXMuc3VjY2Vzc09yRmFpbC5uYXRpdmVFbGVtZW50LnNyYyA9IFwifi9wYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL3gtbWFyay5naWZcIjtcbiAgICAgIHRoaXMucmRwLnNwZWFrKFwiVGhpcyBpcyBXUk9ORyFcIilcbiAgICAgIHRoaXMucmRwLnNwZWFrKFwiVGhlIENvcnJlY3QgYW5zd2VyIGlzOiBcIisgdGhpcy5yZHAudHJpdmlhUXVlc3Rpb24udHJpdmlhQ29ycmVjdEFuc3dlci5jb250ZW50KVxuICAgIH1cblxuICAgXG5cblxuXG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgaWYodGhpcy5wbGF5ZXJzUmVtYWluaW5nKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInF1ZXN0aW9uUHJlc2VudGVyXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgXG4gIH1cbiAgcHJpdmF0ZSBxdWl0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=