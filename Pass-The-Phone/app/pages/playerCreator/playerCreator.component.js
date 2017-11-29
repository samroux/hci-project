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
        if (this.rdp.group && this.rdp.group.name != "") {
            this.groupTextField.nativeElement.text = this.rdp.group.name;
        }
    };
    PlayerCreatorComponent.prototype.submit = function (groupName) {
        if (groupName && this.players.length > 1) {
            this.group = new group_1.Group(groupName, this.players);
            console.log("length players".concat(this.players.length.toString()));
            this.rdp.players = this.players;
            this.rdp.group = this.group;
            this.loadNSaveGroups(this.group);
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
    PlayerCreatorComponent.prototype.loadNSaveGroups = function (group) {
        var _this = this;
        console.log("LoadNSave...");
        this.rdp.loadGroups().then(function (resolve) {
            _this.rdp.groups.push(group);
            console.log("pushed group: ");
            for (var _i = 0, _a = _this.rdp.groups; _i < _a.length; _i++) {
                var group_rdp = _a[_i];
                console.log(group_rdp.name);
            }
            _this.rdp.saveGroups();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ3JlYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJDcmVhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBeUQ7QUFDekQsc0RBQTZEO0FBSzdELDRDQUF5QztBQUN6Qyw4Q0FBMkM7QUFHM0MsZ0ZBQTRFO0FBUTVFO0lBYUUsZ0NBQTJCLEtBQW9CLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQztRQUF0SSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVnpKLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBS3JDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBTWpCLDRDQUE0QztRQUM1QyxtQ0FBbUM7UUFDbkMsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM1RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZ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QUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELDZDQUE2QztJQUMvQyxDQUFDO0lBbkh5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTsrREFBQztJQUN4QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBaUIsaUJBQVU7a0VBQUM7SUFDM0I7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWtCLGlCQUFVO21FQUFDO0lBWDNDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM1RCxDQUFDO3lDQWVpQyx1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUE2QixzQ0FBaUI7T0FidEosc0JBQXNCLENBNkhsQztJQUFELDZCQUFDO0NBQUEsQUE3SEQsSUE2SEM7QUE3SFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cFwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYXllckNyZWF0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcGxheWVyQ3JlYXRvci9wbGF5ZXJDcmVhdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wbGF5ZXJDcmVhdG9yL3BsYXllckNyZWF0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFBsYXllckNyZWF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcbiAgcHJpdmF0ZSBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+ICA9IFtdO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXI7XG4gIHByaXZhdGUgcmV0dXJuUGF0aDogc3RyaW5nO1xuICBcbiAgbmV3UGxheWVyTmFtZSA9IFwiXCI7XG4gIEBWaWV3Q2hpbGQoXCJuZXdQbGF5ZXJUeFwiKSBuZXdQbGF5ZXJUeDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImdyb3VwTmFtZVR4XCIpIGdyb3VwVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibmV3UGxheWVyVHhcIikgcGxheWVyVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgICAvLyB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgIC8vICAgdGhpcy5yZXR1cm5QYXRoID0gcGFyYW1zLnBhdGg7XG4gICAgLy8gfSk7ICBcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAyMDtcbiAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgdmFyIGNvbG9yQmxhY2sgPSBuZXcgY29sb3IuQ29sb3IoXCIjMDAwMDAwXCIpO1xuICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgaWYodGhpcy5yZHAuZ3JvdXAgJiYgdGhpcy5yZHAuZ3JvdXAubmFtZSAhPSBcIlwiKXtcbiAgICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5yZHAuZ3JvdXAubmFtZTtcbiAgICB9XG4gIH1cbiAgXG4gIHByaXZhdGUgc3VibWl0KGdyb3VwTmFtZSkge1xuXG4gICAgaWYoZ3JvdXBOYW1lICYmIHRoaXMucGxheWVycy5sZW5ndGggPiAxKXtcbiAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgR3JvdXAoZ3JvdXBOYW1lLCB0aGlzLnBsYXllcnMpO1xuICAgICAgY29uc29sZS5sb2coXCJsZW5ndGggcGxheWVyc1wiLmNvbmNhdCh0aGlzLnBsYXllcnMubGVuZ3RoLnRvU3RyaW5nKCkpKVxuICAgICAgdGhpcy5yZHAucGxheWVycyA9IHRoaXMucGxheWVycztcbiAgICAgIHRoaXMucmRwLmdyb3VwID0gdGhpcy5ncm91cDtcblxuICAgICAgdGhpcy5sb2FkTlNhdmVHcm91cHModGhpcy5ncm91cCk7XG5cbiAgICAgIHZhciBjb2xvciA9IHJlcXVpcmUoXCJjb2xvclwiKTtcbiAgICAgIHZhciBjb2xvckJsYWNrID0gbmV3IGNvbG9yLkNvbG9yKFwiIzAwMDAwMFwiKTtcbiAgICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JCbGFjaztcbiAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuaGludCA9IFwiRW50ZXIgYSBQbGF5ZXIgTmFtZVwiO1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ1wiKVxuICAgICAgdmFyIGNvbG9yID0gcmVxdWlyZShcImNvbG9yXCIpO1xuICAgICAgdmFyIGNvbG9yUmVkID0gbmV3IGNvbG9yLkNvbG9yKFwiI0ZGMDAwMFwiKTtcbiAgICAgIGlmKCFncm91cE5hbWUgfHwgMCA9PT0gZ3JvdXBOYW1lLmxlbmd0aCl7XG4gICAgICAgIHRoaXMuZ3JvdXBUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yUmVkO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5wbGF5ZXJzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yUmVkO1xuICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVycy5sZW5ndGggPT0gMSl7XG4gICAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuYm9yZGVyQ29sb3IgPSBjb2xvclJlZDtcbiAgICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5oaW50ID0gXCJUd28gcGxheWVycyBuZWVkZWQhXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTlNhdmVHcm91cHMoZ3JvdXApe1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZE5TYXZlLi4uXCIpO1xuICAgIHRoaXMucmRwLmxvYWRHcm91cHMoKS50aGVuKCByZXNvbHZlID0+e1xuICAgICAgdGhpcy5yZHAuZ3JvdXBzLnB1c2goZ3JvdXApO1xuICAgICAgY29uc29sZS5sb2coXCJwdXNoZWQgZ3JvdXA6IFwiKTtcbiAgICAgIGZvciAobGV0IGdyb3VwX3JkcCBvZiB0aGlzLnJkcC5ncm91cHMpe1xuICAgICAgICBjb25zb2xlLmxvZyhncm91cF9yZHAubmFtZSk7XG4gICAgICB9XG4gIFxuICAgICAgdGhpcy5yZHAuc2F2ZUdyb3VwcygpO1xuICAgIH0pO1xuXG4gICAgXG4gIH1cbiAgXG4gIHByaXZhdGUgYWRkUGxheWVyKHBsYXllck5hbWUpIHtcbiAgICBpZihwbGF5ZXJOYW1lPT1cIlwiKXtcbiAgICAgIHZhciBjb2xvciA9IHJlcXVpcmUoXCJjb2xvclwiKTtcbiAgICAgIHZhciBjb2xvclJlZCA9IG5ldyBjb2xvci5Db2xvcihcIiNGRjAwMDBcIik7XG4gICAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JSZWQ7XG4gICAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmhpbnQgPSBcIkVudGVyIGEgcGxheWVyIE5hbWVcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKXtcbiAgICAgIGlmKHBsYXllci5uYW1lID09IHBsYXllck5hbWUpe1xuICAgICAgICB2YXIgY29sb3IgPSByZXF1aXJlKFwiY29sb3JcIik7XG4gICAgICAgIHZhciBjb2xvckJsYWNrID0gbmV3IGNvbG9yLkNvbG9yKFwiI0ZGMDAwMFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5ib3JkZXJDb2xvciA9IGNvbG9yQmxhY2s7XG4gICAgICAgIHRoaXMucGxheWVyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiXCJcbiAgICAgICAgdGhpcy5wbGF5ZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudC5oaW50ID0gXCJFbnRlciBhIHVuaXF1ZSBuYW1lLlwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjb2xvciA9IHJlcXVpcmUoXCJjb2xvclwiKTtcbiAgICB2YXIgY29sb3JCbGFjayA9IG5ldyBjb2xvci5Db2xvcihcIiMwMDAwMDBcIik7XG4gICAgdGhpcy5ncm91cFRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JCbGFjaztcbiAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmJvcmRlckNvbG9yID0gY29sb3JCbGFjaztcbiAgICB0aGlzLnBsYXllclRleHRGaWVsZC5uYXRpdmVFbGVtZW50LmhpbnQgPSBcIkVudGVyIGEgUGxheWVyIE5hbWVcIjtcbiAgICBsZXQgcGxheWVyOlBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTsgICAgXG4gICAgdGhpcy5uZXdQbGF5ZXJOYW1lID0gXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlUGxheWVyKHBsYXllcjpQbGF5ZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBsYXllciB0byBiZSBkZWxldGVkOlwiKyBwbGF5ZXIubmFtZSk7XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLnBsYXllcnMuaW5kZXhPZihwbGF5ZXIsIDApO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnBsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbiAgXG4gIHByaXZhdGUgbmV4dCgpIHtcbiAgICBpZih0aGlzLnJkcC5wYXRoICYmIHRoaXMucmRwLnBhdGggIT09IFwiXCIpe1xuICAgICAgdGhpcy5yZHAucGF0aCA9IFwicGxheWVyQ3JlYXRvclwiO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZHAucGF0aCk7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3VtbWFyeVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfSBlbHNle1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibW9kZVNlbGVjdG9yXCJdKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm46XCIgKyB0aGlzLnJldHVyblBhdGgpOyBcbiAgfVxufVxuIl19