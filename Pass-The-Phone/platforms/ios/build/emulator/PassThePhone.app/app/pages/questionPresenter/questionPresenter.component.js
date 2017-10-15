"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaQuestion_1 = require("../../shared/triviaQuestion");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var triviaQuestion_provider_1 = require("../../shared/providers/triviaQuestion.provider");
var QuestionPresenterComponent = /** @class */ (function () {
    function QuestionPresenterComponent(route, router, triviaQuestionProvider) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.triviaQuestionProvider = triviaQuestionProvider;
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
            // that.triviaQuestionProvider.triviaQuestion=that.triviaQuestion;
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, triviaQuestion_provider_1.TriviaQuestionProvider])
    ], QuestionPresenterComponent);
    return QuestionPresenterComponent;
}());
exports.QuestionPresenterComponent = QuestionPresenterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFpRTtBQUVqRSw4REFBMEQ7QUFDMUQsMERBQXNEO0FBQ3RELDBGQUFxRjtBQVVyRjtJQVNFLG9DQUEyQixLQUFxQixFQUFVLE1BQWMsRUFBVSxzQkFBOEM7UUFBaEksaUJBU0M7UUFUMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5SCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVyQixDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxnRUFBZ0UsR0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUNySCxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2YsMEJBQTBCO1lBQzFCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUUxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFNUIsSUFBSSxRQUFRLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLElBQUksR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksVUFBVSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDL0MsSUFBSSxRQUFRLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLGNBQWMsR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ3ZELElBQUksaUJBQWlCLEdBQWEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBRS9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUUsY0FBYyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXpCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUU3RyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFFRCxrRUFBa0U7UUFFcEUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNaLDJCQUEyQjtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBdEVVLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLHNEQUFzRCxDQUFDO1NBQ3BFLENBQUM7eUNBV2tDLHVCQUFjLEVBQWtCLGVBQU0sRUFBa0MsZ0RBQXNCO09BVHJILDBCQUEwQixDQXVFdEM7SUFBRCxpQ0FBQztDQUFBLEFBdkVELElBdUVDO0FBdkVZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7VHJpdmlhUXVlc3Rpb25Qcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvdHJpdmlhUXVlc3Rpb24ucHJvdmlkZXJcIiBcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJxdWVzdGlvblByZXNlbnRlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUHJlc2VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0cml2aWFRdWVzdGlvbjogVHJpdmlhUXVlc3Rpb247XG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBcbiAgXG4gIHB1YmxpYyBzZWxlY3RlZElkOiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdHJpdmlhUXVlc3Rpb25Qcm92aWRlcjogVHJpdmlhUXVlc3Rpb25Qcm92aWRlcikge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkSWQgPSBwYXJhbXNbXCJpZFwiXTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkaWQ6IFwiK3RoaXMuc2VsZWN0ZWRJZCk7XG5cbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcblxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKG5ldyBUcml2aWFBbnN3ZXIobnVsbCxcIlwiKSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICBcbiAgfVxuICBcbiAgZXh0cmFjdERhdGEoKSB7XG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICBcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgXG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9MSZkaWZmaWN1bHR5PWVhc3kmY2F0ZWdvcnk9XCIrdGhpcy5zZWxlY3RlZElkLCBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgLy8vLyBBcmd1bWVudCAocikgaXMgSlNPTiFcbiAgICAgIHZhciBqc29uID0gci5jb250ZW50O1xuICAgICAgdmFyIHN0ciA9IHIuY29udGVudC50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2coXCJKU09OOiBcIitzdHIpO1xuICAgICAgXG4gICAgICB2YXIgbXlPYmogPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICBcbiAgICAgIHZhciByZXN1bHRzID0gbXlPYmoucmVzdWx0cztcbiAgICAgIFxuICAgICAgbGV0IGNhdGVnb3J5OiBzdHJpbmcgPSByZXN1bHRzWzBdLmNhdGVnb3J5O1xuICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHJlc3VsdHNbMF0udHlwZTtcbiAgICAgIGxldCBkaWZmaWN1bHR5OiBzdHJpbmcgPSByZXN1bHRzWzBdLmRpZmZpY3VsdHk7XG4gICAgICBsZXQgcXVlc3Rpb246IHN0cmluZyA9IHJlc3VsdHNbMF0ucXVlc3Rpb247XG4gICAgICBsZXQgY29ycmVjdF9hbnN3ZXI6IHN0cmluZyA9IHJlc3VsdHNbMF0uY29ycmVjdF9hbnN3ZXI7XG4gICAgICBsZXQgaW5jb3JyZWN0X2Fuc3dlcnM6IHN0cmluZ1tdID0gcmVzdWx0c1swXS5pbmNvcnJlY3RfYW5zd2VycztcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJxdWVzdGlvbjogXCIrIHF1ZXN0aW9uKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdF9hbnN3ZXI6IFwiKyBjb3JyZWN0X2Fuc3dlcik7XG4gICAgICBjb25zb2xlLmxvZyhcImluY29ycmVjdF9hbnN3ZXJzOiBcIisgaW5jb3JyZWN0X2Fuc3dlcnMpO1xuICAgICAgXG4gICAgICB0aGF0LnF1ZXN0aW9uID0gcXVlc3Rpb247XG4gICAgICBcbiAgICAgIHRoYXQudHJpdmlhUXVlc3Rpb24gPSBuZXcgVHJpdmlhUXVlc3Rpb24oY2F0ZWdvcnksdHlwZSxkaWZmaWN1bHR5LHF1ZXN0aW9uLGNvcnJlY3RfYW5zd2VyLGluY29ycmVjdF9hbnN3ZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMubGVuZ3RoO2krKyl7XG4gICAgICAgIHRoYXQuY2hvaWNlcy5wdXNoKHRoYXQudHJpdmlhUXVlc3Rpb24udHJpdmlhQW5zd2Vyc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoYXQudHJpdmlhUXVlc3Rpb25Qcm92aWRlci50cml2aWFRdWVzdGlvbj10aGF0LnRyaXZpYVF1ZXN0aW9uO1xuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVBbnN3ZXJcIl0pXG4gIH1cbn1cbiJdfQ==