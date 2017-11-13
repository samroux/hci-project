"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var GroupSelectorComponent = /** @class */ (function () {
    function GroupSelectorComponent(router, rdp) {
        this.router = router;
        this.rdp = rdp;
        this.groups = [];
    }
    GroupSelectorComponent.prototype.ngOnInit = function () {
        this.progressValue = 20;
        // let player1 = new Player("Sam");
        // let player2 = new Player("Joe");
        // let player3 = new Player("John");
        // let player4 = new Player("Will");
        // let player5 = new Player("Oli");
        // let player6 = new Player("Fab");
        // let player7 = new Player("Flo");
        // let player8 = new Player("Ege");
        // let player9 = new Player("Steve");
        // let player10 = new Player("Asher");
        // let groupPlayers1 = [player1, player2, player3];
        // let groupPlayers2 = [player2, player3, player4, player6];
        // let groupPlayers3 = [player4, player5, player6];
        // let groupPlayers4 = [player6, player7, player8, player4];
        // let groupPlayers5 = [player8, player9, player10];
        // let groupPlayers6 = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];
        // this.groups.push( new Group ("groupPlayers1", groupPlayers1));
        // this.groups.push( new Group ("groupPlayers2", groupPlayers2));
        // this.groups.push( new Group ("groupPlayers3", groupPlayers3));
        // this.groups.push( new Group ("groupPlayers4", groupPlayers4));
        // this.groups.push( new Group ("groupPlayers5", groupPlayers5));
        // this.groups.push( new Group ("groupPlayers6", groupPlayers6));
        // for(var group of this.groups){
        //   this.rdp.insert_group(group);
        // }
        // this.rdp.clearGroups;
        for (var i = 0; i < this.groups.length; i++) {
            delete this.groups[i];
        }
        this.groups = [];
        this.rdp.fetch_groups();
        console.log("fetch completed... Group count: " + this.rdp.groups.length);
        this.groups = this.rdp.groups;
        for (var i = 0; i < this.rdp.groups.length; i++) {
            console.log("groupName: " + this.rdp.groups[i].name);
            // this.groups.push(group);
        }
        // if(this.groups = null){
        //   //first retrie
        //   this.rdp.fetch_groups();
        //   for(var group of this.rdp.groups){
        //     console.log("groupName: "+group.name);
        //     this.groups.push(group);
        //   }
        // }
    };
    GroupSelectorComponent.prototype.onItemTap = function (args) {
        // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index >= 0) {
            this.selectedGroup = this.groups[args.index];
            console.log("Chosen: " + this.selectedGroup.name);
            this.rdp.players = this.selectedGroup.players;
            this.rdp.group = this.selectedGroup;
            console.log("Group: " + this.rdp.group.name);
            console.log("Players: " + this.rdp.players);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBTZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cFNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFLekMsZ0ZBQTRFO0FBUzVFO0lBTUUsZ0NBQTJCLE1BQWMsRUFBVSxHQUFzQjtRQUE5QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFMakUsV0FBTSxHQUFpQixFQUFFLENBQUM7SUFLMEMsQ0FBQztJQUU3RSx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFeEIsbUNBQW1DO1FBQ25DLG1DQUFtQztRQUNuQyxvQ0FBb0M7UUFDcEMsb0NBQW9DO1FBQ3BDLG1DQUFtQztRQUNuQyxtQ0FBbUM7UUFDbkMsbUNBQW1DO1FBQ25DLG1DQUFtQztRQUNuQyxxQ0FBcUM7UUFDckMsc0NBQXNDO1FBRXRDLG1EQUFtRDtRQUNuRCw0REFBNEQ7UUFDNUQsbURBQW1EO1FBQ25ELDREQUE0RDtRQUM1RCxvREFBb0Q7UUFDcEQsbUhBQW1IO1FBRW5ILGlFQUFpRTtRQUNqRSxpRUFBaUU7UUFDakUsaUVBQWlFO1FBQ2pFLGlFQUFpRTtRQUNqRSxpRUFBaUU7UUFDakUsaUVBQWlFO1FBR2pFLGlDQUFpQztRQUNqQyxrQ0FBa0M7UUFDbEMsSUFBSTtRQUVKLHdCQUF3QjtRQUV4QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFFLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBSXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUk1QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELDJCQUEyQjtRQUM3QixDQUFDO1FBRUQsMEJBQTBCO1FBQzFCLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFFN0IsdUNBQXVDO1FBQ3ZDLDZDQUE2QztRQUM3QywrQkFBK0I7UUFDL0IsTUFBTTtRQUNOLElBQUk7SUFHTixDQUFDO0lBRU0sMENBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQiw2RUFBNkU7UUFDN0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEdBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqRCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUU5QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFM0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxxQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFoR1Usc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO1NBQzVELENBQUM7eUNBUW1DLGVBQU0sRUFBZSxzQ0FBaUI7T0FOOUQsc0JBQXNCLENBaUdsQztJQUFELDZCQUFDO0NBQUEsQUFqR0QsSUFpR0M7QUFqR1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3JvdXBTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ncm91cFNlbGVjdG9yL2dyb3VwU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2dyb3VwU2VsZWN0b3IvZ3JvdXBTZWxlY3Rvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHJpdmF0ZSBncm91cHM6IEFycmF5PEdyb3VwPiA9IFtdO1xuICBwcml2YXRlIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgIFxuICBcbiAgcHJpdmF0ZSBzZWxlY3RlZEdyb3VwOiBHcm91cDtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXIpIHt9XG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDIwO1xuICAgIFxuICAgIC8vIGxldCBwbGF5ZXIxID0gbmV3IFBsYXllcihcIlNhbVwiKTtcbiAgICAvLyBsZXQgcGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJKb2VcIik7XG4gICAgLy8gbGV0IHBsYXllcjMgPSBuZXcgUGxheWVyKFwiSm9oblwiKTtcbiAgICAvLyBsZXQgcGxheWVyNCA9IG5ldyBQbGF5ZXIoXCJXaWxsXCIpO1xuICAgIC8vIGxldCBwbGF5ZXI1ID0gbmV3IFBsYXllcihcIk9saVwiKTtcbiAgICAvLyBsZXQgcGxheWVyNiA9IG5ldyBQbGF5ZXIoXCJGYWJcIik7XG4gICAgLy8gbGV0IHBsYXllcjcgPSBuZXcgUGxheWVyKFwiRmxvXCIpO1xuICAgIC8vIGxldCBwbGF5ZXI4ID0gbmV3IFBsYXllcihcIkVnZVwiKTtcbiAgICAvLyBsZXQgcGxheWVyOSA9IG5ldyBQbGF5ZXIoXCJTdGV2ZVwiKTtcbiAgICAvLyBsZXQgcGxheWVyMTAgPSBuZXcgUGxheWVyKFwiQXNoZXJcIik7XG4gICAgXG4gICAgLy8gbGV0IGdyb3VwUGxheWVyczEgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyM107XG4gICAgLy8gbGV0IGdyb3VwUGxheWVyczIgPSBbcGxheWVyMiwgcGxheWVyMywgcGxheWVyNCwgcGxheWVyNl07XG4gICAgLy8gbGV0IGdyb3VwUGxheWVyczMgPSBbcGxheWVyNCwgcGxheWVyNSwgcGxheWVyNl07XG4gICAgLy8gbGV0IGdyb3VwUGxheWVyczQgPSBbcGxheWVyNiwgcGxheWVyNywgcGxheWVyOCwgcGxheWVyNF07XG4gICAgLy8gbGV0IGdyb3VwUGxheWVyczUgPSBbcGxheWVyOCwgcGxheWVyOSwgcGxheWVyMTBdO1xuICAgIC8vIGxldCBncm91cFBsYXllcnM2ID0gW3BsYXllcjEsIHBsYXllcjIsIHBsYXllcjMsIHBsYXllcjQsIHBsYXllcjUsIHBsYXllcjYsIHBsYXllcjcsIHBsYXllcjgsIHBsYXllcjksIHBsYXllcjEwXTtcbiAgICBcbiAgICAvLyB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzMVwiLCBncm91cFBsYXllcnMxKSk7XG4gICAgLy8gdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczJcIiwgZ3JvdXBQbGF5ZXJzMikpO1xuICAgIC8vIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnMzXCIsIGdyb3VwUGxheWVyczMpKTtcbiAgICAvLyB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNFwiLCBncm91cFBsYXllcnM0KSk7XG4gICAgLy8gdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczVcIiwgZ3JvdXBQbGF5ZXJzNSkpO1xuICAgIC8vIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnM2XCIsIGdyb3VwUGxheWVyczYpKTtcbiAgICBcbiAgICBcbiAgICAvLyBmb3IodmFyIGdyb3VwIG9mIHRoaXMuZ3JvdXBzKXtcbiAgICAvLyAgIHRoaXMucmRwLmluc2VydF9ncm91cChncm91cCk7XG4gICAgLy8gfVxuICAgIFxuICAgIC8vIHRoaXMucmRwLmNsZWFyR3JvdXBzO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPHRoaXMuZ3JvdXBzLmxlbmd0aDtpKyspe1xuICAgICAgZGVsZXRlIHRoaXMuZ3JvdXBzW2ldO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmdyb3Vwcz0gW107XG4gICAgXG4gICAgdGhpcy5yZHAuZmV0Y2hfZ3JvdXBzKClcblxuICAgIFxuXG4gICAgY29uc29sZS5sb2coXCJmZXRjaCBjb21wbGV0ZWQuLi4gR3JvdXAgY291bnQ6IFwiK3RoaXMucmRwLmdyb3Vwcy5sZW5ndGgpO1xuXG4gICAgdGhpcy5ncm91cHM9dGhpcy5yZHAuZ3JvdXBzO1xuXG5cbiAgICBcbiAgICBmb3IobGV0IGkgPTA7IGk8IHRoaXMucmRwLmdyb3Vwcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zb2xlLmxvZyhcImdyb3VwTmFtZTogXCIrdGhpcy5yZHAuZ3JvdXBzW2ldLm5hbWUpO1xuICAgICAgLy8gdGhpcy5ncm91cHMucHVzaChncm91cCk7XG4gICAgfVxuICAgIFxuICAgIC8vIGlmKHRoaXMuZ3JvdXBzID0gbnVsbCl7XG4gICAgLy8gICAvL2ZpcnN0IHJldHJpZVxuICAgIC8vICAgdGhpcy5yZHAuZmV0Y2hfZ3JvdXBzKCk7XG4gICAgICBcbiAgICAvLyAgIGZvcih2YXIgZ3JvdXAgb2YgdGhpcy5yZHAuZ3JvdXBzKXtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJncm91cE5hbWU6IFwiK2dyb3VwLm5hbWUpO1xuICAgIC8vICAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cblxuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJncy5uYW1lKTtcbiAgICBpZihhcmdzLmluZGV4ID49IDApe1xuICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwID0gdGhpcy5ncm91cHNbYXJncy5pbmRleF07XG4gICAgICBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRHcm91cC5uYW1lKTtcbiAgICAgIFxuICAgICAgdGhpcy5yZHAucGxheWVycyA9IHRoaXMuc2VsZWN0ZWRHcm91cC5wbGF5ZXJzO1xuICAgICAgXG4gICAgICB0aGlzLnJkcC5ncm91cCA9IHRoaXMuc2VsZWN0ZWRHcm91cDtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJHcm91cDogXCIrIHRoaXMucmRwLmdyb3VwLm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXJzOiBcIisgdGhpcy5yZHAucGxheWVycyk7XG4gICAgICBcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2RlU2VsZWN0b3JcIl0pXG4gIH1cbn1cbiJdfQ==