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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUQ7QUFDekQsc0RBQTZEO0FBSzdELDRDQUF5QztBQUN6Qyw4Q0FBMkM7QUFDM0MsZ0ZBQTRFO0FBUTVFO0lBV0UsZ0NBQTJCLEtBQW9CLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQztRQUF0SSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUnpKLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBS3JDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBSWpCLDRDQUE0QztRQUM1QyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU8sMENBQVMsR0FBakIsVUFBa0IsVUFBVTtRQUMxQixJQUFJLE1BQU0sR0FBVSxJQUFJLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8scUNBQUksR0FBWjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELDZDQUE2QztJQUMvQyxDQUFDO0lBbkN5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTsrREFBQztJQVR2QyxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7U0FDNUQsQ0FBQzt5Q0FhaUMsdUJBQWMsRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBNkIsc0NBQWlCO09BWHRKLHNCQUFzQixDQTZDbEM7SUFBRCw2QkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcInVpL3Byb2dyZXNzXCI7XG5cbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvdXBcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwbGF5ZXJDcmVhdG9yXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3BsYXllckNyZWF0b3IvcGxheWVyQ3JlYXRvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcGxheWVyQ3JlYXRvci9wbGF5ZXJDcmVhdG9yLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDcmVhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHJpdmF0ZSBncm91cDogR3JvdXA7XG4gIHByaXZhdGUgcGxheWVyczogQXJyYXk8UGxheWVyPiAgPSBbXTtcbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSByZHA6IFJvdW5kRGF0YVByb3ZpZGVyO1xuICBwcml2YXRlIHJldHVyblBhdGg6IHN0cmluZztcbiAgXG4gIG5ld1BsYXllck5hbWUgPSBcIlwiO1xuICBAVmlld0NoaWxkKFwibmV3UGxheWVyVHhcIikgbmV3UGxheWVyVHg6IEVsZW1lbnRSZWY7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge1xuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgLy8gICB0aGlzLnJldHVyblBhdGggPSBwYXJhbXMucGF0aDtcbiAgICAvLyB9KTsgIFxuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDIwO1xuICB9XG4gIFxuICBwcml2YXRlIHN1Ym1pdChncm91cE5hbWUpIHtcbiAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKGdyb3VwTmFtZSwgdGhpcy5wbGF5ZXJzKTtcbiAgICB0aGlzLnJkcC5wbGF5ZXJzID0gdGhpcy5wbGF5ZXJzO1xuICAgIHRoaXMucmRwLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICB0aGlzLm5leHQoKTsgXG4gIH1cbiAgXG4gIHByaXZhdGUgYWRkUGxheWVyKHBsYXllck5hbWUpIHtcbiAgICBsZXQgcGxheWVyOlBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTsgICAgXG4gICAgdGhpcy5uZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgfVxuICBcbiAgcHJpdmF0ZSBuZXh0KCkge1xuICAgIGlmKHRoaXMucmRwLnBhdGggJiYgdGhpcy5yZHAucGF0aCAhPT0gXCJcIil7XG4gICAgICB0aGlzLnJkcC5wYXRoID0gXCJwbGF5ZXJDcmVhdG9yXCI7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJkcC5wYXRoKTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2RlU2VsZWN0b3JcIl0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcInJldHVybjpcIiArIHRoaXMucmV0dXJuUGF0aCk7IFxuICB9XG59XG4iXX0=