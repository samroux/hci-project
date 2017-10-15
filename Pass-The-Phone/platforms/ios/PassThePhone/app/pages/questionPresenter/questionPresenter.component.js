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
        //extracting random question from opentdb
        var http = require("http");
        var that = this;
        //getting 1 question of difficulty easy, from selected category
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
            //this is employed to keep the current question shared among pages
            that.triviaQuestionProvider.triviaQuestion = that.triviaQuestion;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFpRTtBQUVqRSw4REFBMEQ7QUFDMUQsMERBQXNEO0FBQ3RELDBGQUFxRjtBQVVyRjtJQVNFLG9DQUEyQixLQUFxQixFQUFVLE1BQWMsRUFBVSxzQkFBOEM7UUFBaEksaUJBU0M7UUFUMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5SCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLHlDQUF5QztRQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGdFQUFnRSxHQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3JILElBQUksQ0FBQyxVQUFVLENBQUM7WUFDZiwwQkFBMEI7WUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNyQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTFCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUU1QixJQUFJLFFBQVEsR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzNDLElBQUksSUFBSSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkMsSUFBSSxVQUFVLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUMvQyxJQUFJLFFBQVEsR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzNDLElBQUksY0FBYyxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDdkQsSUFBSSxpQkFBaUIsR0FBYSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFFL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRSxjQUFjLENBQUMsQ0FBQztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFFLGlCQUFpQixDQUFDLENBQUM7WUFFdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFFekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRTdHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsQ0FBQztZQUVELGtFQUFrRTtZQUNsRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFakUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNaLDJCQUEyQjtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBeEVVLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLHNEQUFzRCxDQUFDO1NBQ3BFLENBQUM7eUNBV2tDLHVCQUFjLEVBQWtCLGVBQU0sRUFBa0MsZ0RBQXNCO09BVHJILDBCQUEwQixDQXlFdEM7SUFBRCxpQ0FBQztDQUFBLEFBekVELElBeUVDO0FBekVZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7VHJpdmlhUXVlc3Rpb25Qcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvdHJpdmlhUXVlc3Rpb24ucHJvdmlkZXJcIiBcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJxdWVzdGlvblByZXNlbnRlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUHJlc2VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0cml2aWFRdWVzdGlvbjogVHJpdmlhUXVlc3Rpb247XG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBcbiAgXG4gIHB1YmxpYyBzZWxlY3RlZElkOiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdHJpdmlhUXVlc3Rpb25Qcm92aWRlcjogVHJpdmlhUXVlc3Rpb25Qcm92aWRlcikge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkSWQgPSBwYXJhbXNbXCJpZFwiXTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkaWQ6IFwiK3RoaXMuc2VsZWN0ZWRJZCk7XG5cbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcblxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKG5ldyBUcml2aWFBbnN3ZXIobnVsbCxcIlwiKSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgfVxuICBcbiAgZXh0cmFjdERhdGEoKSB7XG4gICAgLy9leHRyYWN0aW5nIHJhbmRvbSBxdWVzdGlvbiBmcm9tIG9wZW50ZGJcbiAgICB2YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIFxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICAvL2dldHRpbmcgMSBxdWVzdGlvbiBvZiBkaWZmaWN1bHR5IGVhc3ksIGZyb20gc2VsZWN0ZWQgY2F0ZWdvcnlcbiAgICBodHRwLnJlcXVlc3QoeyB1cmw6IFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD0xJmRpZmZpY3VsdHk9ZWFzeSZjYXRlZ29yeT1cIit0aGlzLnNlbGVjdGVkSWQsIG1ldGhvZDogXCJHRVRcIiB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgdmFyIGpzb24gPSByLmNvbnRlbnQ7XG4gICAgICB2YXIgc3RyID0gci5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkpTT046IFwiK3N0cik7XG4gICAgICBcbiAgICAgIHZhciBteU9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIHJlc3VsdHMgPSBteU9iai5yZXN1bHRzO1xuICAgICAgXG4gICAgICBsZXQgY2F0ZWdvcnk6IHN0cmluZyA9IHJlc3VsdHNbMF0uY2F0ZWdvcnk7XG4gICAgICBsZXQgdHlwZTogc3RyaW5nID0gcmVzdWx0c1swXS50eXBlO1xuICAgICAgbGV0IGRpZmZpY3VsdHk6IHN0cmluZyA9IHJlc3VsdHNbMF0uZGlmZmljdWx0eTtcbiAgICAgIGxldCBxdWVzdGlvbjogc3RyaW5nID0gcmVzdWx0c1swXS5xdWVzdGlvbjtcbiAgICAgIGxldCBjb3JyZWN0X2Fuc3dlcjogc3RyaW5nID0gcmVzdWx0c1swXS5jb3JyZWN0X2Fuc3dlcjtcbiAgICAgIGxldCBpbmNvcnJlY3RfYW5zd2Vyczogc3RyaW5nW10gPSByZXN1bHRzWzBdLmluY29ycmVjdF9hbnN3ZXJzO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcInF1ZXN0aW9uOiBcIisgcXVlc3Rpb24pO1xuICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0X2Fuc3dlcjogXCIrIGNvcnJlY3RfYW5zd2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0X2Fuc3dlcnM6IFwiKyBpbmNvcnJlY3RfYW5zd2Vycyk7XG4gICAgICBcbiAgICAgIHRoYXQucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgICAgIFxuICAgICAgdGhhdC50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbihjYXRlZ29yeSx0eXBlLGRpZmZpY3VsdHkscXVlc3Rpb24sY29ycmVjdF9hbnN3ZXIsaW5jb3JyZWN0X2Fuc3dlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQudHJpdmlhUXVlc3Rpb24udHJpdmlhQW5zd2Vycy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdGhhdC5jaG9pY2VzLnB1c2godGhhdC50cml2aWFRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICAgIH1cblxuICAgICAgLy90aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGF0LnRyaXZpYVF1ZXN0aW9uUHJvdmlkZXIudHJpdmlhUXVlc3Rpb249dGhhdC50cml2aWFRdWVzdGlvbjtcbiAgICAgIFxuICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChlKSBpcyBFcnJvciFcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0pO1xuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInF1ZXN0aW9uUHJlQW5zd2VyXCJdKVxuICB9XG59XG4iXX0=