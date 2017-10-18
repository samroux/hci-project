"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var group_1 = require("../../shared/group");
var player_1 = require("../../shared/player");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var PlayerCreatorComponent = /** @class */ (function () {
    function PlayerCreatorComponent(route, router, roundDataProvider) {
        this.route = route;
        this.router = router;
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
        var player = new player_1.Player(playerName);
        this.players.push(player);
        this.newPlayerName = "";
    };
    PlayerCreatorComponent.prototype.next = function () {
        this.router.navigate(["modeSelector"]);
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, roundData_provider_1.RoundDataProvider])
    ], PlayerCreatorComponent);
    return PlayerCreatorComponent;
}());
exports.PlayerCreatorComponent = PlayerCreatorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUQ7QUFLekQsNENBQXlDO0FBQ3pDLDhDQUEyQztBQUMzQyxnRkFBNEU7QUFRNUU7SUFXRSxnQ0FBMkIsS0FBb0IsRUFBVSxNQUFjLEVBQVUsaUJBQW9DO1FBQTFGLFVBQUssR0FBTCxLQUFLLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVI3RyxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUtyQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUlqQiw0Q0FBNEM7UUFDNUMsbUNBQW1DO1FBQ25DLFFBQVE7UUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDO0lBQy9CLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLHVDQUFNLEdBQWQsVUFBZSxTQUFTO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDBDQUFTLEdBQWpCLFVBQWtCLFVBQVU7UUFDMUIsSUFBSSxNQUFNLEdBQVUsSUFBSSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLHFDQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsNkNBQTZDO0lBQy9DLENBQUM7SUE3QnlCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVOytEQUFDO0lBVHZDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM1RCxDQUFDO3lDQWFpQyx1QkFBYyxFQUFrQixlQUFNLEVBQTZCLHNDQUFpQjtPQVgxRyxzQkFBc0IsQ0F1Q2xDO0lBQUQsNkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0ICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYXllckNyZWF0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcGxheWVyQ3JlYXRvci9wbGF5ZXJDcmVhdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFBsYXllckNyZWF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+ICA9IFtdO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXI7XG4gIHByaXZhdGUgcmV0dXJuUGF0aDogc3RyaW5nO1xuICBcbiAgbmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIEBWaWV3Q2hpbGQoXCJuZXdQbGF5ZXJUeFwiKSBuZXdQbGF5ZXJUeDogRWxlbWVudFJlZjtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge1xuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgLy8gICB0aGlzLnJldHVyblBhdGggPSBwYXJhbXMucGF0aDtcbiAgICAvLyB9KTsgIFxuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDIwO1xuICB9XG4gIFxuICBwcml2YXRlIHN1Ym1pdChncm91cE5hbWUpIHtcbiAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKGdyb3VwTmFtZSwgdGhpcy5wbGF5ZXJzKTtcbiAgICB0aGlzLnJkcC5wbGF5ZXJzID0gdGhpcy5wbGF5ZXJzO1xuICAgIHRoaXMucmRwLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICB0aGlzLm5leHQoKTsgXG4gIH1cbiAgXG4gIHByaXZhdGUgYWRkUGxheWVyKHBsYXllck5hbWUpIHtcbiAgICBsZXQgcGxheWVyOlBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTsgICAgXG4gICAgdGhpcy5uZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgfVxuICBcbiAgcHJpdmF0ZSBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1vZGVTZWxlY3RvclwiXSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm46XCIgKyB0aGlzLnJldHVyblBhdGgpOyBcbiAgfVxufVxuIl19