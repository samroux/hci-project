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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSwwQ0FBd0Q7QUFDeEQsc0RBQTZEO0FBTTdELGdGQUE0RTtBQUM1RSxnRUFBNkQ7QUFXN0Q7SUFZRSwwQkFBMkIsS0FBcUIsRUFBVSxnQkFBa0MsRUFBUyxpQkFBb0M7UUFBOUcsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZsSSxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxFQUFFLENBQUM7UUFPcEIsYUFBUSxHQUEyQixFQUFFLENBQUM7UUFHM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBT0QsbUNBQVEsR0FBUjtRQUNFLDZDQUE2QztRQUM3QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBRSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQWUsQ0FDcEMsSUFBSSxD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QUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUNFLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO1lBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUExRHdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFjLGlCQUFVO3dEQUFDO0lBQ2hDO1FBQWhCLGdCQUFTLENBQUMsSUFBSSxDQUFDO2tDQUFTLGlCQUFVO21EQUFDO0lBQ2hCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFhLGlCQUFVO3VEQUFDO0lBckJoQyxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDaEQsQ0FBQzt5Q0Fja0MsdUJBQWMsRUFBNEIseUJBQWdCLEVBQTRCLHNDQUFpQjtPQVo5SCxnQkFBZ0IsQ0E4RTVCO0lBQUQsdUJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cblxuaW1wb3J0IHtUZWFtfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlYW1cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5pbXBvcnQge1BvaW50c0xpc3RJdGVtc30gZnJvbSBcIi4uLy4uL3NoYXJlZC9wb2ludHNMaXN0SXRlbXNcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuaW1wb3J0ICogYXMgbGlzdFBpY2tlck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic3VtbWFyeVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnkuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHB1YmxpYyBwbGF5ZXJzIDogUGxheWVyW10gPSBbXTtcbiAgcHVibGljIHRlYW1zIDogVGVhbVtdID0gW107XG4gIHB1YmxpYyBnYW1lTW9kZTogc3RyaW5nO1xuICBwdWJsaWMgcmRwOiBSb3VuZERhdGFQcm92aWRlcjtcbiAgcHVibGljIHNob3c6IHN0cmluZztcblxuICBwdWJsaWMgbWVzc2FnZSA6c3RyaW5nO1xuICBcbiAgcHVibGljIGVsZW1lbnRzOiBBcnJheTxQb2ludHNMaXN0SXRlbXM+ID0gW107XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlciApIHtcbiAgICB0aGlzLnBsYXllcnMgPSByb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzO1xuICAgIHRoaXMudGVhbXMgPSByb3VuZERhdGFQcm92aWRlci50ZWFtczsgICAgXG4gICAgdGhpcy5nYW1lTW9kZSA9IHJvdW5kRGF0YVByb3ZpZGVyLmdhbWVNb2RlO1xuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gIH0gXG4gIFxuICBAVmlld0NoaWxkKFwibGlzdHBpY2tlclwiKSBsaXN0UGlja2VyIDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImdvXCIpIGdvQnRuIDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFsZXJ0XCIpIGFsZXJ0VGV4dCA6IEVsZW1lbnRSZWY7XG4gIFxuICBcbiAgbmdPbkluaXQoKXtcbiAgICAvL1BvcHVsYXRlIHBvaW50cyBsaXN0IGRlcGVuZGluZyBvbiBnYW1lIG1vZGVcbiAgICBpZih0aGlzLnJkcC5nYW1lTW9kZT09XCJ0ZWFtXCIpe1xuICAgICAgY29uc29sZS5sb2coXCJQb3B1bGF0aW5nIFRlYW1zXCIpO1xuICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLnRlYW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBQb2ludHNMaXN0SXRlbXMoXG4gICAgICAgICAgdGhpcy50ZWFtc1tpXS5uYW1lLCB0aGlzLnRlYW1zW2ldLmdldFRvdGFsUG9pbnRzKCksIHRoaXMudGVhbXNbaV0ucGxheWVyc1RvU3RyaW5nKCkgKSk7XG4gICAgICB9XG4gICAgICBcbiAgICB9ZWxzZXtcbiAgICAgIC8vaW5kaXZpZHVhbCBtb2RlXG4gICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgUG9pbnRzTGlzdEl0ZW1zKHRoaXMucGxheWVyc1tpXS5uYW1lLHRoaXMucGxheWVyc1tpXS5ydW5uaW5nUG9pbnRzVG90YWwsIFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5yZHAucGF0aCk7XG4gICAgaWYodGhpcy5yZHAucGF0aCAmJiB0aGlzLnJkcC5wYXRoICE9PSBcIlwiKXtcbiAgICAgIGlmKHRoaXMucmRwLnBhdGggPT0gXCJzdWJqZWN0U2VsZWN0b3JcIil7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiU3ViamVjdCBDaGFuZ2VkIVwiO1xuICAgICAgfSBlbHNlIGlmKHRoaXMucmRwLnBhdGggPT0gXCJwbGF5ZXJDcmVhdG9yXCIpe1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlBsYXllcnMgQ2hhbmdlZCFcIjtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWxlcnRUZXh0Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy5hbGVydFRleHQubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5tZXNzYWdlO1xuICAgICAgdGhpcy5yZHAucGF0aCA9PSBcIlwiO1xuICAgIH1cbiAgfVxuICBcbiAgc2V0dGluZ3NSb3V0ZSgpIHtcbiAgICB0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgdGhpcy5nb0J0bi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5pdGVtcyA9IFtcIkNoYW5nZSBTdWJqZWN0XCIsIFwiQ2hhbmdlIFBsYXllcnNcIl07XG4gIH1cbiAgXG4gIGNoYW5nZVNlbGVjdGVkKCl7XG4gICAgLy8gVE9ETyBuZWVkIHRvIGNsZWFyIGhlcmUgYXMgd2VsbD8/XG4gICAgY29uc29sZS5sb2codGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCk7XG4gICAgaWYodGhpcy5saXN0UGlja2VyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PSAwKXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdWJqZWN0U2VsZWN0b3JcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgdGhpcy5yZHAucGF0aCA9IFwic3VtbWFyeVwiO1xuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJwbGF5ZXJDcmVhdG9yXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMucmRwLnBhdGggPSBcInN1bW1hcnlcIjtcbiAgICB9XG4gIH1cbiAgXG4gIHJlc3RhcnRSb3V0ZSgpIHtcbiAgICAvLyBUT0RPIHJlc2V0IHBvaW50cyBhbmQgZ2FtZVxuICAgIHRoaXMucmRwLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgcGxheWVyLmFuc3dlckNvdW50ID0gMDtcbiAgICAgIHBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwgPSAwO1xuICAgIH0pO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiLCB0aGlzLnJkcC5zdWJqZWN0SWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxufVxuIl19