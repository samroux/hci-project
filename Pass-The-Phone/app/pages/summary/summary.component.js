"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(route, router, roundDataProvider) {
        /*this.route.params.subscribe((params) => {
          this.player_answer_content = params["answer"];
          console.log("answer: "+roundDataProvider.subjectId);
          this.subjectId = roundDataProvider.subjectId;
        });*/
        this.route = route;
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.players = [];
        this.players = roundDataProvider.players;
        this.gameMode = roundDataProvider.gameMode;
        this.rdp = roundDataProvider;
    }
    SummaryComponent.prototype.settingsRoute = function () {
        this.listPicker.nativeElement.visibility = "visible";
        this.goBtn.nativeElement.visibility = "visible";
        this.listPicker.nativeElement.items = ["Change Subject", "Change Players"];
        //this.router.navigate(["start"])
    };
    SummaryComponent.prototype.changeSelected = function () {
        console.log(this.listPicker.nativeElement.selectedIndex);
        if (this.listPicker.nativeElement.selectedIndex == 0) {
            this.router.navigate(["subjectSelector", "summary"]);
        }
        else {
            this.router.navigate(["playerCreator", "summary"]);
        }
    };
    SummaryComponent.prototype.questionRoute = function () {
        //reset points and game
        this.rdp.players.forEach(function (player) {
            player.answerCount = 0;
            player.runningPointsTotal = 0;
        });
        this.router.navigate(["questionPresenter", this.rdp.subjectId]);
    };
    __decorate([
        core_1.ViewChild("listpicker"),
        __metadata("design:type", core_1.ElementRef)
    ], SummaryComponent.prototype, "listPicker", void 0);
    __decorate([
        core_1.ViewChild("go"),
        __metadata("design:type", core_1.ElementRef)
    ], SummaryComponent.prototype, "goBtn", void 0);
    SummaryComponent = __decorate([
        core_1.Component({
            selector: "summary",
            templateUrl: "pages/summary/summary.html",
            styleUrls: ["pages/summary/summary-common.css"]
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.Router, roundData_provider_1.RoundDataProvider])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSwwQ0FBeUM7QUFDekMsMENBQXdEO0FBR3hELGdGQUE0RTtBQVM1RTtJQU9FLDBCQUEyQixLQUFxQixFQUFVLE1BQWMsRUFBUyxpQkFBb0M7UUFDbkg7Ozs7YUFJSztRQUxvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTDlHLFlBQU8sR0FBYyxFQUFFLENBQUM7UUFZN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBSUQsd0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNFLGlDQUFpQztJQUNuQyxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0UsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDN0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUF6QndCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFjLGlCQUFVO3dEQUFDO0lBQ2hDO1FBQWhCLGdCQUFTLENBQUMsSUFBSSxDQUFDO2tDQUFTLGlCQUFVO21EQUFDO0lBcEJ6QixnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDaEQsQ0FBQzt5Q0FTa0MsdUJBQWMsRUFBa0IsZUFBTSxFQUE0QixzQ0FBaUI7T0FQMUcsZ0JBQWdCLENBNkM1QjtJQUFELHVCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5pbXBvcnQgKiBhcyBsaXN0UGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdW1tYXJ5XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3VtbWFyeS9zdW1tYXJ5LWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdW1tYXJ5Q29tcG9uZW50e1xuXG4gIHB1YmxpYyBwbGF5ZXJzIDogUGxheWVyW10gPSBbXTtcbiAgcHVibGljIGdhbWVNb2RlOiBzdHJpbmc7XG4gIHB1YmxpYyByZHA6IFJvdW5kRGF0YVByb3ZpZGVyO1xuICBwdWJsaWMgc2hvdzogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlciApIHtcbiAgICAvKnRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnBsYXllcl9hbnN3ZXJfY29udGVudCA9IHBhcmFtc1tcImFuc3dlclwiXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VyOiBcIityb3VuZERhdGFQcm92aWRlci5zdWJqZWN0SWQpO1xuICAgICAgdGhpcy5zdWJqZWN0SWQgPSByb3VuZERhdGFQcm92aWRlci5zdWJqZWN0SWQ7XG4gICAgfSk7Ki9cblxuICAgIHRoaXMucGxheWVycyA9IHJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnM7XG4gICAgdGhpcy5nYW1lTW9kZSA9IHJvdW5kRGF0YVByb3ZpZGVyLmdhbWVNb2RlO1xuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gIH1cblxuICBAVmlld0NoaWxkKFwibGlzdHBpY2tlclwiKSBsaXN0UGlja2VyIDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImdvXCIpIGdvQnRuIDogRWxlbWVudFJlZjtcbiAgc2V0dGluZ3NSb3V0ZSgpIHtcbiAgICB0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgdGhpcy5nb0J0bi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5pdGVtcyA9IFtcIkNoYW5nZSBTdWJqZWN0XCIsIFwiQ2hhbmdlIFBsYXllcnNcIl07XG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdGFydFwiXSlcbiAgfVxuXG4gIGNoYW5nZVNlbGVjdGVkKCl7XG4gICAgY29uc29sZS5sb2codGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCk7XG4gICAgaWYodGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PSAwKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInN1YmplY3RTZWxlY3RvclwiLCBcInN1bW1hcnlcIl0pO1xuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBsYXllckNyZWF0b3JcIiwgXCJzdW1tYXJ5XCJdKTtcbiAgICB9XG4gIH1cblxuICBxdWVzdGlvblJvdXRlKCkge1xuICAgIC8vcmVzZXQgcG9pbnRzIGFuZCBnYW1lXG4gICAgdGhpcy5yZHAucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICBwbGF5ZXIuYW5zd2VyQ291bnQgPSAwO1xuICAgICAgcGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCA9IDA7XG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIiwgdGhpcy5yZHAuc3ViamVjdElkXSk7XG4gIH1cbn1cbiJdfQ==