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
            // console.log("JSON: "+str);
            var myObj = JSON.parse(str);
            var results = myObj.results;
            var category = results[0].category;
            var type = results[0].type;
            var difficulty = results[0].difficulty;
            var question = results[0].question;
            var correct_answer = results[0].correct_answer;
            var incorrect_answers = results[0].incorrect_answers;
            // console.log("question: "+ question);
            // console.log("correct_answer: "+ correct_answer);
            // console.log("incorrect_answers: "+ incorrect_answers);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFpRTtBQUVqRSw4REFBMEQ7QUFDMUQsMERBQXNEO0FBQ3RELDBGQUFxRjtBQVVyRjtJQVNFLG9DQUEyQixLQUFxQixFQUFVLE1BQWMsRUFBVSxzQkFBOEM7UUFBaEksaUJBU0M7UUFUMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5SCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLHlDQUF5QztRQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGdFQUFnRSxHQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3JILElBQUksQ0FBQyxVQUFVLENBQUM7WUFDZiwwQkFBMEI7WUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNyQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQy9CLDZCQUE2QjtZQUU3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFNUIsSUFBSSxRQUFRLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLElBQUksR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksVUFBVSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDL0MsSUFBSSxRQUFRLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLGNBQWMsR0FBVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ3ZELElBQUksaUJBQWlCLEdBQWEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBRS9ELHVDQUF1QztZQUN2QyxtREFBbUQ7WUFDbkQseURBQXlEO1lBRXpELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXpCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUU3RyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFFRCxrRUFBa0U7WUFDbEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWpFLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDWiwyQkFBMkI7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQXhFVSwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdEQUFnRDtZQUM3RCxTQUFTLEVBQUUsQ0FBQyxzREFBc0QsQ0FBQztTQUNwRSxDQUFDO3lDQVdrQyx1QkFBYyxFQUFrQixlQUFNLEVBQWtDLGdEQUFzQjtPQVRySCwwQkFBMEIsQ0F5RXRDO0lBQUQsaUNBQUM7Q0FBQSxBQXpFRCxJQXlFQztBQXpFWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiIFxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCIgXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9uUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3RyaXZpYVF1ZXN0aW9uLnByb3ZpZGVyXCIgXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicXVlc3Rpb25QcmVzZW50ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblByZXNlbnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgdHJpdmlhUXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uO1xuICBwdWJsaWMgY2hvaWNlczogQXJyYXk8VHJpdmlhQW5zd2VyPjtcbiAgXG4gIFxuICBwdWJsaWMgc2VsZWN0ZWRJZDogc3RyaW5nO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHRyaXZpYVF1ZXN0aW9uUHJvdmlkZXI6IFRyaXZpYVF1ZXN0aW9uUHJvdmlkZXIpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gcGFyYW1zW1wiaWRcIl07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZGlkOiBcIit0aGlzLnNlbGVjdGVkSWQpO1xuXG4gICAgdGhpcy5jaG9pY2VzID0gW107XG5cbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXcgVHJpdmlhQW5zd2VyKG51bGwsXCJcIikpO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gIH1cbiAgXG4gIGV4dHJhY3REYXRhKCkge1xuICAgIC8vZXh0cmFjdGluZyByYW5kb20gcXVlc3Rpb24gZnJvbSBvcGVudGRiXG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICBcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgXG4gICAgLy9nZXR0aW5nIDEgcXVlc3Rpb24gb2YgZGlmZmljdWx0eSBlYXN5LCBmcm9tIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9MSZkaWZmaWN1bHR5PWVhc3kmY2F0ZWdvcnk9XCIrdGhpcy5zZWxlY3RlZElkLCBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgLy8vLyBBcmd1bWVudCAocikgaXMgSlNPTiFcbiAgICAgIHZhciBqc29uID0gci5jb250ZW50O1xuICAgICAgdmFyIHN0ciA9IHIuY29udGVudC50b1N0cmluZygpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJKU09OOiBcIitzdHIpO1xuICAgICAgXG4gICAgICB2YXIgbXlPYmogPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICBcbiAgICAgIHZhciByZXN1bHRzID0gbXlPYmoucmVzdWx0cztcbiAgICAgIFxuICAgICAgbGV0IGNhdGVnb3J5OiBzdHJpbmcgPSByZXN1bHRzWzBdLmNhdGVnb3J5O1xuICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHJlc3VsdHNbMF0udHlwZTtcbiAgICAgIGxldCBkaWZmaWN1bHR5OiBzdHJpbmcgPSByZXN1bHRzWzBdLmRpZmZpY3VsdHk7XG4gICAgICBsZXQgcXVlc3Rpb246IHN0cmluZyA9IHJlc3VsdHNbMF0ucXVlc3Rpb247XG4gICAgICBsZXQgY29ycmVjdF9hbnN3ZXI6IHN0cmluZyA9IHJlc3VsdHNbMF0uY29ycmVjdF9hbnN3ZXI7XG4gICAgICBsZXQgaW5jb3JyZWN0X2Fuc3dlcnM6IHN0cmluZ1tdID0gcmVzdWx0c1swXS5pbmNvcnJlY3RfYW5zd2VycztcbiAgICAgIFxuICAgICAgLy8gY29uc29sZS5sb2coXCJxdWVzdGlvbjogXCIrIHF1ZXN0aW9uKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29ycmVjdF9hbnN3ZXI6IFwiKyBjb3JyZWN0X2Fuc3dlcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImluY29ycmVjdF9hbnN3ZXJzOiBcIisgaW5jb3JyZWN0X2Fuc3dlcnMpO1xuICAgICAgXG4gICAgICB0aGF0LnF1ZXN0aW9uID0gcXVlc3Rpb247XG4gICAgICBcbiAgICAgIHRoYXQudHJpdmlhUXVlc3Rpb24gPSBuZXcgVHJpdmlhUXVlc3Rpb24oY2F0ZWdvcnksdHlwZSxkaWZmaWN1bHR5LHF1ZXN0aW9uLGNvcnJlY3RfYW5zd2VyLGluY29ycmVjdF9hbnN3ZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMubGVuZ3RoO2krKyl7XG4gICAgICAgIHRoYXQuY2hvaWNlcy5wdXNoKHRoYXQudHJpdmlhUXVlc3Rpb24udHJpdmlhQW5zd2Vyc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vdGhpcyBpcyBlbXBsb3llZCB0byBrZWVwIHRoZSBjdXJyZW50IHF1ZXN0aW9uIHNoYXJlZCBhbW9uZyBwYWdlc1xuICAgICAgdGhhdC50cml2aWFRdWVzdGlvblByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uPXRoYXQudHJpdmlhUXVlc3Rpb247XG4gICAgICBcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8vLyBBcmd1bWVudCAoZSkgaXMgRXJyb3IhXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZUFuc3dlclwiXSlcbiAgfVxufVxuIl19