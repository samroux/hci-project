"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaQuestion_1 = require("../../shared/triviaQuestion");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var triviaQuestion_provider_1 = require("../../shared/providers/triviaQuestion.provider");
var base64 = require("base-64");
var utf8 = require("utf8");
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
        http.request({ url: "https://opentdb.com/api.php?amount=1&difficulty=easy&encode=base64&category=" + this.selectedId, method: "GET" })
            .then(function (r) {
            //// Argument (r) is JSON!
            var json = r.content;
            var str = r.content.toString();
            // console.log("JSON: "+str);
            var myObj = JSON.parse(str);
            var results = myObj.results;
            var category = that.decodeBase64(results[0].category);
            var type = that.decodeBase64(results[0].type);
            var difficulty = that.decodeBase64(results[0].difficulty);
            var question = that.decodeBase64(results[0].question);
            var correct_answer = that.decodeBase64(results[0].correct_answer);
            var incorrect_answers = results[0].incorrect_answers;
            //decode all elements of incorrect answers
            for (var i = 0; i < incorrect_answers.length; i++) {
                incorrect_answers[i] = that.decodeBase64(incorrect_answers[i]);
            }
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
    QuestionPresenterComponent.prototype.decodeBase64 = function (input) {
        //deconding base 64
        var bytes = base64.decode(input);
        var text = utf8.decode(bytes);
        return text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFpRTtBQUVqRSw4REFBMEQ7QUFDMUQsMERBQXNEO0FBQ3RELDBGQUFxRjtBQUVyRixnQ0FBbUM7QUFDbkMsMkJBQTZCO0FBUTdCO0lBU0Usb0NBQTJCLEtBQXFCLEVBQVUsTUFBYyxFQUFVLHNCQUE4QztRQUFoSSxpQkFTQztRQVQwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UseUNBQXlDO1FBQ3pDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVB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QUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLHNEQUFzRCxDQUFDO1NBQ3BFLENBQUM7eUNBV2tDLHVCQUFjLEVBQWtCLGVBQU0sRUFBa0MsZ0RBQXNCO09BVHJILDBCQUEwQixDQWlGdEM7SUFBRCxpQ0FBQztDQUFBLEFBakZELElBaUZDO0FBakZZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7VHJpdmlhUXVlc3Rpb25Qcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvdHJpdmlhUXVlc3Rpb24ucHJvdmlkZXJcIiBcblxuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xuaW1wb3J0ICogYXMgdXRmOCBmcm9tIFwidXRmOFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicXVlc3Rpb25QcmVzZW50ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblByZXNlbnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgdHJpdmlhUXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uO1xuICBwdWJsaWMgY2hvaWNlczogQXJyYXk8VHJpdmlhQW5zd2VyPjtcbiAgXG4gIFxuICBwdWJsaWMgc2VsZWN0ZWRJZDogc3RyaW5nO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHRyaXZpYVF1ZXN0aW9uUHJvdmlkZXI6IFRyaXZpYVF1ZXN0aW9uUHJvdmlkZXIpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gcGFyYW1zW1wiaWRcIl07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZGlkOiBcIit0aGlzLnNlbGVjdGVkSWQpO1xuXG4gICAgdGhpcy5jaG9pY2VzID0gW107XG5cbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXcgVHJpdmlhQW5zd2VyKG51bGwsXCJcIikpO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gIH1cbiAgXG4gIGV4dHJhY3REYXRhKCkge1xuICAgIC8vZXh0cmFjdGluZyByYW5kb20gcXVlc3Rpb24gZnJvbSBvcGVudGRiXG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICBcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgXG4gICAgLy9nZXR0aW5nIDEgcXVlc3Rpb24gb2YgZGlmZmljdWx0eSBlYXN5LCBmcm9tIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9MSZkaWZmaWN1bHR5PWVhc3kmZW5jb2RlPWJhc2U2NCZjYXRlZ29yeT1cIit0aGlzLnNlbGVjdGVkSWQsIG1ldGhvZDogXCJHRVRcIiB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgdmFyIGpzb24gPSByLmNvbnRlbnQ7XG4gICAgICB2YXIgc3RyID0gci5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkpTT046IFwiK3N0cik7XG4gICAgICBcbiAgICAgIHZhciBteU9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIHJlc3VsdHMgPSBteU9iai5yZXN1bHRzO1xuICAgICAgXG4gICAgICBsZXQgY2F0ZWdvcnk6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY2F0ZWdvcnkpO1xuICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0udHlwZSk7XG4gICAgICBsZXQgZGlmZmljdWx0eTogc3RyaW5nID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS5kaWZmaWN1bHR5KTtcbiAgICAgIGxldCBxdWVzdGlvbjogc3RyaW5nID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS5xdWVzdGlvbik7XG4gICAgICBsZXQgY29ycmVjdF9hbnN3ZXI6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY29ycmVjdF9hbnN3ZXIpO1xuICAgICAgbGV0IGluY29ycmVjdF9hbnN3ZXJzOiBzdHJpbmdbXSA9IHJlc3VsdHNbMF0uaW5jb3JyZWN0X2Fuc3dlcnM7XG5cbiAgICAgIC8vZGVjb2RlIGFsbCBlbGVtZW50cyBvZiBpbmNvcnJlY3QgYW5zd2Vyc1xuICAgICAgZm9yKGxldCBpPTA7IGk8IGluY29ycmVjdF9hbnN3ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgICBpbmNvcnJlY3RfYW5zd2Vyc1tpXSA9dGhhdC5kZWNvZGVCYXNlNjQoaW5jb3JyZWN0X2Fuc3dlcnNbaV0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGF0LnF1ZXN0aW9uID0gcXVlc3Rpb247XG4gICAgICBcbiAgICAgIHRoYXQudHJpdmlhUXVlc3Rpb24gPSBuZXcgVHJpdmlhUXVlc3Rpb24oY2F0ZWdvcnksdHlwZSxkaWZmaWN1bHR5LHF1ZXN0aW9uLGNvcnJlY3RfYW5zd2VyLGluY29ycmVjdF9hbnN3ZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMubGVuZ3RoO2krKyl7XG4gICAgICAgIHRoYXQuY2hvaWNlcy5wdXNoKHRoYXQudHJpdmlhUXVlc3Rpb24udHJpdmlhQW5zd2Vyc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vdGhpcyBpcyBlbXBsb3llZCB0byBrZWVwIHRoZSBjdXJyZW50IHF1ZXN0aW9uIHNoYXJlZCBhbW9uZyBwYWdlc1xuICAgICAgdGhhdC50cml2aWFRdWVzdGlvblByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uPXRoYXQudHJpdmlhUXVlc3Rpb247XG4gICAgICBcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8vLyBBcmd1bWVudCAoZSkgaXMgRXJyb3IhXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlY29kZUJhc2U2NChpbnB1dDpzdHJpbmcpe1xuICAgICAvL2RlY29uZGluZyBiYXNlIDY0XG4gICAgIHZhciBieXRlcyA9IGJhc2U2NC5kZWNvZGUoaW5wdXQpO1xuICAgICB2YXIgdGV4dCA9IHV0ZjguZGVjb2RlKGJ5dGVzKTtcbiAgICAgcmV0dXJuIHRleHQ7XG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVBbnN3ZXJcIl0pXG4gIH1cbn1cbiJdfQ==