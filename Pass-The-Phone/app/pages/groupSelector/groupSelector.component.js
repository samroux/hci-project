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
        var _this = this;
        this.router = router;
        this.rdp = rdp;
        this.groups = [];
        (new Sqlite("passthephone.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, group_id TEXT)").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
        (new Sqlite("passthephone.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, playersName TEXT)").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBTZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cFNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFJNUMsOENBQTJDO0FBQzNDLDRDQUF5QztBQUN6QyxnRkFBNEU7QUFTNUU7SUFRRSxnQ0FBMkIsTUFBYyxFQUFVLEdBQXNCO1FBQXpFLGlCQXFCQztRQXJCMEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBUGpFLFdBQU0sR0FBaUIsRUFBRSxDQUFDO1FBUWhDLENBQUMsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDckMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQ3ZILEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUVILENBQUMsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDckMsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1R0FBdUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQ3pILEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFD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LFdBQVcsSUFBSSxJQUFJLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUM7SUFFSCxDQUFDO0lBRU8sNENBQVcsR0FBbkI7UUFFRSxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFFLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBaE5ZLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM1RCxDQUFDO3lDQVVtQyxlQUFNLEVBQWUsc0NBQWlCO09BUjlELHNCQUFzQixDQWlObEM7SUFBRCw2QkFBQztDQUFBLEFBak5ELElBaU5DO0FBak5ZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcblxuXG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3JvdXBTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ncm91cFNlbGVjdG9yL2dyb3VwU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2dyb3VwU2VsZWN0b3IvZ3JvdXBTZWxlY3Rvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHJpdmF0ZSBncm91cHM6IEFycmF5PEdyb3VwPiA9IFtdO1xuICBwcml2YXRlIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgIFxuICBcbiAgcHJpdmF0ZSBzZWxlY3RlZEdyb3VwOiBHcm91cDtcbiAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuICBcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgICAobmV3IFNxbGl0ZShcInBhc3N0aGVwaG9uZS5kYlwiKSkudGhlbihkYiA9PiB7XG4gICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcGxheWVycyAoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCBuYW1lIFRFWFQsIGdyb3VwX2lkIFRFWFQpXCIpLnRoZW4oaWQgPT4ge1xuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGI7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XG4gICAgfSk7XG4gICAgXG4gICAgKG5ldyBTcWxpdGUoXCJwYXNzdGhlcGhvbmUuZGJcIikpLnRoZW4oZGIgPT4ge1xuICAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGdyb3VwcyAoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCBuYW1lIFRFWFQsIHBsYXllcnNOYW1lIFRFWFQpXCIpLnRoZW4oaWQgPT4ge1xuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGI7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XG4gICAgfSk7XG4gICAgXG4gIH1cbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gMjA7XG4gICAgXG4gICAgbGV0IHBsYXllcjEgPSBuZXcgUGxheWVyKFwiU2FtXCIpO1xuICAgIGxldCBwbGF5ZXIyID0gbmV3IFBsYXllcihcIkpvZVwiKTtcbiAgICBsZXQgcGxheWVyMyA9IG5ldyBQbGF5ZXIoXCJKb2huXCIpO1xuICAgIGxldCBwbGF5ZXI0ID0gbmV3IFBsYXllcihcIldpbGxcIik7XG4gICAgbGV0IHBsYXllcjUgPSBuZXcgUGxheWVyKFwiT2xpXCIpO1xuICAgIGxldCBwbGF5ZXI2ID0gbmV3IFBsYXllcihcIkZhYlwiKTtcbiAgICBsZXQgcGxheWVyNyA9IG5ldyBQbGF5ZXIoXCJGbG9cIik7XG4gICAgbGV0IHBsYXllcjggPSBuZXcgUGxheWVyKFwiRWdlXCIpO1xuICAgIGxldCBwbGF5ZXI5ID0gbmV3IFBsYXllcihcIlN0ZXZlXCIpO1xuICAgIGxldCBwbGF5ZXIxMCA9IG5ldyBQbGF5ZXIoXCJBc2hlclwiKTtcbiAgICBcbiAgICBsZXQgZ3JvdXBQbGF5ZXJzMSA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzXTtcbiAgICBsZXQgZ3JvdXBQbGF5ZXJzMiA9IFtwbGF5ZXIyLCBwbGF5ZXIzLCBwbGF5ZXI0LCBwbGF5ZXI2XTtcbiAgICBsZXQgZ3JvdXBQbGF5ZXJzMyA9IFtwbGF5ZXI0LCBwbGF5ZXI1LCBwbGF5ZXI2XTtcbiAgICBsZXQgZ3JvdXBQbGF5ZXJzNCA9IFtwbGF5ZXI2LCBwbGF5ZXI3LCBwbGF5ZXI4LCBwbGF5ZXI0XTtcbiAgICBsZXQgZ3JvdXBQbGF5ZXJzNSA9IFtwbGF5ZXI4LCBwbGF5ZXI5LCBwbGF5ZXIxMF07XG4gICAgbGV0IGdyb3VwUGxheWVyczYgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyMywgcGxheWVyNCwgcGxheWVyNSwgcGxheWVyNiwgcGxheWVyNywgcGxheWVyOCwgcGxheWVyOSwgcGxheWVyMTBdO1xuICAgIFxuICAgIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnMxXCIsIGdyb3VwUGxheWVyczEpKTtcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzMlwiLCBncm91cFBsYXllcnMyKSk7XG4gICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczNcIiwgZ3JvdXBQbGF5ZXJzMykpO1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goIG5ldyBHcm91cCAoXCJncm91cFBsYXllcnM0XCIsIGdyb3VwUGxheWVyczQpKTtcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNVwiLCBncm91cFBsYXllcnM1KSk7XG4gICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczZcIiwgZ3JvdXBQbGF5ZXJzNikpO1xuICAgIFxuICAgIFxuICAgIC8vIC8vIGZvcih2YXIgZ3JvdXAgb2YgdGhpcy5ncm91cHMpe1xuICAgIC8vIC8vICAgdGhpcy5pbnNlcnRfZ3JvdXAoZ3JvdXApO1xuICAgIC8vIC8vIH1cbiAgICBcbiAgICAvLyB0aGlzLmNsZWFyR3JvdXBzO1xuICAgIFxuICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPHRoaXMuZ3JvdXBzLmxlbmd0aDtpKyspe1xuICAgIC8vICAgZGVsZXRlIHRoaXMuZ3JvdXBzW2ldO1xuICAgIC8vIH1cbiAgICBcbiAgICAvLyB0aGlzLmdyb3Vwcz0gW107XG4gICAgXG4gICAgLy8gdGhpcy5mZXRjaF9ncm91cHMoKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhcImZldGNoIGNvbXBsZXRlZC4uLiBHcm91cCBjb3VudDogXCIrdGhpcy5ncm91cHMubGVuZ3RoKTtcblxuICAgIC8vIGZvciAodmFyIGdyb3VwIG9mIHRoaXMuZ3JvdXBzKXtcbiAgICAvLyAgIGdyb3VwLnBsYXllcnM9dGhpcy5mZXRjaF9ncm91cF9wbGF5ZXJzKGdyb3VwKTtcbiAgICAvLyB9XG4gICAgXG4gIH1cbiAgXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPj0gMCl7XG4gICAgICB0aGlzLnNlbGVjdGVkR3JvdXAgPSB0aGlzLmdyb3Vwc1thcmdzLmluZGV4XTtcbiAgICAgIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZEdyb3VwLm5hbWUpO1xuICAgICAgXG4gICAgICB0aGlzLnJkcC5wbGF5ZXJzID0gdGhpcy5zZWxlY3RlZEdyb3VwLnBsYXllcnM7XG4gICAgICBcbiAgICAgIHRoaXMucmRwLmdyb3VwID0gdGhpcy5zZWxlY3RlZEdyb3VwO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcIkdyb3VwOiBcIisgdGhpcy5yZHAuZ3JvdXAubmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlBsYXllcnM6IFwiKyB0aGlzLnJkcC5wbGF5ZXJzKTtcbiAgICAgIFxuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1vZGVTZWxlY3RvclwiXSlcbiAgfVxuICBcbiAgcHVibGljIGluc2VydF9ncm91cChncm91cDpHcm91cCkge1xuICAgIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcIklOU0VSVCBJTlRPIGdyb3VwcyAobmFtZSwgcGxheWVyc05hbWUpIFZBTFVFUyAoPyw/KVwiLCBbZ3JvdXAubmFtZSwgZ3JvdXAucGxheWVyc05hbWVdKS50aGVuKGlkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XG4gICAgICBncm91cC5pZD1pZDtcbiAgICAgIC8vIHRoaXMuZmV0Y2goKTtcbiAgICAgIHRoaXMuaW5zZXJ0X2dyb3VwX3BsYXllcnMoZ3JvdXApO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIEVSUk9SXCIsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBpbnNlcnRfZ3JvdXBfcGxheWVycyhncm91cDpHcm91cCkge1xuICAgIFxuICAgIGxldCBpbnNlcnRfcGxheWVycyA9IGdyb3VwLnBsYXllcnM7XG4gICAgXG4gICAgZm9yICh2YXIgcGxheWVyIG9mIGluc2VydF9wbGF5ZXJzKXtcbiAgICAgIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcIklOU0VSVCBJTlRPIHBsYXllcnMgKG5hbWUsIGdyb3VwX2lkKSBWQUxVRVMgKD8sID8pXCIsIFtwbGF5ZXIubmFtZSwgZ3JvdXAuaWRdKS50aGVuKGlkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUXCIsIGlkKTtcbiAgICAgICAgLy8gdGhpcy5mZXRjaCgpO1xuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIHB1YmxpYyBmZXRjaF9ncm91cHMoKSB7XG4gICAgLy9UT0RPLiBGZXRjaCByZWNvc3RydWN0cyBvYmplY3RzIGJhc2VkIG9uIGlkLlxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgZ3JvdXBzLi4uXCIpO1xuICAgIFxuICAgIC8vIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmRhdGFiYXNlLmFsbChcIlNFTEVDVCAqIEZST00gZ3JvdXBzXCIpLnRoZW4ocm93cyA9PiB7XG4gICAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgICAgZm9yKHZhciByb3cgaW4gcm93cykge1xuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICBcImlkXCI6cm93c1tyb3ddWzBdLFxuICAgICAgICAgIFwibmFtZVwiOnJvd3Nbcm93XVsxXSxcbiAgICAgICAgICBcInBsYXllcnNOYW1lXCI6cm93c1tyb3ddWzJdLFxuICAgICAgICAgIFwicGxheWVyc1wiOm51bGxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGxldCBsYXN0R3JvdXAgPSB0aGlzLmdyb3Vwc1t0aGlzLmdyb3Vwcy5sZW5ndGgtMV07XG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBncm91cDogXCIrbGFzdEdyb3VwLm5hbWUpO1xuICAgICAgLy8gbGFzdEdyb3VwLnBsYXllcnM9IHRoaXMuZmV0Y2hfZ3JvdXBfcGxheWVycyhsYXN0R3JvdXApO1xuICAgICAgLy8gdGhpcy51cGRhdGVQbGF5ZXJzTmFtZShsYXN0R3JvdXApO1xuICAgIH1cbiAgfSwgZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUIEVSUk9SXCIsIGVycm9yKTtcbiAgfSk7XG59XG5cbnB1YmxpYyBmZXRjaF9ncm91cF9wbGF5ZXJzKGdyb3VwOkdyb3VwKXtcbiAgdmFyIGdyb3VwX3BsYXllcnM6IFBsYXllcltdPVtdO1xuICBcbiAgY29uc29sZS5sb2coXCJGZXRjaGluZyBncm91cCBwbGF5ZXJzOiBcIitncm91cC5pZCk7XG4gIFxuICBcbiAgdGhpcy5kYXRhYmFzZS5hbGwoXCJTRUxFQ1QgKiBGUk9NIHBsYXllcnNcIikudGhlbihyb3dzID0+IHtcbiAgICBncm91cF9wbGF5ZXJzID0gW107XG4gICAgZm9yKHZhciByb3cgaW4gcm93cykge1xuICAgICAgLy8gY29uc29sZS5sb2cocm93KTtcbiAgICAgIGdyb3VwX3BsYXllcnMucHVzaCh7XG4gICAgICAgIFwiaWRcIjpyb3dzW3Jvd11bMF0sXG4gICAgICAgIFwibmFtZVwiOnJvd3Nbcm93XVsxXSxcbiAgICAgICAgXCJhbnN3ZXJDb3VudFwiOiAwLFxuICAgICAgICBcInJ1bm5pbmdQb2ludHNUb3RhbFwiOiAwLFxuICAgICAgICBcInRlYW1cIjogbnVsbCxcbiAgICAgICAgXCJpc1NlbGVjdGVkXCI6ZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUIEVSUk9SXCIsIGVycm9yKTtcbiAgfSk7XG5cbiAgXG4gIGZvcih2YXIgcGxheWVyIG9mIGdyb3VwX3BsYXllcnMpe1xuICAgIGNvbnNvbGUubG9nKHBsYXllci5uYW1lKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiRG9uZSBGZXRjaGluZyBncm91cCBwbGF5ZXJzOiBcIitncm91cC5pZCk7XG4gIFxuICBcbiAgcmV0dXJuIGdyb3VwX3BsYXllcnM7XG59XG5cbnByaXZhdGUgdXBkYXRlUGxheWVyc05hbWUoZ3JvdXA6IEdyb3VwKXtcbiAgY29uc29sZS5sb2coXCJ1cGRhdGluZyBwbGF5ZXJzIG5hbWUuLi5cIik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgIGdyb3VwLnBsYXllcnNOYW1lICs9IGdyb3VwLnBsYXllcnNbaV0ubmFtZTtcbiAgICBcbiAgICBpZiAoaSA8IGdyb3VwLnBsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgZ3JvdXAucGxheWVyc05hbWUgKz0gXCIsIFwiO1xuICAgIH1cbiAgfVxuICBcbn1cblxucHJpdmF0ZSBjbGVhckdyb3Vwcygpe1xuICBcbiAgZm9yKGxldCBpID0gMDsgaSA8dGhpcy5ncm91cHMubGVuZ3RoO2krKyl7XG4gICAgZGVsZXRlIHRoaXMuZ3JvdXBzW2ldO1xuICB9XG4gIFxuICB0aGlzLmdyb3Vwcz0gW107XG59XG59XG5cblxuIl19