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
                this.message = "Subject changed to: ".concat(this.roundDataProvider.subjectName);
                this.roundDataProvider.subjectName = "";
            }
            else if (this.rdp.path == "playerCreator") {
                this.message = "Players Changed!";
            }
            else {
                this.message = "";
            }
            this.alertText.nativeElement.visibility = "visible";
            this.alertText.nativeElement.text = this.message;
            this.rdp.path = "";
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
            player.canAsk = true;
        });
        this.rdp.path = "";
        this.rdp.hasQuestions = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSwwQ0FBd0Q7QUFDeEQsc0RBQTZEO0FBSTdELDhDQUEyQztBQUUzQyxnRkFBNEU7QUFDNUUsZ0VBQTZEO0FBVzdEO0lBWUUsMEJBQTJCLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVMsaUJBQW9DO1FBQTlHLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFWbEksWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVksRUFBRSxDQUFDO1FBT3BCLGFBQVEsR0FBMkIsRUFBRSxDQUFDO1FBRzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQU9ELG1DQUFRLEdBQVI7UUFDRSw2Q0FBNkM7UUFDN0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUUsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFl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LENBQUM7SUFDcEUsQ0FBQztJQXRFd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWMsaUJBQVU7d0RBQUM7SUFDaEM7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQVMsaUJBQVU7bURBQUM7SUFDaEI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQWEsaUJBQVU7dURBQUM7SUFyQmhDLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNoRCxDQUFDO3lDQWNrQyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBNEIsc0NBQWlCO09BWjlILGdCQUFnQixDQTBGNUI7SUFBRCx1QkFBQztDQUFBLEFBMUZELElBMEZDO0FBMUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7UG9pbnRzTGlzdEl0ZW1zfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvaW50c0xpc3RJdGVtc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgKiBhcyBsaXN0UGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdW1tYXJ5XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3VtbWFyeS9zdW1tYXJ5LWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHVibGljIHBsYXllcnMgOiBQbGF5ZXJbXSA9IFtdO1xuICBwdWJsaWMgdGVhbXMgOiBUZWFtW10gPSBbXTtcbiAgcHVibGljIGdhbWVNb2RlOiBzdHJpbmc7XG4gIHB1YmxpYyByZHA6IFJvdW5kRGF0YVByb3ZpZGVyO1xuICBwdWJsaWMgc2hvdzogc3RyaW5nO1xuXG4gIHB1YmxpYyBtZXNzYWdlIDpzdHJpbmc7XG4gIFxuICBwdWJsaWMgZWxlbWVudHM6IEFycmF5PFBvaW50c0xpc3RJdGVtcz4gPSBbXTtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyICkge1xuICAgIHRoaXMucGxheWVycyA9IHJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnM7XG4gICAgdGhpcy50ZWFtcyA9IHJvdW5kRGF0YVByb3ZpZGVyLnRlYW1zOyAgICBcbiAgICB0aGlzLmdhbWVNb2RlID0gcm91bmREYXRhUHJvdmlkZXIuZ2FtZU1vZGU7XG4gICAgdGhpcy5yZHAgPSByb3VuZERhdGFQcm92aWRlcjtcbiAgfSBcbiAgXG4gIEBWaWV3Q2hpbGQoXCJsaXN0cGlja2VyXCIpIGxpc3RQaWNrZXIgOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZ29cIikgZ29CdG4gOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYWxlcnRcIikgYWxlcnRUZXh0IDogRWxlbWVudFJlZjtcbiAgXG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIC8vUG9wdWxhdGUgcG9pbnRzIGxpc3QgZGVwZW5kaW5nIG9uIGdhbWUgbW9kZVxuICAgIGlmKHRoaXMucmRwLmdhbWVNb2RlPT1cInRlYW1cIil7XG4gICAgICBjb25zb2xlLmxvZyhcIlBvcHVsYXRpbmcgVGVhbXNcIik7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMudGVhbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IFBvaW50c0xpc3RJdGVtcyhcbiAgICAgICAgICB0aGlzLnRlYW1zW2ldLm5hbWUsIHRoaXMudGVhbXNbaV0uZ2V0VG90YWxQb2ludHMoKSwgdGhpcy50ZWFtc1tpXS5wbGF5ZXJzVG9TdHJpbmcoKSApKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1lbHNle1xuICAgICAgLy9pbmRpdmlkdWFsIG1vZGVcbiAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBQb2ludHNMaXN0SXRlbXModGhpcy5wbGF5ZXJzW2ldLm5hbWUsdGhpcy5wbGF5ZXJzW2ldLnJ1bm5pbmdQb2ludHNUb3RhbCwgXCJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnJkcC5wYXRoKTtcbiAgICBpZih0aGlzLnJkcC5wYXRoICYmIHRoaXMucmRwLnBhdGggIT09IFwiXCIpe1xuICAgICAgaWYodGhpcy5yZHAucGF0aCA9PSBcInN1YmplY3RTZWxlY3RvclwiKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJTdWJqZWN0IGNoYW5nZWQgdG86IFwiLmNvbmNhdCh0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnN1YmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5zdWJqZWN0TmFtZSA9IFwiXCI7XG4gICAgICB9IGVsc2UgaWYodGhpcy5yZHAucGF0aCA9PSBcInBsYXllckNyZWF0b3JcIil7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiUGxheWVycyBDaGFuZ2VkIVwiO1xuICAgICAgfSBlbHNle1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5hbGVydFRleHQubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLmFsZXJ0VGV4dC5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICB0aGlzLnJkcC5wYXRoID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgXG4gIHNldHRpbmdzUm91dGUoKSB7XG4gICAgdGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIHRoaXMuZ29CdG4ubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgdGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuaXRlbXMgPSBbXCJDaGFuZ2UgU3ViamVjdFwiLCBcIkNoYW5nZSBQbGF5ZXJzXCJdO1xuICB9XG4gIFxuICBjaGFuZ2VTZWxlY3RlZCgpe1xuICAgIC8vIFRPRE8gbmVlZCB0byBjbGVhciBoZXJlIGFzIHdlbGw/P1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXgpO1xuICAgIGlmKHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPT0gMCl7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMucmRwLnBhdGggPSBcInN1bW1hcnlcIjtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicGxheWVyQ3JlYXRvclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB0aGlzLnJkcC5jbGVhckRhdGEoKTtcbiAgICAgIHRoaXMucmRwLnBhdGggPSBcInN1bW1hcnlcIjtcbiAgICB9XG4gIH1cbiAgXG4gIHJlc3RhcnRSb3V0ZSgpIHtcbiAgICAvLyBUT0RPIHJlc2V0IHBvaW50cyBhbmQgZ2FtZVxuICAgIHRoaXMucmRwLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgcGxheWVyLmFuc3dlckNvdW50ID0gMDtcbiAgICAgIHBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwgPSAwO1xuICAgICAgcGxheWVyLmNhbkFzayA9IHRydWU7XG4gICAgfSk7XG4gICAgdGhpcy5yZHAucGF0aCA9IFwiXCJcbiAgICB0aGlzLnJkcC5oYXNRdWVzdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyID0gbmV3IFBsYXllcihcIlwiKVxuICAgIHRoaXMucmRwLmhhc1JlbWFpbmluZ1BsYXllcnMgPSB0cnVlO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiLCB0aGlzLnJkcC5zdWJqZWN0SWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuICBwcml2YXRlIHF1aXQoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=