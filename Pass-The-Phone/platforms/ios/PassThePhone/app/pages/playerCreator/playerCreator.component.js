"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var group_1 = require("../../shared/group");
var player_1 = require("../../shared/player");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var PlayerCreatorComponent = /** @class */ (function () {
    function PlayerCreatorComponent(route, router, roundDataProvider) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.players = [];
        this.newPlayerName = "";
        this.route.params.subscribe(function (params) {
            _this.returnPath = params.path;
        });
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
        if (this.returnPath == "summary") {
            this.router.navigate(["summary"]);
        }
        else {
            this.router.navigate(["modeSelector"]);
        }
        console.log("return:" + this.returnPath);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUQ7QUFLekQsNENBQXlDO0FBQ3pDLDhDQUEyQztBQUMzQyxnRkFBNEU7QUFRNUU7SUFXRSxnQ0FBMkIsS0FBb0IsRUFBVSxNQUFjLEVBQVUsaUJBQW9DO1FBQXJILGlCQUtDO1FBTDBCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVI3RyxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUtyQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUlqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU8sMENBQVMsR0FBakIsVUFBa0IsVUFBVTtRQUMxQixJQUFJLE1BQU0sR0FBVSxJQUFJLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8scUNBQUksR0FBWjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQWpDeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7K0RBQUM7SUFUdkMsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO1NBQzVELENBQUM7eUNBYWlDLHVCQUFjLEVBQWtCLGVBQU0sRUFBNkIsc0NBQWlCO09BWDFHLHNCQUFzQixDQTJDbEM7SUFBRCw2QkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGxheWVyQ3JlYXRvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3BsYXllckNyZWF0b3IvcGxheWVyQ3JlYXRvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUGxheWVyQ3JlYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHByaXZhdGUgZ3JvdXA6IEdyb3VwO1xuICBwcml2YXRlIHBsYXllcnM6IEFycmF5PFBsYXllcj4gID0gW107XG4gIHB1YmxpYyBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgcmRwOiBSb3VuZERhdGFQcm92aWRlcjtcbiAgcHJpdmF0ZSByZXR1cm5QYXRoOiBzdHJpbmc7XG4gIFxuICBuZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgQFZpZXdDaGlsZChcIm5ld1BsYXllclR4XCIpIG5ld1BsYXllclR4OiBFbGVtZW50UmVmO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMucmV0dXJuUGF0aCA9IHBhcmFtcy5wYXRoO1xuICAgIH0pOyAgXG4gICAgdGhpcy5yZHAgPSByb3VuZERhdGFQcm92aWRlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDIwO1xuICB9XG4gIFxuICBwcml2YXRlIHN1Ym1pdChncm91cE5hbWUpIHtcbiAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKGdyb3VwTmFtZSwgdGhpcy5wbGF5ZXJzKTtcbiAgICB0aGlzLnJkcC5wbGF5ZXJzID0gdGhpcy5wbGF5ZXJzO1xuICAgIHRoaXMucmRwLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICB0aGlzLm5leHQoKTsgXG4gIH1cbiAgXG4gIHByaXZhdGUgYWRkUGxheWVyKHBsYXllck5hbWUpIHtcbiAgICBsZXQgcGxheWVyOlBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTsgICAgXG4gICAgdGhpcy5uZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgfVxuICBcbiAgcHJpdmF0ZSBuZXh0KCkge1xuICAgIGlmKHRoaXMucmV0dXJuUGF0aCA9PSBcInN1bW1hcnlcIil7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdKTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2RlU2VsZWN0b3JcIl0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInJldHVybjpcIiArIHRoaXMucmV0dXJuUGF0aCk7IFxuICB9XG59XG4iXX0=