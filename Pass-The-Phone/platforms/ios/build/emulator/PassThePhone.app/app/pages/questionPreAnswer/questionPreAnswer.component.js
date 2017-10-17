"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var QuestionPreAnswerComponent = /** @class */ (function () {
    function QuestionPreAnswerComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
    }
    QuestionPreAnswerComponent.prototype.next = function () {
        this.router.navigate(["answer"]);
    };
    QuestionPreAnswerComponent = __decorate([
        core_1.Component({
            selector: "questionPreAnswer",
            templateUrl: "pages/questionPreAnswer/questionPreAnswer.html",
            styleUrls: ["pages/questionPreAnswer/questionPreAnswer-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], QuestionPreAnswerComponent);
    return QuestionPreAnswerComponent;
}());
exports.QuestionPreAnswerComponent = QuestionPreAnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVBbnN3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVBbnN3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6QyxnRkFBNEU7QUFTNUU7SUFFRSxvQ0FBMkIsTUFBYyxFQUFVLGlCQUFvQztRQUE1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFFbkYseUNBQUksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBTlUsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7U0FDcEUsQ0FBQzt5Q0FJbUMsZUFBTSxFQUE2QixzQ0FBaUI7T0FGNUUsMEJBQTBCLENBT3RDO0lBQUQsaUNBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicXVlc3Rpb25QcmVBbnN3ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcXVlc3Rpb25QcmVBbnN3ZXIvcXVlc3Rpb25QcmVBbnN3ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3F1ZXN0aW9uUHJlQW5zd2VyL3F1ZXN0aW9uUHJlQW5zd2VyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblByZUFuc3dlckNvbXBvbmVudCB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuXG4gIHByaXZhdGUgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhbnN3ZXJcIl0pO1xuICB9XG59XG4iXX0=