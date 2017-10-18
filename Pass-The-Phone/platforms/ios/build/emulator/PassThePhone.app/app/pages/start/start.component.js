"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var StartComponent = /** @class */ (function () {
    function StartComponent(router) {
        this.router = router;
    }
    StartComponent.prototype.submit = function () {
        this.router.navigate(["groupTypeSelector"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELDBDQUF5QztBQVN6QztJQUNFLHdCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFN0MsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFMVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7eUNBSW1DLGVBQU07T0FEOUIsY0FBYyxDQU0xQjtJQUFELHFCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN0YXJ0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3RhcnQvc3RhcnQtY29tbW9uLmNzc1wiXVxufSlcblxuXG5leHBvcnQgY2xhc3MgU3RhcnRDb21wb25lbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ3JvdXBUeXBlU2VsZWN0b3JcIl0pXG4gIH1cbn1cbiJdfQ==