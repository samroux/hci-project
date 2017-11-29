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
            this.routerExtensions.navigate(["subjectSelector"], { clearHistory: false });
            this.rdp.path = "summary";
        }
        else {
            this.routerExtensions.navigate(["playerCreator"], { clearHistory: false });
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
        this.routerExtensions.navigate(["questionPresenter"], { clearHistory: true });
    };
    SummaryComponent.prototype.quit = function () {
        this.rdp.group = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSwwQ0FBd0Q7QUFDeEQsc0RBQTZEO0FBSTdELDhDQUEyQztBQUUzQyxnRkFBNEU7QUFDNUUsZ0VBQTZEO0FBVzdEO0lBWUUsMEJBQTJCLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVMsaUJBQW9DO1FBQTlHLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFWbEksWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVksRUFBRSxDQUFDO1FBT3BCLGFBQVEsR0FBMkIsRUFBRSxDQUFDO1FBRzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQU9ELG1DQUFRLEdBQVI7UUFDRSw2Q0FBNkM7UUFDN0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUUsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFl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RSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUF2RXdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFjLGlCQUFVO3dEQUFDO0lBQ2hDO1FBQWhCLGdCQUFTLENBQUMsSUFBSSxDQUFDO2tDQUFTLGlCQUFVO21EQUFDO0lBQ2hCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFhLGlCQUFVO3VEQUFDO0lBckJoQyxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDaEQsQ0FBQzt5Q0Fja0MsdUJBQWMsRUFBNEIseUJBQWdCLEVBQTRCLHNDQUFpQjtPQVo5SCxnQkFBZ0IsQ0EyRjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTNGRCxJQTJGQztBQTNGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cblxuaW1wb3J0IHtUZWFtfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlYW1cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5pbXBvcnQge1BvaW50c0xpc3RJdGVtc30gZnJvbSBcIi4uLy4uL3NoYXJlZC9wb2ludHNMaXN0SXRlbXNcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuaW1wb3J0ICogYXMgbGlzdFBpY2tlck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic3VtbWFyeVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnkuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHB1YmxpYyBwbGF5ZXJzIDogUGxheWVyW10gPSBbXTtcbiAgcHVibGljIHRlYW1zIDogVGVhbVtdID0gW107XG4gIHB1YmxpYyBnYW1lTW9kZTogc3RyaW5nO1xuICBwdWJsaWMgcmRwOiBSb3VuZERhdGFQcm92aWRlcjtcbiAgcHVibGljIHNob3c6IHN0cmluZztcblxuICBwdWJsaWMgbWVzc2FnZSA6c3RyaW5nO1xuICBcbiAgcHVibGljIGVsZW1lbnRzOiBBcnJheTxQb2ludHNMaXN0SXRlbXM+ID0gW107XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlciApIHtcbiAgICB0aGlzLnBsYXllcnMgPSByb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzO1xuICAgIHRoaXMudGVhbXMgPSByb3VuZERhdGFQcm92aWRlci50ZWFtczsgICAgXG4gICAgdGhpcy5nYW1lTW9kZSA9IHJvdW5kRGF0YVByb3ZpZGVyLmdhbWVNb2RlO1xuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gIH0gXG4gIFxuICBAVmlld0NoaWxkKFwibGlzdHBpY2tlclwiKSBsaXN0UGlja2VyIDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImdvXCIpIGdvQnRuIDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFsZXJ0XCIpIGFsZXJ0VGV4dCA6IEVsZW1lbnRSZWY7XG4gIFxuICBcbiAgbmdPbkluaXQoKXtcbiAgICAvL1BvcHVsYXRlIHBvaW50cyBsaXN0IGRlcGVuZGluZyBvbiBnYW1lIG1vZGVcbiAgICBpZih0aGlzLnJkcC5nYW1lTW9kZT09XCJ0ZWFtXCIpe1xuICAgICAgY29uc29sZS5sb2coXCJQb3B1bGF0aW5nIFRlYW1zXCIpO1xuICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLnRlYW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBQb2ludHNMaXN0SXRlbXMoXG4gICAgICAgICAgdGhpcy50ZWFtc1tpXS5uYW1lLCB0aGlzLnRlYW1zW2ldLmdldFRvdGFsUG9pbnRzKCksIHRoaXMudGVhbXNbaV0ucGxheWVyc1RvU3RyaW5nKCkgKSk7XG4gICAgICB9XG4gICAgICBcbiAgICB9ZWxzZXtcbiAgICAgIC8vaW5kaXZpZHVhbCBtb2RlXG4gICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgUG9pbnRzTGlzdEl0ZW1zKHRoaXMucGxheWVyc1tpXS5uYW1lLHRoaXMucGxheWVyc1tpXS5ydW5uaW5nUG9pbnRzVG90YWwsIFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5yZHAucGF0aCk7XG4gICAgaWYodGhpcy5yZHAucGF0aCAmJiB0aGlzLnJkcC5wYXRoICE9PSBcIlwiKXtcbiAgICAgIGlmKHRoaXMucmRwLnBhdGggPT0gXCJzdWJqZWN0U2VsZWN0b3JcIil7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiU3ViamVjdCBjaGFuZ2VkIHRvOiBcIi5jb25jYXQodGhpcy5yb3VuZERhdGFQcm92aWRlci5zdWJqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuc3ViamVjdE5hbWUgPSBcIlwiO1xuICAgICAgfSBlbHNlIGlmKHRoaXMucmRwLnBhdGggPT0gXCJwbGF5ZXJDcmVhdG9yXCIpe1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlBsYXllcnMgQ2hhbmdlZCFcIjtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWxlcnRUZXh0Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgdGhpcy5hbGVydFRleHQubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5tZXNzYWdlO1xuICAgICAgdGhpcy5yZHAucGF0aCA9IFwiXCI7XG4gICAgfVxuICB9XG4gIFxuICBzZXR0aW5nc1JvdXRlKCkge1xuICAgIHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB0aGlzLmdvQnRuLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIHRoaXMubGlzdFBpY2tlci5uYXRpdmVFbGVtZW50Lml0ZW1zID0gW1wiQ2hhbmdlIFN1YmplY3RcIiwgXCJDaGFuZ2UgUGxheWVyc1wiXTtcbiAgfVxuICBcbiAgY2hhbmdlU2VsZWN0ZWQoKXtcbiAgICAvLyBUT0RPIG5lZWQgdG8gY2xlYXIgaGVyZSBhcyB3ZWxsPz9cbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4KTtcbiAgICBpZih0aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID09IDApe1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1YmplY3RTZWxlY3RvclwiXSwgeyBjbGVhckhpc3Rvcnk6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5yZHAucGF0aCA9IFwic3VtbWFyeVwiO1xuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJwbGF5ZXJDcmVhdG9yXCJdLCB7IGNsZWFySGlzdG9yeTogZmFsc2UgfSk7XG4gICAgICB0aGlzLnJkcC5jbGVhckRhdGEoKTtcbiAgICAgIHRoaXMucmRwLnBhdGggPSBcInN1bW1hcnlcIjtcbiAgICB9XG4gIH1cbiAgXG4gIHJlc3RhcnRSb3V0ZSgpIHtcbiAgICAvLyBUT0RPIHJlc2V0IHBvaW50cyBhbmQgZ2FtZVxuICAgIHRoaXMucmRwLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgcGxheWVyLmFuc3dlckNvdW50ID0gMDtcbiAgICAgIHBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwgPSAwO1xuICAgICAgcGxheWVyLmNhbkFzayA9IHRydWU7XG4gICAgfSk7XG4gICAgdGhpcy5yZHAucGF0aCA9IFwiXCJcbiAgICB0aGlzLnJkcC5oYXNRdWVzdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyID0gbmV3IFBsYXllcihcIlwiKVxuICAgIHRoaXMucmRwLmhhc1JlbWFpbmluZ1BsYXllcnMgPSB0cnVlO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbiAgcHJpdmF0ZSBxdWl0KCl7XG4gICAgdGhpcy5yZHAuZ3JvdXAgPSBudWxsO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdGFydFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbn1cbiJdfQ==