"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var QuestionPresenterComponent = /** @class */ (function () {
    function QuestionPresenterComponent(router) {
        this.router = router;
    }
    QuestionPresenterComponent.prototype.ngOnInit = function () {
        this.extractData();
    };
    QuestionPresenterComponent.prototype.extractData = function () {
        var http = require("http");
        var that = this;
        http.request({ url: "https://opentdb.com/api.php?amount=1&difficulty=easy&category=22", method: "GET" })
            .then(function (r) {
            //// Argument (r) is JSON!
            var json = r.content;
            var str = r.content.toString();
            console.log("JSON: " + str);
            var myObj = JSON.parse(str);
            var results = myObj.results;
            var question = results[0].question;
            var correct_answer = results[0].correct_answer;
            var incorrect_answers = results[0].incorrect_answers;
            console.log("question: " + question);
            console.log("correct_answer: " + correct_answer);
            console.log("incorrect_answers: " + incorrect_answers);
            that.question = question;
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
        __metadata("design:paramtypes", [router_1.Router])
    ], QuestionPresenterComponent);
    return QuestionPresenterComponent;
}());
exports.QuestionPresenterComponent = QuestionPresenterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUF5QztBQVF6QztJQU9FLG9DQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFN0MsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxrRUFBa0UsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDdkcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNmLDBCQUEwQjtZQUMxQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUM7WUFFMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRTVCLElBQUksUUFBUSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0MsSUFBSSxjQUFjLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN2RCxJQUFJLGlCQUFpQixHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRSxRQUFRLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUUzQixDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1osMkJBQTJCO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUEvQ1UsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7U0FDcEUsQ0FBQzt5Q0FTbUMsZUFBTTtPQVA5QiwwQkFBMEIsQ0FnRHRDO0lBQUQsaUNBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInF1ZXN0aW9uUHJlc2VudGVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25QcmVzZW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgLy8gU3ViamVjdFNlbGVjdG9yQ29tcG9uZW50XG5cbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG5cblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gIH1cblxuICBleHRyYWN0RGF0YSgpIHtcbiAgICB2YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIFxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBodHRwLnJlcXVlc3QoeyB1cmw6IFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD0xJmRpZmZpY3VsdHk9ZWFzeSZjYXRlZ29yeT0yMlwiLCBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgLy8vLyBBcmd1bWVudCAocikgaXMgSlNPTiFcbiAgICAgIHZhciBqc29uID0gci5jb250ZW50O1xuICAgICAgdmFyIHN0ciA9IHIuY29udGVudC50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2coXCJKU09OOiBcIitzdHIpO1xuICAgICAgXG4gICAgICB2YXIgbXlPYmogPSBKU09OLnBhcnNlKHN0cik7XG5cbiAgICAgIHZhciByZXN1bHRzID0gbXlPYmoucmVzdWx0cztcblxuICAgICAgbGV0IHF1ZXN0aW9uOiBzdHJpbmcgPSByZXN1bHRzWzBdLnF1ZXN0aW9uO1xuICAgICAgbGV0IGNvcnJlY3RfYW5zd2VyOiBzdHJpbmcgPSByZXN1bHRzWzBdLmNvcnJlY3RfYW5zd2VyO1xuICAgICAgbGV0IGluY29ycmVjdF9hbnN3ZXJzOiBzdHJpbmcgPSByZXN1bHRzWzBdLmluY29ycmVjdF9hbnN3ZXJzO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcInF1ZXN0aW9uOiBcIisgcXVlc3Rpb24pO1xuICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0X2Fuc3dlcjogXCIrIGNvcnJlY3RfYW5zd2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0X2Fuc3dlcnM6IFwiKyBpbmNvcnJlY3RfYW5zd2Vycyk7XG5cbiAgICAgIHRoYXQucXVlc3Rpb24gPSBxdWVzdGlvbjtcblxuICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChlKSBpcyBFcnJvciFcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0pO1xuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInF1ZXN0aW9uUHJlQW5zd2VyXCJdKVxuICB9XG59XG4iXX0=