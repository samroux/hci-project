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
        var groupPlayers2 = [player2, player3, player4];
        var groupPlayers3 = [player4, player5, player6];
        var groupPlayers4 = [player6, player7, player8];
        var groupPlayers5 = [player8, player9, player10];
        this.groups.push(new group_1.Group(null, []));
        this.groups.push(new group_1.Group("groupPlayers1", groupPlayers1));
        this.groups.push(new group_1.Group("groupPlayers2", groupPlayers2));
        this.groups.push(new group_1.Group("groupPlayers3", groupPlayers3));
        this.groups.push(new group_1.Group("groupPlayers4", groupPlayers4));
        this.groups.push(new group_1.Group("groupPlayers5", groupPlayers5));
    };
    GroupSelectorComponent.prototype.onItemTap = function (args) {
        // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index > 0) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBTZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cFNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFHekMsOENBQTJDO0FBQzNDLDRDQUF5QztBQUN6QyxnRkFBNEU7QUFTNUU7SUFNRSxnQ0FBMkIsTUFBYyxFQUFVLGlCQUFvQztRQUE1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUwvRSxXQUFNLEdBQWlCLEVBQUUsQ0FBQztJQUt3RCxDQUFDO0lBRTNGLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUV4QixJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksYUFBSyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksYUFBSyxDQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksYUFBSyxDQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksYUFBSyxDQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksYUFBSyxDQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksYUFBSyxDQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSwwQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLDZFQUE2RTtRQUM3RSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFFLFVBQVUsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFFNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRWxELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBR3pELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBekRVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM1RCxDQUFDO3lDQVFtQyxlQUFNLEVBQTZCLHNDQUFpQjtPQU41RSxzQkFBc0IsQ0EwRGxDO0lBQUQsNkJBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7VGVhbX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWFtXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvdXBcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJncm91cFNlbGVjdG9yXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2dyb3VwU2VsZWN0b3IvZ3JvdXBTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvZ3JvdXBTZWxlY3Rvci9ncm91cFNlbGVjdG9yLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHcm91cFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwcml2YXRlIGdyb3VwczogQXJyYXk8R3JvdXA+ID0gW107XG4gIHByaXZhdGUgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyOyAgXG5cbiAgcHJpdmF0ZSBzZWxlY3RlZEdyb3VwOiBHcm91cDtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge31cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDIwO1xuICAgIFxuICAgIGxldCBwbGF5ZXIxID0gbmV3IFBsYXllcihcIlNhbVwiKTtcbiAgICBsZXQgcGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJKb2VcIik7XG4gICAgbGV0IHBsYXllcjMgPSBuZXcgUGxheWVyKFwiSm9oblwiKTtcbiAgICBsZXQgcGxheWVyNCA9IG5ldyBQbGF5ZXIoXCJXaWxsXCIpO1xuICAgIGxldCBwbGF5ZXI1ID0gbmV3IFBsYXllcihcIk9saVwiKTtcbiAgICBsZXQgcGxheWVyNiA9IG5ldyBQbGF5ZXIoXCJGYWJcIik7XG4gICAgbGV0IHBsYXllcjcgPSBuZXcgUGxheWVyKFwiRmxvXCIpO1xuICAgIGxldCBwbGF5ZXI4ID0gbmV3IFBsYXllcihcIkVnZVwiKTtcbiAgICBsZXQgcGxheWVyOSA9IG5ldyBQbGF5ZXIoXCJTdGV2ZVwiKTtcbiAgICBsZXQgcGxheWVyMTAgPSBuZXcgUGxheWVyKFwiQXNoZXJcIik7XG4gICAgXG4gICAgbGV0IGdyb3VwUGxheWVyczEgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyM107XG4gICAgbGV0IGdyb3VwUGxheWVyczIgPSBbcGxheWVyMiwgcGxheWVyMywgcGxheWVyNF07XG4gICAgbGV0IGdyb3VwUGxheWVyczMgPSBbcGxheWVyNCwgcGxheWVyNSwgcGxheWVyNl07XG4gICAgbGV0IGdyb3VwUGxheWVyczQgPSBbcGxheWVyNiwgcGxheWVyNywgcGxheWVyOF07XG4gICAgbGV0IGdyb3VwUGxheWVyczUgPSBbcGxheWVyOCwgcGxheWVyOSwgcGxheWVyMTBdO1xuXG4gICAgdGhpcy5ncm91cHMucHVzaChuZXcgR3JvdXAobnVsbCxbXSkpO1xuXG4gICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczFcIiwgZ3JvdXBQbGF5ZXJzMSkpO1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnMyXCIsIGdyb3VwUGxheWVyczIpKTtcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzM1wiLCBncm91cFBsYXllcnMzKSk7XG4gICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczRcIiwgZ3JvdXBQbGF5ZXJzNCkpO1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnM1XCIsIGdyb3VwUGxheWVyczUpKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPjApe1xuICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwID0gdGhpcy5ncm91cHNbYXJncy5pbmRleF07XG4gICAgICBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRHcm91cC5uYW1lKTtcblxuICAgICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzID0gdGhpcy5zZWxlY3RlZEdyb3VwLnBsYXllcnM7XG5cbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ3JvdXAgPSB0aGlzLnNlbGVjdGVkR3JvdXA7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiR3JvdXA6IFwiKyB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdyb3VwLm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXJzOiBcIisgdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzKTtcbiAgICAgIFxuXG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibW9kZVNlbGVjdG9yXCJdKVxuICB9XG59XG4iXX0=