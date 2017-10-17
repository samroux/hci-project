"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GroupTypeSelectorComponent = /** @class */ (function () {
    function GroupTypeSelectorComponent(router) {
        this.router = router;
    }
    GroupTypeSelectorComponent.prototype.ngOnInit = function () {
        this.progressValue = 10;
    };
    GroupTypeSelectorComponent.prototype.newGroup = function () {
        this.router.navigate(["playerCreator", ""]);
    };
    GroupTypeSelectorComponent.prototype.existingGroup = function () {
        this.router.navigate(["groupSelector"]);
    };
    GroupTypeSelectorComponent = __decorate([
        core_1.Component({
            selector: "groupTypeSelector",
            templateUrl: "pages/groupTypeSelector/groupTypeSelector.html",
            styleUrls: ["pages/groupTypeSelector/groupTypeSelector-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], GroupTypeSelectorComponent);
    return GroupTypeSelectorComponent;
}());
exports.GroupTypeSelectorComponent = GroupTypeSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBUeXBlU2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXBUeXBlU2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQVV6QztJQUlFLG9DQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFN0MsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsa0RBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBaEJVLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLHNEQUFzRCxDQUFDO1NBQ3BFLENBQUM7eUNBTW1DLGVBQU07T0FKOUIsMEJBQTBCLENBaUJ0QztJQUFELGlDQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3JvdXBUeXBlU2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZ3JvdXBUeXBlU2VsZWN0b3IvZ3JvdXBUeXBlU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2dyb3VwVHlwZVNlbGVjdG9yL2dyb3VwVHlwZVNlbGVjdG9yLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHcm91cFR5cGVTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAxMDtcbiAgfVxuXG4gIG5ld0dyb3VwKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBsYXllckNyZWF0b3JcIiwgXCJcIl0pXG4gIH1cblxuICBleGlzdGluZ0dyb3VwKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImdyb3VwU2VsZWN0b3JcIl0pXG4gIH1cbn1cbiJdfQ==