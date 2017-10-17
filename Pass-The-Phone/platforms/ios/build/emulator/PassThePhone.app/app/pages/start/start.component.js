"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var StartComponent = /** @class */ (function () {
    function StartComponent(router) {
        this.router = router;
    }
    StartComponent.prototype.submit = function () {
        this.router.navigate(["playerCreator"]);
    };
    StartComponent = __decorate([
        core_1.Component({
            selector: "start",
            templateUrl: "pages/start/start.component.html",
            styleUrls: ["pages/start/start-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELDBDQUF5QztBQVN6QztJQUNFLHdCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFN0MsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBTFUsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDO3lDQUltQyxlQUFNO09BRDlCLGNBQWMsQ0FNMUI7SUFBRCxxQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdGFydFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdGFydC9zdGFydC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N0YXJ0L3N0YXJ0LWNvbW1vbi5jc3NcIl1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIFN0YXJ0Q29tcG9uZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBsYXllckNyZWF0b3JcIl0pXG4gIH1cbn1cbiJdfQ==