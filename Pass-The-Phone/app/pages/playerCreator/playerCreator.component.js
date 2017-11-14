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
            // console.log("Cannot allow empty player name");
            return;
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
        // if(playerName==""){
        //   // console.log("Cannot allow empty player name");
        //   return;
        // }
        // var color = require("color");
        // var colorBlack = new color.Color("#000000");
        // this.groupTextField.nativeElement.borderColor = colorBlack;
        // this.playerTextField.nativeElement.borderColor = colorBlack;
        // this.playerTextField.nativeElement.hint = "Enter a Player Name";
        // let player:Player = new Player(playerName);
        // this.players.push(player);    
        // this.newPlayerName = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUQ7QUFDekQsc0RBQTZEO0FBSzdELDRDQUF5QztBQUN6Qyw4Q0FBMkM7QUFHM0MsZ0ZBQTRFO0FBUTVFO0lBYUUsZ0NBQTJCLEtBQW9CLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQztRQUF0SSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVnpKLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBS3JDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBTWpCLDRDQUE0QztRQUM1QyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUM5RCxDQUFDO0lBRU8sdUNBQU0sR0FBZCxVQUFlLFNBQVM7UUFDdEIsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFB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LGFBQWEsQ0FBQztrQ0FBaUIsaUJBQVU7a0VBQUM7SUFDM0I7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWtCLGlCQUFVO21FQUFDO0lBWDNDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM1RCxDQUFDO3lDQWVpQyx1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUE2QixzQ0FBaUI7T0FidEosc0JBQXNCLENBdUdsQztJQUFELDZCQUFDO0NBQUEsQUF2R0QsSUF1R0M7QUF2R1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYXllckNyZWF0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcGxheWVyQ3JlYXRvci9wbGF5ZXJDcmVhdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFBsYXllckNyZWF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+ICA9IFtdO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXI7XG4gIHByaXZhdGUgcmV0dXJuUGF0aDogc3RyaW5nO1xuICBcbiAgbmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIEBWaWV3Q2hpbGQoXCJuZXdQbGF5ZXJUeFwiKSBuZXdQbGF5ZXJUeDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImdyb3VwTmFtZVR4XCIpIGdyb3VwVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibmV3UGxheWVyVHhcIikgcGxheWVyVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgICAvLyB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgIC8vICAgdGhpcy5yZXR1cm5QYXRoID0gcGFyYW1zLnBhdGg7XG4gICAgLy8gfSk7ICBcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAyMDtcbiAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgdmFyIGNvbG9yQmxhY2sgPSBuZXcgY29sb3IuQ29sb3IoXCIjMDAwMDAwXCIpO1xuICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gIH1cbiAgXG4gIHByaXZhdGUgc3VibWl0KGdyb3VwTmFtZSkge1xuICAgIGlmKGdyb3VwTmFtZSAmJiB0aGlzLnBsYXllcnMubGVuZ3RoID4gMSl7XG4gICAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKGdyb3VwTmFtZSwgdGhpcy5wbGF5ZXJzKTtcbiAgICAgIHRoaXMucmRwLnBsYXllcnMgPSB0aGlzLnBsYXllcnM7XG4gICAgICB0aGlzLnJkcC5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gICAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgICB2YXIgY29sb3JCbGFjayA9IG5ldyBjb2xvci5Db2xvcihcIiMwMDAwMDBcIik7XG4gICAgICB0aGlzLmdyb3VwVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBjb2xvckJsYWNrO1xuICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmhpbnQgPSBcIkVudGVyIGEgUGxheWVyIE5hbWVcIjtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdcIilcbiAgICAgIHZhciBjb2xvciA9IHJlcXVpcmUoXCJjb2xvclwiKTtcbiAgICAgIHZhciBjb2xvclJlZCA9IG5ldyBjb2xvci5Db2xvcihcIiNGRjAwMDBcIik7XG4gICAgICBpZighZ3JvdXBOYW1lIHx8IDAgPT09IGdyb3VwTmFtZS5sZW5ndGgpe1xuICAgICAgICB0aGlzLmdyb3VwVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBjb2xvclJlZDtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucGxheWVycy5sZW5ndGggPD0gMCl7XG4gICAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBjb2xvclJlZDtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllcnMubGVuZ3RoID09IDEpe1xuICAgICAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JSZWQ7XG4gICAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuaGludCA9IFwiVHdvIHBsYXllcnMgbmVlZGVkIVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgcHJpdmF0ZSBhZGRQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgIGlmKHBsYXllck5hbWU9PVwiXCIpe1xuICAgICAgLy8gY29uc29sZS5sb2coXCJDYW5ub3QgYWxsb3cgZW1wdHkgcGxheWVyIG5hbWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjb2xvciA9IHJlcXVpcmUoXCJjb2xvclwiKTtcbiAgICB2YXIgY29sb3JCbGFjayA9IG5ldyBjb2xvci5Db2xvcihcIiMwMDAwMDBcIik7XG4gICAgdGhpcy5ncm91cFRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JCbGFjaztcbiAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JCbGFjaztcbiAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmhpbnQgPSBcIkVudGVyIGEgUGxheWVyIE5hbWVcIjtcbiAgICBsZXQgcGxheWVyOlBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTsgICAgXG4gICAgdGhpcy5uZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlUGxheWVyKHBsYXllcjpQbGF5ZXIpIHtcbiAgICAvLyBpZihwbGF5ZXJOYW1lPT1cIlwiKXtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwiQ2Fubm90IGFsbG93IGVtcHR5IHBsYXllciBuYW1lXCIpO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICAvLyB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgLy8gdmFyIGNvbG9yQmxhY2sgPSBuZXcgY29sb3IuQ29sb3IoXCIjMDAwMDAwXCIpO1xuICAgIC8vIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgLy8gdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgLy8gdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5oaW50ID0gXCJFbnRlciBhIFBsYXllciBOYW1lXCI7XG4gICAgLy8gbGV0IHBsYXllcjpQbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllck5hbWUpO1xuICAgIC8vIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7ICAgIFxuICAgIC8vIHRoaXMubmV3UGxheWVyTmFtZSA9IFwiXCI7XG5cbiAgICBjb25zb2xlLmxvZyhcIlBsYXllciB0byBiZSBkZWxldGVkOlwiKyBwbGF5ZXIubmFtZSk7XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLnBsYXllcnMuaW5kZXhPZihwbGF5ZXIsIDApO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnBsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgfVxuICBcbiAgcHJpdmF0ZSBuZXh0KCkge1xuICAgIGlmKHRoaXMucmRwLnBhdGggJiYgdGhpcy5yZHAucGF0aCAhPT0gXCJcIil7XG4gICAgICB0aGlzLnJkcC5wYXRoID0gXCJwbGF5ZXJDcmVhdG9yXCI7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJkcC5wYXRoKTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtb2RlU2VsZWN0b3JcIl0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcInJldHVybjpcIiArIHRoaXMucmV0dXJuUGF0aCk7IFxuICB9XG59XG4iXX0=