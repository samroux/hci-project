"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var pointsListItems_1 = require("../../shared/pointsListItems");
var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(route, router, roundDataProvider) {
        this.route = route;
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.players = [];
        this.teams = [];
        this.elements = [];
        this.players = roundDataProvider.players;
        this.teams = roundDataProvider.teams;
        this.gameMode = roundDataProvider.gameMode;
        this.rdp = roundDataProvider;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        //Populate points list depending on game mode
        if (this.rdp.gameMode == "team") {
            console.log("Populating Teams");
            for (var i = 0; i < this.teams.length; i++) {
                this.elements.push(new pointsListItems_1.PointsListItems(this.teams[i].name, this.teams[i].getTotalPoints(), this.teams[i].playersToString()));
            }
        }
        else {
            //individual mode
            for (var i = 0; i < this.players.length; i++) {
                this.elements.push(new pointsListItems_1.PointsListItems(this.players[i].name, this.players[i].runningPointsTotal, ""));
            }
        }
    };
    SummaryComponent.prototype.settingsRoute = function () {
        this.listPicker.nativeElement.visibility = "visible";
        this.goBtn.nativeElement.visibility = "visible";
        this.listPicker.nativeElement.items = ["Change Subject", "Change Players"];
    };
    SummaryComponent.prototype.changeSelected = function () {
        console.log(this.listPicker.nativeElement.selectedIndex);
        if (this.listPicker.nativeElement.selectedIndex == 0) {
            this.router.navigate(["subjectSelector"]);
        }
        else {
            this.router.navigate(["groupTypeSelector"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSwwQ0FBeUM7QUFDekMsMENBQXdEO0FBS3hELGdGQUE0RTtBQUM1RSxnRUFBNkQ7QUFXN0Q7SUFVRSwwQkFBMkIsS0FBcUIsRUFBVSxNQUFjLEVBQVMsaUJBQW9DO1FBQTFGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSOUcsWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVksRUFBRSxDQUFDO1FBS3BCLGFBQVEsR0FBMkIsRUFBRSxDQUFDO1FBRzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQU1ELG1DQUFRLEdBQVI7UUFDRSw2Q0FBNkM7UUFDN0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUUsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBRSxDQUFDLENBQUM7WUFDM0YsQ0FBQztRQUVILENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLGlCQUFpQjtZQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkcsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCx5Q0FBYyxHQUFkO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDRSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUM3QixNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQTNDd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWMsaUJBQVU7d0RBQUM7SUFDaEM7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQVMsaUJBQVU7bURBQUM7SUFsQnpCLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNoRCxDQUFDO3lDQVlrQyx1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHNDQUFpQjtPQVYxRyxnQkFBZ0IsQ0E2RDVCO0lBQUQsdUJBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7UG9pbnRzTGlzdEl0ZW1zfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvaW50c0xpc3RJdGVtc1wiO1xuXG5cbmltcG9ydCAqIGFzIGxpc3RQaWNrZXJNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN1bW1hcnlcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3VtbWFyeS9zdW1tYXJ5Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnktY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwdWJsaWMgcGxheWVycyA6IFBsYXllcltdID0gW107XG4gIHB1YmxpYyB0ZWFtcyA6IFRlYW1bXSA9IFtdO1xuICBwdWJsaWMgZ2FtZU1vZGU6IHN0cmluZztcbiAgcHVibGljIHJkcDogUm91bmREYXRhUHJvdmlkZXI7XG4gIHB1YmxpYyBzaG93OiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgZWxlbWVudHM6IEFycmF5PFBvaW50c0xpc3RJdGVtcz4gPSBbXTtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlciApIHtcbiAgICB0aGlzLnBsYXllcnMgPSByb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzO1xuICAgIHRoaXMudGVhbXMgPSByb3VuZERhdGFQcm92aWRlci50ZWFtczsgICAgXG4gICAgdGhpcy5nYW1lTW9kZSA9IHJvdW5kRGF0YVByb3ZpZGVyLmdhbWVNb2RlO1xuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gIH1cbiAgXG4gIEBWaWV3Q2hpbGQoXCJsaXN0cGlja2VyXCIpIGxpc3RQaWNrZXIgOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZ29cIikgZ29CdG4gOiBFbGVtZW50UmVmO1xuICBcbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgLy9Qb3B1bGF0ZSBwb2ludHMgbGlzdCBkZXBlbmRpbmcgb24gZ2FtZSBtb2RlXG4gICAgaWYodGhpcy5yZHAuZ2FtZU1vZGU9PVwidGVhbVwiKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiUG9wdWxhdGluZyBUZWFtc1wiKTtcbiAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy50ZWFtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgUG9pbnRzTGlzdEl0ZW1zKFxuICAgICAgICAgIHRoaXMudGVhbXNbaV0ubmFtZSwgdGhpcy50ZWFtc1tpXS5nZXRUb3RhbFBvaW50cygpLCB0aGlzLnRlYW1zW2ldLnBsYXllcnNUb1N0cmluZygpICkpO1xuICAgICAgfVxuICAgICAgXG4gICAgfWVsc2V7XG4gICAgICAvL2luZGl2aWR1YWwgbW9kZVxuICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IFBvaW50c0xpc3RJdGVtcyh0aGlzLnBsYXllcnNbaV0ubmFtZSx0aGlzLnBsYXllcnNbaV0ucnVubmluZ1BvaW50c1RvdGFsLCBcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBzZXR0aW5nc1JvdXRlKCkge1xuICAgIHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB0aGlzLmdvQnRuLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50Lml0ZW1zID0gW1wiQ2hhbmdlIFN1YmplY3RcIiwgXCJDaGFuZ2UgUGxheWVyc1wiXTtcbiAgfVxuICBcbiAgY2hhbmdlU2VsZWN0ZWQoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4KTtcbiAgICBpZih0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID09IDApe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCJdKTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJncm91cFR5cGVTZWxlY3RvclwiXSk7XG4gICAgfVxuICB9XG4gIFxuICBxdWVzdGlvblJvdXRlKCkge1xuICAgIC8vcmVzZXQgcG9pbnRzIGFuZCBnYW1lXG4gICAgdGhpcy5yZHAucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICBwbGF5ZXIuYW5zd2VyQ291bnQgPSAwO1xuICAgICAgcGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCA9IDA7XG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIiwgdGhpcy5yZHAuc3ViamVjdElkXSk7XG4gIH1cbn1cbiJdfQ==