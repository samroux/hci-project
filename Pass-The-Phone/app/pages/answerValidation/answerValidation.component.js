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
        this.playersRemaining = true;
        this.route.params.subscribe(function (params) {
            _this.correct = params["correct"] == "true";
            _this.player_answer_content = params["answer"];
            console.log("answer: " + roundDataProvider.subjectId);
            _this.subjectId = roundDataProvider.subjectId;
            _this.playersRemaining = roundDataProvider.hasRemainingPlayers;
        });
        // console.log("answer: "+this.player_answer_content);
    }
    AnswerValidationComponent.prototype.ngOnInit = function () {
        console.log("correct: " + this.correct);
        if (this.correct) {
            this.successOrFail.nativeElement.src = "~/pages/answerValidation/checkmark.png";
        }
        else {
            this.answerRef.nativeElement.visibility = "visible";
            this.answerRef.nativeElement.text = "Correct answer: ".concat(this.roundDataProvider.triviaQuestion.triviaCorrectAnswer.content);
            this.successOrFail.nativeElement.src = "~/pages/answerValidation/x-mark.gif";
        }
    };
    AnswerValidationComponent.prototype.next = function () {
        // TODO need to check if needs to go to summary or not.
        //Yo sam routing to questionpresenter then to summary brought the question
        //page for a second so im sending directly to summary
        if (this.playersRemaining) {
            this.router.navigate(["questionPresenter", this.subjectId], { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRjtBQUNuRiwwQ0FBaUU7QUFDakUsc0RBQTZEO0FBSTdELGdGQUEyRTtBQVEzRTtJQU9FLG1DQUEyQixLQUFxQixFQUFVLE1BQXdCLEVBQVMsaUJBQW9DO1FBQS9ILGlCQVNDO1FBVDBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRHhILHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUV0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUMzQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNILHNEQUFzRDtJQUN4RCxDQUFDO0lBSUQsNENBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyx3Q0FBd0MsQ0FBQztRQUNsRixDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcscUNBQXFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBSSxHQUFKO1FBQ0UsdURBQXVEO1FBQ3ZELDBFQUEwRTtRQUMxRSxxREFBcUQ7UUFDckQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBRUgsQ0FBQztJQUNPLHdDQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQTFCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVksaUJBQVU7Z0VBQUM7SUFDdkI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQWdCLGlCQUFVO29FQUFDO0lBbkJuQyx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxTQUFTLEVBQUUsQ0FBQyxvREFBb0QsQ0FBQztTQUNsRSxDQUFDO3lDQVNrQyx1QkFBYyxFQUFrQix5QkFBZ0IsRUFBNEIsc0NBQWlCO09BUHBILHlCQUF5QixDQTZDckM7SUFBRCxnQ0FBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5zd2VyVmFsaWRhdGlvblwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2Fuc3dlclZhbGlkYXRpb24uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Fuc3dlclZhbGlkYXRpb24vYW5zd2VyVmFsaWRhdGlvbi1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyVmFsaWRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGNvcnJlY3Q6IGJvb2xlYW47XG4gIC8vIHB1YmxpYyBjb3JyZWN0X2Fuc3dlcjogVHJpdmlhQW5zd2VyO1xuICBwdWJsaWMgcGxheWVyX2Fuc3dlcl9jb250ZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBjb3JyZWN0bmVzczogc3RyaW5nO1xuICBwdWJsaWMgc3ViamVjdElkOiBzdHJpbmc7XG4gIHB1YmxpYyBwbGF5ZXJzUmVtYWluaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlciApIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5jb3JyZWN0ID0gcGFyYW1zW1wiY29ycmVjdFwiXSA9PSBcInRydWVcIjtcbiAgICAgIHRoaXMucGxheWVyX2Fuc3dlcl9jb250ZW50ID0gcGFyYW1zW1wiYW5zd2VyXCJdO1xuICAgICAgY29uc29sZS5sb2coXCJhbnN3ZXI6IFwiK3JvdW5kRGF0YVByb3ZpZGVyLnN1YmplY3RJZCk7XG4gICAgICB0aGlzLnN1YmplY3RJZCA9IHJvdW5kRGF0YVByb3ZpZGVyLnN1YmplY3RJZDtcbiAgICAgIHRoaXMucGxheWVyc1JlbWFpbmluZyA9IHJvdW5kRGF0YVByb3ZpZGVyLmhhc1JlbWFpbmluZ1BsYXllcnM7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJhbnN3ZXI6IFwiK3RoaXMucGxheWVyX2Fuc3dlcl9jb250ZW50KTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJcIikgYW5zd2VyUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiQ2hlY2tcIikgc3VjY2Vzc09yRmFpbDogRWxlbWVudFJlZjtcbiAgbmdPbkluaXQoKXtcbiAgICBjb25zb2xlLmxvZyhcImNvcnJlY3Q6IFwiK3RoaXMuY29ycmVjdCk7XG4gICAgaWYodGhpcy5jb3JyZWN0KXtcbiAgICAgIHRoaXMuc3VjY2Vzc09yRmFpbC5uYXRpdmVFbGVtZW50LnNyYyA9IFwifi9wYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2NoZWNrbWFyay5wbmdcIjtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLmFuc3dlclJlZi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMuYW5zd2VyUmVmLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiQ29ycmVjdCBhbnN3ZXI6IFwiLmNvbmNhdCh0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIuY29udGVudCk7IFxuICAgICAgdGhpcy5zdWNjZXNzT3JGYWlsLm5hdGl2ZUVsZW1lbnQuc3JjID0gXCJ+L3BhZ2VzL2Fuc3dlclZhbGlkYXRpb24veC1tYXJrLmdpZlwiO1xuICAgIH1cbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICAvLyBUT0RPIG5lZWQgdG8gY2hlY2sgaWYgbmVlZHMgdG8gZ28gdG8gc3VtbWFyeSBvciBub3QuXG4gICAgLy9ZbyBzYW0gcm91dGluZyB0byBxdWVzdGlvbnByZXNlbnRlciB0aGVuIHRvIHN1bW1hcnkgYnJvdWdodCB0aGUgcXVlc3Rpb25cbiAgICAvL3BhZ2UgZm9yIGEgc2Vjb25kIHNvIGltIHNlbmRpbmcgZGlyZWN0bHkgdG8gc3VtbWFyeVxuICAgIGlmKHRoaXMucGxheWVyc1JlbWFpbmluZyl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiLCB0aGlzLnN1YmplY3RJZCBdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgXG4gIH1cbiAgcHJpdmF0ZSBxdWl0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=