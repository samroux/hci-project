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
    PlayerCreatorComponent.prototype.submit = function (groupName) {
        this.group = new group_1.Group(groupName);
        this.roundDataProvider.players = this.players;
        // console.log("this.roundDataProvider.players.length: " + this.roundDataProvider.players.length);
        // for(let i =0 ; i< this.roundDataProvider.players.length;i++){
        //   console.log("this.roundDataProvider.players" + this.roundDataProvider.players[i].name); 
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRTtBQUNsRSwwQ0FBeUM7QUFLekMsNENBQXlDO0FBQ3pDLDhDQUEyQztBQUMzQyxnRkFBNEU7QUFRNUU7SUFPRSxnQ0FBMkIsTUFBYyxFQUFVLGlCQUFvQztRQUE1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUovRSxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUNyQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUd1RSxDQUFDO0lBRW5GLHVDQUFNLEdBQWQsVUFBZSxTQUFTO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTlDLGtHQUFrRztRQUNsRyxnRUFBZ0U7UUFDaEUsNkZBQTZGO1FBQzdGLElBQUk7UUFFSixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU8sMENBQVMsR0FBakIsVUFBa0IsVUFBVTtRQUMxQixJQUFJLE1BQU0sR0FBVSxJQUFJLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8scUNBQUksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBekJ5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTsrREFBQztJQUx2QyxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7U0FDNUQsQ0FBQzt5Q0FTbUMsZUFBTSxFQUE2QixzQ0FBaUI7T0FQNUUsc0JBQXNCLENBK0JsQztJQUFELDZCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuXG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGxheWVyQ3JlYXRvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3BsYXllckNyZWF0b3IvcGxheWVyQ3JlYXRvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUGxheWVyQ3JlYXRvckNvbXBvbmVudCB7XG4gIFxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+ICA9IFtdO1xuICBuZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgQFZpZXdDaGlsZChcIm5ld1BsYXllclR4XCIpIG5ld1BsYXllclR4OiBFbGVtZW50UmVmO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuICBcbiAgcHJpdmF0ZSBzdWJtaXQoZ3JvdXBOYW1lKSB7XG4gICAgdGhpcy5ncm91cCA9IG5ldyBHcm91cChncm91cE5hbWUpO1xuXG4gICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzID0gdGhpcy5wbGF5ZXJzO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMubGVuZ3RoOiBcIiArIHRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVycy5sZW5ndGgpO1xuICAgIC8vIGZvcihsZXQgaSA9MCA7IGk8IHRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVycy5sZW5ndGg7aSsrKXtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwidGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzXCIgKyB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnNbaV0ubmFtZSk7IFxuICAgIC8vIH1cblxuICAgIHRoaXMubmV4dCgpOyBcbiAgfVxuICBcbiAgcHJpdmF0ZSBhZGRQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgIGxldCBwbGF5ZXI6UGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpOyAgICBcbiAgICB0aGlzLm5ld1BsYXllck5hbWUgPSBcIlwiO1xuICB9XG4gIFxuICBwcml2YXRlIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibW9kZVNlbGVjdG9yXCJdKTtcbiAgfVxufVxuIl19