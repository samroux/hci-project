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
    FirstPlayerAnnounceComponent.prototype.submit = function () {
        // this.rdp.speak("Please follow the steps for setup.");
        this.routerExtensions.navigate(["questionPresenter"], { clearHistory: true });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQbGF5ZXJBbm5vdW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJzdFBsYXllckFubm91bmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUVwRCxzREFBNkQ7QUFFN0QsZ0ZBQTRFO0FBVTVFO0lBRUUsc0NBQTJCLGdCQUFrQyxFQUFVLEdBQXFCO1FBQWpFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUMxRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNkNBQU0sR0FBTjtRQUNFLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFUVSw0QkFBNEI7UUFQeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLDhEQUE4RDtZQUMzRSxTQUFTLEVBQUUsQ0FBQywwREFBMEQsQ0FBQztTQUN4RSxDQUFDO3lDQUs2Qyx5QkFBZ0IsRUFBYyxzQ0FBaUI7T0FGakYsNEJBQTRCLENBVXhDO0lBQUQsbUNBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImZpcnN0UGxheWVyQW5ub3VuY2VcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZmlyc3RQbGF5ZXJBbm5vdW5jZS9maXJzdFBsYXllckFubm91bmNlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvZmlyc3RQbGF5ZXJBbm5vdW5jZS9maXJzdFBsYXllckFubm91bmNlLWNvbW1vbi5jc3NcIl1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEZpcnN0UGxheWVyQW5ub3VuY2VDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcmRwOlJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgdGhpcy5yZHAuY3VycmVudFBsYXllcj0gdGhpcy5yZHAucGxheWVyc1swXTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICAvLyB0aGlzLnJkcC5zcGVhayhcIlBsZWFzZSBmb2xsb3cgdGhlIHN0ZXBzIGZvciBzZXR1cC5cIik7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInF1ZXN0aW9uUHJlc2VudGVyXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxufVxuIl19