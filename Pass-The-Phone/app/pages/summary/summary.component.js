"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(router) {
        this.router = router;
    }
    SummaryComponent.prototype.settingsRoute = function () {
        this.router.navigate(["start"]);
    };
    SummaryComponent.prototype.questionRoute = function () {
        this.router.navigate(["questionPresenter"]);
    };
    SummaryComponent = __decorate([
        core_1.Component({
            selector: "summary",
            templateUrl: "pages/summary/summary.html",
            styleUrls: ["pages/summary/summary-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFRekM7SUFFRSwwQkFBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRTdDLHdDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBVlUsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2hELENBQUM7eUNBSW1DLGVBQU07T0FGOUIsZ0JBQWdCLENBVzVCO0lBQUQsdUJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic3VtbWFyeVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdW1tYXJ5L3N1bW1hcnkuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N1bW1hcnkvc3VtbWFyeS1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgU3VtbWFyeUNvbXBvbmVudCB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgc2V0dGluZ3NSb3V0ZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdGFydFwiXSlcbiAgfVxuXG4gIHF1ZXN0aW9uUm91dGUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIl0pXG4gIH1cbn1cbiJdfQ==