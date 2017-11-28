"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var player_1 = require("../../shared/player");
var group_1 = require("../../shared/group");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var GroupSelectorComponent = /** @class */ (function () {
    function GroupSelectorComponent(router, rdp) {
        this.router = router;
        this.rdp = rdp;
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
        this.rdp.groups.push(new group_1.Group("groupPlayers1", groupPlayers1));
        // this.rdp.groups.push( new Group ("groupPlayers2", groupPlayers2));
        // this.rdp.groups.push( new Group ("groupPlayers3", groupPlayers3));
        // this.rdp.groups.push( new Group ("groupPlayers4", groupPlayers4));
        // this.rdp.groups.push( new Group ("groupPlayers5", groupPlayers5));
        // this.rdp.groups.push( new Group ("groupPlayers6", groupPlayers6));
        // TODO Load Groups
        this.rdp.saveGroups();
        this.rdp.loadGroups();
        this.updateLocalList();
    };
    GroupSelectorComponent.prototype.onItemTap = function (args) {
        // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index >= 0) {
            this.selectedGroup = this.rdp.groups[args.index];
            console.log("Chosen: " + this.selectedGroup.name);
            this.rdp.players = this.selectedGroup.players;
            this.rdp.group = this.selectedGroup;
            console.log("Group: " + this.rdp.group.name);
            console.log("Players: " + this.rdp.players);
            this.next();
        }
    };
    GroupSelectorComponent.prototype.deleteGroup = function (group) {
        console.log("Group to be deleted:" + group.name);
        var index = this.rdp.groups.indexOf(group, 0);
        if (index > -1) {
            this.rdp.groups.splice(index, 1);
        }
        // TODO Save Groups
        this.rdp.saveGroups();
        this.updateLocalList();
    };
    GroupSelectorComponent.prototype.next = function () {
        // TODO Save Groups
        this.rdp.saveGroups();
        this.updateLocalList();
        this.router.navigate(["modeSelector"]);
    };
    GroupSelectorComponent.prototype.updatePlayersName = function (group) {
        console.log("updating players name...");
        for (var i = 0; i < group.players.length; i++) {
            group.playersName += group.players[i].name;
            if (i < group.players.length - 1) {
                group.playersName += ", ";
            }
        }
    };
    GroupSelectorComponent.prototype.updateLocalList = function () {
        this.groups = this.rdp.groups;
    };
    GroupSelectorComponent.prototype.clearGroups = function () {
        for (var i = 0; i < this.groups.length; i++) {
            delete this.groups[i];
        }
        this.groups = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBTZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cFNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFLekMsOENBQTJDO0FBQzNDLDRDQUF5QztBQUN6QyxnRkFBNEU7QUFTNUU7SUFNRSxnQ0FBMkIsTUFBYyxFQUFVLEdBQXNCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUxqRSxXQUFNLEdBQWlCLEVBQUUsQ0FBQztJQU1sQyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXhCLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLElBQUksYUFBYSxHQUFH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O1NBQzVELENBQUM7eUNBUW1DLGVBQU0sRUFBZSxzQ0FBaUI7T0FOOUQsc0JBQXNCLENBMEdsQztJQUFELDZCQUFDO0NBQUEsQUExR0QsSUEwR0M7QUExR1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGaWxlLCBGb2xkZXIgfSBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcblxuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3JvdXBTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ncm91cFNlbGVjdG9yL2dyb3VwU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2dyb3VwU2VsZWN0b3IvZ3JvdXBTZWxlY3Rvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHJpdmF0ZSBncm91cHM6IEFycmF5PEdyb3VwPiA9IFtdO1xuICBwcml2YXRlIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgIFxuICBcbiAgcHJpdmF0ZSBzZWxlY3RlZEdyb3VwOiBHcm91cDtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgfVxuICBcbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAyMDtcbiAgICBcbiAgICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJTYW1cIik7XG4gICAgbGV0IHBsYXllcjIgPSBuZXcgUGxheWVyKFwiSm9lXCIpO1xuICAgIGxldCBwbGF5ZXIzID0gbmV3IFBsYXllcihcIkpvaG5cIik7XG4gICAgbGV0IHBsYXllcjQgPSBuZXcgUGxheWVyKFwiV2lsbFwiKTtcbiAgICBsZXQgcGxheWVyNSA9IG5ldyBQbGF5ZXIoXCJPbGlcIik7XG4gICAgbGV0IHBsYXllcjYgPSBuZXcgUGxheWVyKFwiRmFiXCIpO1xuICAgIGxldCBwbGF5ZXI3ID0gbmV3IFBsYXllcihcIkZsb1wiKTtcbiAgICBsZXQgcGxheWVyOCA9IG5ldyBQbGF5ZXIoXCJFZ2VcIik7XG4gICAgbGV0IHBsYXllcjkgPSBuZXcgUGxheWVyKFwiU3RldmVcIik7XG4gICAgbGV0IHBsYXllcjEwID0gbmV3IFBsYXllcihcIkFzaGVyXCIpO1xuICAgIFxuICAgIGxldCBncm91cFBsYXllcnMxID0gW3BsYXllcjEsIHBsYXllcjIsIHBsYXllcjNdO1xuICAgIGxldCBncm91cFBsYXllcnMyID0gW3BsYXllcjIsIHBsYXllcjMsIHBsYXllcjQsIHBsYXllcjZdO1xuICAgIGxldCBncm91cFBsYXllcnMzID0gW3BsYXllcjQsIHBsYXllcjUsIHBsYXllcjZdO1xuICAgIGxldCBncm91cFBsYXllcnM0ID0gW3BsYXllcjYsIHBsYXllcjcsIHBsYXllcjgsIHBsYXllcjRdO1xuICAgIGxldCBncm91cFBsYXllcnM1ID0gW3BsYXllcjgsIHBsYXllcjksIHBsYXllcjEwXTtcbiAgICBsZXQgZ3JvdXBQbGF5ZXJzNiA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzLCBwbGF5ZXI0LCBwbGF5ZXI1LCBwbGF5ZXI2LCBwbGF5ZXI3LCBwbGF5ZXI4LCBwbGF5ZXI5LCBwbGF5ZXIxMF07XG4gICAgXG4gICAgdGhpcy5yZHAuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnMxXCIsIGdyb3VwUGxheWVyczEpKTtcbiAgICAvLyB0aGlzLnJkcC5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczJcIiwgZ3JvdXBQbGF5ZXJzMikpO1xuICAgIC8vIHRoaXMucmRwLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzM1wiLCBncm91cFBsYXllcnMzKSk7XG4gICAgLy8gdGhpcy5yZHAuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnM0XCIsIGdyb3VwUGxheWVyczQpKTtcbiAgICAvLyB0aGlzLnJkcC5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczVcIiwgZ3JvdXBQbGF5ZXJzNSkpO1xuICAgIC8vIHRoaXMucmRwLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNlwiLCBncm91cFBsYXllcnM2KSk7XG5cbiAgICAvLyBUT0RPIExvYWQgR3JvdXBzXG4gICAgdGhpcy5yZHAuc2F2ZUdyb3VwcygpO1xuICAgIHRoaXMucmRwLmxvYWRHcm91cHMoKTtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsTGlzdCgpO1xuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJncy5uYW1lKTtcbiAgICBpZihhcmdzLmluZGV4ID49IDApe1xuICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwID0gdGhpcy5yZHAuZ3JvdXBzW2FyZ3MuaW5kZXhdO1xuICAgICAgY29uc29sZS5sb2cgKFwiQ2hvc2VuOiBcIit0aGlzLnNlbGVjdGVkR3JvdXAubmFtZSk7XG4gICAgICBcbiAgICAgIHRoaXMucmRwLnBsYXllcnMgPSB0aGlzLnNlbGVjdGVkR3JvdXAucGxheWVycztcbiAgICAgIFxuICAgICAgdGhpcy5yZHAuZ3JvdXAgPSB0aGlzLnNlbGVjdGVkR3JvdXA7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiR3JvdXA6IFwiKyB0aGlzLnJkcC5ncm91cC5uYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyczogXCIrIHRoaXMucmRwLnBsYXllcnMpO1xuICAgICAgXG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZUdyb3VwKGdyb3VwOkdyb3VwKSB7XG4gICAgY29uc29sZS5sb2coXCJHcm91cCB0byBiZSBkZWxldGVkOlwiKyBncm91cC5uYW1lKTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMucmRwLmdyb3Vwcy5pbmRleE9mKGdyb3VwLCAwKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5yZHAuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyBTYXZlIEdyb3Vwc1xuICAgIHRoaXMucmRwLnNhdmVHcm91cHMoKTtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsTGlzdCgpO1xuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIC8vIFRPRE8gU2F2ZSBHcm91cHNcbiAgICB0aGlzLnJkcC5zYXZlR3JvdXBzKCk7XG4gICAgdGhpcy51cGRhdGVMb2NhbExpc3QoKTsgICAgXG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2RlU2VsZWN0b3JcIl0pXG4gIH1cblxucHJpdmF0ZSB1cGRhdGVQbGF5ZXJzTmFtZShncm91cDogR3JvdXApe1xuICBjb25zb2xlLmxvZyhcInVwZGF0aW5nIHBsYXllcnMgbmFtZS4uLlwiKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cC5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgZ3JvdXAucGxheWVyc05hbWUgKz0gZ3JvdXAucGxheWVyc1tpXS5uYW1lO1xuICAgIFxuICAgIGlmIChpIDwgZ3JvdXAucGxheWVycy5sZW5ndGggLSAxKSB7XG4gICAgICBncm91cC5wbGF5ZXJzTmFtZSArPSBcIiwgXCI7XG4gICAgfVxuICB9XG4gIFxufVxuXG5wcml2YXRlIHVwZGF0ZUxvY2FsTGlzdCgpe1xuICB0aGlzLmdyb3Vwcz10aGlzLnJkcC5ncm91cHM7XG5cbn1cblxucHJpdmF0ZSBjbGVhckdyb3Vwcygpe1xuICBcbiAgZm9yKGxldCBpID0gMDsgaSA8dGhpcy5ncm91cHMubGVuZ3RoO2krKyl7XG4gICAgZGVsZXRlIHRoaXMuZ3JvdXBzW2ldO1xuICB9XG4gIFxuICB0aGlzLmdyb3Vwcz0gW107XG59XG59XG5cblxuIl19