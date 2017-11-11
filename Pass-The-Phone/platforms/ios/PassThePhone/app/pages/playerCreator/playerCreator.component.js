"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var group_1 = require("../../shared/group");
var player_1 = require("../../shared/player");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var PlayerCreatorComponent = /** @class */ (function () {
    function PlayerCreatorComponent(route, router, routerExtensions, roundDataProvider) {
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.roundDataProvider = roundDataProvider;
        this.players = [];
        this.newPlayerName = "";
        // this.route.params.subscribe((params) => {
        //   this.returnPath = params.path;
        // });  
        this.rdp = roundDataProvider;
    }
    PlayerCreatorComponent.prototype.ngOnInit = function () {
        this.progressValue = 20;
    };
    PlayerCreatorComponent.prototype.submit = function (groupName) {
        this.group = new group_1.Group(groupName, this.players);
        this.rdp.players = this.players;
        this.rdp.group = this.group;
        this.next();
    };
    PlayerCreatorComponent.prototype.addPlayer = function (playerName) {
        if (playerName == "") {
            // console.log("Cannot allow empty player name");
            return;
        }
        var player = new player_1.Player(playerName);
        this.players.push(player);
        this.newPlayerName = "";
    };
    PlayerCreatorComponent.prototype.next = function () {
        if (this.rdp.path && this.rdp.path !== "") {
            this.rdp.path = "playerCreator";
            console.log(this.rdp.path);
            this.routerExtensions.navigate(["summary"], { clearHistory: true });
        }
        else {
            this.router.navigate(["modeSelector"]);
        }
        // console.log("return:" + this.returnPath); 
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, router_2.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], PlayerCreatorComponent);
    return PlayerCreatorComponent;
}());
exports.PlayerCreatorComponent = PlayerCreatorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUQ7QUFDekQsc0RBQTZEO0FBSzdELDRDQUF5QztBQUN6Qyw4Q0FBMkM7QUFDM0MsZ0ZBQTRFO0FBUTVFO0lBV0UsZ0NBQTJCLEtBQW9CLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQztRQUF0SSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUnpKLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBS3JDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBSWpCLDRDQUE0QztRQUM1QyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU8sMENBQVMsR0FBakIsVUFBa0IsVUFBVTtRQUMxQixFQUFFLENBQUEsQ0FBQyxVQUFVLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNqQixpREFBaUQ7WUFDakQsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELElBQUksTUFBTSxHQUFVLElBQUksZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxxQ0FBSSxHQUFaO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsNkNBQTZDO0lBQy9DLENBQUM7SUF2Q3lCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVOytEQUFDO0lBVHZDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM1RCxDQUFDO3lDQWFpQyx1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUE2QixzQ0FBaUI7T0FYdEosc0JBQXNCLENBaURsQztJQUFELDZCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYXllckNyZWF0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcGxheWVyQ3JlYXRvci9wbGF5ZXJDcmVhdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFBsYXllckNyZWF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+ICA9IFtdO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXI7XG4gIHByaXZhdGUgcmV0dXJuUGF0aDogc3RyaW5nO1xuICBcbiAgbmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIEBWaWV3Q2hpbGQoXCJuZXdQbGF5ZXJUeFwiKSBuZXdQbGF5ZXJUeDogRWxlbWVudFJlZjtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgLy8gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAvLyAgIHRoaXMucmV0dXJuUGF0aCA9IHBhcmFtcy5wYXRoO1xuICAgIC8vIH0pOyAgXG4gICAgdGhpcy5yZHAgPSByb3VuZERhdGFQcm92aWRlcjtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gMjA7XG4gIH1cbiAgXG4gIHByaXZhdGUgc3VibWl0KGdyb3VwTmFtZSkge1xuICAgIHRoaXMuZ3JvdXAgPSBuZXcgR3JvdXAoZ3JvdXBOYW1lLCB0aGlzLnBsYXllcnMpO1xuICAgIHRoaXMucmRwLnBsYXllcnMgPSB0aGlzLnBsYXllcnM7XG4gICAgdGhpcy5yZHAuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgIHRoaXMubmV4dCgpOyBcbiAgfVxuICBcbiAgcHJpdmF0ZSBhZGRQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgIGlmKHBsYXllck5hbWU9PVwiXCIpe1xuICAgICAgLy8gY29uc29sZS5sb2coXCJDYW5ub3QgYWxsb3cgZW1wdHkgcGxheWVyIG5hbWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwbGF5ZXI6UGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpOyAgICBcbiAgICB0aGlzLm5ld1BsYXllck5hbWUgPSBcIlwiO1xuICB9XG4gIFxuICBwcml2YXRlIG5leHQoKSB7XG4gICAgaWYodGhpcy5yZHAucGF0aCAmJiB0aGlzLnJkcC5wYXRoICE9PSBcIlwiKXtcbiAgICAgIHRoaXMucmRwLnBhdGggPSBcInBsYXllckNyZWF0b3JcIjtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmRwLnBhdGgpO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1vZGVTZWxlY3RvclwiXSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuOlwiICsgdGhpcy5yZXR1cm5QYXRoKTsgXG4gIH1cbn1cbiJdfQ==