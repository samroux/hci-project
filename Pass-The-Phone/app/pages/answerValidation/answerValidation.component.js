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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRjtBQUNuRiwwQ0FBaUU7QUFDakUsc0RBQTZEO0FBSTdELGdGQUEyRTtBQVEzRTtJQU9FLG1DQUEyQixLQUFxQixFQUFVLE1BQXdCLEVBQVMsR0FBc0I7UUFBakgsaUJBU0M7UUFUMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRDFHLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUV0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUMzQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDL0IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNILHNEQUFzRDtJQUN4RCxDQUFDO0lBSUQsNENBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsd0NBQXdDLENBQUM7WUFDaEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLHFDQUFxQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEcsQ0FBQztJQU1ILENBQUM7SUFFRCx3Q0FBSSxHQUFKO1FBQ0UsdURBQXVEO1FBQ3ZELDBFQUEwRTtRQUMxRSxxREFBcUQ7UUFDckQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBRUgsQ0FBQztJQUNPLHdDQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQW5Db0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVksaUJBQVU7Z0VBQUM7SUFDdkI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQWdCLGlCQUFVO29FQUFDO0lBbkJuQyx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxTQUFTLEVBQUUsQ0FBQyxvREFBb0QsQ0FBQztTQUNsRSxDQUFDO3lDQVNrQyx1QkFBYyxFQUFrQix5QkFBZ0IsRUFBYyxzQ0FBaUI7T0FQdEcseUJBQXlCLENBc0RyQztJQUFELGdDQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIiBcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiIFxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCIgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJWYWxpZGF0aW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Fuc3dlclZhbGlkYXRpb24vYW5zd2VyVmFsaWRhdGlvbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyVmFsaWRhdGlvbi9hbnN3ZXJWYWxpZGF0aW9uLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJWYWxpZGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgY29ycmVjdDogYm9vbGVhbjtcbiAgLy8gcHVibGljIGNvcnJlY3RfYW5zd2VyOiBUcml2aWFBbnN3ZXI7XG4gIHB1YmxpYyBwbGF5ZXJfYW5zd2VyX2NvbnRlbnQ6IHN0cmluZztcbiAgcHVibGljIGNvcnJlY3RuZXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBzdWJqZWN0SWQ6IHN0cmluZztcbiAgcHVibGljIHBsYXllcnNSZW1haW5pbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgcmRwOiBSb3VuZERhdGFQcm92aWRlciApIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5jb3JyZWN0ID0gcGFyYW1zW1wiY29ycmVjdFwiXSA9PSBcInRydWVcIjtcbiAgICAgIHRoaXMucGxheWVyX2Fuc3dlcl9jb250ZW50ID0gcGFyYW1zW1wiYW5zd2VyXCJdO1xuICAgICAgY29uc29sZS5sb2coXCJhbnN3ZXI6IFwiK3JkcC5zdWJqZWN0SWQpO1xuICAgICAgdGhpcy5zdWJqZWN0SWQgPSByZHAuc3ViamVjdElkO1xuICAgICAgdGhpcy5wbGF5ZXJzUmVtYWluaW5nID0gcmRwLmhhc1JlbWFpbmluZ1BsYXllcnM7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJhbnN3ZXI6IFwiK3RoaXMucGxheWVyX2Fuc3dlcl9jb250ZW50KTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJcIikgYW5zd2VyUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiQ2hlY2tcIikgc3VjY2Vzc09yRmFpbDogRWxlbWVudFJlZjtcbiAgbmdPbkluaXQoKXtcbiAgICBjb25zb2xlLmxvZyhcImNvcnJlY3Q6IFwiK3RoaXMuY29ycmVjdCk7XG4gICAgdGhpcy5yZHAuc3BlYWsoXCJZb3UgQW5zd2VyZWRcIit0aGlzLnBsYXllcl9hbnN3ZXJfY29udGVudCk7XG4gICAgaWYodGhpcy5jb3JyZWN0KXtcbiAgICAgIHRoaXMuc3VjY2Vzc09yRmFpbC5uYXRpdmVFbGVtZW50LnNyYyA9IFwifi9wYWdlcy9hbnN3ZXJWYWxpZGF0aW9uL2NoZWNrbWFyay5wbmdcIjtcbiAgICAgIHRoaXMucmRwLnNwZWFrKFwiVGhpcyBpcyBjb3JyZWN0IVwiKSAgICAgIFxuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMuYW5zd2VyUmVmLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy5hbnN3ZXJSZWYubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJDb3JyZWN0IGFuc3dlcjogXCIuY29uY2F0KHRoaXMucmRwLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIuY29udGVudCk7IFxuICAgICAgdGhpcy5zdWNjZXNzT3JGYWlsLm5hdGl2ZUVsZW1lbnQuc3JjID0gXCJ+L3BhZ2VzL2Fuc3dlclZhbGlkYXRpb24veC1tYXJrLmdpZlwiO1xuICAgICAgdGhpcy5yZHAuc3BlYWsoXCJUaGlzIGlzIFdST05HIVwiKVxuICAgICAgdGhpcy5yZHAuc3BlYWsoXCJUaGUgQ29ycmVjdCBhbnN3ZXIgaXM6IFwiKyB0aGlzLnJkcC50cml2aWFRdWVzdGlvbi50cml2aWFDb3JyZWN0QW5zd2VyLmNvbnRlbnQpXG4gICAgfVxuXG4gICBcblxuXG5cbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICAvLyBUT0RPIG5lZWQgdG8gY2hlY2sgaWYgbmVlZHMgdG8gZ28gdG8gc3VtbWFyeSBvciBub3QuXG4gICAgLy9ZbyBzYW0gcm91dGluZyB0byBxdWVzdGlvbnByZXNlbnRlciB0aGVuIHRvIHN1bW1hcnkgYnJvdWdodCB0aGUgcXVlc3Rpb25cbiAgICAvL3BhZ2UgZm9yIGEgc2Vjb25kIHNvIGltIHNlbmRpbmcgZGlyZWN0bHkgdG8gc3VtbWFyeVxuICAgIGlmKHRoaXMucGxheWVyc1JlbWFpbmluZyl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiLCB0aGlzLnN1YmplY3RJZCBdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgXG4gIH1cbiAgcHJpdmF0ZSBxdWl0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=