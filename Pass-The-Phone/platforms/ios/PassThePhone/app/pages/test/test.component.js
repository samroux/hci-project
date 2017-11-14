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
            // this.rdp.insert_group(group);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBeUM7QUFDekMsZ0ZBQTRFO0FBQzVFLDhDQUEyQztBQUMzQyw0Q0FBeUM7QUFHekMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFTNUM7SUFLRSx1QkFBMkIsTUFBYyxFQUFVLEdBQXNCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUZqRSxXQUFNLEdBQWlCLEVBQUUsQ0FBQztJQUUwQyxDQUFDO0lBRXRFLDhCQUFNLEdBQWI7UUFDSSxpSEFBaUg7UUFDakgsd0NBQXdDO1FBQ3hDLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsMENBQTBDO1FBQzFDLE1BQU07UUFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLGFBQUssQ0FBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUU5RCxHQUFHLENBQUEsQ0FBYyxVQUFXLEVBQVgsS0FBQSxJQUFJLENBQUMsTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXO1lBQXhCLElBQUksS0FBSyxTQUFBO1lBQ1gsZ0NBQWdDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUMvQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNCLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeERVLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FRbUMsZUFBTSxFQUFlLHNDQUFpQjtPQUw5RCxhQUFhLENBeUR6QjtJQUFELG9CQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuXG5cbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRlc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdGVzdC90ZXN0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdGVzdC90ZXN0LWNvbW1vbi5jc3NcIl1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIFRlc3RDb21wb25lbnQge1xuICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG4gIHB1YmxpYyBwZW9wbGU6IEFycmF5PGFueT47XG4gIHByaXZhdGUgZ3JvdXBzOiBBcnJheTxHcm91cD4gPSBbXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZHA6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuXG4gIHB1YmxpYyBpbnNlcnQoKSB7XG4gICAgICAvLyB0aGlzLmRhdGFiYXNlLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyBwZW9wbGUgKGZpcnN0bmFtZSwgbGFzdG5hbWUpIFZBTFVFUyAoPywgPylcIiwgW1wiTmljXCIsIFwiUmFib3lcIl0pLnRoZW4oaWQgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XG4gICAgICAvLyAgICAgdGhpcy5mZXRjaCgpO1xuICAgICAgLy8gfSwgZXJyb3IgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgIC8vIH0pO1xuICAgICAgbGV0IHBsYXllcjEgPSBuZXcgUGxheWVyKFwiU2FtXCIpO1xuICAgICAgbGV0IHBsYXllcjIgPSBuZXcgUGxheWVyKFwiSm9lXCIpO1xuICAgICAgbGV0IHBsYXllcjMgPSBuZXcgUGxheWVyKFwiSm9oblwiKTtcbiAgICAgIGxldCBwbGF5ZXI0ID0gbmV3IFBsYXllcihcIldpbGxcIik7XG4gICAgICBsZXQgcGxheWVyNSA9IG5ldyBQbGF5ZXIoXCJPbGlcIik7XG4gICAgICBsZXQgcGxheWVyNiA9IG5ldyBQbGF5ZXIoXCJGYWJcIik7XG4gICAgICBsZXQgcGxheWVyNyA9IG5ldyBQbGF5ZXIoXCJGbG9cIik7XG4gICAgICBsZXQgcGxheWVyOCA9IG5ldyBQbGF5ZXIoXCJFZ2VcIik7XG4gICAgICBsZXQgcGxheWVyOSA9IG5ldyBQbGF5ZXIoXCJTdGV2ZVwiKTtcbiAgICAgIGxldCBwbGF5ZXIxMCA9IG5ldyBQbGF5ZXIoXCJBc2hlclwiKTtcbiAgICAgIFxuICAgICAgbGV0IGdyb3VwUGxheWVyczEgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyM107XG4gICAgICBsZXQgZ3JvdXBQbGF5ZXJzMiA9IFtwbGF5ZXIyLCBwbGF5ZXIzLCBwbGF5ZXI0LCBwbGF5ZXI2XTtcbiAgICAgIGxldCBncm91cFBsYXllcnMzID0gW3BsYXllcjQsIHBsYXllcjUsIHBsYXllcjZdO1xuICAgICAgbGV0IGdyb3VwUGxheWVyczQgPSBbcGxheWVyNiwgcGxheWVyNywgcGxheWVyOCwgcGxheWVyNF07XG4gICAgICBsZXQgZ3JvdXBQbGF5ZXJzNSA9IFtwbGF5ZXI4LCBwbGF5ZXI5LCBwbGF5ZXIxMF07XG4gICAgICBsZXQgZ3JvdXBQbGF5ZXJzNiA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzLCBwbGF5ZXI0LCBwbGF5ZXI1LCBwbGF5ZXI2LCBwbGF5ZXI3LCBwbGF5ZXI4LCBwbGF5ZXI5LCBwbGF5ZXIxMF07XG4gIFxuICAgICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczFcIiwgZ3JvdXBQbGF5ZXJzMSkpO1xuICAgICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczJcIiwgZ3JvdXBQbGF5ZXJzMikpO1xuICAgICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczNcIiwgZ3JvdXBQbGF5ZXJzMykpO1xuICAgICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczRcIiwgZ3JvdXBQbGF5ZXJzNCkpO1xuICAgICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczVcIiwgZ3JvdXBQbGF5ZXJzNSkpO1xuICAgICAgdGhpcy5ncm91cHMucHVzaCggbmV3IEdyb3VwIChcImdyb3VwUGxheWVyczZcIiwgZ3JvdXBQbGF5ZXJzNikpO1xuXG4gICAgICBmb3IodmFyIGdyb3VwIG9mIHRoaXMuZ3JvdXBzKXtcbiAgICAgICAgLy8gdGhpcy5yZHAuaW5zZXJ0X2dyb3VwKGdyb3VwKTtcbiAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmZXRjaCgpIHtcbiAgICAgIHRoaXMuZGF0YWJhc2UuYWxsKFwiU0VMRUNUICogRlJPTSBwZW9wbGVcIikudGhlbihyb3dzID0+IHtcbiAgICAgICAgICB0aGlzLnBlb3BsZSA9IFtdO1xuICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5wZW9wbGUucHVzaCh7XG4gICAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiByb3dzW3Jvd11bMV0sXG4gICAgICAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IHJvd3Nbcm93XVsyXVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1QgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==