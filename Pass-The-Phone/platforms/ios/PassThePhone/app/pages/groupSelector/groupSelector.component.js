"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var player_1 = require("../../shared/player");
var group_1 = require("../../shared/group");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var GroupSelectorComponent = /** @class */ (function () {
    function GroupSelectorComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.groups = [];
    }
    GroupSelectorComponent.prototype.ngOnInit = function () {
        this.progressValue = 20;
        var player1 = new player_1.Player("Sam");
        var player2 = new player_1.Player("Joe");
        var player3 = new player_1.Player("John");
        var player4 = new player_1.Player("Will");
        var player5 = new player_1.Player("Oli");
        var player6 = new player_1.Player("Fab");
        var player7 = new player_1.Player("Flo");
        var player8 = new player_1.Player("Ege");
        var player9 = new player_1.Player("Steve");
        var player10 = new player_1.Player("Asher");
        var groupPlayers1 = [player1, player2, player3];
        var groupPlayers2 = [player2, player3, player4, player6];
        var groupPlayers3 = [player4, player5, player6];
        var groupPlayers4 = [player6, player7, player8, player4];
        var groupPlayers5 = [player8, player9, player10];
        var groupPlayers6 = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];
        this.groups.push(new group_1.Group("groupPlayers1", groupPlayers1));
        this.groups.push(new group_1.Group("groupPlayers2", groupPlayers2));
        this.groups.push(new group_1.Group("groupPlayers3", groupPlayers3));
        this.groups.push(new group_1.Group("groupPlayers4", groupPlayers4));
        this.groups.push(new group_1.Group("groupPlayers5", groupPlayers5));
        this.groups.push(new group_1.Group("groupPlayers6", groupPlayers6));
    };
    GroupSelectorComponent.prototype.onItemTap = function (args) {
        // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index >= 0) {
            this.selectedGroup = this.groups[args.index];
            console.log("Chosen: " + this.selectedGroup.name);
            this.roundDataProvider.players = this.selectedGroup.players;
            this.roundDataProvider.group = this.selectedGroup;
            console.log("Group: " + this.roundDataProvider.group.name);
            console.log("Players: " + this.roundDataProvider.players);
            this.next();
        }
    };
    GroupSelectorComponent.prototype.next = function () {
        this.router.navigate(["modeSelector"]);
    };
    GroupSelectorComponent = __decorate([
        core_1.Component({
            selector: "groupSelector",
            templateUrl: "pages/groupSelector/groupSelector.html",
            styleUrls: ["pages/groupSelector/groupSelector-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], GroupSelectorComponent);
    return GroupSelectorComponent;
}());
exports.GroupSelectorComponent = GroupSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBTZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cFNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFHekMsOENBQTJDO0FBQzNDLDRDQUF5QztBQUN6QyxnRkFBNEU7QUFTNUU7SUFNRSxnQ0FBMkIsTUFBYyxFQUFVLGlCQUFvQztRQUE1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUwvRSxXQUFNLEdBQWlCLEVBQUUsQ0FBQztJQUt3RCxDQUFDO0lBRTNGLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUV4QixJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUVoRSxDQUFDO0lBRU0sMENBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQiw2RUFBNkU7UUFDN0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEdBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBRTVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUd6RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQTFEVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7U0FDNUQsQ0FBQzt5Q0FRbUMsZUFBTSxFQUE2QixzQ0FBaUI7T0FONUUsc0JBQXNCLENBMkRsQztJQUFELDZCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3JvdXBTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ncm91cFNlbGVjdG9yL2dyb3VwU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2dyb3VwU2VsZWN0b3IvZ3JvdXBTZWxlY3Rvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHJpdmF0ZSBncm91cHM6IEFycmF5PEdyb3VwPiA9IFtdO1xuICBwcml2YXRlIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgIFxuXG4gIHByaXZhdGUgc2VsZWN0ZWRHcm91cDogR3JvdXA7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAyMDtcbiAgICBcbiAgICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJTYW1cIik7XG4gICAgbGV0IHBsYXllcjIgPSBuZXcgUGxheWVyKFwiSm9lXCIpO1xuICAgIGxldCBwbGF5ZXIzID0gbmV3IFBsYXllcihcIkpvaG5cIik7XG4gICAgbGV0IHBsYXllcjQgPSBuZXcgUGxheWVyKFwiV2lsbFwiKTtcbiAgICBsZXQgcGxheWVyNSA9IG5ldyBQbGF5ZXIoXCJPbGlcIik7XG4gICAgbGV0IHBsYXllcjYgPSBuZXcgUGxheWVyKFwiRmFiXCIpO1xuICAgIGxldCBwbGF5ZXI3ID0gbmV3IFBsYXllcihcIkZsb1wiKTtcbiAgICBsZXQgcGxheWVyOCA9IG5ldyBQbGF5ZXIoXCJFZ2VcIik7XG4gICAgbGV0IHBsYXllcjkgPSBuZXcgUGxheWVyKFwiU3RldmVcIik7XG4gICAgbGV0IHBsYXllcjEwID0gbmV3IFBsYXllcihcIkFzaGVyXCIpO1xuICAgIFxuICAgIGxldCBncm91cFBsYXllcnMxID0gW3BsYXllcjEsIHBsYXllcjIsIHBsYXllcjNdO1xuICAgIGxldCBncm91cFBsYXllcnMyID0gW3BsYXllcjIsIHBsYXllcjMsIHBsYXllcjQsIHBsYXllcjZdO1xuICAgIGxldCBncm91cFBsYXllcnMzID0gW3BsYXllcjQsIHBsYXllcjUsIHBsYXllcjZdO1xuICAgIGxldCBncm91cFBsYXllcnM0ID0gW3BsYXllcjYsIHBsYXllcjcsIHBsYXllcjgsIHBsYXllcjRdO1xuICAgIGxldCBncm91cFBsYXllcnM1ID0gW3BsYXllcjgsIHBsYXllcjksIHBsYXllcjEwXTtcbiAgICBsZXQgZ3JvdXBQbGF5ZXJzNiA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzLCBwbGF5ZXI0LCBwbGF5ZXI1LCBwbGF5ZXI2LCBwbGF5ZXI3LCBwbGF5ZXI4LCBwbGF5ZXI5LCBwbGF5ZXIxMF07XG5cbiAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzMVwiLCBncm91cFBsYXllcnMxKSk7XG4gICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczJcIiwgZ3JvdXBQbGF5ZXJzMikpO1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnMzXCIsIGdyb3VwUGxheWVyczMpKTtcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNFwiLCBncm91cFBsYXllcnM0KSk7XG4gICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczVcIiwgZ3JvdXBQbGF5ZXJzNSkpO1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnM2XCIsIGdyb3VwUGxheWVyczYpKTtcbiAgICBcbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPj0gMCl7XG4gICAgICB0aGlzLnNlbGVjdGVkR3JvdXAgPSB0aGlzLmdyb3Vwc1thcmdzLmluZGV4XTtcbiAgICAgIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZEdyb3VwLm5hbWUpO1xuXG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMgPSB0aGlzLnNlbGVjdGVkR3JvdXAucGxheWVycztcblxuICAgICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5ncm91cCA9IHRoaXMuc2VsZWN0ZWRHcm91cDtcblxuICAgICAgY29uc29sZS5sb2coXCJHcm91cDogXCIrIHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ3JvdXAubmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlBsYXllcnM6IFwiKyB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMpO1xuICAgICAgXG5cbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2RlU2VsZWN0b3JcIl0pXG4gIH1cbn1cbiJdfQ==