"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var StartComponent = /** @class */ (function () {
    function StartComponent(router, rdp) {
        this.router = router;
        this.rdp = rdp;
        this.rdp = rdp;
    }
    StartComponent.prototype.submit = function () {
        // this.rdp.speak("Please follow the steps for setup.");
        this.router.navigate(["groupTypeSelector"]);
    };
    StartComponent = __decorate([
        core_1.Component({
            selector: "start",
            templateUrl: "pages/start/start.component.html",
            styleUrls: ["pages/start/start-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELDBDQUF5QztBQUV6QyxnRkFBNEU7QUFVNUU7SUFFRSx3QkFBMkIsTUFBYyxFQUFVLEdBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUN0RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBVFUsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDO3lDQUttQyxlQUFNLEVBQWMsc0NBQWlCO09BRjdELGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdGFydFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdGFydC9zdGFydC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N0YXJ0L3N0YXJ0LWNvbW1vbi5jc3NcIl1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIFN0YXJ0Q29tcG9uZW50IHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZHA6Um91bmREYXRhUHJvdmlkZXIpIHtcbiAgICB0aGlzLnJkcCA9IHJkcDtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICAvLyB0aGlzLnJkcC5zcGVhayhcIlBsZWFzZSBmb2xsb3cgdGhlIHN0ZXBzIGZvciBzZXR1cC5cIik7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ3JvdXBUeXBlU2VsZWN0b3JcIl0pO1xuICB9XG59XG4iXX0=