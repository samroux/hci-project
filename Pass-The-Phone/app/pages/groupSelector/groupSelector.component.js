"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var player_1 = require("../../shared/player");
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
        // this.rdp.groups.push( new Group ("groupPlayers2", groupPlayers2));
        // this.rdp.groups.push( new Group ("groupPlayers3", groupPlayers3));
        // this.rdp.groups.push( new Group ("groupPlayers4", groupPlayers4));
        // this.rdp.groups.push( new Group ("groupPlayers5", groupPlayers5));
        // this.rdp.groups.push( new Group ("groupPlayers6", groupPlayers6));
        // TODO Load Groups
        this.rdp.loadGroups();
        // if(this.rdp.groups.length<1){
        //   console.log("rdp.group is empty");      
        //   this.rdp.groups.push( new Group ("groupPlayers1", groupPlayers1));
        //   this.rdp.saveGroups();
        // }
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
        this.groups = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBTZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cFNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFLekMsOENBQTJDO0FBRTNDLGdGQUE0RTtBQVM1RTtJQU1FLGdDQUEyQixNQUFjLEVBQVUsR0FBc0I7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTGpFLFdBQU0sR0FBaUIsRUFBRSxDQUFDO0lBTWxDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVB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LENBaUhsQztJQUFELDZCQUFDO0NBQUEsQUFqSEQsSUFpSEM7QUFqSFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGaWxlLCBGb2xkZXIgfSBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcblxuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3JvdXBTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ncm91cFNlbGVjdG9yL2dyb3VwU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2dyb3VwU2VsZWN0b3IvZ3JvdXBTZWxlY3Rvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHJpdmF0ZSBncm91cHM6IEFycmF5PEdyb3VwPiA9IFtdO1xuICBwcml2YXRlIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgIFxuICBcbiAgcHJpdmF0ZSBzZWxlY3RlZEdyb3VwOiBHcm91cDtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgfVxuICBcbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAyMDtcbiAgICBcbiAgICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJTYW1cIik7XG4gICAgbGV0IHBsYXllcjIgPSBuZXcgUGxheWVyKFwiSm9lXCIpO1xuICAgIGxldCBwbGF5ZXIzID0gbmV3IFBsYXllcihcIkpvaG5cIik7XG4gICAgbGV0IHBsYXllcjQgPSBuZXcgUGxheWVyKFwiV2lsbFwiKTtcbiAgICBsZXQgcGxheWVyNSA9IG5ldyBQbGF5ZXIoXCJPbGlcIik7XG4gICAgbGV0IHBsYXllcjYgPSBuZXcgUGxheWVyKFwiRmFiXCIpO1xuICAgIGxldCBwbGF5ZXI3ID0gbmV3IFBsYXllcihcIkZsb1wiKTtcbiAgICBsZXQgcGxheWVyOCA9IG5ldyBQbGF5ZXIoXCJFZ2VcIik7XG4gICAgbGV0IHBsYXllcjkgPSBuZXcgUGxheWVyKFwiU3RldmVcIik7XG4gICAgbGV0IHBsYXllcjEwID0gbmV3IFBsYXllcihcIkFzaGVyXCIpO1xuICAgIFxuICAgIGxldCBncm91cFBsYXllcnMxID0gW3BsYXllcjEsIHBsYXllcjIsIHBsYXllcjNdO1xuICAgIGxldCBncm91cFBsYXllcnMyID0gW3BsYXllcjIsIHBsYXllcjMsIHBsYXllcjQsIHBsYXllcjZdO1xuICAgIGxldCBncm91cFBsYXllcnMzID0gW3BsYXllcjQsIHBsYXllcjUsIHBsYXllcjZdO1xuICAgIGxldCBncm91cFBsYXllcnM0ID0gW3BsYXllcjYsIHBsYXllcjcsIHBsYXllcjgsIHBsYXllcjRdO1xuICAgIGxldCBncm91cFBsYXllcnM1ID0gW3BsYXllcjgsIHBsYXllcjksIHBsYXllcjEwXTtcbiAgICBsZXQgZ3JvdXBQbGF5ZXJzNiA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzLCBwbGF5ZXI0LCBwbGF5ZXI1LCBwbGF5ZXI2LCBwbGF5ZXI3LCBwbGF5ZXI4LCBwbGF5ZXI5LCBwbGF5ZXIxMF07XG4gICAgXG5cbiAgICAvLyB0aGlzLnJkcC5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczJcIiwgZ3JvdXBQbGF5ZXJzMikpO1xuICAgIC8vIHRoaXMucmRwLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzM1wiLCBncm91cFBsYXllcnMzKSk7XG4gICAgLy8gdGhpcy5yZHAuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnM0XCIsIGdyb3VwUGxheWVyczQpKTtcbiAgICAvLyB0aGlzLnJkcC5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczVcIiwgZ3JvdXBQbGF5ZXJzNSkpO1xuICAgIC8vIHRoaXMucmRwLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNlwiLCBncm91cFBsYXllcnM2KSk7XG5cbiAgICAvLyBUT0RPIExvYWQgR3JvdXBzXG4gICAgdGhpcy5yZHAubG9hZEdyb3VwcygpO1xuICAgIFxuICAgIC8vIGlmKHRoaXMucmRwLmdyb3Vwcy5sZW5ndGg8MSl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcInJkcC5ncm91cCBpcyBlbXB0eVwiKTsgICAgICBcbiAgICAvLyAgIHRoaXMucmRwLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzMVwiLCBncm91cFBsYXllcnMxKSk7XG4gICAgLy8gICB0aGlzLnJkcC5zYXZlR3JvdXBzKCk7XG4gICAgLy8gfVxuXG4gICAgdGhpcy51cGRhdGVMb2NhbExpc3QoKTtcbiAgfVxuICBcbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgaWYoYXJncy5pbmRleCA+PSAwKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRHcm91cCA9IHRoaXMucmRwLmdyb3Vwc1thcmdzLmluZGV4XTtcbiAgICAgIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZEdyb3VwLm5hbWUpO1xuICAgICAgXG4gICAgICB0aGlzLnJkcC5wbGF5ZXJzID0gdGhpcy5zZWxlY3RlZEdyb3VwLnBsYXllcnM7XG4gICAgICBcbiAgICAgIHRoaXMucmRwLmdyb3VwID0gdGhpcy5zZWxlY3RlZEdyb3VwO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcIkdyb3VwOiBcIisgdGhpcy5yZHAuZ3JvdXAubmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlBsYXllcnM6IFwiKyB0aGlzLnJkcC5wbGF5ZXJzKTtcbiAgICAgIFxuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVHcm91cChncm91cDpHcm91cCkge1xuICAgIGNvbnNvbGUubG9nKFwiR3JvdXAgdG8gYmUgZGVsZXRlZDpcIisgZ3JvdXAubmFtZSk7XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLnJkcC5ncm91cHMuaW5kZXhPZihncm91cCwgMCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMucmRwLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIFRPRE8gU2F2ZSBHcm91cHNcbiAgICB0aGlzLnJkcC5zYXZlR3JvdXBzKCk7XG4gICAgdGhpcy51cGRhdGVMb2NhbExpc3QoKTtcbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICAvLyBUT0RPIFNhdmUgR3JvdXBzXG4gICAgdGhpcy5yZHAuc2F2ZUdyb3VwcygpO1xuICAgIHRoaXMudXBkYXRlTG9jYWxMaXN0KCk7ICAgIFxuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibW9kZVNlbGVjdG9yXCJdKVxuICB9XG5cbnByaXZhdGUgdXBkYXRlUGxheWVyc05hbWUoZ3JvdXA6IEdyb3VwKXtcbiAgY29uc29sZS5sb2coXCJ1cGRhdGluZyBwbGF5ZXJzIG5hbWUuLi5cIik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgIGdyb3VwLnBsYXllcnNOYW1lICs9IGdyb3VwLnBsYXllcnNbaV0ubmFtZTtcbiAgICBcbiAgICBpZiAoaSA8IGdyb3VwLnBsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgZ3JvdXAucGxheWVyc05hbWUgKz0gXCIsIFwiO1xuICAgIH1cbiAgfVxuICBcbn1cblxucHJpdmF0ZSB1cGRhdGVMb2NhbExpc3QoKXtcbiAgdGhpcy5ncm91cHM9W107XG4gIHRoaXMuZ3JvdXBzPXRoaXMucmRwLmdyb3VwcztcblxufVxuXG5wcml2YXRlIGNsZWFyR3JvdXBzKCl7XG4gIFxuICBmb3IobGV0IGkgPSAwOyBpIDx0aGlzLmdyb3Vwcy5sZW5ndGg7aSsrKXtcbiAgICBkZWxldGUgdGhpcy5ncm91cHNbaV07XG4gIH1cbiAgXG4gIHRoaXMuZ3JvdXBzPSBbXTtcbn1cbn1cblxuXG4iXX0=