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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUM7QUFLekMsNENBQXlDO0FBQ3pDLDhDQUEyQztBQUMzQyxnRkFBNEU7QUFRNUU7SUFTRSxnQ0FBMkIsTUFBYyxFQUFVLGlCQUFvQztRQUE1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU4vRSxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUdyQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUd1RSxDQUFDO0lBRTNGLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFOUMsa0dBQWtHO1FBQ2xHLGdFQUFnRTtRQUNoRSw2RkFBNkY7UUFDN0YsSUFBSTtRQUVKLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTywwQ0FBUyxHQUFqQixVQUFrQixVQUFVO1FBQzFCLElBQUksTUFBTSxHQUFVLElBQUksZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxxQ0FBSSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUE3QnlCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVOytEQUFDO0lBUHZDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM1RCxDQUFDO3lDQVdtQyxlQUFNLEVBQTZCLHNDQUFpQjtPQVQ1RSxzQkFBc0IsQ0FxQ2xDO0lBQUQsNkJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0ICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGxheWVyQ3JlYXRvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3BsYXllckNyZWF0b3IvcGxheWVyQ3JlYXRvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUGxheWVyQ3JlYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHByaXZhdGUgZ3JvdXA6IEdyb3VwO1xuICBwcml2YXRlIHBsYXllcnM6IEFycmF5PFBsYXllcj4gID0gW107XG4gIHB1YmxpYyBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XG4gIFxuICBuZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgQFZpZXdDaGlsZChcIm5ld1BsYXllclR4XCIpIG5ld1BsYXllclR4OiBFbGVtZW50UmVmO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDIwO1xuICB9XG4gIFxuICBwcml2YXRlIHN1Ym1pdChncm91cE5hbWUpIHtcbiAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKGdyb3VwTmFtZSk7XG5cbiAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMgPSB0aGlzLnBsYXllcnM7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVycy5sZW5ndGg6IFwiICsgdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzLmxlbmd0aCk7XG4gICAgLy8gZm9yKGxldCBpID0wIDsgaTwgdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzLmxlbmd0aDtpKyspe1xuICAgIC8vICAgY29uc29sZS5sb2coXCJ0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnNcIiArIHRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVyc1tpXS5uYW1lKTsgXG4gICAgLy8gfVxuXG4gICAgdGhpcy5uZXh0KCk7IFxuICB9XG4gIFxuICBwcml2YXRlIGFkZFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgbGV0IHBsYXllcjpQbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllck5hbWUpO1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7ICAgIFxuICAgIHRoaXMubmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIH1cbiAgXG4gIHByaXZhdGUgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2RlU2VsZWN0b3JcIl0pO1xuICB9XG59XG4iXX0=