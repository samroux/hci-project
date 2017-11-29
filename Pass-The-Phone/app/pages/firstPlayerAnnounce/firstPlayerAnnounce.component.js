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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQbGF5ZXJBbm5vdW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJzdFBsYXllckFubm91bmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRjtBQUVuRixzREFBNkQ7QUFFN0QsZ0ZBQTRFO0FBUzVFO0lBRUUsc0NBQTJCLGdCQUFrQyxFQUFVLEdBQXFCO1FBQWpFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUMxRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsNkNBQU0sR0FBTjtRQUNFLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFScUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQWUsaUJBQVU7c0VBQUM7SUFMcEMsNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSw4REFBOEQ7WUFDM0UsU0FBUyxFQUFFLENBQUMsMERBQTBELENBQUM7U0FDeEUsQ0FBQzt5Q0FJNkMseUJBQWdCLEVBQWMsc0NBQWlCO09BRmpGLDRCQUE0QixDQWN4QztJQUFELG1DQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZmlyc3RQbGF5ZXJBbm5vdW5jZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9maXJzdFBsYXllckFubm91bmNlL2ZpcnN0UGxheWVyQW5ub3VuY2UuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9maXJzdFBsYXllckFubm91bmNlL2ZpcnN0UGxheWVyQW5ub3VuY2UtY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEZpcnN0UGxheWVyQW5ub3VuY2VDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcmRwOlJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgdGhpcy5yZHAuY3VycmVudFBsYXllcj0gdGhpcy5yZHAucGxheWVyc1swXTtcbiAgfVxuICBAVmlld0NoaWxkKFwic3ViamVjdFwiKSBzdWJqZWN0TGFiZWw6IEVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zdWJqZWN0TGFiZWwubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJTZWxlY3RlZCBzdWJqZWN0IGlzOiBcIi5jb25jYXQodGhpcy5yZHAuc3ViamVjdE5hbWUpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIC8vIHRoaXMucmRwLnNwZWFrKFwiUGxlYXNlIGZvbGxvdyB0aGUgc3RlcHMgZm9yIHNldHVwLlwiKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=