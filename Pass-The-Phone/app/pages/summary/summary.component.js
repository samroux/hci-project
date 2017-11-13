"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var player_1 = require("../../shared/player");
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
        console.log(this.rdp.path);
        if (this.rdp.path && this.rdp.path !== "") {
            if (this.rdp.path == "subjectSelector") {
                this.message = "Subject Changed!";
            }
            else if (this.rdp.path == "playerCreator") {
                this.message = "Players Changed!";
            }
            else {
                this.message = "";
            }
            this.alertText.nativeElement.visibility = "visible";
            this.alertText.nativeElement.text = this.message;
            this.rdp.path == "";
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
            this.rdp.path = "summary";
        }
        else {
            this.routerExtensions.navigate(["playerCreator"], { clearHistory: true });
            this.rdp.clearData();
            this.rdp.path = "summary";
        }
    };
    SummaryComponent.prototype.restartRoute = function () {
        // TODO reset points and game
        this.rdp.players.forEach(function (player) {
            player.answerCount = 0;
            player.runningPointsTotal = 0;
        });
        this.rdp.path = "";
        this.rdp.currentPlayer = new player_1.Player("");
        this.rdp.hasRemainingPlayers = true;
        this.routerExtensions.navigate(["questionPresenter", this.rdp.subjectId], { clearHistory: true });
    };
    SummaryComponent.prototype.quit = function () {
        this.routerExtensions.navigate(["start"], { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild("listpicker"),
        __metadata("design:type", core_1.ElementRef)
    ], SummaryComponent.prototype, "listPicker", void 0);
    __decorate([
        core_1.ViewChild("go"),
        __metadata("design:type", core_1.ElementRef)
    ], SummaryComponent.prototype, "goBtn", void 0);
    __decorate([
        core_1.ViewChild("alert"),
        __metadata("design:type", core_1.ElementRef)
    ], SummaryComponent.prototype, "alertText", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSwwQ0FBd0Q7QUFDeEQsc0RBQTZEO0FBSTdELDhDQUEyQztBQUUzQyxnRkFBNEU7QUFDNUUsZ0VBQTZEO0FBVzdEO0lBWUUsMEJBQTJCLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVMsaUJBQW9DO1FBQTlHLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFWbEksWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVksRUFBRSxDQUFDO1FBT3BCLGFBQVEsR0FBMkIsRUFBRSxDQUFDO1FBRzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQU9ELG1DQUFRLEdBQVI7UUFDRSw2Q0FBNkM7UUFDN0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUUsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFl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Z0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2hELENBQUM7eUNBY2tDLHVCQUFjLEVBQTRCLHlCQUFnQixFQUE0QixzQ0FBaUI7T0FaOUgsZ0JBQWdCLENBdUY1QjtJQUFELHVCQUFDO0NBQUEsQUF2RkQsSUF1RkM7QUF2RlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cbmltcG9ydCB7VGVhbX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWFtXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvdXBcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuaW1wb3J0IHtQb2ludHNMaXN0SXRlbXN9IGZyb20gXCIuLi8uLi9zaGFyZWQvcG9pbnRzTGlzdEl0ZW1zXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbmltcG9ydCAqIGFzIGxpc3RQaWNrZXJNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN1bW1hcnlcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3VtbWFyeS9zdW1tYXJ5Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnktY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwdWJsaWMgcGxheWVycyA6IFBsYXllcltdID0gW107XG4gIHB1YmxpYyB0ZWFtcyA6IFRlYW1bXSA9IFtdO1xuICBwdWJsaWMgZ2FtZU1vZGU6IHN0cmluZztcbiAgcHVibGljIHJkcDogUm91bmREYXRhUHJvdmlkZXI7XG4gIHB1YmxpYyBzaG93OiBzdHJpbmc7XG5cbiAgcHVibGljIG1lc3NhZ2UgOnN0cmluZztcbiAgXG4gIHB1YmxpYyBlbGVtZW50czogQXJyYXk8UG9pbnRzTGlzdEl0ZW1zPiA9IFtdO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIgKSB7XG4gICAgdGhpcy5wbGF5ZXJzID0gcm91bmREYXRhUHJvdmlkZXIucGxheWVycztcbiAgICB0aGlzLnRlYW1zID0gcm91bmREYXRhUHJvdmlkZXIudGVhbXM7ICAgIFxuICAgIHRoaXMuZ2FtZU1vZGUgPSByb3VuZERhdGFQcm92aWRlci5nYW1lTW9kZTtcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuICB9IFxuICBcbiAgQFZpZXdDaGlsZChcImxpc3RwaWNrZXJcIikgbGlzdFBpY2tlciA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJnb1wiKSBnb0J0biA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbGVydFwiKSBhbGVydFRleHQgOiBFbGVtZW50UmVmO1xuICBcbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgLy9Qb3B1bGF0ZSBwb2ludHMgbGlzdCBkZXBlbmRpbmcgb24gZ2FtZSBtb2RlXG4gICAgaWYodGhpcy5yZHAuZ2FtZU1vZGU9PVwidGVhbVwiKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiUG9wdWxhdGluZyBUZWFtc1wiKTtcbiAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy50ZWFtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgUG9pbnRzTGlzdEl0ZW1zKFxuICAgICAgICAgIHRoaXMudGVhbXNbaV0ubmFtZSwgdGhpcy50ZWFtc1tpXS5nZXRUb3RhbFBvaW50cygpLCB0aGlzLnRlYW1zW2ldLnBsYXllcnNUb1N0cmluZygpICkpO1xuICAgICAgfVxuICAgICAgXG4gICAgfWVsc2V7XG4gICAgICAvL2luZGl2aWR1YWwgbW9kZVxuICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IFBvaW50c0xpc3RJdGVtcyh0aGlzLnBsYXllcnNbaV0ubmFtZSx0aGlzLnBsYXllcnNbaV0ucnVubmluZ1BvaW50c1RvdGFsLCBcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMucmRwLnBhdGgpO1xuICAgIGlmKHRoaXMucmRwLnBhdGggJiYgdGhpcy5yZHAucGF0aCAhPT0gXCJcIil7XG4gICAgICBpZih0aGlzLnJkcC5wYXRoID09IFwic3ViamVjdFNlbGVjdG9yXCIpe1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlN1YmplY3QgQ2hhbmdlZCFcIjtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnJkcC5wYXRoID09IFwicGxheWVyQ3JlYXRvclwiKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJQbGF5ZXJzIENoYW5nZWQhXCI7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XG4gICAgICB9XG4gICAgICB0aGlzLmFsZXJ0VGV4dC5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMuYWxlcnRUZXh0Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMubWVzc2FnZTtcbiAgICAgIHRoaXMucmRwLnBhdGggPT0gXCJcIjtcbiAgICB9XG4gIH1cbiAgXG4gIHNldHRpbmdzUm91dGUoKSB7XG4gICAgdGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIHRoaXMuZ29CdG4ubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgdGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuaXRlbXMgPSBbXCJDaGFuZ2UgU3ViamVjdFwiLCBcIkNoYW5nZSBQbGF5ZXJzXCJdO1xuICB9XG4gIFxuICBjaGFuZ2VTZWxlY3RlZCgpe1xuICAgIC8vIFRPRE8gbmVlZCB0byBjbGVhciBoZXJlIGFzIHdlbGw/P1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXgpO1xuICAgIGlmKHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPT0gMCl7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMucmRwLnBhdGggPSBcInN1bW1hcnlcIjtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicGxheWVyQ3JlYXRvclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB0aGlzLnJkcC5jbGVhckRhdGEoKTtcbiAgICAgIHRoaXMucmRwLnBhdGggPSBcInN1bW1hcnlcIjtcbiAgICB9XG4gIH1cbiAgXG4gIHJlc3RhcnRSb3V0ZSgpIHtcbiAgICAvLyBUT0RPIHJlc2V0IHBvaW50cyBhbmQgZ2FtZVxuICAgIHRoaXMucmRwLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgcGxheWVyLmFuc3dlckNvdW50ID0gMDtcbiAgICAgIHBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwgPSAwO1xuICAgIH0pO1xuICAgIHRoaXMucmRwLnBhdGggPSBcIlwiXG4gICAgdGhpcy5yZHAuY3VycmVudFBsYXllciA9IG5ldyBQbGF5ZXIoXCJcIilcbiAgICB0aGlzLnJkcC5oYXNSZW1haW5pbmdQbGF5ZXJzID0gdHJ1ZTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIiwgdGhpcy5yZHAuc3ViamVjdElkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbiAgcHJpdmF0ZSBxdWl0KCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN0YXJ0XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxufVxuIl19