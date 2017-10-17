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
        this.group = new group_1.Group(groupName, this.players);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUM7QUFLekMsNENBQXlDO0FBQ3pDLDhDQUEyQztBQUMzQyxnRkFBNEU7QUFRNUU7SUFTRSxnQ0FBMkIsTUFBYyxFQUFVLGlCQUFvQztRQUE1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU4vRSxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUdyQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUd1RSxDQUFDO0lBRTNGLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU5QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU8sMENBQVMsR0FBakIsVUFBa0IsVUFBVTtRQUMxQixJQUFJLE1BQU0sR0FBVSxJQUFJLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8scUNBQUksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBeEJ5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTsrREFBQztJQVB2QyxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7U0FDNUQsQ0FBQzt5Q0FXbUMsZUFBTSxFQUE2QixzQ0FBaUI7T0FUNUUsc0JBQXNCLENBZ0NsQztJQUFELDZCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYXllckNyZWF0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcGxheWVyQ3JlYXRvci9wbGF5ZXJDcmVhdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFBsYXllckNyZWF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+ICA9IFtdO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBcbiAgbmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIEBWaWV3Q2hpbGQoXCJuZXdQbGF5ZXJUeFwiKSBuZXdQbGF5ZXJUeDogRWxlbWVudFJlZjtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAyMDtcbiAgfVxuICBcbiAgcHJpdmF0ZSBzdWJtaXQoZ3JvdXBOYW1lKSB7XG4gICAgdGhpcy5ncm91cCA9IG5ldyBHcm91cChncm91cE5hbWUsIHRoaXMucGxheWVycyk7XG5cbiAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMgPSB0aGlzLnBsYXllcnM7XG5cbiAgICB0aGlzLm5leHQoKTsgXG4gIH1cbiAgXG4gIHByaXZhdGUgYWRkUGxheWVyKHBsYXllck5hbWUpIHtcbiAgICBsZXQgcGxheWVyOlBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTsgICAgXG4gICAgdGhpcy5uZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgfVxuICBcbiAgcHJpdmF0ZSBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1vZGVTZWxlY3RvclwiXSk7XG4gIH1cbn1cbiJdfQ==