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
    function QuestionPresenterComponent(route, routerExtensions, roundDataProvider) {
        var _this = this;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.roundDataProvider = roundDataProvider;
        this.route.params.subscribe(function (params) {
            _this.selectedId = params.id;
        });
        console.log("selectedid: " + this.selectedId);
        roundDataProvider.subjectId = this.selectedId;
        this.choices = [];
        this.choices.push(new triviaAnswer_1.TriviaAnswer(null, ""));
    }
    QuestionPresenterComponent.prototype.ngOnInit = function () {
        this.definePlayer();
        this.extractData();
    };
    QuestionPresenterComponent.prototype.definePlayer = function () {
        var reply = this.roundDataProvider.getRandomPlayer();
        if (reply == null) {
            //no more elligible player
            console.log("game is over");
            this.next("summary");
        }
        else {
            this.roundDataProvider.currentPlayer = reply;
            console.log("Current Player is: " + this.roundDataProvider.currentPlayer.name);
        }
    };
    QuestionPresenterComponent.prototype.extractData = function () {
        // extracting random question from opentdb
        var http = require("http");
        var that = this;
        // getting 1 question of difficulty easy, from selected category
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
            // decode all elements of incorrect answers
            for (var i = 0; i < incorrect_answers.length; i++) {
                incorrect_answers[i] = that.decodeBase64(incorrect_answers[i]);
            }
            that.question = question;
            that.triviaQuestion = new triviaQuestion_1.TriviaQuestion(category, type, difficulty, question, correct_answer, incorrect_answers);
            for (var _i = 0, _a = that.triviaQuestion.triviaAnswers; _i < _a.length; _i++) {
                var answer = _a[_i];
                that.choices.push(answer);
            }
            // this is employed to keep the current question shared among pages
            that.roundDataProvider.triviaQuestion = that.triviaQuestion;
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
            this.routerExtensions.navigate(["questionPreAnswer"], { clearHistory: true });
        }
        else {
            this.routerExtensions.navigate(["summary"], { clearHistory: true });
        }
    };
    QuestionPresenterComponent = __decorate([
        core_1.Component({
            selector: "questionPresenter",
            templateUrl: "pages/questionPresenter/questionPresenter.html",
            styleUrls: ["pages/questionPresenter/questionPresenter-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], QuestionPresenterComponent);
    return QuestionPresenterComponent;
}());
exports.QuestionPresenterComponent = QuestionPresenterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFpRTtBQUNqRSxzREFBNkQ7QUFHN0QsMERBQXVEO0FBQ3ZELDhEQUEyRDtBQUMzRCxnRkFBNEU7QUFFNUUsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQVE3QjtJQVFFLG9DQUEyQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQztRQUExSSxpQkFVQztRQVYwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3hJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTlDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLGlEQUFZLEdBQXBCO1FBRUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiO1xuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInF1ZXN0aW9uUHJlc2VudGVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25QcmVzZW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0cml2aWFRdWVzdGlvbjogVHJpdmlhUXVlc3Rpb247XG4gIHB1YmxpYyBjaG9pY2VzOiBUcml2aWFBbnN3ZXJbXTtcblxuICBwdWJsaWMgc2VsZWN0ZWRJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkSWQgPSBwYXJhbXMuaWQ7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZGlkOiBcIiArIHRoaXMuc2VsZWN0ZWRJZCk7XG4gICAgcm91bmREYXRhUHJvdmlkZXIuc3ViamVjdElkID0gdGhpcy5zZWxlY3RlZElkO1xuXG4gICAgdGhpcy5jaG9pY2VzID0gW107XG5cbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXcgVHJpdmlhQW5zd2VyKG51bGwsIFwiXCIpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGVmaW5lUGxheWVyKCk7XG4gICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZpbmVQbGF5ZXIoKXtcblxuICAgIGxldCByZXBseSA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ2V0UmFuZG9tUGxheWVyKCk7XG5cbiAgICBpZihyZXBseSA9PSBudWxsKXtcbiAgICAgIC8vbm8gbW9yZSBlbGxpZ2libGUgcGxheWVyXG4gICAgICBjb25zb2xlLmxvZyhcImdhbWUgaXMgb3ZlclwiKTtcbiAgICAgIHRoaXMubmV4dChcInN1bW1hcnlcIik7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIgPSByZXBseTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBQbGF5ZXIgaXM6IFwiICsgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLm5hbWUgKTtcbiAgICB9XG4gIH1cbiAgICBcblxuICBwcml2YXRlIGV4dHJhY3REYXRhKCkge1xuICAgIC8vIGV4dHJhY3RpbmcgcmFuZG9tIHF1ZXN0aW9uIGZyb20gb3BlbnRkYlxuICAgIHZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgLy8gZ2V0dGluZyAxIHF1ZXN0aW9uIG9mIGRpZmZpY3VsdHkgZWFzeSwgZnJvbSBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGh0dHAucmVxdWVzdCh7IHVybDogXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTEmZGlmZmljdWx0eT1lYXN5JmVuY29kZT1iYXNlNjQmY2F0ZWdvcnk9XCIrdGhpcy5zZWxlY3RlZElkLCBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgLy8vLyBBcmd1bWVudCAocikgaXMgSlNPTiFcbiAgICAgIHZhciBqc29uID0gci5jb250ZW50O1xuICAgICAgdmFyIHN0ciA9IHIuY29udGVudC50b1N0cmluZygpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJKU09OOiBcIitzdHIpO1xuICAgICAgXG4gICAgICB2YXIgbXlPYmogPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICBcbiAgICAgIHZhciByZXN1bHRzID0gbXlPYmoucmVzdWx0cztcbiAgICAgIFxuICAgICAgbGV0IGNhdGVnb3J5OiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLmNhdGVnb3J5KTtcbiAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLnR5cGUpO1xuICAgICAgbGV0IGRpZmZpY3VsdHk6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uZGlmZmljdWx0eSk7XG4gICAgICBsZXQgcXVlc3Rpb246IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0ucXVlc3Rpb24pO1xuICAgICAgbGV0IGNvcnJlY3RfYW5zd2VyOiBzdHJpbmcgPSB0aGF0LmRlY29kZUJhc2U2NChyZXN1bHRzWzBdLmNvcnJlY3RfYW5zd2VyKTtcbiAgICAgIGxldCBpbmNvcnJlY3RfYW5zd2Vyczogc3RyaW5nW10gPSByZXN1bHRzWzBdLmluY29ycmVjdF9hbnN3ZXJzO1xuXG4gICAgICAvLyBkZWNvZGUgYWxsIGVsZW1lbnRzIG9mIGluY29ycmVjdCBhbnN3ZXJzXG4gICAgICBmb3IobGV0IGk9MDsgaTwgaW5jb3JyZWN0X2Fuc3dlcnMubGVuZ3RoO2krKyl7XG4gICAgICAgIGluY29ycmVjdF9hbnN3ZXJzW2ldID10aGF0LmRlY29kZUJhc2U2NChpbmNvcnJlY3RfYW5zd2Vyc1tpXSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoYXQucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgICAgIFxuICAgICAgdGhhdC50cml2aWFRdWVzdGlvbiA9IG5ldyBUcml2aWFRdWVzdGlvbihjYXRlZ29yeSwgdHlwZSwgZGlmZmljdWx0eSwgcXVlc3Rpb24sIGNvcnJlY3RfYW5zd2VyLCBpbmNvcnJlY3RfYW5zd2Vycyk7XG5cbiAgICAgIGZvciAoY29uc3QgYW5zd2VyIG9mIHRoYXQudHJpdmlhUXVlc3Rpb24udHJpdmlhQW5zd2Vycyl7XG4gICAgICAgIHRoYXQuY2hvaWNlcy5wdXNoKGFuc3dlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgaXMgZW1wbG95ZWQgdG8ga2VlcCB0aGUgY3VycmVudCBxdWVzdGlvbiBzaGFyZWQgYW1vbmcgcGFnZXNcbiAgICAgIHRoYXQucm91bmREYXRhUHJvdmlkZXIudHJpdmlhUXVlc3Rpb249dGhhdC50cml2aWFRdWVzdGlvbjtcbiAgICAgIFxuICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChlKSBpcyBFcnJvciFcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWNvZGVCYXNlNjQoaW5wdXQ6IHN0cmluZykge1xuICAgICAvLyBkZWNvbmRpbmcgYmFzZSA2NFxuICAgICBjb25zdCBieXRlcyA9IGJhc2U2NC5kZWNvZGUoaW5wdXQpO1xuICAgICBjb25zdCB0ZXh0ID0gdXRmOC5kZWNvZGUoYnl0ZXMpO1xuICAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgbmV4dChwYWdlKSB7XG4gICAgaWYocGFnZSA9PSBcInF1ZXN0aW9uUHJlQW5zd2VyXCIpe1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInF1ZXN0aW9uUHJlQW5zd2VyXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgXG4gIH1cbn1cbiJdfQ==