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
        var color = require("color");
        var colorBlack = new color.Color("#000000");
        this.groupTextField.nativeElement.borderColor = colorBlack;
        this.playerTextField.nativeElement.borderColor = colorBlack;
    };
    PlayerCreatorComponent.prototype.submit = function (groupName) {
        if (groupName && this.players.length > 1) {
            this.group = new group_1.Group(groupName, this.players);
            console.log("length players".concat(this.players.length.toString()));
            this.rdp.players = this.players;
            this.rdp.group = this.group;
            var color = require("color");
            var colorBlack = new color.Color("#000000");
            this.groupTextField.nativeElement.borderColor = colorBlack;
            this.playerTextField.nativeElement.borderColor = colorBlack;
            this.playerTextField.nativeElement.hint = "Enter a Player Name";
            this.next();
        }
        else {
            console.log("g");
            var color = require("color");
            var colorRed = new color.Color("#FF0000");
            if (!groupName || 0 === groupName.length) {
                this.groupTextField.nativeElement.borderColor = colorRed;
            }
            if (this.players.length <= 0) {
                this.playerTextField.nativeElement.borderColor = colorRed;
            }
            else if (this.players.length == 1) {
                this.playerTextField.nativeElement.borderColor = colorRed;
                this.playerTextField.nativeElement.hint = "Two players needed!";
            }
        }
    };
    PlayerCreatorComponent.prototype.addPlayer = function (playerName) {
        if (playerName == "") {
            var color = require("color");
            var colorRed = new color.Color("#FF0000");
            this.playerTextField.nativeElement.borderColor = colorRed;
            this.playerTextField.nativeElement.hint = "Enter a player Name";
            return;
        }
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player_2 = _a[_i];
            if (player_2.name == playerName) {
                var color = require("color");
                var colorBlack = new color.Color("#FF0000");
                this.playerTextField.nativeElement.borderColor = colorBlack;
                this.playerTextField.nativeElement.text = "";
                this.playerTextField.nativeElement.hint = "Enter a unique name.";
                return;
            }
        }
        var color = require("color");
        var colorBlack = new color.Color("#000000");
        this.groupTextField.nativeElement.borderColor = colorBlack;
        this.playerTextField.nativeElement.borderColor = colorBlack;
        this.playerTextField.nativeElement.hint = "Enter a Player Name";
        var player = new player_1.Player(playerName);
        this.players.push(player);
        this.newPlayerName = "";
    };
    PlayerCreatorComponent.prototype.deletePlayer = function (player) {
        console.log("Player to be deleted:" + player.name);
        var index = this.players.indexOf(player, 0);
        if (index > -1) {
            this.players.splice(index, 1);
        }
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
    __decorate([
        core_1.ViewChild("groupNameTx"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayerCreatorComponent.prototype, "groupTextField", void 0);
    __decorate([
        core_1.ViewChild("newPlayerTx"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayerCreatorComponent.prototype, "playerTextField", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUQ7QUFDekQsc0RBQTZEO0FBSzdELDRDQUF5QztBQUN6Qyw4Q0FBMkM7QUFHM0MsZ0ZBQTRFO0FBUTVFO0lBYUUsZ0NBQTJCLEtBQW9CLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQztRQUF0SSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVnpKLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBS3JDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBTWpCLDRDQUE0QztRQUM1QyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUM5RCxDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO1lBQ2hFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUEsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDM0QsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDNUQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7WUFDbEUsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU8sMENBQVMsR0FBakIsVUFBa0IsVUFBVTtRQUMxQixFQUFFLENBQUEsQ0FBQyxVQUFVLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO1lBQ2hFLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxHQUFHLENBQUEsQ0FBZSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTFCLElBQUksUUFBTSxTQUFBO1lBQ1osRUFBRSxDQUFBLENBQUMsUUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQSxDQUFDO2dCQUM1QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLElBQUksVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDO2dCQUNqRSxNQUFNLENBQUM7WUFDVCxDQUFDO1NBQ0Y7UUFDRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7UUFDaEUsSUFBSSxNQUFNLEdBQVUsSUFBSSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLDZDQUFZLEdBQXBCLFVBQXFCLE1BQWE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFTyxxQ0FBSSxHQUFaO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsNkNBQTZDO0lBQy9DLENBQUM7SUE3RnlCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVOytEQUFDO0lBQ3hCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFpQixpQkFBVTtrRUFBQztJQUMzQjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBa0IsaUJBQVU7bUVBQUM7SUFYM0Msc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO1NBQzVELENBQUM7eUNBZWlDLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCLEVBQTZCLHNDQUFpQjtPQWJ0SixzQkFBc0IsQ0F1R2xDO0lBQUQsNkJBQUM7Q0FBQSxBQXZHRCxJQXVHQztBQXZHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0ICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGxheWVyQ3JlYXRvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3BsYXllckNyZWF0b3IvcGxheWVyQ3JlYXRvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUGxheWVyQ3JlYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHByaXZhdGUgZ3JvdXA6IEdyb3VwO1xuICBwcml2YXRlIHBsYXllcnM6IEFycmF5PFBsYXllcj4gID0gW107XG4gIHB1YmxpYyBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgcmRwOiBSb3VuZERhdGFQcm92aWRlcjtcbiAgcHJpdmF0ZSByZXR1cm5QYXRoOiBzdHJpbmc7XG4gIFxuICBuZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgQFZpZXdDaGlsZChcIm5ld1BsYXllclR4XCIpIG5ld1BsYXllclR4OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZ3JvdXBOYW1lVHhcIikgZ3JvdXBUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJuZXdQbGF5ZXJUeFwiKSBwbGF5ZXJUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge1xuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgLy8gICB0aGlzLnJldHVyblBhdGggPSBwYXJhbXMucGF0aDtcbiAgICAvLyB9KTsgIFxuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDIwO1xuICAgIHZhciBjb2xvciA9IHJlcXVpcmUoXCJjb2xvclwiKTtcbiAgICB2YXIgY29sb3JCbGFjayA9IG5ldyBjb2xvci5Db2xvcihcIiMwMDAwMDBcIik7XG4gICAgdGhpcy5ncm91cFRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JCbGFjaztcbiAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JCbGFjaztcbiAgfVxuICBcbiAgcHJpdmF0ZSBzdWJtaXQoZ3JvdXBOYW1lKSB7XG4gICAgaWYoZ3JvdXBOYW1lICYmIHRoaXMucGxheWVycy5sZW5ndGggPiAxKXtcbiAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgR3JvdXAoZ3JvdXBOYW1lLCB0aGlzLnBsYXllcnMpO1xuICAgICAgY29uc29sZS5sb2coXCJsZW5ndGggcGxheWVyc1wiLmNvbmNhdCh0aGlzLnBsYXllcnMubGVuZ3RoLnRvU3RyaW5nKCkpKVxuICAgICAgdGhpcy5yZHAucGxheWVycyA9IHRoaXMucGxheWVycztcbiAgICAgIHRoaXMucmRwLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICAgIHZhciBjb2xvciA9IHJlcXVpcmUoXCJjb2xvclwiKTtcbiAgICAgIHZhciBjb2xvckJsYWNrID0gbmV3IGNvbG9yLkNvbG9yKFwiIzAwMDAwMFwiKTtcbiAgICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JCbGFjaztcbiAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuaGludCA9IFwiRW50ZXIgYSBQbGF5ZXIgTmFtZVwiO1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ1wiKVxuICAgICAgdmFyIGNvbG9yID0gcmVxdWlyZShcImNvbG9yXCIpO1xuICAgICAgdmFyIGNvbG9yUmVkID0gbmV3IGNvbG9yLkNvbG9yKFwiI0ZGMDAwMFwiKTtcbiAgICAgIGlmKCFncm91cE5hbWUgfHwgMCA9PT0gZ3JvdXBOYW1lLmxlbmd0aCl7XG4gICAgICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yUmVkO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5wbGF5ZXJzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yUmVkO1xuICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVycy5sZW5ndGggPT0gMSl7XG4gICAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBjb2xvclJlZDtcbiAgICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5oaW50ID0gXCJUd28gcGxheWVycyBuZWVkZWQhXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIGFkZFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgaWYocGxheWVyTmFtZT09XCJcIil7XG4gICAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgICB2YXIgY29sb3JSZWQgPSBuZXcgY29sb3IuQ29sb3IoXCIjRkYwMDAwXCIpO1xuICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yUmVkO1xuICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5oaW50ID0gXCJFbnRlciBhIHBsYXllciBOYW1lXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvcihsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycyl7XG4gICAgICBpZihwbGF5ZXIubmFtZSA9PSBwbGF5ZXJOYW1lKXtcbiAgICAgICAgdmFyIGNvbG9yID0gcmVxdWlyZShcImNvbG9yXCIpO1xuICAgICAgICB2YXIgY29sb3JCbGFjayA9IG5ldyBjb2xvci5Db2xvcihcIiNGRjAwMDBcIik7XG4gICAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBjb2xvckJsYWNrO1xuICAgICAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LnRleHQgPSBcIlwiXG4gICAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuaGludCA9IFwiRW50ZXIgYSB1bmlxdWUgbmFtZS5cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgdmFyIGNvbG9yQmxhY2sgPSBuZXcgY29sb3IuQ29sb3IoXCIjMDAwMDAwXCIpO1xuICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5oaW50ID0gXCJFbnRlciBhIFBsYXllciBOYW1lXCI7XG4gICAgbGV0IHBsYXllcjpQbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllck5hbWUpO1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7ICAgIFxuICAgIHRoaXMubmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZVBsYXllcihwbGF5ZXI6UGxheWVyKSB7XG4gICAgY29uc29sZS5sb2coXCJQbGF5ZXIgdG8gYmUgZGVsZXRlZDpcIisgcGxheWVyLm5hbWUpO1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5wbGF5ZXJzLmluZGV4T2YocGxheWVyLCAwKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIG5leHQoKSB7XG4gICAgaWYodGhpcy5yZHAucGF0aCAmJiB0aGlzLnJkcC5wYXRoICE9PSBcIlwiKXtcbiAgICAgIHRoaXMucmRwLnBhdGggPSBcInBsYXllckNyZWF0b3JcIjtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmRwLnBhdGgpO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1vZGVTZWxlY3RvclwiXSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuOlwiICsgdGhpcy5yZXR1cm5QYXRoKTsgXG4gIH1cbn1cbiJdfQ==