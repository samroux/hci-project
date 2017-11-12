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
            var reply = this.roundDataProvider.getRandomPlayer();
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, roundData_provider_1.RoundDataProvider, router_1.Router])
    ], QuestionPresenterComponent);
    return QuestionPresenterComponent;
}());
exports.QuestionPresenterComponent = QuestionPresenterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25QcmVzZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFpRTtBQUNqRSxzREFBNkQ7QUFHN0QsMERBQXVEO0FBQ3ZELDhEQUEyRDtBQUMzRCxnRkFBNEU7QUFTNUUsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQVE3QjtJQVFFLG9DQUEyQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLGlCQUFvQyxFQUFVLE1BQWM7UUFBbEssaUJBVUM7UUFWMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8saURBQVksR0FBcEI7UUFDRSxFQUFF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UnZKLDBCQUEwQixDQW1HdEM7SUFBRCxpQ0FBQztDQUFBLEFBbkdELElBbUdDO0FBbkdZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cblxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCI7XG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1RyaXZpYUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUNhdGVnb3J5XCIgXG5cblxuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xuaW1wb3J0ICogYXMgdXRmOCBmcm9tIFwidXRmOFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicXVlc3Rpb25QcmVzZW50ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcXVlc3Rpb25QcmVzZW50ZXIvcXVlc3Rpb25QcmVzZW50ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3F1ZXN0aW9uUHJlc2VudGVyL3F1ZXN0aW9uUHJlc2VudGVyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblByZXNlbnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHVibGljIHRyaXZpYVF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcbiAgcHVibGljIGNob2ljZXM6IFRyaXZpYUFuc3dlcltdO1xuXG4gIHB1YmxpYyBzZWxlY3RlZElkOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9IHBhcmFtcy5pZDtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkaWQ6IFwiICsgdGhpcy5zZWxlY3RlZElkKTtcbiAgICByb3VuZERhdGFQcm92aWRlci5zdWJqZWN0SWQgPSB0aGlzLnNlbGVjdGVkSWQ7XG5cbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcblxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKG5ldyBUcml2aWFBbnN3ZXIobnVsbCwgXCJcIikpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kZWZpbmVQbGF5ZXIoKTtcbiAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIGRlZmluZVBsYXllcigpe1xuICAgIGlmKCF0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmhhc1JlbWFpbmluZ1BsYXllcnMpe1xuICAgICAgLy9ubyBtb3JlIGVsbGlnaWJsZSBwbGF5ZXJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBpcyBvdmVyXCIpO1xuICAgICAgdGhpcy5uZXh0KFwic3VtbWFyeVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGxldCByZXBseSA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ2V0UmFuZG9tUGxheWVyKCk7XG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIgPSByZXBseTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBQbGF5ZXIgaXM6IFwiICsgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLm5hbWUpO1xuICAgIH1cbiAgfVxuICAgIFxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEoKSB7XG4gICAgLy8gZXh0cmFjdGluZyByYW5kb20gcXVlc3Rpb24gZnJvbSBvcGVudGRiXG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAvLyBnZXR0aW5nIDEgcXVlc3Rpb24gb2YgZGlmZmljdWx0eSBlYXN5LCBmcm9tIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9MSZkaWZmaWN1bHR5PWVhc3kmZW5jb2RlPWJhc2U2NCZjYXRlZ29yeT1cIit0aGlzLnNlbGVjdGVkSWQsIG1ldGhvZDogXCJHRVRcIiB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgdmFyIGpzb24gPSByLmNvbnRlbnQ7XG4gICAgICB2YXIgc3RyID0gci5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkpTT046IFwiK3N0cik7XG4gICAgICBcbiAgICAgIHZhciBteU9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIFxuICAgICAgdmFyIHJlc3VsdHMgPSBteU9iai5yZXN1bHRzO1xuICAgICAgXG4gICAgICBsZXQgY2F0ZWdvcnk6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY2F0ZWdvcnkpO1xuICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0udHlwZSk7XG4gICAgICBsZXQgZGlmZmljdWx0eTogc3RyaW5nID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS5kaWZmaWN1bHR5KTtcbiAgICAgIGxldCBxdWVzdGlvbjogc3RyaW5nID0gdGhhdC5kZWNvZGVCYXNlNjQocmVzdWx0c1swXS5xdWVzdGlvbik7XG4gICAgICBsZXQgY29ycmVjdF9hbnN3ZXI6IHN0cmluZyA9IHRoYXQuZGVjb2RlQmFzZTY0KHJlc3VsdHNbMF0uY29ycmVjdF9hbnN3ZXIpO1xuICAgICAgbGV0IGluY29ycmVjdF9hbnN3ZXJzOiBzdHJpbmdbXSA9IHJlc3VsdHNbMF0uaW5jb3JyZWN0X2Fuc3dlcnM7XG5cbiAgICAgIC8vIGRlY29kZSBhbGwgZWxlbWVudHMgb2YgaW5jb3JyZWN0IGFuc3dlcnNcbiAgICAgIGZvcihsZXQgaT0wOyBpPCBpbmNvcnJlY3RfYW5zd2Vycy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaW5jb3JyZWN0X2Fuc3dlcnNbaV0gPXRoYXQuZGVjb2RlQmFzZTY0KGluY29ycmVjdF9hbnN3ZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhhdC5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgXG4gICAgICB0aGF0LnRyaXZpYVF1ZXN0aW9uID0gbmV3IFRyaXZpYVF1ZXN0aW9uKGNhdGVnb3J5LCB0eXBlLCBkaWZmaWN1bHR5LCBxdWVzdGlvbiwgY29ycmVjdF9hbnN3ZXIsIGluY29ycmVjdF9hbnN3ZXJzKTtcblxuICAgICAgZm9yIChjb25zdCBhbnN3ZXIgb2YgdGhhdC50cml2aWFRdWVzdGlvbi50cml2aWFBbnN3ZXJzKXtcbiAgICAgICAgdGhhdC5jaG9pY2VzLnB1c2goYW5zd2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyBpcyBlbXBsb3llZCB0byBrZWVwIHRoZSBjdXJyZW50IHF1ZXN0aW9uIHNoYXJlZCBhbW9uZyBwYWdlc1xuICAgICAgdGhhdC5yb3VuZERhdGFQcm92aWRlci50cml2aWFRdWVzdGlvbj10aGF0LnRyaXZpYVF1ZXN0aW9uO1xuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRlY29kZUJhc2U2NChpbnB1dDogc3RyaW5nKSB7XG4gICAgIC8vIGRlY29uZGluZyBiYXNlIDY0XG4gICAgIGNvbnN0IGJ5dGVzID0gYmFzZTY0LmRlY29kZShpbnB1dCk7XG4gICAgIGNvbnN0IHRleHQgPSB1dGY4LmRlY29kZShieXRlcyk7XG4gICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KHBhZ2UpIHtcbiAgICBpZihwYWdlID09IFwicXVlc3Rpb25QcmVBbnN3ZXJcIil7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVBbnN3ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1bW1hcnlcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgICBcbiAgfVxufVxuIl19