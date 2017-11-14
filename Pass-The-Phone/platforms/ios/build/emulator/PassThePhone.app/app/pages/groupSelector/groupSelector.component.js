"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Sqlite = require("nativescript-sqlite");
var player_1 = require("../../shared/player");
var group_1 = require("../../shared/group");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var GroupSelectorComponent = /** @class */ (function () {
    function GroupSelectorComponent(router, rdp) {
        // (new Sqlite("passthephone.db")).then(db => {
        //   db.execSQL("CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, group_id TEXT)").then(id => {
        //     this.database = db;
        //   }, error => {
        //     console.log("CREATE TABLE ERROR", error);
        //   });
        // }, error => {
        //   console.log("OPEN DB ERROR", error);
        // });
        this.router = router;
        this.rdp = rdp;
        this.groups = [];
        // (new Sqlite("passthephone.db")).then(db => {
        //   db.execSQL("CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, playersName TEXT)").then(id => {
        //     this.database = db;
        //   }, error => {
        //     console.log("CREATE TABLE ERROR", error);
        //   });
        // }, error => {
        //   console.log("OPEN DB ERROR", error);
        // });
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
        // // for(var group of this.groups){
        // //   this.insert_group(group);
        // // }
        // this.clearGroups;
        // for(let i = 0; i <this.groups.length;i++){
        //   delete this.groups[i];
        // }
        // this.groups= [];
        // this.fetch_groups();
        // console.log("fetch completed... Group count: "+this.groups.length);
        // for (var group of this.groups){
        //   group.players=this.fetch_group_players(group);
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
    GroupSelectorComponent.prototype.deleteGroup = function (group) {
        console.log("Player to be deleted:" + group.name);
        var index = this.groups.indexOf(group, 0);
        if (index > -1) {
            this.groups.splice(index, 1);
        }
    };
    GroupSelectorComponent.prototype.next = function () {
        this.router.navigate(["modeSelector"]);
    };
    GroupSelectorComponent.prototype.insert_group = function (group) {
        var _this = this;
        this.database.execSQL("INSERT INTO groups (name, playersName) VALUES (?,?)", [group.name, group.playersName]).then(function (id) {
            console.log("INSERT RESULT", id);
            group.id = id;
            // this.fetch();
            _this.insert_group_players(group);
        }, function (error) {
            console.log("INSERT ERROR", error);
        });
    };
    GroupSelectorComponent.prototype.insert_group_players = function (group) {
        var insert_players = group.players;
        for (var _i = 0, insert_players_1 = insert_players; _i < insert_players_1.length; _i++) {
            var player = insert_players_1[_i];
            this.database.execSQL("INSERT INTO players (name, group_id) VALUES (?, ?)", [player.name, group.id]).then(function (id) {
                console.log("INSERT RESULT", id);
                // this.fetch();
            }, function (error) {
                console.log("INSERT ERROR", error);
            });
        }
    };
    GroupSelectorComponent.prototype.fetch_groups = function () {
        //TODO. Fetch recostructs objects based on id.
        var _this = this;
        console.log("fetching groups...");
        // var that = this;
        this.database.all("SELECT * FROM groups").then(function (rows) {
            _this.groups = [];
            for (var row in rows) {
                _this.groups.push({
                    "id": rows[row][0],
                    "name": rows[row][1],
                    "playersName": rows[row][2],
                    "players": null
                });
                var lastGroup = _this.groups[_this.groups.length - 1];
                console.log("new group: " + lastGroup.name);
                // lastGroup.players= this.fetch_group_players(lastGroup);
                // this.updatePlayersName(lastGroup);
            }
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
    };
    GroupSelectorComponent.prototype.fetch_group_players = function (group) {
        var group_players = [];
        console.log("Fetching group players: " + group.id);
        this.database.all("SELECT * FROM players").then(function (rows) {
            group_players = [];
            for (var row in rows) {
                // console.log(row);
                group_players.push({
                    "id": rows[row][0],
                    "name": rows[row][1],
                    "answerCount": 0,
                    "runningPointsTotal": 0,
                    "team": null,
                    "isSelected": false
                });
            }
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
        for (var _i = 0, group_players_1 = group_players; _i < group_players_1.length; _i++) {
            var player = group_players_1[_i];
            console.log(player.name);
        }
        console.log("Done Fetching group players: " + group.id);
        return group_players;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBTZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cFNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFJNUMsOENBQTJDO0FBQzNDLDRDQUF5QztBQUN6QyxnRkFBNEU7QUFTNUU7SUFRRSxnQ0FBMkIsTUFBYyxFQUFVLEdBQXNCO1FBQ3ZFLCtDQUErQztRQUMvQyxtSUFBbUk7UUFDbkksMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixnREFBZ0Q7UUFDaEQsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQix5Q0FBeUM7UUFDekMsTUFBTTtRQVRtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQakUsV0FBTSxHQUFpQixFQUFFLENBQUM7UUFrQmhDLCtDQUErQztRQUMvQyxxSUFBcUk7UUFDckksMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixnREFBZ0Q7UUFDaEQsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQix5Q0FBeUM7UUFDekMsTUFBTTtJQUVSLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFD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QUMsQ0FBQztRQUN4QixDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQXpOWSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7U0FDNUQsQ0FBQzt5Q0FVbUMsZUFBTSxFQUFlLHNDQUFpQjtPQVI5RCxzQkFBc0IsQ0EwTmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTFORCxJQTBOQztBQTFOWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5cblxuaW1wb3J0IHtUZWFtfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlYW1cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyb3VwU2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZ3JvdXBTZWxlY3Rvci9ncm91cFNlbGVjdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9ncm91cFNlbGVjdG9yL2dyb3VwU2VsZWN0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEdyb3VwU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHByaXZhdGUgZ3JvdXBzOiBBcnJheTxHcm91cD4gPSBbXTtcbiAgcHJpdmF0ZSBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7ICBcbiAgXG4gIHByaXZhdGUgc2VsZWN0ZWRHcm91cDogR3JvdXA7XG4gIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcbiAgXG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZHA6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgLy8gKG5ldyBTcWxpdGUoXCJwYXNzdGhlcGhvbmUuZGJcIikpLnRoZW4oZGIgPT4ge1xuICAgIC8vICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHBsYXllcnMgKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgbmFtZSBURVhULCBncm91cF9pZCBURVhUKVwiKS50aGVuKGlkID0+IHtcbiAgICAvLyAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xuICAgIC8vICAgfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNSRUFURSBUQUJMRSBFUlJPUlwiLCBlcnJvcik7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9LCBlcnJvciA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIk9QRU4gREIgRVJST1JcIiwgZXJyb3IpO1xuICAgIC8vIH0pO1xuICAgIFxuICAgIC8vIChuZXcgU3FsaXRlKFwicGFzc3RoZXBob25lLmRiXCIpKS50aGVuKGRiID0+IHtcbiAgICAvLyAgIGRiLmV4ZWNTUUwoXCJDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBncm91cHMgKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgbmFtZSBURVhULCBwbGF5ZXJzTmFtZSBURVhUKVwiKS50aGVuKGlkID0+IHtcbiAgICAvLyAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xuICAgIC8vICAgfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNSRUFURSBUQUJMRSBFUlJPUlwiLCBlcnJvcik7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9LCBlcnJvciA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIk9QRU4gREIgRVJST1JcIiwgZXJyb3IpO1xuICAgIC8vIH0pO1xuICAgIFxuICB9XG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDIwO1xuICAgIFxuICAgIGxldCBwbGF5ZXIxID0gbmV3IFBsYXllcihcIlNhbVwiKTtcbiAgICBsZXQgcGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJKb2VcIik7XG4gICAgbGV0IHBsYXllcjMgPSBuZXcgUGxheWVyKFwiSm9oblwiKTtcbiAgICBsZXQgcGxheWVyNCA9IG5ldyBQbGF5ZXIoXCJXaWxsXCIpO1xuICAgIGxldCBwbGF5ZXI1ID0gbmV3IFBsYXllcihcIk9saVwiKTtcbiAgICBsZXQgcGxheWVyNiA9IG5ldyBQbGF5ZXIoXCJGYWJcIik7XG4gICAgbGV0IHBsYXllcjcgPSBuZXcgUGxheWVyKFwiRmxvXCIpO1xuICAgIGxldCBwbGF5ZXI4ID0gbmV3IFBsYXllcihcIkVnZVwiKTtcbiAgICBsZXQgcGxheWVyOSA9IG5ldyBQbGF5ZXIoXCJTdGV2ZVwiKTtcbiAgICBsZXQgcGxheWVyMTAgPSBuZXcgUGxheWVyKFwiQXNoZXJcIik7XG4gICAgXG4gICAgbGV0IGdyb3VwUGxheWVyczEgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyM107XG4gICAgbGV0IGdyb3VwUGxheWVyczIgPSBbcGxheWVyMiwgcGxheWVyMywgcGxheWVyNCwgcGxheWVyNl07XG4gICAgbGV0IGdyb3VwUGxheWVyczMgPSBbcGxheWVyNCwgcGxheWVyNSwgcGxheWVyNl07XG4gICAgbGV0IGdyb3VwUGxheWVyczQgPSBbcGxheWVyNiwgcGxheWVyNywgcGxheWVyOCwgcGxheWVyNF07XG4gICAgbGV0IGdyb3VwUGxheWVyczUgPSBbcGxheWVyOCwgcGxheWVyOSwgcGxheWVyMTBdO1xuICAgIGxldCBncm91cFBsYXllcnM2ID0gW3BsYXllcjEsIHBsYXllcjIsIHBsYXllcjMsIHBsYXllcjQsIHBsYXllcjUsIHBsYXllcjYsIHBsYXllcjcsIHBsYXllcjgsIHBsYXllcjksIHBsYXllcjEwXTtcbiAgICBcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzMVwiLCBncm91cFBsYXllcnMxKSk7XG4gICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczJcIiwgZ3JvdXBQbGF5ZXJzMikpO1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnMzXCIsIGdyb3VwUGxheWVyczMpKTtcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNFwiLCBncm91cFBsYXllcnM0KSk7XG4gICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczVcIiwgZ3JvdXBQbGF5ZXJzNSkpO1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnM2XCIsIGdyb3VwUGxheWVyczYpKTtcbiAgICBcbiAgICBcbiAgICAvLyAvLyBmb3IodmFyIGdyb3VwIG9mIHRoaXMuZ3JvdXBzKXtcbiAgICAvLyAvLyAgIHRoaXMuaW5zZXJ0X2dyb3VwKGdyb3VwKTtcbiAgICAvLyAvLyB9XG4gICAgXG4gICAgLy8gdGhpcy5jbGVhckdyb3VwcztcbiAgICBcbiAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDx0aGlzLmdyb3Vwcy5sZW5ndGg7aSsrKXtcbiAgICAvLyAgIGRlbGV0ZSB0aGlzLmdyb3Vwc1tpXTtcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gdGhpcy5ncm91cHM9IFtdO1xuICAgIFxuICAgIC8vIHRoaXMuZmV0Y2hfZ3JvdXBzKCk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coXCJmZXRjaCBjb21wbGV0ZWQuLi4gR3JvdXAgY291bnQ6IFwiK3RoaXMuZ3JvdXBzLmxlbmd0aCk7XG5cbiAgICAvLyBmb3IgKHZhciBncm91cCBvZiB0aGlzLmdyb3Vwcyl7XG4gICAgLy8gICBncm91cC5wbGF5ZXJzPXRoaXMuZmV0Y2hfZ3JvdXBfcGxheWVycyhncm91cCk7XG4gICAgLy8gfVxuICAgIFxuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJncy5uYW1lKTtcbiAgICBpZihhcmdzLmluZGV4ID49IDApe1xuICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwID0gdGhpcy5ncm91cHNbYXJncy5pbmRleF07XG4gICAgICBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRHcm91cC5uYW1lKTtcbiAgICAgIFxuICAgICAgdGhpcy5yZHAucGxheWVycyA9IHRoaXMuc2VsZWN0ZWRHcm91cC5wbGF5ZXJzO1xuICAgICAgXG4gICAgICB0aGlzLnJkcC5ncm91cCA9IHRoaXMuc2VsZWN0ZWRHcm91cDtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJHcm91cDogXCIrIHRoaXMucmRwLmdyb3VwLm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXJzOiBcIisgdGhpcy5yZHAucGxheWVycyk7XG4gICAgICBcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlR3JvdXAoZ3JvdXA6R3JvdXApIHtcbiAgICBjb25zb2xlLmxvZyhcIlBsYXllciB0byBiZSBkZWxldGVkOlwiKyBncm91cC5uYW1lKTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXAsIDApO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2RlU2VsZWN0b3JcIl0pXG4gIH1cbiAgXG4gIHB1YmxpYyBpbnNlcnRfZ3JvdXAoZ3JvdXA6R3JvdXApIHtcbiAgICB0aGlzLmRhdGFiYXNlLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyBncm91cHMgKG5hbWUsIHBsYXllcnNOYW1lKSBWQUxVRVMgKD8sPylcIiwgW2dyb3VwLm5hbWUsIGdyb3VwLnBsYXllcnNOYW1lXSkudGhlbihpZCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBSRVNVTFRcIiwgaWQpO1xuICAgICAgZ3JvdXAuaWQ9aWQ7XG4gICAgICAvLyB0aGlzLmZldGNoKCk7XG4gICAgICB0aGlzLmluc2VydF9ncm91cF9wbGF5ZXJzKGdyb3VwKTtcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgaW5zZXJ0X2dyb3VwX3BsYXllcnMoZ3JvdXA6R3JvdXApIHtcbiAgICBcbiAgICBsZXQgaW5zZXJ0X3BsYXllcnMgPSBncm91cC5wbGF5ZXJzO1xuICAgIFxuICAgIGZvciAodmFyIHBsYXllciBvZiBpbnNlcnRfcGxheWVycyl7XG4gICAgICB0aGlzLmRhdGFiYXNlLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyBwbGF5ZXJzIChuYW1lLCBncm91cF9pZCkgVkFMVUVTICg/LCA/KVwiLCBbcGxheWVyLm5hbWUsIGdyb3VwLmlkXSkudGhlbihpZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XG4gICAgICAgIC8vIHRoaXMuZmV0Y2goKTtcbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBwdWJsaWMgZmV0Y2hfZ3JvdXBzKCkge1xuICAgIC8vVE9ETy4gRmV0Y2ggcmVjb3N0cnVjdHMgb2JqZWN0cyBiYXNlZCBvbiBpZC5cbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nIGdyb3Vwcy4uLlwiKTtcbiAgICBcbiAgICAvLyB2YXIgdGhhdCA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhYmFzZS5hbGwoXCJTRUxFQ1QgKiBGUk9NIGdyb3Vwc1wiKS50aGVuKHJvd3MgPT4ge1xuICAgICAgdGhpcy5ncm91cHMgPSBbXTtcbiAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaCh7XG4gICAgICAgICAgXCJpZFwiOnJvd3Nbcm93XVswXSxcbiAgICAgICAgICBcIm5hbWVcIjpyb3dzW3Jvd11bMV0sXG4gICAgICAgICAgXCJwbGF5ZXJzTmFtZVwiOnJvd3Nbcm93XVsyXSxcbiAgICAgICAgICBcInBsYXllcnNcIjpudWxsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBsZXQgbGFzdEdyb3VwID0gdGhpcy5ncm91cHNbdGhpcy5ncm91cHMubGVuZ3RoLTFdO1xuICAgICAgY29uc29sZS5sb2coXCJuZXcgZ3JvdXA6IFwiK2xhc3RHcm91cC5uYW1lKTtcbiAgICAgIC8vIGxhc3RHcm91cC5wbGF5ZXJzPSB0aGlzLmZldGNoX2dyb3VwX3BsYXllcnMobGFzdEdyb3VwKTtcbiAgICAgIC8vIHRoaXMudXBkYXRlUGxheWVyc05hbWUobGFzdEdyb3VwKTtcbiAgICB9XG4gIH0sIGVycm9yID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gIH0pO1xufVxuXG5wdWJsaWMgZmV0Y2hfZ3JvdXBfcGxheWVycyhncm91cDpHcm91cCl7XG4gIHZhciBncm91cF9wbGF5ZXJzOiBQbGF5ZXJbXT1bXTtcbiAgXG4gIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgZ3JvdXAgcGxheWVyczogXCIrZ3JvdXAuaWQpO1xuICBcbiAgXG4gIHRoaXMuZGF0YWJhc2UuYWxsKFwiU0VMRUNUICogRlJPTSBwbGF5ZXJzXCIpLnRoZW4ocm93cyA9PiB7XG4gICAgZ3JvdXBfcGxheWVycyA9IFtdO1xuICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICBncm91cF9wbGF5ZXJzLnB1c2goe1xuICAgICAgICBcImlkXCI6cm93c1tyb3ddWzBdLFxuICAgICAgICBcIm5hbWVcIjpyb3dzW3Jvd11bMV0sXG4gICAgICAgIFwiYW5zd2VyQ291bnRcIjogMCxcbiAgICAgICAgXCJydW5uaW5nUG9pbnRzVG90YWxcIjogMCxcbiAgICAgICAgXCJ0ZWFtXCI6IG51bGwsXG4gICAgICAgIFwiaXNTZWxlY3RlZFwiOmZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGVycm9yID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gIH0pO1xuXG4gIFxuICBmb3IodmFyIHBsYXllciBvZiBncm91cF9wbGF5ZXJzKXtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIubmFtZSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIkRvbmUgRmV0Y2hpbmcgZ3JvdXAgcGxheWVyczogXCIrZ3JvdXAuaWQpO1xuICBcbiAgXG4gIHJldHVybiBncm91cF9wbGF5ZXJzO1xufVxuXG5wcml2YXRlIHVwZGF0ZVBsYXllcnNOYW1lKGdyb3VwOiBHcm91cCl7XG4gIGNvbnNvbGUubG9nKFwidXBkYXRpbmcgcGxheWVycyBuYW1lLi4uXCIpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICBncm91cC5wbGF5ZXJzTmFtZSArPSBncm91cC5wbGF5ZXJzW2ldLm5hbWU7XG4gICAgXG4gICAgaWYgKGkgPCBncm91cC5wbGF5ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGdyb3VwLnBsYXllcnNOYW1lICs9IFwiLCBcIjtcbiAgICB9XG4gIH1cbiAgXG59XG5cbnByaXZhdGUgY2xlYXJHcm91cHMoKXtcbiAgXG4gIGZvcihsZXQgaSA9IDA7IGkgPHRoaXMuZ3JvdXBzLmxlbmd0aDtpKyspe1xuICAgIGRlbGV0ZSB0aGlzLmdyb3Vwc1tpXTtcbiAgfVxuICBcbiAgdGhpcy5ncm91cHM9IFtdO1xufVxufVxuXG5cbiJdfQ==