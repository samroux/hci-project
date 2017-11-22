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
            that.question = "Question: ".concat(currentQuestion);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUFpRTtBQUNqRSxzREFBNkQ7QUFHN0QsMERBQXVEO0FBQ3ZELDhEQUEyRDtBQUMzRCxnRkFBNEU7QUFTNUUsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQVE3QjtJQVFFLG9DQUEyQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQyxFQUFVLE1BQWM7UUFBbEssaUJBVUM7UUFWMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFNRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDekQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMs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QUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDO0lBRUgsQ0FBQztJQUNPLHlDQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBeEgyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBZ0IsaUJBQVU7cUVBQUM7SUFDNUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7bUVBQUM7SUFDOUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7NkRBQUM7SUF2QjNCLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLHNEQUFzRCxDQUFDO1NBQ3BFLENBQUM7eUNBVWtDLHVCQUFjLEVBQTRCLHlCQUFnQixFQUE2QixzQ0FBaUIsRUFBa0IsZUFBTTtPQVJ2SiwwQkFBMEIsQ0E4SXRDO0lBQUQsaUNBQUM7Q0FBQSxBQTlJRCxJQThJQztBQTlJWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cblxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCI7XG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1RyaXZpYUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUNhdGVnb3J5XCIgXG5cblxuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xuaW1wb3J0ICogYXMgdXRmOCBmcm9tIFwidXRmOFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicXVlc3Rpb25QcmVzZW50ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblByZXNlbnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHVibGljIHRyaXZpYVF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcbiAgcHVibGljIGNob2ljZXM6IFRyaXZpYUFuc3dlcltdO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwdWJsaWMgc2VsZWN0ZWRJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkSWQgPSBwYXJhbXMuaWQ7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZGlkOiBcIiArIHRoaXMuc2VsZWN0ZWRJZCk7XG4gICAgcm91bmREYXRhUHJvdmlkZXIuc3ViamVjdElkID0gdGhpcy5zZWxlY3RlZElkO1xuXG4gICAgdGhpcy5jaG9pY2VzID0gW107XG5cbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXcgVHJpdmlhQW5zd2VyKG51bGwsIFwiXCIpKTtcbiAgfVxuXG5cbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uQXNrZXJcIikgcXVlc3Rpb25Bc2tlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uRm9yXCIpIHF1ZXN0aW9uRm9yOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYWxvdWRcIikgYWxvdWQ6IEVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ2V0UHJvZ3Jlc3MoKVxuICAgIGlmKCF0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmhhc1F1ZXN0aW9ucyl7XG4gICAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgfSBlbHNle1xuICAgICAgY29uc29sZS5sb2coXCJyZWFkaW5nIG9sZCBxdWVzdGlvbnNcIik7XG4gICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5xdWVzdGlvbnMucG9wKClcbiAgICAgIHZhciBjdXJyZW50QW5zd2VyczpzdHJpbmdbXSA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuYW5zd2Vycy5wb3AoKVxuICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiUXVlc3Rpb246IFwiLmNvbmNhdChjdXJyZW50UXVlc3Rpb24pO1xuICAgICAgXG4gICAgICB0aGlzLnRyaXZpYVF1ZXN0aW9uID0gbmV3IFRyaXZpYVF1ZXN0aW9uKHRoaXMucm91bmREYXRhUHJvdmlkZXIuY2F0ZWdvcnksIHRoaXMucm91bmREYXRhUHJvdmlkZXIudHlwZSwgdGhpcy5yb3VuZERhdGFQcm92aWRlci5kaWZmaWN1bHR5LCBjdXJyZW50UXVlc3Rpb24sIGN1cnJlbnRBbnN3ZXJzLnBvcCgpLCBjdXJyZW50QW5zd2Vycyk7XG5cbiAgICAgIGZvciAoY29uc3QgYW5zd2VyIG9mIHRoaXMudHJpdmlhUXVlc3Rpb24udHJpdmlhQW5zd2Vycyl7XG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFuc3dlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgaXMgZW1wbG95ZWQgdG8ga2VlcCB0aGUgY3VycmVudCBxdWVzdGlvbiBzaGFyZWQgYW1vbmcgcGFnZXNcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIudHJpdmlhUXVlc3Rpb24gPSB0aGlzLnRyaXZpYVF1ZXN0aW9uO1xuICAgIH1cbiAgICB0aGlzLmRlZmluZVBsYXllcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZpbmVQbGF5ZXIoKXtcbiAgICBpZighdGhpcy5yb3VuZERhdGFQcm92aWRlci5oYXNSZW1haW5pbmdQbGF5ZXJzKXtcbiAgICAgIC8vbm8gbW9yZSBlbGxpZ2libGUgcGxheWVyXG4gICAgICBjb25zb2xlLmxvZyhcImdhbWUgaXMgb3ZlclwiKTtcbiAgICAgIHRoaXMubmV4dChcInN1bW1hcnlcIik7XG4gICAgfWVsc2V7XG4gICAgICBpZih0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIgJiYgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLm5hbWUgIT0gXCJcIil7XG4gICAgICAgIHRoaXMucXVlc3Rpb25Bc2tlci5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIubmFtZTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVyc1swXS5uYW1lO1xuICAgICAgfVxuICAgICAgbGV0IHJlcGx5ID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5nZXRSYW5kb21QbGF5ZXIodGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dCk7XG4gICAgICAvL3RoaXMuYWxvdWQubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dC5jb25jYXQoXCIgcGxlYXNlIHJlYWQgYWxvdWQgYW5kIHBhc3MgdG8gXCIpLmNvbmNhdChyZXBseS5uYW1lKTtcbiAgICAgIHRoaXMucXVlc3Rpb25Gb3IubmF0aXZlRWxlbWVudC50ZXh0ID0gcmVwbHkubmFtZTtcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllciA9IHJlcGx5O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEoKSB7XG4gICAgLy8gZXh0cmFjdGluZyByYW5kb20gcXVlc3Rpb24gZnJvbSBvcGVudGRiXG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIG51bWJlck9mUXVlc3Rpb25zID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzLmxlbmd0aCAqIHRoaXMucm91bmREYXRhUHJvdmlkZXIuYW5zd2VyQ291bnQ7XG4gICAgLy8gZ2V0dGluZyBhbGwgcXVlc3Rpb25zIG9mIGRpZmZpY3VsdHkgZWFzeSwgZnJvbSBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGh0dHAucmVxdWVzdCh7IHVybDogXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PVwiK251bWJlck9mUXVlc3Rpb25zK1wiJmRpZmZpY3VsdHk9ZWFzeSZlbmNvZGU9YmFzZTY0JmNhdGVnb3J5PVwiK3RoaXMuc2VsZWN0ZWRJZCwgbWV0aG9kOiBcIkdFVFwiIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIEpTT04hXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlNPTjogXCIrc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgXG4gICAgICB2YXIgcmVzdWx0cyA9IG15T2JqLnJlc3VsdHM7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMV0ucXVlc3Rpb24pKTtcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIuY2F0ZWdvcnkgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLmNhdGVnb3J5KTtcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIudHlwZSA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0udHlwZSk7XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmRpZmZpY3VsdHkgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLmRpZmZpY3VsdHkpO1xuICAgICAgXG4gICAgICAvL2xldCBxdWVzdGlvbjogc3RyaW5nID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS5xdWVzdGlvbik7XG4gICAgICAvL2xldCBjb3JyZWN0X2Fuc3dlcjogc3RyaW5nID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS5jb3JyZWN0X2Fuc3dlcik7XG4gICAgICAvL2xldCBpbmNvcnJlY3RfYW5zd2Vyczogc3RyaW5nW10gPSByZXN1bHRzWzBdLmluY29ycmVjdF9hbnN3ZXJzO1xuXG4gICAgICBsZXQgYW5zd2VyczogW3N0cmluZ1tdXSA9IFtbXV07XG4gICAgICBsZXQgcXVlc3Rpb25zOiBzdHJpbmdbXSA9IFtdXG4gICAgICBmb3IobGV0IGk9MDsgaTwgbnVtYmVyT2ZRdWVzdGlvbnM7IGkrKyl7XG4gICAgICAgIHF1ZXN0aW9ucy5wdXNoKHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbaV0ucXVlc3Rpb24pKTtcbiAgICAgICAgdmFyIHNwZWNfYW5zd2VyOnN0cmluZ1tdID0gW107XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPCByZXN1bHRzW2ldLmluY29ycmVjdF9hbnN3ZXJzLmxlbmd0aDtqKyspe1xuICAgICAgICAgIHNwZWNfYW5zd2VyLnB1c2godGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1tpXS5pbmNvcnJlY3RfYW5zd2Vyc1tqXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbaV0uY29ycmVjdF9hbnN3ZXIpKVxuICAgICAgICBzcGVjX2Fuc3dlci5wdXNoKHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbaV0uY29ycmVjdF9hbnN3ZXIpKVxuICAgICAgICBhbnN3ZXJzLnB1c2goc3BlY19hbnN3ZXIpO1xuICAgICAgfVxuICAgICAgdGhhdC5yb3VuZERhdGFQcm92aWRlci5xdWVzdGlvbnMgPSBxdWVzdGlvbnM7XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmFuc3dlcnMgPSBhbnN3ZXJzO1xuICAgICAgXG4gICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhhdC5yb3VuZERhdGFQcm92aWRlci5xdWVzdGlvbnMucG9wKCk7XG4gICAgICB2YXIgY3VycmVudEFuc3dlcnM6c3RyaW5nW10gPSB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmFuc3dlcnMucG9wKCk7XG4gICAgICBcbiAgICAgIHRoYXQucXVlc3Rpb24gPSBcIlF1ZXN0aW9uOiBcIi5jb25jYXQoY3VycmVudFF1ZXN0aW9uKTtcbiAgICAgIFxuICAgICAgdGhhdC50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbih0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmNhdGVnb3J5LCB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnR5cGUsIHRoYXQucm91bmREYXRhUHJvdmlkZXIuZGlmZmljdWx0eSwgY3VycmVudFF1ZXN0aW9uLCBjdXJyZW50QW5zd2Vycy5wb3AoKSwgY3VycmVudEFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFuc3dlciBvZiB0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpe1xuICAgICAgICB0aGF0LmNob2ljZXMucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uPXRoYXQudHJpdmlhUXVlc3Rpb247XG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLmhhc1F1ZXN0aW9ucyA9IHRydWU7XG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRlY29kZUJhc2U2NChpbnB1dDogc3RyaW5nKSB7XG4gICAgIC8vIGRlY29uZGluZyBiYXNlIDY0XG4gICAgIGNvbnN0IGJ5dGVzID0gYmFzZTY0LmRlY29kZShpbnB1dCk7XG4gICAgIGNvbnN0IHRleHQgPSB1dGY4LmRlY29kZShieXRlcyk7XG4gICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KHBhZ2UpIHtcbiAgICBpZihwYWdlID09IFwicXVlc3Rpb25QcmVBbnN3ZXJcIil7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYW5zd2VyXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgXG4gIH1cbiAgcHJpdmF0ZSBxdWl0KCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN0YXJ0XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxufVxuIl19