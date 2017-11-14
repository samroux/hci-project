"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var ModeSelectorComponent = /** @class */ (function () {
    function ModeSelectorComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.rdp = roundDataProvider;
        this.playersName = roundDataProvider.group.playersName;
        this.groupName = roundDataProvider.group.name;
    }
    ModeSelectorComponent.prototype.ngOnInit = function () {
        if (this.rdp.players.length % 2 != 0 || this.rdp.players.length == 2) {
            this.teamBtn.nativeElement.backgroundColor = "#d2d2d2";
        }
        this.progressValue = 40;
    };
    ModeSelectorComponent.prototype.individualPlay = function () {
        this.rdp.gameMode = "individual";
        this.next("individual");
    };
    ModeSelectorComponent.prototype.teamPlay = function () {
        console.log("players");
        console.log(this.rdp.players.length);
        if (this.rdp.players.length % 2 != 0 || this.rdp.players.length == 2) {
            this.warning.nativeElement.color = "red";
            this.warning.nativeElement.visibility = "visible";
            return;
        }
        var teamCount = this.roundDataProvider.calculateTeamCount();
        if (teamCount > 1) {
            this.rdp.gameMode = "team";
            this.next("team");
        }
    };
    ModeSelectorComponent.prototype.next = function (mode) {
        if (mode == "team") {
            this.router.navigate(["teamBuilder"]);
        }
        else {
            this.router.navigate(["subjectSelector"]);
        }
    };
    __decorate([
        core_1.ViewChild("teamBtn"),
        __metadata("design:type", core_1.ElementRef)
    ], ModeSelectorComponent.prototype, "teamBtn", void 0);
    __decorate([
        core_1.ViewChild("warning"),
        __metadata("design:type", core_1.ElementRef)
    ], ModeSelectorComponent.prototype, "warning", void 0);
    ModeSelectorComponent = __decorate([
        core_1.Component({
            selector: "modeSelector",
            templateUrl: "pages/modeSelector/modeSelector.html",
            styleUrls: ["pages/modeSelector/modeSelector-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], ModeSelectorComponent);
    return ModeSelectorComponent;
}());
exports.ModeSelectorComponent = ModeSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZVNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBSXpDLGdGQUE0RTtBQVM1RTtJQVVFLCtCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3JGLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBR0Qsd0NBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsWUFBWSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2xELE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFJLFNBQVMsR0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxRCxFQUFFLENBQUEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVPLG9DQUFJLEdBQVosVUFBYSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBcENxQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVSxpQkFBVTswREFBQztJQUNwQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVSxpQkFBVTswREFBQztJQWhCL0IscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO1NBQzFELENBQUM7eUNBWW1DLGVBQU0sRUFBNkIsc0NBQWlCO09BVjVFLHFCQUFxQixDQW9EakM7SUFBRCw0QkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibW9kZVNlbGVjdG9yXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21vZGVTZWxlY3Rvci9tb2RlU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL21vZGVTZWxlY3Rvci9tb2RlU2VsZWN0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGVTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBwcml2YXRlIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgXG4gIFxuICBwcml2YXRlIHBsYXllcnNOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgZ3JvdXBOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcmRwOiBSb3VuZERhdGFQcm92aWRlcjsgXG4gIFxuICBcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge1xuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gICAgdGhpcy5wbGF5ZXJzTmFtZSA9IHJvdW5kRGF0YVByb3ZpZGVyLmdyb3VwLnBsYXllcnNOYW1lO1xuICAgIHRoaXMuZ3JvdXBOYW1lID0gcm91bmREYXRhUHJvdmlkZXIuZ3JvdXAubmFtZTtcbiAgfVxuICBAVmlld0NoaWxkKFwidGVhbUJ0blwiKSB0ZWFtQnRuOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwid2FybmluZ1wiKSB3YXJuaW5nOiBFbGVtZW50UmVmO1xuICBuZ09uSW5pdCgpe1xuICAgIGlmKHRoaXMucmRwLnBsYXllcnMubGVuZ3RoICUgMiAhPSAwIHx8IHRoaXMucmRwLnBsYXllcnMubGVuZ3RoID09IDIpe1xuICAgICAgdGhpcy50ZWFtQnRuLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gXCIjZDJkMmQyXCI7XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDQwO1xuICB9XG4gIFxuICBpbmRpdmlkdWFsUGxheSgpIHtcbiAgICB0aGlzLnJkcC5nYW1lTW9kZT1cImluZGl2aWR1YWxcIjtcbiAgICB0aGlzLm5leHQoXCJpbmRpdmlkdWFsXCIpO1xuICB9XG4gIFxuICB0ZWFtUGxheSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInBsYXllcnNcIilcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJkcC5wbGF5ZXJzLmxlbmd0aClcbiAgICBpZih0aGlzLnJkcC5wbGF5ZXJzLmxlbmd0aCAlIDIgIT0gMCB8fCB0aGlzLnJkcC5wbGF5ZXJzLmxlbmd0aCA9PSAyKXtcbiAgICAgIHRoaXMud2FybmluZy5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIHRoaXMud2FybmluZy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHRlYW1Db3VudD10aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmNhbGN1bGF0ZVRlYW1Db3VudCgpO1xuICAgIFxuICAgIGlmKHRlYW1Db3VudCA+IDEpe1xuICAgICAgdGhpcy5yZHAuZ2FtZU1vZGU9XCJ0ZWFtXCI7XG4gICAgICB0aGlzLm5leHQoXCJ0ZWFtXCIpO1xuICAgIH1cbiAgfVxuICBcbiAgcHJpdmF0ZSBuZXh0KG1vZGUpIHtcbiAgICBpZihtb2RlID09IFwidGVhbVwiKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRlYW1CdWlsZGVyXCJdKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCJdKVxuICAgIH1cbiAgfVxufVxuIl19