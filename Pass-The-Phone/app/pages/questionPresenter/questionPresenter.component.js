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
            this.loud.nativeElement.text = "Please read aloud then pass the phone to ".concat(this.roundDataProvider.currentPlayer.name);
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
        core_1.ViewChild("loud"),
        __metadata("design:type", core_1.ElementRef)
    ], QuestionPresenterComponent.prototype, "loud", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUFpRTtBQUNqRSxzREFBNkQ7QUFHN0QsMERBQXVEO0FBQ3ZELDhEQUEyRDtBQUMzRCxnRkFBNEU7QUFTNUUsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQVE3QjtJQVFFLG9DQUEyQixnQkFBa0MsRUFBVSxpQkFBb0MsRUFBVSxNQUFjO1FBQXhHLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVqSSxJQUFJLENBQUMsVUFBVSxHQUFFLGlCQUFpQixDQUFDLFNBQVMsQ0FBRTtRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFPRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFB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Q0F3SnRDO0lBQUQsaUNBQUM7Q0FBQSxBQXhKRCxJQXdKQztBQXhKWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cblxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCI7XG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1RyaXZpYUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUNhdGVnb3J5XCIgXG5cblxuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xuaW1wb3J0ICogYXMgdXRmOCBmcm9tIFwidXRmOFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicXVlc3Rpb25QcmVzZW50ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblByZXNlbnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHVibGljIHRyaXZpYVF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcbiAgcHVibGljIGNob2ljZXM6IFRyaXZpYUFuc3dlcltdO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwdWJsaWMgc2VsZWN0ZWRJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICB0aGlzLnNlbGVjdGVkSWQ9IHJvdW5kRGF0YVByb3ZpZGVyLnN1YmplY3RJZCA7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZGlkOiBcIiArIHRoaXMuc2VsZWN0ZWRJZCk7XG5cbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcblxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKG5ldyBUcml2aWFBbnN3ZXIobnVsbCwgXCJcIikpO1xuICB9XG5cblxuICBAVmlld0NoaWxkKFwicXVlc3Rpb25Bc2tlclwiKSBxdWVzdGlvbkFza2VyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwicXVlc3Rpb25Gb3JcIikgcXVlc3Rpb25Gb3I6IEVsZW1lbnRSZWY7XG4gLy9AVmlld0NoaWxkKFwiYWxvdWRcIikgYWxvdWQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJsb3VkXCIpIGxvdWQ6IEVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ2V0UHJvZ3Jlc3MoKTtcbiAgICBpZighdGhpcy5yb3VuZERhdGFQcm92aWRlci5oYXNRdWVzdGlvbnMpe1xuICAgICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVhZGluZyBvbGQgcXVlc3Rpb25zXCIpO1xuICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIucXVlc3Rpb25zLnBvcCgpXG4gICAgICB2YXIgY3VycmVudEFuc3dlcnM6c3RyaW5nW10gPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmFuc3dlcnMucG9wKClcbiAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlF1ZXN0aW9uOiBcIi5jb25jYXQoY3VycmVudFF1ZXN0aW9uKTtcbiAgICAgIFxuICAgICAgdGhpcy50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbih0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmNhdGVnb3J5LCB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnR5cGUsIHRoaXMucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSwgY3VycmVudFF1ZXN0aW9uLCBjdXJyZW50QW5zd2Vycy5wb3AoKSwgY3VycmVudEFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFuc3dlciBvZiB0aGlzLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpe1xuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uID0gdGhpcy50cml2aWFRdWVzdGlvbjtcbiAgICB9XG4gICAgdGhpcy5kZWZpbmVQbGF5ZXIoKTtcblxuICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuc3BlYWsodGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dClcbiAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnNwZWFrKCBcIiBhc2sgdGhlIHF1ZXN0aW9uIHRvIFwiKyB0aGlzLnF1ZXN0aW9uRm9yLm5hdGl2ZUVsZW1lbnQudGV4dCk7XG4gIH1cblxuICBwcml2YXRlIGRlZmluZVBsYXllcigpe1xuICAgIGlmKCF0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmhhc1JlbWFpbmluZ1BsYXllcnMpe1xuICAgICAgLy9ubyBtb3JlIGVsbGlnaWJsZSBwbGF5ZXJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBpcyBvdmVyXCIpO1xuICAgICAgdGhpcy5uZXh0KFwic3VtbWFyeVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGlmKHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllciAmJiB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIubmFtZSAhPSBcIlwiKXtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5uYW1lO1xuICAgICAgfSBlbHNle1xuICAgICAgICAvL2luaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMucXVlc3Rpb25Bc2tlci5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnNbMF0ubmFtZTtcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICBsZXQgcmVwbHkgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdldFJhbmRvbVBsYXllcih0aGlzLnF1ZXN0aW9uQXNrZXIubmF0aXZlRWxlbWVudC50ZXh0KTtcbiAgICAgIHRoaXMucXVlc3Rpb25Gb3IubmF0aXZlRWxlbWVudC50ZXh0ID0gcmVwbHkubmFtZTtcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllciA9IHJlcGx5O1xuICAgICAgdGhpcy5sb3VkLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiUGxlYXNlIHJlYWQgYWxvdWQgdGhlbiBwYXNzIHRoZSBwaG9uZSB0byBcIi5jb25jYXQodGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEoKSB7XG4gICAgLy8gZXh0cmFjdGluZyByYW5kb20gcXVlc3Rpb24gZnJvbSBvcGVudGRiXG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIG51bWJlck9mUXVlc3Rpb25zID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzLmxlbmd0aCAqIHRoaXMucm91bmREYXRhUHJvdmlkZXIuYW5zd2VyQ291bnQ7XG4gICAgLy8gZ2V0dGluZyBhbGwgcXVlc3Rpb25zIG9mIGRpZmZpY3VsdHkgZWFzeSwgZnJvbSBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGh0dHAucmVxdWVzdCh7IHVybDogXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PVwiK251bWJlck9mUXVlc3Rpb25zK1wiJmRpZmZpY3VsdHk9ZWFzeSZlbmNvZGU9YmFzZTY0JmNhdGVnb3J5PVwiK3RoaXMuc2VsZWN0ZWRJZCwgbWV0aG9kOiBcIkdFVFwiIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIEpTT04hXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlNPTjogXCIrc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgXG4gICAgICB2YXIgcmVzdWx0cyA9IG15T2JqLnJlc3VsdHM7XG4gICAgICBpZihteU9iai5yZXN1bHRzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHRzIG5vdCBnb29kXCIpO1xuICAgICAgICB0aGlzLnF1aXQoKTtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2codGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1sxXS5xdWVzdGlvbikpO1xuICAgICAgdGhhdC5yb3VuZERhdGFQcm92aWRlci5jYXRlZ29yeSA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY2F0ZWdvcnkpO1xuICAgICAgdGhhdC5yb3VuZERhdGFQcm92aWRlci50eXBlID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS50eXBlKTtcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uZGlmZmljdWx0eSk7XG4gICAgICBcbiAgICAgIC8vbGV0IHF1ZXN0aW9uOiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLnF1ZXN0aW9uKTtcbiAgICAgIC8vbGV0IGNvcnJlY3RfYW5zd2VyOiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLmNvcnJlY3RfYW5zd2VyKTtcbiAgICAgIC8vbGV0IGluY29ycmVjdF9hbnN3ZXJzOiBzdHJpbmdbXSA9IHJlc3VsdHNbMF0uaW5jb3JyZWN0X2Fuc3dlcnM7XG5cbiAgICAgIGxldCBhbnN3ZXJzOiBbc3RyaW5nW11dID0gW1tdXTtcbiAgICAgIGxldCBxdWVzdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICAgIGZvcihsZXQgaT0wOyBpPCBudW1iZXJPZlF1ZXN0aW9uczsgaSsrKXtcbiAgICAgICAgcXVlc3Rpb25zLnB1c2godGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5xdWVzdGlvbikpO1xuICAgICAgICB2YXIgc3BlY19hbnN3ZXI6c3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8IHJlc3VsdHNbaV0uaW5jb3JyZWN0X2Fuc3dlcnMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgc3BlY19hbnN3ZXIucHVzaCh0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzW2ldLmluY29ycmVjdF9hbnN3ZXJzW2pdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5jb3JyZWN0X2Fuc3dlcikpXG4gICAgICAgIHNwZWNfYW5zd2VyLnB1c2godGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5jb3JyZWN0X2Fuc3dlcikpXG4gICAgICAgIGFuc3dlcnMucHVzaChzcGVjX2Fuc3dlcik7XG4gICAgICB9XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnF1ZXN0aW9ucyA9IHF1ZXN0aW9ucztcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIuYW5zd2VycyA9IGFuc3dlcnM7XG4gICAgICBcbiAgICAgIHZhciBjdXJyZW50UXVlc3Rpb24gPSB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnF1ZXN0aW9ucy5wb3AoKTtcbiAgICAgIHZhciBjdXJyZW50QW5zd2VyczpzdHJpbmdbXSA9IHRoYXQucm91bmREYXRhUHJvdmlkZXIuYW5zd2Vycy5wb3AoKTtcbiAgICAgIFxuICAgICAgLy8gdGhhdC5xdWVzdGlvbiA9IFwiUXVlc3Rpb246IFwiLmNvbmNhdChjdXJyZW50UXVlc3Rpb24pO1xuICAgICAgdGhhdC5xdWVzdGlvbiA9IGN1cnJlbnRRdWVzdGlvbjtcbiAgICAgIFxuICAgICAgdGhhdC50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbih0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmNhdGVnb3J5LCB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnR5cGUsIHRoYXQucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSwgY3VycmVudFF1ZXN0aW9uLCBjdXJyZW50QW5zd2Vycy5wb3AoKSwgY3VycmVudEFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFuc3dlciBvZiB0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpe1xuICAgICAgICB0aGF0LmNob2ljZXMucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uPXRoYXQudHJpdmlhUXVlc3Rpb247XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmhhc1F1ZXN0aW9ucyA9IHRydWU7XG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlQmFzZTY0KGlucHV0OiBzdHJpbmcpIHtcbiAgICAgLy8gZGVjb25kaW5nIGJhc2UgNjRcbiAgICAgY29uc3QgYnl0ZXMgPSBiYXNlNjQuZGVjb2RlKGlucHV0KTtcbiAgICAgY29uc3QgdGV4dCA9IHV0ZjguZGVjb2RlKGJ5dGVzKTtcbiAgICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBwcml2YXRlIG5leHQocGFnZSkge1xuICAgIGlmKHBhZ2UgPT0gXCJxdWVzdGlvblByZUFuc3dlclwiKXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhbnN3ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgICBcbiAgfVxuICBwcml2YXRlIHF1aXQoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=