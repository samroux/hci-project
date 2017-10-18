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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSwwQ0FBd0Q7QUFDeEQsc0RBQTZEO0FBTTdELGdGQUE0RTtBQUM1RSxnRUFBNkQ7QUFXN0Q7SUFVRSwwQkFBMkIsS0FBcUIsRUFBVSxnQkFBa0MsRUFBUyxpQkFBb0M7UUFBOUcsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVJsSSxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxFQUFFLENBQUM7UUFLcEIsYUFBUSxHQUEyQixFQUFFLENBQUM7UUFHM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBTUQsbUNBQVEsR0FBUjtRQUNFLDZDQUE2QztRQUM3QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBRSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQWUsQ0FDcEMsSUFBSSxD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cG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7UG9pbnRzTGlzdEl0ZW1zfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvaW50c0xpc3RJdGVtc1wiO1xuXG5cbmltcG9ydCAqIGFzIGxpc3RQaWNrZXJNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN1bW1hcnlcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3VtbWFyeS9zdW1tYXJ5Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnktY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwdWJsaWMgcGxheWVycyA6IFBsYXllcltdID0gW107XG4gIHB1YmxpYyB0ZWFtcyA6IFRlYW1bXSA9IFtdO1xuICBwdWJsaWMgZ2FtZU1vZGU6IHN0cmluZztcbiAgcHVibGljIHJkcDogUm91bmREYXRhUHJvdmlkZXI7XG4gIHB1YmxpYyBzaG93OiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgZWxlbWVudHM6IEFycmF5PFBvaW50c0xpc3RJdGVtcz4gPSBbXTtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyICkge1xuICAgIHRoaXMucGxheWVycyA9IHJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnM7XG4gICAgdGhpcy50ZWFtcyA9IHJvdW5kRGF0YVByb3ZpZGVyLnRlYW1zOyAgICBcbiAgICB0aGlzLmdhbWVNb2RlID0gcm91bmREYXRhUHJvdmlkZXIuZ2FtZU1vZGU7XG4gICAgdGhpcy5yZHAgPSByb3VuZERhdGFQcm92aWRlcjtcbiAgfVxuICBcbiAgQFZpZXdDaGlsZChcImxpc3RwaWNrZXJcIikgbGlzdFBpY2tlciA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJnb1wiKSBnb0J0biA6IEVsZW1lbnRSZWY7XG4gIFxuICBcbiAgbmdPbkluaXQoKXtcbiAgICAvL1BvcHVsYXRlIHBvaW50cyBsaXN0IGRlcGVuZGluZyBvbiBnYW1lIG1vZGVcbiAgICBpZih0aGlzLnJkcC5nYW1lTW9kZT09XCJ0ZWFtXCIpe1xuICAgICAgY29uc29sZS5sb2coXCJQb3B1bGF0aW5nIFRlYW1zXCIpO1xuICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLnRlYW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBQb2ludHNMaXN0SXRlbXMoXG4gICAgICAgICAgdGhpcy50ZWFtc1tpXS5uYW1lLCB0aGlzLnRlYW1zW2ldLmdldFRvdGFsUG9pbnRzKCksIHRoaXMudGVhbXNbaV0ucGxheWVyc1RvU3RyaW5nKCkgKSk7XG4gICAgICB9XG4gICAgICBcbiAgICB9ZWxzZXtcbiAgICAgIC8vaW5kaXZpZHVhbCBtb2RlXG4gICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgUG9pbnRzTGlzdEl0ZW1zKHRoaXMucGxheWVyc1tpXS5uYW1lLHRoaXMucGxheWVyc1tpXS5ydW5uaW5nUG9pbnRzVG90YWwsIFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHNldHRpbmdzUm91dGUoKSB7XG4gICAgdGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIHRoaXMuZ29CdG4ubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgdGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuaXRlbXMgPSBbXCJDaGFuZ2UgU3ViamVjdFwiLCBcIkNoYW5nZSBQbGF5ZXJzXCJdO1xuICB9XG4gIFxuICBjaGFuZ2VTZWxlY3RlZCgpe1xuICAgIC8vIFRPRE8gbmVlZCB0byBjbGVhciBoZXJlIGFzIHdlbGw/P1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXgpO1xuICAgIGlmKHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPT0gMCl7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZ3JvdXBUeXBlU2VsZWN0b3JcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgcXVlc3Rpb25Sb3V0ZSgpIHtcbiAgICAvLyBUT0RPIHJlc2V0IHBvaW50cyBhbmQgZ2FtZVxuICAgIHRoaXMucmRwLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgcGxheWVyLmFuc3dlckNvdW50ID0gMDtcbiAgICAgIHBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwgPSAwO1xuICAgIH0pO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiLCB0aGlzLnJkcC5zdWJqZWN0SWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxufVxuIl19