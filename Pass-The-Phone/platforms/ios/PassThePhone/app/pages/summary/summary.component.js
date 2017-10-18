"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var pointsListItems_1 = require("../../shared/pointsListItems");
var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(route, routerExtensions, roundDataProvider) {
        this.route = route;
        this.routerExtensions = routerExtensions;
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
        // TODO need to clear here as well??
        console.log(this.listPicker.nativeElement.selectedIndex);
        if (this.listPicker.nativeElement.selectedIndex == 0) {
            this.routerExtensions.navigate(["subjectSelector"], { clearHistory: true });
        }
        else {
            this.rdp.clearData();
            this.routerExtensions.navigate(["groupTypeSelector"], { clearHistory: true });
        }
    };
    SummaryComponent.prototype.questionRoute = function () {
        // TODO reset points and game
        this.rdp.players.forEach(function (player) {
            player.answerCount = 0;
            player.runningPointsTotal = 0;
        });
        this.routerExtensions.navigate(["questionPresenter", this.rdp.subjectId], { clearHistory: true });
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSwwQ0FBd0Q7QUFDeEQsc0RBQTZEO0FBTTdELGdGQUE0RTtBQUM1RSxnRUFBNkQ7QUFXN0Q7SUFVRSwwQkFBMkIsS0FBcUIsRUFBVSxnQkFBa0MsRUFBUyxpQkFBb0M7UUFBOUcsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVJsSSxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxFQUFFLENBQUM7UUFLcEIsYUFBUSxHQUEyQixFQUFFLENBQUM7UUFHM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBTUQsbUNBQVEsR0FBUjtRQUNFLDZDQUE2QztRQUM3QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBRSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQWUsQ0FDcEMsSUFBSSxD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SUErREM7QUEvRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cbmltcG9ydCB7VGVhbX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWFtXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvdXBcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuaW1wb3J0IHtQb2ludHNMaXN0SXRlbXN9IGZyb20gXCIuLi8uLi9zaGFyZWQvcG9pbnRzTGlzdEl0ZW1zXCI7XG5cblxuaW1wb3J0ICogYXMgbGlzdFBpY2tlck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic3VtbWFyeVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnkuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHB1YmxpYyBwbGF5ZXJzIDogUGxheWVyW10gPSBbXTtcbiAgcHVibGljIHRlYW1zIDogVGVhbVtdID0gW107XG4gIHB1YmxpYyBnYW1lTW9kZTogc3RyaW5nO1xuICBwdWJsaWMgcmRwOiBSb3VuZERhdGFQcm92aWRlcjtcbiAgcHVibGljIHNob3c6IHN0cmluZztcbiAgXG4gIHB1YmxpYyBlbGVtZW50czogQXJyYXk8UG9pbnRzTGlzdEl0ZW1zPiA9IFtdO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIgKSB7XG4gICAgdGhpcy5wbGF5ZXJzID0gcm91bmREYXRhUHJvdmlkZXIucGxheWVycztcbiAgICB0aGlzLnRlYW1zID0gcm91bmREYXRhUHJvdmlkZXIudGVhbXM7ICAgIFxuICAgIHRoaXMuZ2FtZU1vZGUgPSByb3VuZERhdGFQcm92aWRlci5nYW1lTW9kZTtcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuICB9XG4gIFxuICBAVmlld0NoaWxkKFwibGlzdHBpY2tlclwiKSBsaXN0UGlja2VyIDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImdvXCIpIGdvQnRuIDogRWxlbWVudFJlZjtcbiAgXG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIC8vUG9wdWxhdGUgcG9pbnRzIGxpc3QgZGVwZW5kaW5nIG9uIGdhbWUgbW9kZVxuICAgIGlmKHRoaXMucmRwLmdhbWVNb2RlPT1cInRlYW1cIil7XG4gICAgICBjb25zb2xlLmxvZyhcIlBvcHVsYXRpbmcgVGVhbXNcIik7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMudGVhbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IFBvaW50c0xpc3RJdGVtcyhcbiAgICAgICAgICB0aGlzLnRlYW1zW2ldLm5hbWUsIHRoaXMudGVhbXNbaV0uZ2V0VG90YWxQb2ludHMoKSwgdGhpcy50ZWFtc1tpXS5wbGF5ZXJzVG9TdHJpbmcoKSApKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1lbHNle1xuICAgICAgLy9pbmRpdmlkdWFsIG1vZGVcbiAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBQb2ludHNMaXN0SXRlbXModGhpcy5wbGF5ZXJzW2ldLm5hbWUsdGhpcy5wbGF5ZXJzW2ldLnJ1bm5pbmdQb2ludHNUb3RhbCwgXCJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgc2V0dGluZ3NSb3V0ZSgpIHtcbiAgICB0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgdGhpcy5nb0J0bi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5pdGVtcyA9IFtcIkNoYW5nZSBTdWJqZWN0XCIsIFwiQ2hhbmdlIFBsYXllcnNcIl07XG4gIH1cbiAgXG4gIGNoYW5nZVNlbGVjdGVkKCl7XG4gICAgLy8gVE9ETyBuZWVkIHRvIGNsZWFyIGhlcmUgYXMgd2VsbD8/XG4gICAgY29uc29sZS5sb2codGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCk7XG4gICAgaWYodGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PSAwKXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdWJqZWN0U2VsZWN0b3JcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMucmRwLmNsZWFyRGF0YSgpO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImdyb3VwVHlwZVNlbGVjdG9yXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIHF1ZXN0aW9uUm91dGUoKSB7XG4gICAgLy8gVE9ETyByZXNldCBwb2ludHMgYW5kIGdhbWVcbiAgICB0aGlzLnJkcC5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgIHBsYXllci5hbnN3ZXJDb3VudCA9IDA7XG4gICAgICBwbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsID0gMDtcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIiwgdGhpcy5yZHAuc3ViamVjdElkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbn1cbiJdfQ==