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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBUeXBlU2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXBUeXBlU2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQVV6QztJQUlFLG9DQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFN0MsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxrREFBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFoQlUsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7U0FDcEUsQ0FBQzt5Q0FNbUMsZUFBTTtPQUo5QiwwQkFBMEIsQ0FpQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJncm91cFR5cGVTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ncm91cFR5cGVTZWxlY3Rvci9ncm91cFR5cGVTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvZ3JvdXBUeXBlU2VsZWN0b3IvZ3JvdXBUeXBlU2VsZWN0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEdyb3VwVHlwZVNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDEwO1xuICB9XG5cbiAgbmV3R3JvdXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicGxheWVyQ3JlYXRvclwiXSlcbiAgfVxuXG4gIGV4aXN0aW5nR3JvdXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ3JvdXBTZWxlY3RvclwiXSlcbiAgfVxufVxuIl19