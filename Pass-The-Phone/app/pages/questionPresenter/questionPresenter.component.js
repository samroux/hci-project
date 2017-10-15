"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaQuestion_1 = require("../../shared/triviaQuestion");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var QuestionPresenterComponent = /** @class */ (function () {
    function QuestionPresenterComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            _this.selectedId = params["id"];
        });
        console.log("selectedid: " + this.selectedId);
        this.choices = [];
        this.choices.push(new triviaAnswer_1.TriviaAnswer(null, ""));
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
            var difficulty = results[0].difficulty;
            var question = results[0].question;
            var correct_answer = results[0].correct_answer;
            var incorrect_answers = results[0].incorrect_answers;
            console.log("question: " + question);
            console.log("correct_answer: " + correct_answer);
            console.log("incorrect_answers: " + incorrect_answers);
            that.question = question;
            that.triviaQuestion = new triviaQuestion_1.TriviaQuestion(category, type, difficulty, question, correct_answer, incorrect_answers);
            for (var i = 0; i < that.triviaQuestion.triviaAnswers.length; i++) {
                that.choices.push(that.triviaQuestion.triviaAnswers[i]);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFpRTtBQUVqRSw4REFBMEQ7QUFDMUQsMERBQXNEO0FBU3REO0lBU0Usb0NBQTJCLEtBQXFCLEVBQVUsTUFBYztRQUF4RSxpQkFTQztRQVQwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUFZLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVELGdEQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0VBQWdFLEdBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDckgsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNmLDBCQUEwQjtZQUMxQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUM7WUFFMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRTVCLElBQUksUUFBUSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0MsSUFBSSxJQUFJLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJLFVBQVUsR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQy9DLElBQUksUUFBUSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0MsSUFBSSxjQUFjLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN2RCxJQUFJLGlCQUFpQixHQUFhLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUUvRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRSxRQUFRLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUV6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFN0csR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxDQUFDO1FBRUgsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNaLDJCQUEyQjtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBcEVVLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLHNEQUFzRCxDQUFDO1NBQ3BFLENBQUM7eUNBV2tDLHVCQUFjLEVBQWtCLGVBQU07T0FUN0QsMEJBQTBCLENBcUV0QztJQUFELGlDQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIiBcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiIFxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJxdWVzdGlvblByZXNlbnRlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUHJlc2VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0cml2aWFRdWVzdGlvbjogVHJpdmlhUXVlc3Rpb247XG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBcbiAgXG4gIHB1YmxpYyBzZWxlY3RlZElkOiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gcGFyYW1zW1wiaWRcIl07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZGlkOiBcIit0aGlzLnNlbGVjdGVkSWQpO1xuXG4gICAgdGhpcy5jaG9pY2VzID0gW107XG5cbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXcgVHJpdmlhQW5zd2VyKG51bGwsXCJcIikpO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgXG4gIH1cbiAgXG4gIGV4dHJhY3REYXRhKCkge1xuICAgIHZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG4gICAgXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFxuICAgIGh0dHAucmVxdWVzdCh7IHVybDogXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTEmZGlmZmljdWx0eT1lYXN5JmNhdGVnb3J5PVwiK3RoaXMuc2VsZWN0ZWRJZCwgbWV0aG9kOiBcIkdFVFwiIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIEpTT04hXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSlNPTjogXCIrc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgXG4gICAgICB2YXIgcmVzdWx0cyA9IG15T2JqLnJlc3VsdHM7XG4gICAgICBcbiAgICAgIGxldCBjYXRlZ29yeTogc3RyaW5nID0gcmVzdWx0c1swXS5jYXRlZ29yeTtcbiAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSByZXN1bHRzWzBdLnR5cGU7XG4gICAgICBsZXQgZGlmZmljdWx0eTogc3RyaW5nID0gcmVzdWx0c1swXS5kaWZmaWN1bHR5O1xuICAgICAgbGV0IHF1ZXN0aW9uOiBzdHJpbmcgPSByZXN1bHRzWzBdLnF1ZXN0aW9uO1xuICAgICAgbGV0IGNvcnJlY3RfYW5zd2VyOiBzdHJpbmcgPSByZXN1bHRzWzBdLmNvcnJlY3RfYW5zd2VyO1xuICAgICAgbGV0IGluY29ycmVjdF9hbnN3ZXJzOiBzdHJpbmdbXSA9IHJlc3VsdHNbMF0uaW5jb3JyZWN0X2Fuc3dlcnM7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwicXVlc3Rpb246IFwiKyBxdWVzdGlvbik7XG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RfYW5zd2VyOiBcIisgY29ycmVjdF9hbnN3ZXIpO1xuICAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3RfYW5zd2VyczogXCIrIGluY29ycmVjdF9hbnN3ZXJzKTtcbiAgICAgIFxuICAgICAgdGhhdC5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgXG4gICAgICB0aGF0LnRyaXZpYVF1ZXN0aW9uID0gbmV3IFRyaXZpYVF1ZXN0aW9uKGNhdGVnb3J5LHR5cGUsZGlmZmljdWx0eSxxdWVzdGlvbixjb3JyZWN0X2Fuc3dlcixpbmNvcnJlY3RfYW5zd2Vycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC50cml2aWFRdWVzdGlvbi50cml2aWFBbnN3ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgICB0aGF0LmNob2ljZXMucHVzaCh0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnNbaV0pO1xuICAgICAgfVxuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVBbnN3ZXJcIl0pXG4gIH1cbn1cbiJdfQ==