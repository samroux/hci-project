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
        this.definePlayer();
        this.extractData();
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
            that.question = "Question: ".concat(question);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUFpRTtBQUNqRSxzREFBNkQ7QUFHN0QsMERBQXVEO0FBQ3ZELDhEQUEyRDtBQUMzRCxnRkFBNEU7QUFTNUUsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQVE3QjtJQVFFLG9DQUEyQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQyxFQUFVLE1BQWM7UUFBbEssaUJBVUM7UUFWMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFNRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8saURBQVksR0FBcEI7UUFDRSxFQUFF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OUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQztJQUVILENBQUM7SUFDTyx5Q0FBSSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQTFGMkI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQWdCLGlCQUFVO3FFQUFDO0lBQzVCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVO21FQUFDO0lBQzlCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVOzZEQUFDO0lBdkIzQiwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdEQUFnRDtZQUM3RCxTQUFTLEVBQUUsQ0FBQyxzREFBc0QsQ0FBQztTQUNwRSxDQUFDO3lDQVVrQyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBNkIsc0NBQWlCLEVBQWtCLGVBQU07T0FSdkosMEJBQTBCLENBZ0h0QztJQUFELGlDQUFDO0NBQUEsQUFoSEQsSUFnSEM7QUFoSFksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiO1xuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtUcml2aWFDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFDYXRlZ29yeVwiIFxuXG5cbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInF1ZXN0aW9uUHJlc2VudGVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9xdWVzdGlvblByZXNlbnRlci9xdWVzdGlvblByZXNlbnRlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25QcmVzZW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0cml2aWFRdWVzdGlvbjogVHJpdmlhUXVlc3Rpb247XG4gIHB1YmxpYyBjaG9pY2VzOiBUcml2aWFBbnN3ZXJbXTtcblxuICBwdWJsaWMgc2VsZWN0ZWRJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkSWQgPSBwYXJhbXMuaWQ7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZGlkOiBcIiArIHRoaXMuc2VsZWN0ZWRJZCk7XG4gICAgcm91bmREYXRhUHJvdmlkZXIuc3ViamVjdElkID0gdGhpcy5zZWxlY3RlZElkO1xuXG4gICAgdGhpcy5jaG9pY2VzID0gW107XG5cbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXcgVHJpdmlhQW5zd2VyKG51bGwsIFwiXCIpKTtcbiAgfVxuXG5cbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uQXNrZXJcIikgcXVlc3Rpb25Bc2tlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uRm9yXCIpIHF1ZXN0aW9uRm9yOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYWxvdWRcIikgYWxvdWQ6IEVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGVmaW5lUGxheWVyKCk7XG4gICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZpbmVQbGF5ZXIoKXtcbiAgICBpZighdGhpcy5yb3VuZERhdGFQcm92aWRlci5oYXNSZW1haW5pbmdQbGF5ZXJzKXtcbiAgICAgIC8vbm8gbW9yZSBlbGxpZ2libGUgcGxheWVyXG4gICAgICBjb25zb2xlLmxvZyhcImdhbWUgaXMgb3ZlclwiKTtcbiAgICAgIHRoaXMubmV4dChcInN1bW1hcnlcIik7XG4gICAgfWVsc2V7XG4gICAgICBpZih0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIgJiYgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLm5hbWUgIT0gXCJcIil7XG4gICAgICAgIHRoaXMucXVlc3Rpb25Bc2tlci5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIubmFtZTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVyc1swXS5uYW1lO1xuICAgICAgfVxuICAgICAgbGV0IHJlcGx5ID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5nZXRSYW5kb21QbGF5ZXIodGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dCk7XG4gICAgICAvL3RoaXMuYWxvdWQubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5xdWVzdGlvbkFza2VyLm5hdGl2ZUVsZW1lbnQudGV4dC5jb25jYXQoXCIgcGxlYXNlIHJlYWQgYWxvdWQgYW5kIHBhc3MgdG8gXCIpLmNvbmNhdChyZXBseS5uYW1lKTtcbiAgICAgIHRoaXMucXVlc3Rpb25Gb3IubmF0aXZlRWxlbWVudC50ZXh0ID0gcmVwbHkubmFtZTtcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllciA9IHJlcGx5O1xuICAgIH1cbiAgfVxuICAgIFxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEoKSB7XG4gICAgLy8gZXh0cmFjdGluZyByYW5kb20gcXVlc3Rpb24gZnJvbSBvcGVudGRiXG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAvLyBnZXR0aW5nIDEgcXVlc3Rpb24gb2YgZGlmZmljdWx0eSBlYXN5LCBmcm9tIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9MSZkaWZmaWN1bHR5PWVhc3kmZW5jb2RlPWJhc2U2NCZjYXRlZ29yeT1cIit0aGlzLnNlbGVjdGVkSWQsIG1ldGhvZDogXCJHRVRcIiB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgdmFyIGpzb24gPSByLmNvbnRlbnQ7XG4gICAgICB2YXIgc3RyID0gci5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkpTT046IFwiK3N0cik7XG4gICAgICBcbiAgICAgIHZhciBteU9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIHJlc3VsdHMgPSBteU9iai5yZXN1bHRzO1xuICAgICAgXG4gICAgICBsZXQgY2F0ZWdvcnk6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY2F0ZWdvcnkpO1xuICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0udHlwZSk7XG4gICAgICBsZXQgZGlmZmljdWx0eTogc3RyaW5nID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS5kaWZmaWN1bHR5KTtcbiAgICAgIGxldCBxdWVzdGlvbjogc3RyaW5nID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS5xdWVzdGlvbik7XG4gICAgICBsZXQgY29ycmVjdF9hbnN3ZXI6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY29ycmVjdF9hbnN3ZXIpO1xuICAgICAgbGV0IGluY29ycmVjdF9hbnN3ZXJzOiBzdHJpbmdbXSA9IHJlc3VsdHNbMF0uaW5jb3JyZWN0X2Fuc3dlcnM7XG5cbiAgICAgIC8vIGRlY29kZSBhbGwgZWxlbWVudHMgb2YgaW5jb3JyZWN0IGFuc3dlcnNcbiAgICAgIGZvcihsZXQgaT0wOyBpPCBpbmNvcnJlY3RfYW5zd2Vycy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaW5jb3JyZWN0X2Fuc3dlcnNbaV0gPXRoYXQuZGVjb2RlQmFzZTY0KGluY29ycmVjdF9hbnN3ZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhhdC5xdWVzdGlvbiA9IFwiUXVlc3Rpb246IFwiLmNvbmNhdChxdWVzdGlvbik7XG4gICAgICBcbiAgICAgIHRoYXQudHJpdmlhUXVlc3Rpb24gPSBuZXcgVHJpdmlhUXVlc3Rpb24oY2F0ZWdvcnksIHR5cGUsIGRpZmZpY3VsdHksIHF1ZXN0aW9uLCBjb3JyZWN0X2Fuc3dlciwgaW5jb3JyZWN0X2Fuc3dlcnMpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFuc3dlciBvZiB0aGF0LnRyaXZpYVF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpe1xuICAgICAgICB0aGF0LmNob2ljZXMucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGlzIGVtcGxveWVkIHRvIGtlZXAgdGhlIGN1cnJlbnQgcXVlc3Rpb24gc2hhcmVkIGFtb25nIHBhZ2VzXG4gICAgICB0aGF0LnJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uPXRoYXQudHJpdmlhUXVlc3Rpb247XG4gICAgICBcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8vLyBBcmd1bWVudCAoZSkgaXMgRXJyb3IhXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlQmFzZTY0KGlucHV0OiBzdHJpbmcpIHtcbiAgICAgLy8gZGVjb25kaW5nIGJhc2UgNjRcbiAgICAgY29uc3QgYnl0ZXMgPSBiYXNlNjQuZGVjb2RlKGlucHV0KTtcbiAgICAgY29uc3QgdGV4dCA9IHV0ZjguZGVjb2RlKGJ5dGVzKTtcbiAgICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBwcml2YXRlIG5leHQocGFnZSkge1xuICAgIGlmKHBhZ2UgPT0gXCJxdWVzdGlvblByZUFuc3dlclwiKXtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhbnN3ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgICBcbiAgfVxuICBwcml2YXRlIHF1aXQoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iXX0=