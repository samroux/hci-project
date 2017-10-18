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
        console.log(this.rdp.path);
        if (this.rdp.path && this.rdp.path !== "") {
            if (this.rdp.path == "subjectSelector") {
                this.message = "Subject Changed!";
            }
            else if (this.rdp.path == "playerCreator") {
                this.message = "Players Changed!";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSwwQ0FBd0Q7QUFDeEQsc0RBQTZEO0FBTTdELGdGQUE0RTtBQUM1RSxnRUFBNkQ7QUFXN0Q7SUFZRSwwQkFBMkIsS0FBcUIsRUFBVSxnQkFBa0MsRUFBUyxpQkFBb0M7UUFBOUcsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZsSSxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxFQUFFLENBQUM7UUFPcEIsYUFBUSxHQUEyQixFQUFFLENBQUM7UUFHM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBT0QsbUNBQVEsR0FBUjtRQUNFLDZDQUE2QztRQUM3QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBRSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQWUsQ0FDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFFLENBQUMsQ0FBQztZQUMzRixDQUFDO1FBRUgsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osaUJBQWlCO1lBQ2pCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RyxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3hDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLENBQUEsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztZQUNwQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxDQUFBLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7WUFDcEMsQ0FBQztZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCx5Q0FBYyxHQUFkO1FBQ0Usb0NBQW9DO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0UsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDN0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQTNEd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWMsaUJBQVU7d0RBQUM7SUFDaEM7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQVMsaUJBQVU7bURBQUM7SUFDaEI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQWEsaUJBQVU7dURBQUM7SUFyQmhDLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNoRCxDQUFDO3lDQWNrQyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBNEIsc0NBQWlCO09BWjlILGdCQUFnQixDQStFNUI7SUFBRCx1QkFBQztDQUFBLEFBL0VELElBK0VDO0FBL0VZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7UG9pbnRzTGlzdEl0ZW1zfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BvaW50c0xpc3RJdGVtc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgKiBhcyBsaXN0UGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdW1tYXJ5XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3VtbWFyeS9zdW1tYXJ5LWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHVibGljIHBsYXllcnMgOiBQbGF5ZXJbXSA9IFtdO1xuICBwdWJsaWMgdGVhbXMgOiBUZWFtW10gPSBbXTtcbiAgcHVibGljIGdhbWVNb2RlOiBzdHJpbmc7XG4gIHB1YmxpYyByZHA6IFJvdW5kRGF0YVByb3ZpZGVyO1xuICBwdWJsaWMgc2hvdzogc3RyaW5nO1xuXG4gIHB1YmxpYyBtZXNzYWdlIDpzdHJpbmc7XG4gIFxuICBwdWJsaWMgZWxlbWVudHM6IEFycmF5PFBvaW50c0xpc3RJdGVtcz4gPSBbXTtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyICkge1xuICAgIHRoaXMucGxheWVycyA9IHJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnM7XG4gICAgdGhpcy50ZWFtcyA9IHJvdW5kRGF0YVByb3ZpZGVyLnRlYW1zOyAgICBcbiAgICB0aGlzLmdhbWVNb2RlID0gcm91bmREYXRhUHJvdmlkZXIuZ2FtZU1vZGU7XG4gICAgdGhpcy5yZHAgPSByb3VuZERhdGFQcm92aWRlcjtcbiAgfSBcbiAgXG4gIEBWaWV3Q2hpbGQoXCJsaXN0cGlja2VyXCIpIGxpc3RQaWNrZXIgOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZ29cIikgZ29CdG4gOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYWxlcnRcIikgYWxlcnRUZXh0IDogRWxlbWVudFJlZjtcbiAgXG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIC8vUG9wdWxhdGUgcG9pbnRzIGxpc3QgZGVwZW5kaW5nIG9uIGdhbWUgbW9kZVxuICAgIGlmKHRoaXMucmRwLmdhbWVNb2RlPT1cInRlYW1cIil7XG4gICAgICBjb25zb2xlLmxvZyhcIlBvcHVsYXRpbmcgVGVhbXNcIik7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMudGVhbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IFBvaW50c0xpc3RJdGVtcyhcbiAgICAgICAgICB0aGlzLnRlYW1zW2ldLm5hbWUsIHRoaXMudGVhbXNbaV0uZ2V0VG90YWxQb2ludHMoKSwgdGhpcy50ZWFtc1tpXS5wbGF5ZXJzVG9TdHJpbmcoKSApKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1lbHNle1xuICAgICAgLy9pbmRpdmlkdWFsIG1vZGVcbiAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBQb2ludHNMaXN0SXRlbXModGhpcy5wbGF5ZXJzW2ldLm5hbWUsdGhpcy5wbGF5ZXJzW2ldLnJ1bm5pbmdQb2ludHNUb3RhbCwgXCJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnJkcC5wYXRoKTtcbiAgICBpZih0aGlzLnJkcC5wYXRoICYmIHRoaXMucmRwLnBhdGggIT09IFwiXCIpe1xuICAgICAgaWYodGhpcy5yZHAucGF0aCA9PSBcInN1YmplY3RTZWxlY3RvclwiKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJTdWJqZWN0IENoYW5nZWQhXCI7XG4gICAgICB9IGVsc2UgaWYodGhpcy5yZHAucGF0aCA9PSBcInBsYXllckNyZWF0b3JcIil7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiUGxheWVycyBDaGFuZ2VkIVwiO1xuICAgICAgfVxuICAgICAgdGhpcy5hbGVydFRleHQubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB0aGlzLmFsZXJ0VGV4dC5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICB0aGlzLnJkcC5wYXRoID09IFwiXCI7XG4gICAgfVxuICB9XG4gIFxuICBzZXR0aW5nc1JvdXRlKCkge1xuICAgIHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB0aGlzLmdvQnRuLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50Lml0ZW1zID0gW1wiQ2hhbmdlIFN1YmplY3RcIiwgXCJDaGFuZ2UgUGxheWVyc1wiXTtcbiAgfVxuICBcbiAgY2hhbmdlU2VsZWN0ZWQoKXtcbiAgICAvLyBUT0RPIG5lZWQgdG8gY2xlYXIgaGVyZSBhcyB3ZWxsPz9cbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4KTtcbiAgICBpZih0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID09IDApe1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1YmplY3RTZWxlY3RvclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB0aGlzLnJkcC5wYXRoID0gXCJzdW1tYXJ5XCI7XG4gICAgfSBlbHNle1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInBsYXllckNyZWF0b3JcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgdGhpcy5yZHAuY2xlYXJEYXRhKCk7XG4gICAgICB0aGlzLnJkcC5wYXRoID0gXCJzdW1tYXJ5XCI7XG4gICAgfVxuICB9XG4gIFxuICByZXN0YXJ0Um91dGUoKSB7XG4gICAgLy8gVE9ETyByZXNldCBwb2ludHMgYW5kIGdhbWVcbiAgICB0aGlzLnJkcC5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgIHBsYXllci5hbnN3ZXJDb3VudCA9IDA7XG4gICAgICBwbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsID0gMDtcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIiwgdGhpcy5yZHAuc3ViamVjdElkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbn1cbiJdfQ==