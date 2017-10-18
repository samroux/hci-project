"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var AnswerValidationComponent = /** @class */ (function () {
    function AnswerValidationComponent(route, router, roundDataProvider) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.route.params.subscribe(function (params) {
            _this.correct = params["correct"] == "true";
            _this.player_answer_content = params["answer"];
            console.log("answer: " + roundDataProvider.subjectId);
            _this.subjectId = roundDataProvider.subjectId;
            _this.playersRemaining = roundDataProvider.getRandomPlayer() == null;
        });
        console.log("correct: " + this.correct);
        // console.log("answer: "+this.player_answer_content);
        this.correct_answer_content = roundDataProvider.triviaQuestion.triviaCorrectAnswer.content;
    }
    AnswerValidationComponent.prototype.ngOnInit = function () {
        console.log("correct: " + this.correct);
        if (this.correct) {
            this.successOrFail.nativeElement.src = "~/pages/answerValidation/checkmark.png";
        }
        else {
            this.successOrFail.nativeElement.src = "~/pages/answerValidation/x-mark.gif";
        }
    };
    AnswerValidationComponent.prototype.next = function () {
        // TODO need to check if needs to go to summary or not.
        //Yo sam routing to questionpresenter then to summary brought the question
        //page for a second so im sending directly to summary
        if (!this.playersRemaining) {
            this.router.navigate(["questionPresenter", this.subjectId], { clearHistory: true });
        }
        else {
            this.router.navigate(["summary"], { clearHistory: true });
        }
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRjtBQUNuRiwwQ0FBaUU7QUFDakUsc0RBQTZEO0FBSTdELGdGQUEyRTtBQVEzRTtJQVVFLG1DQUEyQixLQUFxQixFQUFVLE1BQXdCLEVBQVMsaUJBQW9DO1FBQS9ILGlCQVlDO1FBWjBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDN0MsS0FBSSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7SUFFN0YsQ0FBQztJQUdELDRDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsd0NBQXdDLENBQUM7UUFDbEYsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLHFDQUFxQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQUksR0FBSjtRQUNFLHVEQUF1RDtRQUN2RCwwRUFBMEU7UUFDMUUscURBQXFEO1FBQ3JELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBRUgsQ0FBQztJQXBCbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQWdCLGlCQUFVO29FQUFDO0lBeEJuQyx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxTQUFTLEVBQUUsQ0FBQyxvREFBb0QsQ0FBQztTQUNsRSxDQUFDO3lDQVlrQyx1QkFBYyxFQUFrQix5QkFBZ0IsRUFBNEIsc0NBQWlCO09BVnBILHlCQUF5QixDQTZDckM7SUFBRCxnQ0FBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5zd2VyVmFsaWRhdGlvblwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2Fuc3dlclZhbGlkYXRpb24uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Fuc3dlclZhbGlkYXRpb24vYW5zd2VyVmFsaWRhdGlvbi1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyVmFsaWRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGNvcnJlY3Q6IGJvb2xlYW47XG4gIFxuICAvLyBwdWJsaWMgY29ycmVjdF9hbnN3ZXI6IFRyaXZpYUFuc3dlcjtcbiAgcHVibGljIGNvcnJlY3RfYW5zd2VyX2NvbnRlbnQ6IHN0cmluZztcbiAgcHVibGljIHBsYXllcl9hbnN3ZXJfY29udGVudDogc3RyaW5nO1xuICBwdWJsaWMgY29ycmVjdG5lc3M6IHN0cmluZztcbiAgcHVibGljIHN1YmplY3RJZDogc3RyaW5nO1xuICBwdWJsaWMgcGxheWVyc1JlbWFpbmluZzogYm9vbGVhbjtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIgKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuY29ycmVjdCA9IHBhcmFtc1tcImNvcnJlY3RcIl0gPT0gXCJ0cnVlXCI7XG4gICAgICB0aGlzLnBsYXllcl9hbnN3ZXJfY29udGVudCA9IHBhcmFtc1tcImFuc3dlclwiXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VyOiBcIityb3VuZERhdGFQcm92aWRlci5zdWJqZWN0SWQpO1xuICAgICAgdGhpcy5zdWJqZWN0SWQgPSByb3VuZERhdGFQcm92aWRlci5zdWJqZWN0SWQ7XG4gICAgICB0aGlzLnBsYXllcnNSZW1haW5pbmcgPSByb3VuZERhdGFQcm92aWRlci5nZXRSYW5kb21QbGF5ZXIoKSA9PSBudWxsO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdDogXCIrdGhpcy5jb3JyZWN0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImFuc3dlcjogXCIrdGhpcy5wbGF5ZXJfYW5zd2VyX2NvbnRlbnQpO1xuICAgIHRoaXMuY29ycmVjdF9hbnN3ZXJfY29udGVudCA9IHJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIuY29udGVudDsgXG4gICAgXG4gIH1cblxuICBAVmlld0NoaWxkKFwiQ2hlY2tcIikgc3VjY2Vzc09yRmFpbDogRWxlbWVudFJlZjtcbiAgbmdPbkluaXQoKXtcbiAgICBjb25zb2xlLmxvZyhcImNvcnJlY3Q6IFwiK3RoaXMuY29ycmVjdCk7XG4gICAgaWYodGhpcy5jb3JyZWN0KXtcbiAgICAgIHRoaXMuc3VjY2Vzc09yRmFpbC5uYXRpdmVFbGVtZW50LnNyYyA9IFwifi9wYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2NoZWNrbWFyay5wbmdcIjtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnN1Y2Nlc3NPckZhaWwubmF0aXZlRWxlbWVudC5zcmMgPSBcIn4vcGFnZXMvYW5zd2VyVmFsaWRhdGlvbi94LW1hcmsuZ2lmXCI7XG4gICAgfVxuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIC8vIFRPRE8gbmVlZCB0byBjaGVjayBpZiBuZWVkcyB0byBnbyB0byBzdW1tYXJ5IG9yIG5vdC5cbiAgICAvL1lvIHNhbSByb3V0aW5nIHRvIHF1ZXN0aW9ucHJlc2VudGVyIHRoZW4gdG8gc3VtbWFyeSBicm91Z2h0IHRoZSBxdWVzdGlvblxuICAgIC8vcGFnZSBmb3IgYSBzZWNvbmQgc28gaW0gc2VuZGluZyBkaXJlY3RseSB0byBzdW1tYXJ5XG4gICAgaWYoIXRoaXMucGxheWVyc1JlbWFpbmluZyl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiLCB0aGlzLnN1YmplY3RJZCBdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgXG4gIH1cbn1cbiJdfQ==