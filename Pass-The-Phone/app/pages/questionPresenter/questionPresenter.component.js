"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var triviaQuestion_1 = require("../../shared/triviaQuestion");
var QuestionPresenterComponent = /** @class */ (function () {
    function QuestionPresenterComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            _this.selectedId = params["id"];
        });
        console.log("selectedid: " + this.selectedId);
    }
    QuestionPresenterComponent.prototype.ngOnInit = function () {
        this.extractData();
    };
    QuestionPresenterComponent.prototype.extractData = function () {
        var http = require("http");
        var that = this;
        http.request({ url: "https://opentdb.com/api.php?amount=1&difficulty=easy&category=" + this.selectedId, method: "GET" })
            .then(function (r) {
            //// Argument (r) is JSON!
            var json = r.content;
            var str = r.content.toString();
            console.log("JSON: " + str);
            var myObj = JSON.parse(str);
            var results = myObj.results;
            var category = results[0].category;
            var type = results[0].type;
            var question = results[0].question;
            var correct_answer = results[0].correct_answer;
            var incorrect_answers = results[0].incorrect_answers;
            console.log("question: " + question);
            console.log("correct_answer: " + correct_answer);
            console.log("incorrect_answers: " + incorrect_answers);
            that.question = question;
            that.triviaQuestion = new triviaQuestion_1.TriviaQuestion(category, type, question, correct_answer, incorrect_answers);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });
    };
    QuestionPresenterComponent.prototype.next = function () {
        this.router.navigate(["questionPreAnswer"]);
    };
    QuestionPresenterComponent = __decorate([
        core_1.Component({
            selector: "questionPresenter",
            templateUrl: "pages/questionPresenter/questionPresenter.html",
            styleUrls: ["pages/questionPresenter/questionPresenter-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], QuestionPresenterComponent);
    return QuestionPresenterComponent;
}());
exports.QuestionPresenterComponent = QuestionPresenterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUEyRTtBQUczRSx1Q0FBcUM7QUFHckMsOERBQTBEO0FBUzFEO0lBU0Usb0NBQTJCLEtBQXFCLEVBQVUsTUFBYztRQUF4RSxpQkFLQztRQUwwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVyQixDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxnRUFBZ0UsR0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUNySCxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2YsMEJBQTBCO1lBQzFCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUUxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFNUIsSUFBSSxRQUFRLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLElBQUksR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksUUFBUSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0MsSUFBSSxjQUFjLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN2RCxJQUFJLGlCQUFpQixHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRSxRQUFRLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUV6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVwRyxDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1osMkJBQTJCO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUEzRFUsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7U0FDcEUsQ0FBQzt5Q0FXa0MsdUJBQWMsRUFBa0IsZUFBTTtPQVQ3RCwwQkFBMEIsQ0E0RHRDO0lBQUQsaUNBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtTWFwLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiIFxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJxdWVzdGlvblByZXNlbnRlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUHJlc2VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgLy8gU3ViamVjdFNlbGVjdG9yQ29tcG9uZW50XG4gIFxuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHVibGljIHRyaXZpYVF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcbiAgXG4gIHB1YmxpYyBzZWxlY3RlZElkOiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gcGFyYW1zW1wiaWRcIl07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZGlkOiBcIit0aGlzLnNlbGVjdGVkSWQpO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgXG4gIH1cbiAgXG4gIGV4dHJhY3REYXRhKCkge1xuICAgIHZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG4gICAgXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFxuICAgIGh0dHAucmVxdWVzdCh7IHVybDogXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTEmZGlmZmljdWx0eT1lYXN5JmNhdGVnb3J5PVwiK3RoaXMuc2VsZWN0ZWRJZCwgbWV0aG9kOiBcIkdFVFwiIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIEpTT04hXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSlNPTjogXCIrc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgXG4gICAgICB2YXIgcmVzdWx0cyA9IG15T2JqLnJlc3VsdHM7XG4gICAgICBcbiAgICAgIGxldCBjYXRlZ29yeTogc3RyaW5nID0gcmVzdWx0c1swXS5jYXRlZ29yeTtcbiAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSByZXN1bHRzWzBdLnR5cGU7XG4gICAgICBsZXQgcXVlc3Rpb246IHN0cmluZyA9IHJlc3VsdHNbMF0ucXVlc3Rpb247XG4gICAgICBsZXQgY29ycmVjdF9hbnN3ZXI6IHN0cmluZyA9IHJlc3VsdHNbMF0uY29ycmVjdF9hbnN3ZXI7XG4gICAgICBsZXQgaW5jb3JyZWN0X2Fuc3dlcnM6IHN0cmluZyA9IHJlc3VsdHNbMF0uaW5jb3JyZWN0X2Fuc3dlcnM7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwicXVlc3Rpb246IFwiKyBxdWVzdGlvbik7XG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RfYW5zd2VyOiBcIisgY29ycmVjdF9hbnN3ZXIpO1xuICAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3RfYW5zd2VyczogXCIrIGluY29ycmVjdF9hbnN3ZXJzKTtcbiAgICAgIFxuICAgICAgdGhhdC5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgXG4gICAgICB0aGF0LnRyaXZpYVF1ZXN0aW9uID0gbmV3IFRyaXZpYVF1ZXN0aW9uKGNhdGVnb3J5LHR5cGUscXVlc3Rpb24sY29ycmVjdF9hbnN3ZXIsaW5jb3JyZWN0X2Fuc3dlcnMpO1xuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVBbnN3ZXJcIl0pXG4gIH1cbn1cbiJdfQ==