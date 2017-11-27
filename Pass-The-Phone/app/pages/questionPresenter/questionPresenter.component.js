"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var triviaQuestion_1 = require("../../shared/triviaQuestion");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var base64 = require("base-64");
var utf8 = require("utf8");
var QuestionPresenterComponent = /** @class */ (function () {
    function QuestionPresenterComponent(routerExtensions, roundDataProvider, router) {
        this.routerExtensions = routerExtensions;
        this.roundDataProvider = roundDataProvider;
        this.router = router;
        this.selectedId = roundDataProvider.subjectId;
        console.log("selectedid: " + this.selectedId);
        this.choices = [];
        this.choices.push(new triviaAnswer_1.TriviaAnswer(null, ""));
    }
    QuestionPresenterComponent.prototype.ngOnInit = function () {
        this.progressValue = this.roundDataProvider.getProgress();
        if (!this.roundDataProvider.hasQuestions) {
            this.extractData();
        }
        else {
            console.log("reading old questions");
            var currentQuestion = this.roundDataProvider.questions.pop();
            var currentAnswers = this.roundDataProvider.answers.pop();
            this.question = "Question: ".concat(currentQuestion);
            this.triviaQuestion = new triviaQuestion_1.TriviaQuestion(this.roundDataProvider.category, this.roundDataProvider.type, this.roundDataProvider.difficulty, currentQuestion, currentAnswers.pop(), currentAnswers);
            for (var _i = 0, _a = this.triviaQuestion.triviaAnswers; _i < _a.length; _i++) {
                var answer = _a[_i];
                this.choices.push(answer);
            }
            // this is employed to keep the current question shared among pages
            this.roundDataProvider.triviaQuestion = this.triviaQuestion;
        }
        this.definePlayer();
        this.roundDataProvider.speak(this.questionAsker.nativeElement.text);
        this.roundDataProvider.speak(" ask the question to " + this.questionFor.nativeElement.text);
    };
    QuestionPresenterComponent.prototype.definePlayer = function () {
        if (!this.roundDataProvider.hasRemainingPlayers) {
            //no more elligible player
            console.log("game is over");
            this.next("summary");
        }
        else {
            if (this.roundDataProvider.currentPlayer && this.roundDataProvider.currentPlayer.name != "") {
                this.questionAsker.nativeElement.text = this.roundDataProvider.currentPlayer.name;
            }
            else {
                //initialization
                this.questionAsker.nativeElement.text = this.roundDataProvider.players[0].name;
            }
            var reply = this.roundDataProvider.getRandomPlayer(this.questionAsker.nativeElement.text);
            this.questionFor.nativeElement.text = reply.name;
            this.roundDataProvider.currentPlayer = reply;
        }
    };
    QuestionPresenterComponent.prototype.extractData = function () {
        // extracting random question from opentdb
        var http = require("http");
        var that = this;
        var numberOfQuestions = this.roundDataProvider.players.length * this.roundDataProvider.answerCount;
        // getting all questions of difficulty easy, from selected category
        http.request({ url: "https://opentdb.com/api.php?amount=" + numberOfQuestions + "&difficulty=easy&encode=base64&category=" + this.selectedId, method: "GET" })
            .then(function (r) {
            //// Argument (r) is JSON!
            var json = r.content;
            var str = r.content.toString();
            // console.log("JSON: "+str);
            var myObj = JSON.parse(str);
            var results = myObj.results;
            if (myObj.results.length <= 0) {
                console.log("Results not good");
                this.quit();
            }
            //console.log(that.decodeBase64(results[1].question));
            that.roundDataProvider.category = that.decodeBase64(results[0].category);
            that.roundDataProvider.type = that.decodeBase64(results[0].type);
            that.roundDataProvider.difficulty = that.decodeBase64(results[0].difficulty);
            //let question: string = that.decodeBase64(results[0].question);
            //let correct_answer: string = that.decodeBase64(results[0].correct_answer);
            //let incorrect_answers: string[] = results[0].incorrect_answers;
            var answers = [[]];
            var questions = [];
            for (var i = 0; i < numberOfQuestions; i++) {
                questions.push(that.decodeBase64(results[i].question));
                var spec_answer = [];
                for (var j = 0; j < results[i].incorrect_answers.length; j++) {
                    spec_answer.push(that.decodeBase64(results[i].incorrect_answers[j]));
                }
                console.log(that.decodeBase64(results[i].correct_answer));
                spec_answer.push(that.decodeBase64(results[i].correct_answer));
                answers.push(spec_answer);
            }
            that.roundDataProvider.questions = questions;
            that.roundDataProvider.answers = answers;
            var currentQuestion = that.roundDataProvider.questions.pop();
            var currentAnswers = that.roundDataProvider.answers.pop();
            // that.question = "Question: ".concat(currentQuestion);
            that.question = currentQuestion;
            that.triviaQuestion = new triviaQuestion_1.TriviaQuestion(that.roundDataProvider.category, that.roundDataProvider.type, that.roundDataProvider.difficulty, currentQuestion, currentAnswers.pop(), currentAnswers);
            for (var _i = 0, _a = that.triviaQuestion.triviaAnswers; _i < _a.length; _i++) {
                var answer = _a[_i];
                that.choices.push(answer);
            }
            // this is employed to keep the current question shared among pages
            that.roundDataProvider.triviaQuestion = that.triviaQuestion;
            that.roundDataProvider.hasQuestions = true;
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });
    };
    QuestionPresenterComponent.prototype.decodeBase64 = function (input) {
        // deconding base 64
        var bytes = base64.decode(input);
        var text = utf8.decode(bytes);
        return text;
    };
    QuestionPresenterComponent.prototype.next = function (page) {
        if (page == "questionPreAnswer") {
            this.routerExtensions.navigate(["answer"], { clearHistory: true });
        }
        else {
            this.routerExtensions.navigate(["summary"], { clearHistory: true });
        }
    };
    QuestionPresenterComponent.prototype.quit = function () {
        this.routerExtensions.navigate(["start"], { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild("questionAsker"),
        __metadata("design:type", core_1.ElementRef)
    ], QuestionPresenterComponent.prototype, "questionAsker", void 0);
    __decorate([
        core_1.ViewChild("questionFor"),
        __metadata("design:type", core_1.ElementRef)
    ], QuestionPresenterComponent.prototype, "questionFor", void 0);
    __decorate([
        core_1.ViewChild("aloud"),
        __metadata("design:type", core_1.ElementRef)
    ], QuestionPresenterComponent.prototype, "aloud", void 0);
    QuestionPresenterComponent = __decorate([
        core_1.Component({
            selector: "questionPresenter",
            templateUrl: "pages/questionPresenter/questionPresenter.html",
            styleUrls: ["pages/questionPresenter/questionPresenter-common.css"]
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions, roundData_provider_1.RoundDataProvider, router_1.Router])
    ], QuestionPresenterComponent);
    return QuestionPresenterComponent;
}());
exports.QuestionPresenterComponent = QuestionPresenterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUFpRTtBQUNqRSxzREFBNkQ7QUFHN0QsMERBQXVEO0FBQ3ZELDhEQUEyRDtBQUMzRCxnRkFBNEU7QUFTNUUsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQVE3QjtJQVFFLG9DQUEyQixnQkFBa0MsRUFBVSxpQkFBb0MsRUFBVSxNQUFjO1FBQXhHLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVqSSxJQUFJLENBQUMsVUFBVSxHQUFFLGlCQUFpQixDQUFDLFNBQVMsQ0FBRTtRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFNRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDekQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFB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ZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIjtcbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcInVpL3Byb2dyZXNzXCI7XG5cbmltcG9ydCB7VHJpdmlhQ2F0ZWdvcnl9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQ2F0ZWdvcnlcIiBcblxuXG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XG5pbXBvcnQgKiBhcyB1dGY4IGZyb20gXCJ1dGY4XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJxdWVzdGlvblByZXNlbnRlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUHJlc2VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgdHJpdmlhUXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uO1xuICBwdWJsaWMgY2hvaWNlczogVHJpdmlhQW5zd2VyW107XG4gIHB1YmxpYyBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XG4gIHB1YmxpYyBzZWxlY3RlZElkOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIHRoaXMuc2VsZWN0ZWRJZD0gcm91bmREYXRhUHJvdmlkZXIuc3ViamVjdElkIDtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkaWQ6IFwiICsgdGhpcy5zZWxlY3RlZElkKTtcblxuICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuXG4gICAgdGhpcy5jaG9pY2VzLnB1c2gobmV3IFRyaXZpYUFuc3dlcihudWxsLCBcIlwiKSk7XG4gIH1cblxuXG4gIEBWaWV3Q2hpbGQoXCJxdWVzdGlvbkFza2VyXCIpIHF1ZXN0aW9uQXNrZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJxdWVzdGlvbkZvclwiKSBxdWVzdGlvbkZvcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFsb3VkXCIpIGFsb3VkOiBFbGVtZW50UmVmO1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdldFByb2dyZXNzKClcbiAgICBpZighdGhpcy5yb3VuZERhdGFQcm92aWRlci5oYXNRdWVzdGlvbnMpe1xuICAgICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVhZGluZyBvbGQgcXVlc3Rpb25zXCIpO1xuICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIucXVlc3Rpb25zLnBvcCgpXG4gICAgICB2YXIgY3VycmVudEFuc3dlcnM6c3RyaW5nW10gPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmFuc3dlcnMucG9wKClcbiAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlF1ZXN0aW9uOiBcIi5jb25jYXQoY3VycmVudFF1ZXN0aW9uKTtcbiAgICAgIFxuICAgICAgdGhpcy50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbih0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmNhdGVnb3J5LCB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnR5cGUsIHRoaXMucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSwgY3VycmVudFF1ZXN0aW9uLCBjdXJyZW50QW5zd2Vycy5wb3AoKSwgY3VycmVudEFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFuc3dlciBvZiB0aGlzLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpe1xuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uID0gdGhpcy50cml2aWFRdWVzdGlvbjtcbiAgICB9XG4gICAgdGhpcy5kZWZpbmVQbGF5ZXIoKTtcblxuICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuc3BlYWsodGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dClcbiAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnNwZWFrKCBcIiBhc2sgdGhlIHF1ZXN0aW9uIHRvIFwiKyB0aGlzLnF1ZXN0aW9uRm9yLm5hdGl2ZUVsZW1lbnQudGV4dCk7XG4gIH1cblxuICBwcml2YXRlIGRlZmluZVBsYXllcigpe1xuICAgIGlmKCF0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmhhc1JlbWFpbmluZ1BsYXllcnMpe1xuICAgICAgLy9ubyBtb3JlIGVsbGlnaWJsZSBwbGF5ZXJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBpcyBvdmVyXCIpO1xuICAgICAgdGhpcy5uZXh0KFwic3VtbWFyeVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGlmKHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllciAmJiB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIubmFtZSAhPSBcIlwiKXtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5uYW1lO1xuICAgICAgfSBlbHNle1xuICAgICAgICAvL2luaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMucXVlc3Rpb25Bc2tlci5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnNbMF0ubmFtZTtcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICBsZXQgcmVwbHkgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdldFJhbmRvbVBsYXllcih0aGlzLnF1ZXN0aW9uQXNrZXIubmF0aXZlRWxlbWVudC50ZXh0KTtcbiAgICAgIHRoaXMucXVlc3Rpb25Gb3IubmF0aXZlRWxlbWVudC50ZXh0ID0gcmVwbHkubmFtZTtcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllciA9IHJlcGx5O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEoKSB7XG4gICAgLy8gZXh0cmFjdGluZyByYW5kb20gcXVlc3Rpb24gZnJvbSBvcGVudGRiXG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIG51bWJlck9mUXVlc3Rpb25zID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzLmxlbmd0aCAqIHRoaXMucm91bmREYXRhUHJvdmlkZXIuYW5zd2VyQ291bnQ7XG4gICAgLy8gZ2V0dGluZyBhbGwgcXVlc3Rpb25zIG9mIGRpZmZpY3VsdHkgZWFzeSwgZnJvbSBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGh0dHAucmVxdWVzdCh7IHVybDogXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PVwiK251bWJlck9mUXVlc3Rpb25zK1wiJmRpZmZpY3VsdHk9ZWFzeSZlbmNvZGU9YmFzZTY0JmNhdGVnb3J5PVwiK3RoaXMuc2VsZWN0ZWRJZCwgbWV0aG9kOiBcIkdFVFwiIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIEpTT04hXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlNPTjogXCIrc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgXG4gICAgICB2YXIgcmVzdWx0cyA9IG15T2JqLnJlc3VsdHM7XG4gICAgICBpZihteU9iai5yZXN1bHRzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHRzIG5vdCBnb29kXCIpO1xuICAgICAgICB0aGlzLnF1aXQoKTtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2codGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1sxXS5xdWVzdGlvbikpO1xuICAgICAgdGhhdC5yb3VuZERhdGFQcm92aWRlci5jYXRlZ29yeSA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY2F0ZWdvcnkpO1xuICAgICAgdGhhdC5yb3VuZERhdGFQcm92aWRlci50eXBlID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS50eXBlKTtcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uZGlmZmljdWx0eSk7XG4gICAgICBcbiAgICAgIC8vbGV0IHF1ZXN0aW9uOiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLnF1ZXN0aW9uKTtcbiAgICAgIC8vbGV0IGNvcnJlY3RfYW5zd2VyOiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLmNvcnJlY3RfYW5zd2VyKTtcbiAgICAgIC8vbGV0IGluY29ycmVjdF9hbnN3ZXJzOiBzdHJpbmdbXSA9IHJlc3VsdHNbMF0uaW5jb3JyZWN0X2Fuc3dlcnM7XG5cbiAgICAgIGxldCBhbnN3ZXJzOiBbc3RyaW5nW11dID0gW1tdXTtcbiAgICAgIGxldCBxdWVzdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICAgIGZvcihsZXQgaT0wOyBpPCBudW1iZXJPZlF1ZXN0aW9uczsgaSsrKXtcbiAgICAgICAgcXVlc3Rpb25zLnB1c2godGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5xdWVzdGlvbikpO1xuICAgICAgICB2YXIgc3BlY19hbnN3ZXI6c3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8IHJlc3VsdHNbaV0uaW5jb3JyZWN0X2Fuc3dlcnMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgc3BlY19hbnN3ZXIucHVzaCh0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzW2ldLmluY29ycmVjdF9hbnN3ZXJzW2pdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5jb3JyZWN0X2Fuc3dlcikpXG4gICAgICAgIHNwZWNfYW5zd2VyLnB1c2godGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5jb3JyZWN0X2Fuc3dlcikpXG4gICAgICAgIGFuc3dlcnMucHVzaChzcGVjX2Fuc3dlcik7XG4gICAgICB9XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnF1ZXN0aW9ucyA9IHF1ZXN0aW9ucztcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIuYW5zd2VycyA9IGFuc3dlcnM7XG4gICAgICBcbiAgICAgIHZhciBjdXJyZW50UXVlc3Rpb24gPSB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnF1ZXN0aW9ucy5wb3AoKTtcbiAgICAgIHZhciBjdXJyZW50QW5zd2VyczpzdHJpbmdbXSA9IHRoYXQucm91bmREYXRhUHJvdmlkZXIuYW5zd2Vycy5wb3AoKTtcbiAgICAgIFxuICAgICAgLy8gdGhhdC5xdWVzdGlvbiA9IFwiUXVlc3Rpb246IFwiLmNvbmNhdChjdXJyZW50UXVlc3Rpb24pO1xuICAgICAgdGhhdC5xdWVzdGlvbiA9IGN1cnJlbnRRdWVzdGlvbjtcbiAgICAgIFxuICAgICAgdGhhdC50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbih0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmNhdGVnb3J5LCB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnR5cGUsIHRoYXQucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSwgY3VycmVudFF1ZXN0aW9uLCBjdXJyZW50QW5zd2Vycy5wb3AoKSwgY3VycmVudEFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFuc3dlciBvZiB0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpe1xuICAgICAgICB0aGF0LmNob2ljZXMucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uPXRoYXQudHJpdmlhUXVlc3Rpb247XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmhhc1F1ZXN0aW9ucyA9IHRydWU7XG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlQmFzZTY0KGlucHV0OiBzdHJpbmcpIHtcbiAgICAgLy8gZGVjb25kaW5nIGJhc2UgNjRcbiAgICAgY29uc3QgYnl0ZXMgPSBiYXNlNjQuZGVjb2RlKGlucHV0KTtcbiAgICAgY29uc3QgdGV4dCA9IHV0ZjguZGVjb2RlKGJ5dGVzKTtcbiAgICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBwcml2YXRlIG5leHQocGFnZSkge1xuICAgIGlmKHBhZ2UgPT0gXCJxdWVzdGlvblByZUFuc3dlclwiKXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhbnN3ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgICBcbiAgfVxuICBwcml2YXRlIHF1aXQoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=