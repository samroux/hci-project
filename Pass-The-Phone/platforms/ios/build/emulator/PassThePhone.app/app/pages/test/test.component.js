"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var player_1 = require("../../shared/player");
var group_1 = require("../../shared/group");
var Sqlite = require("nativescript-sqlite");
var TestComponent = /** @class */ (function () {
    function TestComponent(router, rdp) {
        this.router = router;
        this.rdp = rdp;
        this.groups = [];
    }
    TestComponent.prototype.insert = function () {
        // this.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Nic", "Raboy"]).then(id => {
        //     console.log("INSERT RESULT", id);
        //     this.fetch();
        // }, error => {
        //     console.log("INSERT ERROR", error);
        // });
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
        for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            this.rdp.insert_group(group);
        }
    };
    TestComponent.prototype.fetch = function () {
        var _this = this;
        this.database.all("SELECT * FROM people").then(function (rows) {
            _this.people = [];
            for (var row in rows) {
                _this.people.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                });
            }
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: "test",
            templateUrl: "pages/test/test.component.html",
            styleUrls: ["pages/test/test-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBeUM7QUFDekMsZ0ZBQTRFO0FBQzVFLDhDQUEyQztBQUMzQyw0Q0FBeUM7QUFHekMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFTNUM7SUFLRSx1QkFBMkIsTUFBYyxFQUFVLEdBQXNCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUZqRSxXQUFNLEdBQWlCLEVBQUUsQ0FBQztJQUUwQyxDQUFDO0lBRXRFLDhCQUFNLEdBQWI7UUFDSSxpSEFBaUg7UUFDakgsd0NBQXdDO1FBQ3hDLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsMENBQTBDO1FBQzFDLE1BQU07UUFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUU5RCxHQUFHLENBQUEsQ0FBYyxVQUFXLEVBQVgsS0FBQSxJQUFJLENBQUMsTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXO1lBQXhCLElBQUksS0FBSyxTQUFBO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQy9DLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNiLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0IsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF4RFUsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQVFtQyxlQUFNLEVBQWUsc0NBQWlCO09BTDlELGFBQWEsQ0F5RHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5cblxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGVzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy90ZXN0L3Rlc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90ZXN0L3Rlc3QtY29tbW9uLmNzc1wiXVxufSlcblxuXG5leHBvcnQgY2xhc3MgVGVzdENvbXBvbmVudCB7XG4gIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcbiAgcHVibGljIHBlb3BsZTogQXJyYXk8YW55PjtcbiAgcHJpdmF0ZSBncm91cHM6IEFycmF5PEdyb3VwPiA9IFtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXIpIHt9XG5cbiAgcHVibGljIGluc2VydCgpIHtcbiAgICAgIC8vIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcIklOU0VSVCBJTlRPIHBlb3BsZSAoZmlyc3RuYW1lLCBsYXN0bmFtZSkgVkFMVUVTICg/LCA/KVwiLCBbXCJOaWNcIiwgXCJSYWJveVwiXSkudGhlbihpZCA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUXCIsIGlkKTtcbiAgICAgIC8vICAgICB0aGlzLmZldGNoKCk7XG4gICAgICAvLyB9LCBlcnJvciA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgLy8gfSk7XG4gICAgICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJTYW1cIik7XG4gICAgICBsZXQgcGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJKb2VcIik7XG4gICAgICBsZXQgcGxheWVyMyA9IG5ldyBQbGF5ZXIoXCJKb2huXCIpO1xuICAgICAgbGV0IHBsYXllcjQgPSBuZXcgUGxheWVyKFwiV2lsbFwiKTtcbiAgICAgIGxldCBwbGF5ZXI1ID0gbmV3IFBsYXllcihcIk9saVwiKTtcbiAgICAgIGxldCBwbGF5ZXI2ID0gbmV3IFBsYXllcihcIkZhYlwiKTtcbiAgICAgIGxldCBwbGF5ZXI3ID0gbmV3IFBsYXllcihcIkZsb1wiKTtcbiAgICAgIGxldCBwbGF5ZXI4ID0gbmV3IFBsYXllcihcIkVnZVwiKTtcbiAgICAgIGxldCBwbGF5ZXI5ID0gbmV3IFBsYXllcihcIlN0ZXZlXCIpO1xuICAgICAgbGV0IHBsYXllcjEwID0gbmV3IFBsYXllcihcIkFzaGVyXCIpO1xuICAgICAgXG4gICAgICBsZXQgZ3JvdXBQbGF5ZXJzMSA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzXTtcbiAgICAgIGxldCBncm91cFBsYXllcnMyID0gW3BsYXllcjIsIHBsYXllcjMsIHBsYXllcjQsIHBsYXllcjZdO1xuICAgICAgbGV0IGdyb3VwUGxheWVyczMgPSBbcGxheWVyNCwgcGxheWVyNSwgcGxheWVyNl07XG4gICAgICBsZXQgZ3JvdXBQbGF5ZXJzNCA9IFtwbGF5ZXI2LCBwbGF5ZXI3LCBwbGF5ZXI4LCBwbGF5ZXI0XTtcbiAgICAgIGxldCBncm91cFBsYXllcnM1ID0gW3BsYXllcjgsIHBsYXllcjksIHBsYXllcjEwXTtcbiAgICAgIGxldCBncm91cFBsYXllcnM2ID0gW3BsYXllcjEsIHBsYXllcjIsIHBsYXllcjMsIHBsYXllcjQsIHBsYXllcjUsIHBsYXllcjYsIHBsYXllcjcsIHBsYXllcjgsIHBsYXllcjksIHBsYXllcjEwXTtcbiAgXG4gICAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzMVwiLCBncm91cFBsYXllcnMxKSk7XG4gICAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzMlwiLCBncm91cFBsYXllcnMyKSk7XG4gICAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzM1wiLCBncm91cFBsYXllcnMzKSk7XG4gICAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNFwiLCBncm91cFBsYXllcnM0KSk7XG4gICAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNVwiLCBncm91cFBsYXllcnM1KSk7XG4gICAgICB0aGlzLmdyb3Vwcy5wdXNoKCBuZXcgR3JvdXAgKFwiZ3JvdXBQbGF5ZXJzNlwiLCBncm91cFBsYXllcnM2KSk7XG5cbiAgICAgIGZvcih2YXIgZ3JvdXAgb2YgdGhpcy5ncm91cHMpe1xuICAgICAgICB0aGlzLnJkcC5pbnNlcnRfZ3JvdXAoZ3JvdXApO1xuICAgICAgfVxuICB9XG5cbiAgcHVibGljIGZldGNoKCkge1xuICAgICAgdGhpcy5kYXRhYmFzZS5hbGwoXCJTRUxFQ1QgKiBGUk9NIHBlb3BsZVwiKS50aGVuKHJvd3MgPT4ge1xuICAgICAgICAgIHRoaXMucGVvcGxlID0gW107XG4gICAgICAgICAgZm9yKHZhciByb3cgaW4gcm93cykge1xuICAgICAgICAgICAgICB0aGlzLnBlb3BsZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IHJvd3Nbcm93XVsxXSxcbiAgICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogcm93c1tyb3ddWzJdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIl19