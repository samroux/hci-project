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
        if (groupName && this.players.length > 0) {
            this.group = new group_1.Group(groupName, this.players);
            this.rdp.players = this.players;
            this.rdp.group = this.group;
            var color = require("color");
            var colorBlack = new color.Color("#000000");
            this.groupTextField.nativeElement.borderColor = colorBlack;
            this.playerTextField.nativeElement.borderColor = colorBlack;
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
        }
    };
    PlayerCreatorComponent.prototype.addPlayer = function (playerName) {
        if (playerName == "") {
            // console.log("Cannot allow empty player name");
            return;
        }
        var player = new player_1.Player(playerName);
        this.players.push(player);
        this.newPlayerName = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUQ7QUFDekQsc0RBQTZEO0FBSzdELDRDQUF5QztBQUN6Qyw4Q0FBMkM7QUFHM0MsZ0ZBQTRFO0FBUTVFO0lBYUUsZ0NBQTJCLEtBQW9CLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQztRQUF0SSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVnpKLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBS3JDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBTWpCLDRDQUE0QztRQUM1QyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUM5RCxDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzNELENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzVELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVPLDBDQUFTLEdBQWpCLFVBQWtCLFVBQVU7UUFDMUIsRUFBRSxDQUFBLENBQUMsVUFBVSxJQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDakIsaURBQWlEO1lBQ2pELE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFJLE1BQU0sR0FBVSxJQUFJLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8scUNBQUksR0FBWjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELDZDQUE2QztJQUMvQyxDQUFDO0lBN0R5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTsrREFBQztJQUN4QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBaUIsaUJBQVU7a0VBQUM7SUFDM0I7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWtCLGlCQUFVO21FQUFDO0lBWDNDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM1RCxDQUFDO3lDQWVpQyx1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUE2QixzQ0FBaUI7T0FidEosc0JBQXNCLENBdUVsQztJQUFELDZCQUFDO0NBQUEsQUF2RUQsSUF1RUM7QUF2RVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYXllckNyZWF0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcGxheWVyQ3JlYXRvci9wbGF5ZXJDcmVhdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFBsYXllckNyZWF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+ICA9IFtdO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXI7XG4gIHByaXZhdGUgcmV0dXJuUGF0aDogc3RyaW5nO1xuICBcbiAgbmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIEBWaWV3Q2hpbGQoXCJuZXdQbGF5ZXJUeFwiKSBuZXdQbGF5ZXJUeDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImdyb3VwTmFtZVR4XCIpIGdyb3VwVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibmV3UGxheWVyVHhcIikgcGxheWVyVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgICAvLyB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgIC8vICAgdGhpcy5yZXR1cm5QYXRoID0gcGFyYW1zLnBhdGg7XG4gICAgLy8gfSk7ICBcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAyMDtcbiAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgdmFyIGNvbG9yQmxhY2sgPSBuZXcgY29sb3IuQ29sb3IoXCIjMDAwMDAwXCIpO1xuICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gIH1cbiAgXG4gIHByaXZhdGUgc3VibWl0KGdyb3VwTmFtZSkge1xuICAgIGlmKGdyb3VwTmFtZSAmJiB0aGlzLnBsYXllcnMubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKGdyb3VwTmFtZSwgdGhpcy5wbGF5ZXJzKTtcbiAgICAgIHRoaXMucmRwLnBsYXllcnMgPSB0aGlzLnBsYXllcnM7XG4gICAgICB0aGlzLnJkcC5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gICAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgICB2YXIgY29sb3JCbGFjayA9IG5ldyBjb2xvci5Db2xvcihcIiMwMDAwMDBcIik7XG4gICAgICB0aGlzLmdyb3VwVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBjb2xvckJsYWNrO1xuICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJnXCIpXG4gICAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgICB2YXIgY29sb3JSZWQgPSBuZXcgY29sb3IuQ29sb3IoXCIjRkYwMDAwXCIpO1xuICAgICAgaWYoIWdyb3VwTmFtZSB8fCAwID09PSBncm91cE5hbWUubGVuZ3RoKXtcbiAgICAgICAgdGhpcy5ncm91cFRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JSZWQ7XG4gICAgICB9XG4gICAgICBpZih0aGlzLnBsYXllcnMubGVuZ3RoIDw9IDApe1xuICAgICAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JSZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIGFkZFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgaWYocGxheWVyTmFtZT09XCJcIil7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkNhbm5vdCBhbGxvdyBlbXB0eSBwbGF5ZXIgbmFtZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBsYXllcjpQbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllck5hbWUpO1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7ICAgIFxuICAgIHRoaXMubmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIH1cbiAgXG4gIHByaXZhdGUgbmV4dCgpIHtcbiAgICBpZih0aGlzLnJkcC5wYXRoICYmIHRoaXMucmRwLnBhdGggIT09IFwiXCIpe1xuICAgICAgdGhpcy5yZHAucGF0aCA9IFwicGxheWVyQ3JlYXRvclwiO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZHAucGF0aCk7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3VtbWFyeVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfSBlbHNle1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibW9kZVNlbGVjdG9yXCJdKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm46XCIgKyB0aGlzLnJldHVyblBhdGgpOyBcbiAgfVxufVxuIl19