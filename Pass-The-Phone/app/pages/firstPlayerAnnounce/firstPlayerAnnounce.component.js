"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var FirstPlayerAnnounceComponent = /** @class */ (function () {
    function FirstPlayerAnnounceComponent(routerExtensions, rdp) {
        this.routerExtensions = routerExtensions;
        this.rdp = rdp;
        this.rdp.currentPlayer = this.rdp.players[0];
    }
    FirstPlayerAnnounceComponent.prototype.ngOnInit = function () {
        console.log("first");
        this.rdp.speak("Pass the phone to ".concat(this.rdp.currentPlayer.name));
        this.subjectLabel.nativeElement.text = "Selected subject is: ".concat(this.rdp.subjectName);
    };
    FirstPlayerAnnounceComponent.prototype.submit = function () {
        // this.rdp.speak("Please follow the steps for setup.");
        this.routerExtensions.navigate(["questionPresenter"], { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild("subject"),
        __metadata("design:type", core_1.ElementRef)
    ], FirstPlayerAnnounceComponent.prototype, "subjectLabel", void 0);
    FirstPlayerAnnounceComponent = __decorate([
        core_1.Component({
            selector: "firstPlayerAnnounce",
            templateUrl: "pages/firstPlayerAnnounce/firstPlayerAnnounce.component.html",
            styleUrls: ["pages/firstPlayerAnnounce/firstPlayerAnnounce-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], FirstPlayerAnnounceComponent);
    return FirstPlayerAnnounceComponent;
}());
exports.FirstPlayerAnnounceComponent = FirstPlayerAnnounceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQbGF5ZXJBbm5vdW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJzdFBsYXllckFubm91bmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRjtBQUVuRixzREFBNkQ7QUFFN0QsZ0ZBQTRFO0FBUzVFO0lBR0Usc0NBQTJCLGdCQUFrQyxFQUFVLEdBQXFCO1FBQWpFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUMxRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR0QsK0NBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCw2Q0FBTSxHQUFOO1FBQ0Usd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQVhxQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBZSxpQkFBVTtzRUFBQztJQU5wQyw0QkFBNEI7UUFOeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLDhEQUE4RDtZQUMzRSxTQUFTLEVBQUUsQ0FBQywwREFBMEQsQ0FBQztTQUN4RSxDQUFDO3lDQUs2Qyx5QkFBZ0IsRUFBYyxzQ0FBaUI7T0FIakYsNEJBQTRCLENBa0J4QztJQUFELG1DQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZmlyc3RQbGF5ZXJBbm5vdW5jZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9maXJzdFBsYXllckFubm91bmNlL2ZpcnN0UGxheWVyQW5ub3VuY2UuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9maXJzdFBsYXllckFubm91bmNlL2ZpcnN0UGxheWVyQW5ub3VuY2UtY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEZpcnN0UGxheWVyQW5ub3VuY2VDb21wb25lbnQge1xuXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByZHA6Um91bmREYXRhUHJvdmlkZXIpIHtcbiAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyPSB0aGlzLnJkcC5wbGF5ZXJzWzBdO1xuICB9XG4gIEBWaWV3Q2hpbGQoXCJzdWJqZWN0XCIpIHN1YmplY3RMYWJlbDogRWxlbWVudFJlZjtcblxuICBuZ09uSW5pdCgpe1xuICAgIGNvbnNvbGUubG9nKFwiZmlyc3RcIik7XG4gICAgdGhpcy5yZHAuc3BlYWsoXCJQYXNzIHRoZSBwaG9uZSB0byBcIi5jb25jYXQodGhpcy5yZHAuY3VycmVudFBsYXllci5uYW1lKSk7XG4gICAgdGhpcy5zdWJqZWN0TGFiZWwubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJTZWxlY3RlZCBzdWJqZWN0IGlzOiBcIi5jb25jYXQodGhpcy5yZHAuc3ViamVjdE5hbWUpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIC8vIHRoaXMucmRwLnNwZWFrKFwiUGxlYXNlIGZvbGxvdyB0aGUgc3RlcHMgZm9yIHNldHVwLlwiKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=