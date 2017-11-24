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
    function QuestionPresenterComponent(route, routerExtensions, roundDataProvider, router) {
        var _this = this;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.roundDataProvider = roundDataProvider;
        this.router = router;
        this.route.params.subscribe(function (params) {
            _this.selectedId = params.id;
        });
        console.log("selectedid: " + this.selectedId);
        roundDataProvider.subjectId = this.selectedId;
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
                this.questionAsker.nativeElement.text = this.roundDataProvider.players[0].name;
            }
            var reply = this.roundDataProvider.getRandomPlayer(this.questionAsker.nativeElement.text);
            //this.aloud.nativeElement.text = this.questionAsker.nativeElement.text.concat(" please read aloud and pass to ").concat(reply.name);
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, roundData_provider_1.RoundDataProvider, router_1.Router])
    ], QuestionPresenterComponent);
    return QuestionPresenterComponent;
}());
exports.QuestionPresenterComponent = QuestionPresenterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUFpRTtBQUNqRSxzREFBNkQ7QUFHN0QsMERBQXVEO0FBQ3ZELDhEQUEyRDtBQUMzRCxnRkFBNEU7QUFTNUUsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQVE3QjtJQVFFLG9DQUEyQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQyxFQUFVLE1BQWM7UUFBbEssaUJBVUM7UUFWMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFNRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDekQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMs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SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiO1xuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtUcml2aWFDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFDYXRlZ29yeVwiIFxuXG5cbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInF1ZXN0aW9uUHJlc2VudGVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25QcmVzZW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0cml2aWFRdWVzdGlvbjogVHJpdmlhUXVlc3Rpb247XG4gIHB1YmxpYyBjaG9pY2VzOiBUcml2aWFBbnN3ZXJbXTtcbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcbiAgcHVibGljIHNlbGVjdGVkSWQ6IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gcGFyYW1zLmlkO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRpZDogXCIgKyB0aGlzLnNlbGVjdGVkSWQpO1xuICAgIHJvdW5kRGF0YVByb3ZpZGVyLnN1YmplY3RJZCA9IHRoaXMuc2VsZWN0ZWRJZDtcblxuICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuXG4gICAgdGhpcy5jaG9pY2VzLnB1c2gobmV3IFRyaXZpYUFuc3dlcihudWxsLCBcIlwiKSk7XG4gIH1cblxuXG4gIEBWaWV3Q2hpbGQoXCJxdWVzdGlvbkFza2VyXCIpIHF1ZXN0aW9uQXNrZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJxdWVzdGlvbkZvclwiKSBxdWVzdGlvbkZvcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFsb3VkXCIpIGFsb3VkOiBFbGVtZW50UmVmO1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdldFByb2dyZXNzKClcbiAgICBpZighdGhpcy5yb3VuZERhdGFQcm92aWRlci5oYXNRdWVzdGlvbnMpe1xuICAgICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVhZGluZyBvbGQgcXVlc3Rpb25zXCIpO1xuICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIucXVlc3Rpb25zLnBvcCgpXG4gICAgICB2YXIgY3VycmVudEFuc3dlcnM6c3RyaW5nW10gPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmFuc3dlcnMucG9wKClcbiAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlF1ZXN0aW9uOiBcIi5jb25jYXQoY3VycmVudFF1ZXN0aW9uKTtcbiAgICAgIFxuICAgICAgdGhpcy50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbih0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmNhdGVnb3J5LCB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnR5cGUsIHRoaXMucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSwgY3VycmVudFF1ZXN0aW9uLCBjdXJyZW50QW5zd2Vycy5wb3AoKSwgY3VycmVudEFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFuc3dlciBvZiB0aGlzLnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpe1xuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uID0gdGhpcy50cml2aWFRdWVzdGlvbjtcbiAgICB9XG4gICAgdGhpcy5kZWZpbmVQbGF5ZXIoKTtcblxuICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuc3BlYWsodGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dClcbiAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnNwZWFrKCBcIiBhc2sgdGhlIHF1ZXN0aW9uIHRvIFwiKyB0aGlzLnF1ZXN0aW9uRm9yLm5hdGl2ZUVsZW1lbnQudGV4dCk7XG4gIH1cblxuICBwcml2YXRlIGRlZmluZVBsYXllcigpe1xuICAgIGlmKCF0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmhhc1JlbWFpbmluZ1BsYXllcnMpe1xuICAgICAgLy9ubyBtb3JlIGVsbGlnaWJsZSBwbGF5ZXJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBpcyBvdmVyXCIpO1xuICAgICAgdGhpcy5uZXh0KFwic3VtbWFyeVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGlmKHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllciAmJiB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIubmFtZSAhPSBcIlwiKXtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5uYW1lO1xuICAgICAgfSBlbHNle1xuICAgICAgICB0aGlzLnF1ZXN0aW9uQXNrZXIubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzWzBdLm5hbWU7XG4gICAgICB9XG4gICAgICBsZXQgcmVwbHkgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdldFJhbmRvbVBsYXllcih0aGlzLnF1ZXN0aW9uQXNrZXIubmF0aXZlRWxlbWVudC50ZXh0KTtcbiAgICAgIC8vdGhpcy5hbG91ZC5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLnF1ZXN0aW9uQXNrZXIubmF0aXZlRWxlbWVudC50ZXh0LmNvbmNhdChcIiBwbGVhc2UgcmVhZCBhbG91ZCBhbmQgcGFzcyB0byBcIikuY29uY2F0KHJlcGx5Lm5hbWUpO1xuICAgICAgdGhpcy5xdWVzdGlvbkZvci5uYXRpdmVFbGVtZW50LnRleHQgPSByZXBseS5uYW1lO1xuICAgICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyID0gcmVwbHk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0RGF0YSgpIHtcbiAgICAvLyBleHRyYWN0aW5nIHJhbmRvbSBxdWVzdGlvbiBmcm9tIG9wZW50ZGJcbiAgICB2YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgbnVtYmVyT2ZRdWVzdGlvbnMgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMubGVuZ3RoICogdGhpcy5yb3VuZERhdGFQcm92aWRlci5hbnN3ZXJDb3VudDtcbiAgICAvLyBnZXR0aW5nIGFsbCBxdWVzdGlvbnMgb2YgZGlmZmljdWx0eSBlYXN5LCBmcm9tIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9XCIrbnVtYmVyT2ZRdWVzdGlvbnMrXCImZGlmZmljdWx0eT1lYXN5JmVuY29kZT1iYXNlNjQmY2F0ZWdvcnk9XCIrdGhpcy5zZWxlY3RlZElkLCBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgLy8vLyBBcmd1bWVudCAocikgaXMgSlNPTiFcbiAgICAgIHZhciBqc29uID0gci5jb250ZW50O1xuICAgICAgdmFyIHN0ciA9IHIuY29udGVudC50b1N0cmluZygpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJKU09OOiBcIitzdHIpO1xuICAgICAgXG4gICAgICB2YXIgbXlPYmogPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICBcbiAgICAgIHZhciByZXN1bHRzID0gbXlPYmoucmVzdWx0cztcbiAgICAgIC8vY29uc29sZS5sb2codGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1sxXS5xdWVzdGlvbikpO1xuICAgICAgdGhhdC5yb3VuZERhdGFQcm92aWRlci5jYXRlZ29yeSA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY2F0ZWdvcnkpO1xuICAgICAgdGhhdC5yb3VuZERhdGFQcm92aWRlci50eXBlID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS50eXBlKTtcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uZGlmZmljdWx0eSk7XG4gICAgICBcbiAgICAgIC8vbGV0IHF1ZXN0aW9uOiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLnF1ZXN0aW9uKTtcbiAgICAgIC8vbGV0IGNvcnJlY3RfYW5zd2VyOiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLmNvcnJlY3RfYW5zd2VyKTtcbiAgICAgIC8vbGV0IGluY29ycmVjdF9hbnN3ZXJzOiBzdHJpbmdbXSA9IHJlc3VsdHNbMF0uaW5jb3JyZWN0X2Fuc3dlcnM7XG5cbiAgICAgIGxldCBhbnN3ZXJzOiBbc3RyaW5nW11dID0gW1tdXTtcbiAgICAgIGxldCBxdWVzdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICAgIGZvcihsZXQgaT0wOyBpPCBudW1iZXJPZlF1ZXN0aW9uczsgaSsrKXtcbiAgICAgICAgcXVlc3Rpb25zLnB1c2godGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5xdWVzdGlvbikpO1xuICAgICAgICB2YXIgc3BlY19hbnN3ZXI6c3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8IHJlc3VsdHNbaV0uaW5jb3JyZWN0X2Fuc3dlcnMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgc3BlY19hbnN3ZXIucHVzaCh0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzW2ldLmluY29ycmVjdF9hbnN3ZXJzW2pdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5jb3JyZWN0X2Fuc3dlcikpXG4gICAgICAgIHNwZWNfYW5zd2VyLnB1c2godGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5jb3JyZWN0X2Fuc3dlcikpXG4gICAgICAgIGFuc3dlcnMucHVzaChzcGVjX2Fuc3dlcik7XG4gICAgICB9XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnF1ZXN0aW9ucyA9IHF1ZXN0aW9ucztcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIuYW5zd2VycyA9IGFuc3dlcnM7XG4gICAgICBcbiAgICAgIHZhciBjdXJyZW50UXVlc3Rpb24gPSB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnF1ZXN0aW9ucy5wb3AoKTtcbiAgICAgIHZhciBjdXJyZW50QW5zd2VyczpzdHJpbmdbXSA9IHRoYXQucm91bmREYXRhUHJvdmlkZXIuYW5zd2Vycy5wb3AoKTtcbiAgICAgIFxuICAgICAgLy8gdGhhdC5xdWVzdGlvbiA9IFwiUXVlc3Rpb246IFwiLmNvbmNhdChjdXJyZW50UXVlc3Rpb24pO1xuICAgICAgdGhhdC5xdWVzdGlvbiA9IGN1cnJlbnRRdWVzdGlvbjtcbiAgICAgIFxuICAgICAgdGhhdC50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbih0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmNhdGVnb3J5LCB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnR5cGUsIHRoYXQucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSwgY3VycmVudFF1ZXN0aW9uLCBjdXJyZW50QW5zd2Vycy5wb3AoKSwgY3VycmVudEFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFuc3dlciBvZiB0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpe1xuICAgICAgICB0aGF0LmNob2ljZXMucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uPXRoYXQudHJpdmlhUXVlc3Rpb247XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmhhc1F1ZXN0aW9ucyA9IHRydWU7XG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlQmFzZTY0KGlucHV0OiBzdHJpbmcpIHtcbiAgICAgLy8gZGVjb25kaW5nIGJhc2UgNjRcbiAgICAgY29uc3QgYnl0ZXMgPSBiYXNlNjQuZGVjb2RlKGlucHV0KTtcbiAgICAgY29uc3QgdGV4dCA9IHV0ZjguZGVjb2RlKGJ5dGVzKTtcbiAgICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBwcml2YXRlIG5leHQocGFnZSkge1xuICAgIGlmKHBhZ2UgPT0gXCJxdWVzdGlvblByZUFuc3dlclwiKXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhbnN3ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgICBcbiAgfVxuICBwcml2YXRlIHF1aXQoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=