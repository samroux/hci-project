"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var QuestionPreAnswerComponent = /** @class */ (function () {
    function QuestionPreAnswerComponent(routerExtensions, roundDataProvider) {
        this.routerExtensions = routerExtensions;
        this.roundDataProvider = roundDataProvider;
    }
    QuestionPreAnswerComponent.prototype.next = function () {
        this.routerExtensions.navigate(["answer"], { clearHistory: true });
    };
    QuestionPreAnswerComponent = __decorate([
        core_1.Component({
            selector: "questionPreAnswer",
            templateUrl: "pages/questionPreAnswer/questionPreAnswer.html",
            styleUrls: ["pages/questionPreAnswer/questionPreAnswer-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], QuestionPreAnswerComponent);
    return QuestionPreAnswerComponent;
}());
exports.QuestionPreAnswerComponent = QuestionPreAnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVBbnN3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVBbnN3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLHNEQUE2RDtBQUc3RCxnRkFBNEU7QUFRNUU7SUFFRSxvQ0FBMkIsZ0JBQWtDLEVBQVUsaUJBQW9DO1FBQWhGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQUV2Ryx5Q0FBSSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQU5VLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLHNEQUFzRCxDQUFDO1NBQ3BFLENBQUM7eUNBSTZDLHlCQUFnQixFQUE2QixzQ0FBaUI7T0FGaEcsMEJBQTBCLENBT3RDO0lBQUQsaUNBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInF1ZXN0aW9uUHJlQW5zd2VyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3F1ZXN0aW9uUHJlQW5zd2VyL3F1ZXN0aW9uUHJlQW5zd2VyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9xdWVzdGlvblByZUFuc3dlci9xdWVzdGlvblByZUFuc3dlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25QcmVBbnN3ZXJDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuXG4gIHByaXZhdGUgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYW5zd2VyXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxufVxuIl19