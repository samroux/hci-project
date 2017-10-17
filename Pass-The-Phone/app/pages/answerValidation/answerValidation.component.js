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
            this.router.navigate(["questionPresenter", this.subjectId]);
        }
        else {
            this.router.navigate(["summary"]);
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, roundData_provider_1.RoundDataProvider])
    ], AnswerValidationComponent);
    return AnswerValidationComponent;
}());
exports.AnswerValidationComponent = AnswerValidationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyVmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnN3ZXJWYWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRjtBQUNuRiwwQ0FBaUU7QUFJakUsZ0ZBQTJFO0FBUTNFO0lBVUUsbUNBQTJCLEtBQXFCLEVBQVUsTUFBYyxFQUFTLGlCQUFvQztRQUFySCxpQkFZQztRQVowQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ25ILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDN0MsS0FBSSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7SUFFN0YsQ0FBQztJQUdELDRDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsd0NBQXdDLENBQUM7UUFDbEYsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLHFDQUFxQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQUksR0FBSjtRQUNFLHVEQUF1RDtRQUN2RCwwRUFBMEU7UUFDMUUscURBQXFEO1FBQ3JELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBRUgsQ0FBQztJQXBCbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQWdCLGlCQUFVO29FQUFDO0lBeEJuQyx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxTQUFTLEVBQUUsQ0FBQyxvREFBb0QsQ0FBQztTQUNsRSxDQUFDO3lDQVlrQyx1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHNDQUFpQjtPQVYxRyx5QkFBeUIsQ0E2Q3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIiBcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiIFxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCIgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJWYWxpZGF0aW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Fuc3dlclZhbGlkYXRpb24vYW5zd2VyVmFsaWRhdGlvbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyVmFsaWRhdGlvbi9hbnN3ZXJWYWxpZGF0aW9uLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJWYWxpZGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgY29ycmVjdDogYm9vbGVhbjtcbiAgXG4gIC8vIHB1YmxpYyBjb3JyZWN0X2Fuc3dlcjogVHJpdmlhQW5zd2VyO1xuICBwdWJsaWMgY29ycmVjdF9hbnN3ZXJfY29udGVudDogc3RyaW5nO1xuICBwdWJsaWMgcGxheWVyX2Fuc3dlcl9jb250ZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBjb3JyZWN0bmVzczogc3RyaW5nO1xuICBwdWJsaWMgc3ViamVjdElkOiBzdHJpbmc7XG4gIHB1YmxpYyBwbGF5ZXJzUmVtYWluaW5nOiBib29sZWFuO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyICkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLmNvcnJlY3QgPSBwYXJhbXNbXCJjb3JyZWN0XCJdID09IFwidHJ1ZVwiO1xuICAgICAgdGhpcy5wbGF5ZXJfYW5zd2VyX2NvbnRlbnQgPSBwYXJhbXNbXCJhbnN3ZXJcIl07XG4gICAgICBjb25zb2xlLmxvZyhcImFuc3dlcjogXCIrcm91bmREYXRhUHJvdmlkZXIuc3ViamVjdElkKTtcbiAgICAgIHRoaXMuc3ViamVjdElkID0gcm91bmREYXRhUHJvdmlkZXIuc3ViamVjdElkO1xuICAgICAgdGhpcy5wbGF5ZXJzUmVtYWluaW5nID0gcm91bmREYXRhUHJvdmlkZXIuZ2V0UmFuZG9tUGxheWVyKCkgPT0gbnVsbDtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcImNvcnJlY3Q6IFwiK3RoaXMuY29ycmVjdCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJhbnN3ZXI6IFwiK3RoaXMucGxheWVyX2Fuc3dlcl9jb250ZW50KTtcbiAgICB0aGlzLmNvcnJlY3RfYW5zd2VyX2NvbnRlbnQgPSByb3VuZERhdGFQcm92aWRlci50cml2aWFRdWVzdGlvbi50cml2aWFDb3JyZWN0QW5zd2VyLmNvbnRlbnQ7IFxuICAgIFxuICB9XG5cbiAgQFZpZXdDaGlsZChcIkNoZWNrXCIpIHN1Y2Nlc3NPckZhaWw6IEVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCl7XG4gICAgY29uc29sZS5sb2coXCJjb3JyZWN0OiBcIit0aGlzLmNvcnJlY3QpO1xuICAgIGlmKHRoaXMuY29ycmVjdCl7XG4gICAgICB0aGlzLnN1Y2Nlc3NPckZhaWwubmF0aXZlRWxlbWVudC5zcmMgPSBcIn4vcGFnZXMvYW5zd2VyVmFsaWRhdGlvbi9jaGVja21hcmsucG5nXCI7XG4gICAgfSBlbHNle1xuICAgICAgdGhpcy5zdWNjZXNzT3JGYWlsLm5hdGl2ZUVsZW1lbnQuc3JjID0gXCJ+L3BhZ2VzL2Fuc3dlclZhbGlkYXRpb24veC1tYXJrLmdpZlwiO1xuICAgIH1cbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICAvLyBUT0RPIG5lZWQgdG8gY2hlY2sgaWYgbmVlZHMgdG8gZ28gdG8gc3VtbWFyeSBvciBub3QuXG4gICAgLy9ZbyBzYW0gcm91dGluZyB0byBxdWVzdGlvbnByZXNlbnRlciB0aGVuIHRvIHN1bW1hcnkgYnJvdWdodCB0aGUgcXVlc3Rpb25cbiAgICAvL3BhZ2UgZm9yIGEgc2Vjb25kIHNvIGltIHNlbmRpbmcgZGlyZWN0bHkgdG8gc3VtbWFyeVxuICAgIGlmKCF0aGlzLnBsYXllcnNSZW1haW5pbmcpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIiwgdGhpcy5zdWJqZWN0SWQgXSk7XG4gICAgfSBlbHNle1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3VtbWFyeVwiXSk7XG4gICAgfVxuICAgIFxuICB9XG59XG4iXX0=