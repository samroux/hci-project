"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var QuestionPreAnswerComponent = /** @class */ (function () {
    function QuestionPreAnswerComponent(router) {
        this.router = router;
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
        __metadata("design:paramtypes", [router_1.Router])
    ], QuestionPreAnswerComponent);
    return QuestionPreAnswerComponent;
}());
exports.QuestionPreAnswerComponent = QuestionPreAnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVBbnN3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVBbnN3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQVF6QztJQUVFLG9DQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFckMseUNBQUksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBTlUsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7U0FDcEUsQ0FBQzt5Q0FJbUMsZUFBTTtPQUY5QiwwQkFBMEIsQ0FPdEM7SUFBRCxpQ0FBQztDQUFBLEFBUEQsSUFPQztBQVBZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJxdWVzdGlvblByZUFuc3dlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9xdWVzdGlvblByZUFuc3dlci9xdWVzdGlvblByZUFuc3dlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcXVlc3Rpb25QcmVBbnN3ZXIvcXVlc3Rpb25QcmVBbnN3ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUHJlQW5zd2VyQ29tcG9uZW50IHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBwcml2YXRlIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYW5zd2VyXCJdKTtcbiAgfVxufVxuIl19