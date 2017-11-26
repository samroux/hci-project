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
        this.rdp.hasRemainingPlayers = true;
        this.rdp.path = "";
        this.rdp.teams = [];
        this.rdp.players = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELDBDQUF5QztBQUV6QyxnRkFBNEU7QUFVNUU7SUFFRSx3QkFBMkIsTUFBYyxFQUFVLEdBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUN0RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0Usd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFiVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7eUNBS21DLGVBQU0sRUFBYyxzQ0FBaUI7T0FGN0QsY0FBYyxDQWMxQjtJQUFELHFCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN0YXJ0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3RhcnQvc3RhcnQtY29tbW9uLmNzc1wiXVxufSlcblxuXG5leHBvcnQgY2xhc3MgU3RhcnRDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJkcDpSb3VuZERhdGFQcm92aWRlcikge1xuICAgIHRoaXMucmRwID0gcmRwO1xuICAgIHRoaXMucmRwLmhhc1JlbWFpbmluZ1BsYXllcnMgPSB0cnVlO1xuICAgIHRoaXMucmRwLnBhdGggPSBcIlwiO1xuICAgIHRoaXMucmRwLnRlYW1zID0gW107XG4gICAgdGhpcy5yZHAucGxheWVycyA9IFtdO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIC8vIHRoaXMucmRwLnNwZWFrKFwiUGxlYXNlIGZvbGxvdyB0aGUgc3RlcHMgZm9yIHNldHVwLlwiKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJncm91cFR5cGVTZWxlY3RvclwiXSk7XG4gIH1cbn1cbiJdfQ==