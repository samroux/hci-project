"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var group_1 = require("../../shared/group");
var player_1 = require("../../shared/player");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var PlayerCreatorComponent = /** @class */ (function () {
    function PlayerCreatorComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.players = [];
        this.newPlayerName = "";
    }
    PlayerCreatorComponent.prototype.ngOnInit = function () {
        this.progressValue = 20;
    };
    PlayerCreatorComponent.prototype.submit = function (groupName) {
        this.group = new group_1.Group(groupName);
        this.roundDataProvider.players = this.players;
        this.next();
    };
    PlayerCreatorComponent.prototype.addPlayer = function (playerName) {
        var player = new player_1.Player(playerName);
        this.players.push(player);
        this.newPlayerName = "";
    };
    PlayerCreatorComponent.prototype.next = function () {
        this.router.navigate(["modeSelector"]);
    };
    __decorate([
        core_1.ViewChild("newPlayerTx"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayerCreatorComponent.prototype, "newPlayerTx", void 0);
    PlayerCreatorComponent = __decorate([
        core_1.Component({
            selector: "playerCreator",
            templateUrl: "pages/playerCreator/playerCreator.html",
            styleUrls: ["pages/playerCreator/playerCreator-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], PlayerCreatorComponent);
    return PlayerCreatorComponent;
}());
exports.PlayerCreatorComponent = PlayerCreatorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUM7QUFLekMsNENBQXlDO0FBQ3pDLDhDQUEyQztBQUMzQyxnRkFBNEU7QUFRNUU7SUFTRSxnQ0FBMkIsTUFBYyxFQUFVLGlCQUFvQztRQUE1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU4vRSxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUdyQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUd1RSxDQUFDO0lBRTNGLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFOUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDBDQUFTLEdBQWpCLFVBQWtCLFVBQVU7UUFDMUIsSUFBSSxNQUFNLEdBQVUsSUFBSSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLHFDQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXhCeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7K0RBQUM7SUFQdkMsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO1NBQzVELENBQUM7eUNBV21DLGVBQU0sRUFBNkIsc0NBQWlCO09BVDVFLHNCQUFzQixDQWdDbEM7SUFBRCw2QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcInVpL3Byb2dyZXNzXCI7XG5cbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvdXBcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwbGF5ZXJDcmVhdG9yXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3BsYXllckNyZWF0b3IvcGxheWVyQ3JlYXRvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcGxheWVyQ3JlYXRvci9wbGF5ZXJDcmVhdG9yLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDcmVhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHJpdmF0ZSBncm91cDogR3JvdXA7XG4gIHByaXZhdGUgcGxheWVyczogQXJyYXk8UGxheWVyPiAgPSBbXTtcbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcbiAgXG4gIG5ld1BsYXllck5hbWUgPSBcIlwiO1xuICBAVmlld0NoaWxkKFwibmV3UGxheWVyVHhcIikgbmV3UGxheWVyVHg6IEVsZW1lbnRSZWY7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gMjA7XG4gIH1cbiAgXG4gIHByaXZhdGUgc3VibWl0KGdyb3VwTmFtZSkge1xuICAgIHRoaXMuZ3JvdXAgPSBuZXcgR3JvdXAoZ3JvdXBOYW1lKTtcblxuICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVycyA9IHRoaXMucGxheWVycztcblxuICAgIHRoaXMubmV4dCgpOyBcbiAgfVxuICBcbiAgcHJpdmF0ZSBhZGRQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgIGxldCBwbGF5ZXI6UGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpOyAgICBcbiAgICB0aGlzLm5ld1BsYXllck5hbWUgPSBcIlwiO1xuICB9XG4gIFxuICBwcml2YXRlIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibW9kZVNlbGVjdG9yXCJdKTtcbiAgfVxufVxuIl19