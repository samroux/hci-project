"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(router, rdp) {
        this.router = router;
        this.rdp = rdp;
        this.firstClick = true;
        // console.log("Constructing answer.component");
        this.choices = [];
        //need to have dummy otherwise, won't load on UI
        //TODO fix
        this.dummyAnswer = new triviaAnswer_1.TriviaAnswer(null, "");
        this.choices.push(this.dummyAnswer);
        this.choices.pop();
        this.currentQuestion = rdp.triviaQuestion;
        this.question = this.currentQuestion.question;
        this.shuffle(this.currentQuestion.triviaAnswers);
        for (var i_1 = 0; i_1 < this.currentQuestion.triviaAnswers.length; i_1++) {
            // console.log("question: "+this.currentQuestion.question);
            console.log(i_1);
            this.choices.push(this.currentQuestion.triviaAnswers[i_1]);
        }
        this.rdp.speak(this.currentQuestion.question);
        this.rdp.speak("Choose among the following:");
        var i = 0;
        for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var answer = _a[_i];
            this.rdp.speak(answer.content);
            if (i < (this.choices.length - 1)) {
                // this.rdp.speak("or");
            }
        }
    }
    AnswerComponent.prototype.ngOnInit = function () {
        console.log("length ".concat(this.rdp.teams.length.toString()));
        if (this.rdp.teams.length <= 0) {
            this.friend.nativeElement.visibility = "hidden";
        }
        if (!this.rdp.currentPlayer.canAsk) {
            this.friend.nativeElement.backgroundColor = "#d2d2d2";
            this.friend.nativeElement.isEnabled = false;
        }
    };
    AnswerComponent.prototype.shuffle = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    };
    AnswerComponent.prototype.onItemTap = function (args) {
        // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index > -1) {
            this.selectedAnswer = this.choices[args.index];
            // console.log ("Chosen: "+this.selectedAnswer.content);
            var correct = this.checkCorrectness(this.selectedAnswer);
            //increasing answer count for this player
            this.rdp.currentPlayer.answerCount++;
            // increase player points if good answer.
            if (correct) {
                this.rdp.currentPlayer.runningPointsTotal++;
            }
            else {
                // no point gain or loss
            }
            console.log(this.rdp.currentPlayer.name +
                "Player is having: " +
                this.rdp.currentPlayer.runningPointsTotal);
            this.next(correct, this.selectedAnswer.content);
        }
    };
    AnswerComponent.prototype.checkCorrectness = function (answer) {
        if (this.currentQuestion.triviaCorrectAnswer == answer) {
            //answer is correct!
            console.log("Answer is correct!");
            return true;
        }
        else {
            //answer is wrong
            console.log("Answer is wrong!");
            return false;
        }
    };
    AnswerComponent.prototype.stopWebview = function () {
        this.showWebview.nativeElement.visibility = "collapse";
        this.webView.nativeElement.visibility = "hidden";
        this.googleError.nativeElement.text = "20 seconds of Google are up...";
        this.googleError.nativeElement.color = "red";
        this.googleError.nativeElement.visibility = "visible";
        this.timer.nativeElement.visibility = "hidden";
    };
    AnswerComponent.prototype.viewWeb = function () {
        var _this = this;
        if (this.firstClick) {
            this.firstClick = false;
            var countdown = 20000;
            var intervalId = setInterval(function () {
                countdown -= 100;
                _this.timer.nativeElement.text = countdown / 1000.0;
                if (countdown == 0) {
                    clearInterval(intervalId);
                }
                else if (countdown == 10000) {
                    _this.timer.nativeElement.color = "red";
                }
            }, 100);
            setTimeout(function () {
                _this.stopWebview();
            }, 20000);
        }
        if (this.webView.nativeElement.visibility == "visible") {
            this.showWebview.nativeElement.text = "Show Google";
            this.webView.nativeElement.visibility = "hidden";
        }
        else {
            this.showWebview.nativeElement.text = "Hide Google";
            this.webView.nativeElement.visibility = "visible";
            this.selectAnswer.nativeElement.visibility = "visible";
        }
        this.WebViewSRC = "https://google.ca/";
        //let label: Label = this.labelResultRef.nativeElement;
        //label.text = "WebView is still loading...";
        console.log("WebView message - " + "ready");
        /*this.webView.nativeElement.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
          let message;
          if (!args.error) {
            message = "WebView finished loading of " + args.url;
          } else {
            message = "Error loading " + args.url + ": " + args.error;
          }
          
          //label.text = message;
          console.log("WebView message - " + message);
        });*/
    };
    AnswerComponent.prototype.askAFriend = function () {
        var _this = this;
        if (!this.rdp.currentPlayer.canAsk) {
            console.log("cant ask friend");
            var previous_1 = this.selectAnswer.nativeElement.visibility;
            var previousText_1 = this.googleError.nativeElement.text;
            this.selectAnswer.nativeElement.visibility = "visible";
            this.googleError.nativeElement.color = "red";
            this.googleError.nativeElement.text = "You may only ask once per game";
            setTimeout(function () {
                console.log(previousText_1);
                console.log(previous_1);
                if (previousText_1 == "20 seconds of Google are up...") {
                    _this.googleError.nativeElement.text = "20 seconds of Google are up...";
                }
                else if (previous_1 == "visible") {
                    _this.googleError.nativeElement.text = "You have Google for: ";
                    _this.googleError.nativeElement.color = "black";
                }
                else {
                    _this.googleError.nativeElement.text = "You have Google for: ";
                    _this.selectAnswer.nativeElement.visibility = "hidden";
                    _this.googleError.nativeElement.color = "black";
                }
            }, 5000);
        }
        else {
            console.log("asked a friend");
            this.rdp.currentPlayer.canAsk = false;
            this.friend.nativeElement.backgroundColor = "#d2d2d2";
            this.rdp.speak("You may ask ".concat(this.rdp.getRandomFriend(this.rdp.currentPlayer)));
        }
    };
    AnswerComponent.prototype.next = function (correct, answer_content) {
        this.router.navigate(["answerValidation", correct, answer_content], { clearHistory: true });
    };
    AnswerComponent.prototype.quit = function () {
        this.router.navigate(["start"], { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild("webview"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerComponent.prototype, "webView", void 0);
    __decorate([
        core_1.ViewChild("showWebview"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerComponent.prototype, "showWebview", void 0);
    __decorate([
        core_1.ViewChild("answers"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerComponent.prototype, "listView", void 0);
    __decorate([
        core_1.ViewChild("selectAnswer"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerComponent.prototype, "selectAnswer", void 0);
    __decorate([
        core_1.ViewChild("googleError"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerComponent.prototype, "googleError", void 0);
    __decorate([
        core_1.ViewChild("timer"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerComponent.prototype, "timer", void 0);
    __decorate([
        core_1.ViewChild("friend"),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerComponent.prototype, "friend", void 0);
    AnswerComponent = __decorate([
        core_1.Component({
            selector: "answer",
            templateUrl: "pages/answer/answer.html",
            styleUrls: ["pages/answer/answer-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFFeEYsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFTRSx5QkFBMkIsTUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBK0cxRSxlQUFVLEdBQVksSUFBSSxDQUFDO1FBOUdsQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFBO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFFLENBQUMsRUFBRSxHQUFDLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLEdBQUMsRUFBRSxFQUFDLENBQUM7WUFDOUQsMkRBQTJEO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUE7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENB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QyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ08sOEJBQUksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBakdxQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVSxpQkFBVTtvREFBQztJQUNoQjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTt3REFBQztJQUM1QjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVyxpQkFBVTtxREFBQztJQUNoQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt5REFBQztJQUMxQjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTt3REFBQztJQUM5QjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTtrREFBQztJQUNqQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTttREFBQztJQTVHL0IsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQVdtQyx5QkFBZ0IsRUFBZSxzQ0FBaUI7T0FUeEUsZUFBZSxDQXdNekI7SUFBRCxzQkFBQztDQUFBLEFBeE1ILElBd01HO0FBeE1VLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiIFxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCIgXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIiBcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5zd2VyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Fuc3dlci9hbnN3ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Fuc3dlci9hbnN3ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFuc3dlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgXG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RlZEFuc3dlcjogVHJpdmlhQW5zd2VyO1xuICBwcml2YXRlIGR1bW15QW5zd2VyOiBUcml2aWFBbnN3ZXI7XG4gIFxuICBwcml2YXRlIGN1cnJlbnRRdWVzdGlvbjogVHJpdmlhUXVlc3Rpb247XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcmRwOiBSb3VuZERhdGFQcm92aWRlcikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQ29uc3RydWN0aW5nIGFuc3dlci5jb21wb25lbnRcIik7XG4gICAgdGhpcy5jaG9pY2VzID0gW107XG4gICAgXG4gICAgLy9uZWVkIHRvIGhhdmUgZHVtbXkgb3RoZXJ3aXNlLCB3b24ndCBsb2FkIG9uIFVJXG4gICAgLy9UT0RPIGZpeFxuICAgIHRoaXMuZHVtbXlBbnN3ZXIgPSBuZXcgVHJpdmlhQW5zd2VyKG51bGwsXCJcIilcbiAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmR1bW15QW5zd2VyKTtcbiAgICB0aGlzLmNob2ljZXMucG9wKCk7XG4gICAgXG4gICAgXG4gICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSByZHAudHJpdmlhUXVlc3Rpb25cbiAgICBcbiAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb247IFxuICAgIHRoaXMuc2h1ZmZsZSh0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzKTtcbiAgICBmb3IgKGxldCBpID0wOyBpPHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMubGVuZ3RoO2krKyl7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInF1ZXN0aW9uOiBcIit0aGlzLmN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbik7XG4gICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgdGhpcy5jaG9pY2VzLnB1c2godGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vyc1tpXSk7XG4gICAgfVxuICAgIHRoaXMucmRwLnNwZWFrKHRoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uKTtcbiAgICB0aGlzLnJkcC5zcGVhayhcIkNob29zZSBhbW9uZyB0aGUgZm9sbG93aW5nOlwiKTtcbiAgICBcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yICh2YXIgYW5zd2VyIG9mIHRoaXMuY2hvaWNlcyl7XG4gICAgICB0aGlzLnJkcC5zcGVhayhhbnN3ZXIuY29udGVudCk7XG4gICAgICBpZihpPCh0aGlzLmNob2ljZXMubGVuZ3RoLTEpKXtcbiAgICAgICAgLy8gdGhpcy5yZHAuc3BlYWsoXCJvclwiKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuICBcbiAgbmdPbkluaXQoKXtcbiAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBcIi5jb25jYXQodGhpcy5yZHAudGVhbXMubGVuZ3RoLnRvU3RyaW5nKCkpKTtcbiAgICBpZih0aGlzLnJkcC50ZWFtcy5sZW5ndGggPD0gMCl7XG4gICAgICB0aGlzLmZyaWVuZC5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH1cbiAgICBpZighdGhpcy5yZHAuY3VycmVudFBsYXllci5jYW5Bc2spe1xuICAgICAgdGhpcy5mcmllbmQubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkMmQyZDJcIjtcbiAgICAgIHRoaXMuZnJpZW5kLm5hdGl2ZUVsZW1lbnQuaXNFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIHNodWZmbGUoYXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XG4gICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPi0xKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmNob2ljZXNbYXJncy5pbmRleF07XG4gICAgICAvLyBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRBbnN3ZXIuY29udGVudCk7XG4gICAgICBcbiAgICAgIGxldCBjb3JyZWN0ID0gdGhpcy5jaGVja0NvcnJlY3RuZXNzKHRoaXMuc2VsZWN0ZWRBbnN3ZXIpO1xuICAgICAgXG4gICAgICAvL2luY3JlYXNpbmcgYW5zd2VyIGNvdW50IGZvciB0aGlzIHBsYXllclxuICAgICAgdGhpcy5yZHAuY3VycmVudFBsYXllci5hbnN3ZXJDb3VudCsrO1xuICAgICAgXG4gICAgICAvLyBpbmNyZWFzZSBwbGF5ZXIgcG9pbnRzIGlmIGdvb2QgYW5zd2VyLlxuICAgICAgaWYoY29ycmVjdCl7XG4gICAgICAgIHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsKys7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgLy8gbm8gcG9pbnQgZ2FpbiBvciBsb3NzXG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIubmFtZSArIFxuICAgICAgICBcIlBsYXllciBpcyBoYXZpbmc6IFwiICsgXG4gICAgICAgIHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubmV4dChjb3JyZWN0LCB0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGNoZWNrQ29ycmVjdG5lc3MoYW5zd2VyKSA6IGJvb2xlYW57XG4gICAgICBcbiAgICAgIGlmKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIgPT0gYW5zd2VyKXtcbiAgICAgICAgLy9hbnN3ZXIgaXMgY29ycmVjdCFcbiAgICAgICAgY29uc29sZS5sb2coXCJBbnN3ZXIgaXMgY29ycmVjdCFcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIC8vYW5zd2VyIGlzIHdyb25nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIHdyb25nIVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgIEBWaWV3Q2hpbGQoXCJ3ZWJ2aWV3XCIpIHdlYlZpZXc6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInNob3dXZWJ2aWV3XCIpIHNob3dXZWJ2aWV3OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJhbnN3ZXJzXCIpIGxpc3RWaWV3OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJzZWxlY3RBbnN3ZXJcIikgc2VsZWN0QW5zd2VyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJnb29nbGVFcnJvclwiKSBnb29nbGVFcnJvcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGltZXJcIikgdGltZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImZyaWVuZFwiKSBmcmllbmQ6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIFdlYlZpZXdTUkM6IHN0cmluZztcbiAgICBcbiAgICBwcml2YXRlIHN0b3BXZWJ2aWV3KCl7XG4gICAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LnRleHQgPSBcIjIwIHNlY29uZHMgb2YgR29vZ2xlIGFyZSB1cC4uLlwiO1xuICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5PVwidmlzaWJsZVwiXG4gICAgICB0aGlzLnRpbWVyLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGZpcnN0Q2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIHByaXZhdGUgdmlld1dlYigpe1xuICAgICAgaWYodGhpcy5maXJzdENsaWNrKXtcbiAgICAgICAgdGhpcy5maXJzdENsaWNrID0gZmFsc2U7XG4gICAgICAgIHZhciBjb3VudGRvd24gPSAyMDAwMDtcbiAgICAgICAgdmFyIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgICAgICBjb3VudGRvd24gLT0gMTAwO1xuICAgICAgICAgIHRoaXMudGltZXIubmF0aXZlRWxlbWVudC50ZXh0ID0gY291bnRkb3duLzEwMDAuMFxuICAgICAgICAgIGlmKGNvdW50ZG93biA9PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgfSBlbHNlIGlmKGNvdW50ZG93biA9PSAxMDAwMCl7XG4gICAgICAgICAgICB0aGlzLnRpbWVyLm5hdGl2ZUVsZW1lbnQuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9wV2VidmlldygpO1xuICAgICAgICB9LCAyMDAwMCk7XG4gICAgICB9XG4gICAgICBpZih0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID09IFwidmlzaWJsZVwiKXtcbiAgICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnRleHQgPSBcIlNob3cgR29vZ2xlXCI7XG4gICAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfSBlbHNle1xuICAgICAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiSGlkZSBHb29nbGVcIjtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICB0aGlzLnNlbGVjdEFuc3dlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHk9XCJ2aXNpYmxlXCJcbiAgICAgIH1cbiAgICAgIHRoaXMuV2ViVmlld1NSQyA9IFwiaHR0cHM6Ly9nb29nbGUuY2EvXCI7XG4gICAgICAvL2xldCBsYWJlbDogTGFiZWwgPSB0aGlzLmxhYmVsUmVzdWx0UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAvL2xhYmVsLnRleHQgPSBcIldlYlZpZXcgaXMgc3RpbGwgbG9hZGluZy4uLlwiO1xuICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIFwicmVhZHlcIik7XG4gICAgICAvKnRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBMb2FkRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICBpZiAoIWFyZ3MuZXJyb3IpIHtcbiAgICAgICAgICBtZXNzYWdlID0gXCJXZWJWaWV3IGZpbmlzaGVkIGxvYWRpbmcgb2YgXCIgKyBhcmdzLnVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlID0gXCJFcnJvciBsb2FkaW5nIFwiICsgYXJncy51cmwgKyBcIjogXCIgKyBhcmdzLmVycm9yO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2xhYmVsLnRleHQgPSBtZXNzYWdlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlYlZpZXcgbWVzc2FnZSAtIFwiICsgbWVzc2FnZSk7XG4gICAgICB9KTsqL1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNrQUZyaWVuZCgpe1xuICAgICAgaWYoIXRoaXMucmRwLmN1cnJlbnRQbGF5ZXIuY2FuQXNrKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW50IGFzayBmcmllbmRcIik7XG4gICAgICAgIGxldCBwcmV2aW91cyA9IHRoaXMuc2VsZWN0QW5zd2VyLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eTtcbiAgICAgICAgbGV0IHByZXZpb3VzVGV4dCA9IHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC50ZXh0O1xuICAgICAgICB0aGlzLnNlbGVjdEFuc3dlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LnRleHQgPSBcIllvdSBtYXkgb25seSBhc2sgb25jZSBwZXIgZ2FtZVwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcmV2aW91c1RleHQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHByZXZpb3VzKTtcbiAgICAgICAgICBpZihwcmV2aW91c1RleHQgPT0gXCIyMCBzZWNvbmRzIG9mIEdvb2dsZSBhcmUgdXAuLi5cIil7XG4gICAgICAgICAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiMjAgc2Vjb25kcyBvZiBHb29nbGUgYXJlIHVwLi4uXCI7XG4gICAgICAgICAgfSBlbHNlIGlmKHByZXZpb3VzID09IFwidmlzaWJsZVwiKXtcbiAgICAgICAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJZb3UgaGF2ZSBHb29nbGUgZm9yOiBcIjtcbiAgICAgICAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiWW91IGhhdmUgR29vZ2xlIGZvcjogXCI7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFuc3dlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXNrZWQgYSBmcmllbmRcIik7XG4gICAgICAgIHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIuY2FuQXNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJpZW5kLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gXCIjZDJkMmQyXCI7XG4gICAgICAgIHRoaXMucmRwLnNwZWFrKFwiWW91IG1heSBhc2sgXCIuY29uY2F0KHRoaXMucmRwLmdldFJhbmRvbUZyaWVuZCh0aGlzLnJkcC5jdXJyZW50UGxheWVyKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIG5leHQoY29ycmVjdCxhbnN3ZXJfY29udGVudCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYW5zd2VyVmFsaWRhdGlvblwiLCBjb3JyZWN0LGFuc3dlcl9jb250ZW50XSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7ICAgIFxuICAgIH1cbiAgICBwcml2YXRlIHF1aXQoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInN0YXJ0XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbiAgIl19