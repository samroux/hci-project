"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GroupTypeSelectorComponent = /** @class */ (function () {
    function GroupTypeSelectorComponent(router) {
        this.router = router;
    }
    GroupTypeSelectorComponent.prototype.newGroup = function () {
        this.router.navigate(["playerCreator"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBUeXBlU2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXBUeXBlU2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQVF6QztJQUVFLG9DQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFN0MsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsa0RBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBVlUsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7U0FDcEUsQ0FBQzt5Q0FJbUMsZUFBTTtPQUY5QiwwQkFBMEIsQ0FXdEM7SUFBRCxpQ0FBQztDQUFBLEFBWEQsSUFXQztBQVhZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJncm91cFR5cGVTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ncm91cFR5cGVTZWxlY3Rvci9ncm91cFR5cGVTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvZ3JvdXBUeXBlU2VsZWN0b3IvZ3JvdXBUeXBlU2VsZWN0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEdyb3VwVHlwZVNlbGVjdG9yQ29tcG9uZW50IHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuZXdHcm91cCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwbGF5ZXJDcmVhdG9yXCJdKVxuICB9XG5cbiAgZXhpc3RpbmdHcm91cCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJncm91cFNlbGVjdG9yXCJdKVxuICB9XG59XG4iXX0=