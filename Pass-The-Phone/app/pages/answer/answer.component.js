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
        console.log("asked a friend");
        this.rdp.currentPlayer.canAsk = false;
        this.friend.nativeElement.backgroundColor = "#d2d2d2";
        this.friend.nativeElement.isEnabled = false;
        this.rdp.speak("You may ask ".concat(this.rdp.getRandomFriend(this.rdp.currentPlayer)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFFeEYsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFTRSx5QkFBMkIsTUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBK0cxRSxlQUFVLEdBQVksSUFBSSxDQUFDO1FBOUdsQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFBO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFFLENBQUMsRUFBRSxHQUFDLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLEdBQUMsRUFBRSxFQUFDLENBQUM7WUFDOUQsMkRBQTJEO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUE7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENB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LE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQTNFcUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVUsaUJBQVU7b0RBQUM7SUFDaEI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7d0RBQUM7SUFDNUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVcsaUJBQVU7cURBQUM7SUFDaEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7eURBQUM7SUFDMUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7d0RBQUM7SUFDOUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7a0RBQUM7SUFDakI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7bURBQUM7SUE1Ry9CLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FXbUMseUJBQWdCLEVBQWUsc0NBQWlCO09BVHhFLGVBQWUsQ0FrTHpCO0lBQUQsc0JBQUM7Q0FBQSxBQWxMSCxJQWtMRztBQWxMVSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIiBcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiIFxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCIgXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFuc3dlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hbnN3ZXIvYW5zd2VyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hbnN3ZXIvYW5zd2VyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBwdWJsaWMgY2hvaWNlczogQXJyYXk8VHJpdmlhQW5zd2VyPjtcbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgc2VsZWN0ZWRBbnN3ZXI6IFRyaXZpYUFuc3dlcjtcbiAgcHJpdmF0ZSBkdW1teUFuc3dlcjogVHJpdmlhQW5zd2VyO1xuICBcbiAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGluZyBhbnN3ZXIuY29tcG9uZW50XCIpO1xuICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuICAgIFxuICAgIC8vbmVlZCB0byBoYXZlIGR1bW15IG90aGVyd2lzZSwgd29uJ3QgbG9hZCBvbiBVSVxuICAgIC8vVE9ETyBmaXhcbiAgICB0aGlzLmR1bW15QW5zd2VyID0gbmV3IFRyaXZpYUFuc3dlcihudWxsLFwiXCIpXG4gICAgdGhpcy5jaG9pY2VzLnB1c2godGhpcy5kdW1teUFuc3dlcik7XG4gICAgdGhpcy5jaG9pY2VzLnBvcCgpO1xuICAgIFxuICAgIFxuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gcmRwLnRyaXZpYVF1ZXN0aW9uXG4gICAgXG4gICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uOyBcbiAgICB0aGlzLnNodWZmbGUodGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vycyk7XG4gICAgZm9yIChsZXQgaSA9MDsgaTx0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgLy8gY29uc29sZS5sb2coXCJxdWVzdGlvbjogXCIrdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb24pO1xuICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUFuc3dlcnNbaV0pO1xuICAgIH1cbiAgICB0aGlzLnJkcC5zcGVhayh0aGlzLmN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbik7XG4gICAgdGhpcy5yZHAuc3BlYWsoXCJDaG9vc2UgYW1vbmcgdGhlIGZvbGxvd2luZzpcIik7XG4gICAgXG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAodmFyIGFuc3dlciBvZiB0aGlzLmNob2ljZXMpe1xuICAgICAgdGhpcy5yZHAuc3BlYWsoYW5zd2VyLmNvbnRlbnQpO1xuICAgICAgaWYoaTwodGhpcy5jaG9pY2VzLmxlbmd0aC0xKSl7XG4gICAgICAgIC8vIHRoaXMucmRwLnNwZWFrKFwib3JcIik7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgY29uc29sZS5sb2coXCJsZW5ndGggXCIuY29uY2F0KHRoaXMucmRwLnRlYW1zLmxlbmd0aC50b1N0cmluZygpKSk7XG4gICAgaWYodGhpcy5yZHAudGVhbXMubGVuZ3RoIDw9IDApe1xuICAgICAgdGhpcy5mcmllbmQubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9XG4gICAgaWYoIXRoaXMucmRwLmN1cnJlbnRQbGF5ZXIuY2FuQXNrKXtcbiAgICAgIHRoaXMuZnJpZW5kLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gXCIjZDJkMmQyXCI7XG4gICAgICB0aGlzLmZyaWVuZC5uYXRpdmVFbGVtZW50LmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgcHJpdmF0ZSBzaHVmZmxlKGFycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJncy5uYW1lKTtcbiAgICBpZihhcmdzLmluZGV4ID4tMSl7XG4gICAgICB0aGlzLnNlbGVjdGVkQW5zd2VyID0gdGhpcy5jaG9pY2VzW2FyZ3MuaW5kZXhdO1xuICAgICAgLy8gY29uc29sZS5sb2cgKFwiQ2hvc2VuOiBcIit0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuICAgICAgXG4gICAgICBsZXQgY29ycmVjdCA9IHRoaXMuY2hlY2tDb3JyZWN0bmVzcyh0aGlzLnNlbGVjdGVkQW5zd2VyKTtcbiAgICAgIFxuICAgICAgLy9pbmNyZWFzaW5nIGFuc3dlciBjb3VudCBmb3IgdGhpcyBwbGF5ZXJcbiAgICAgIHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIuYW5zd2VyQ291bnQrKztcbiAgICAgIFxuICAgICAgLy8gaW5jcmVhc2UgcGxheWVyIHBvaW50cyBpZiBnb29kIGFuc3dlci5cbiAgICAgIGlmKGNvcnJlY3Qpe1xuICAgICAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCsrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIC8vIG5vIHBvaW50IGdhaW4gb3IgbG9zc1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJkcC5jdXJyZW50UGxheWVyLm5hbWUgKyBcbiAgICAgICAgXCJQbGF5ZXIgaXMgaGF2aW5nOiBcIiArIFxuICAgICAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5leHQoY29ycmVjdCwgdGhpcy5zZWxlY3RlZEFuc3dlci5jb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBjaGVja0NvcnJlY3RuZXNzKGFuc3dlcikgOiBib29sZWFue1xuICAgICAgXG4gICAgICBpZih0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFDb3JyZWN0QW5zd2VyID09IGFuc3dlcil7XG4gICAgICAgIC8vYW5zd2VyIGlzIGNvcnJlY3QhXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIGNvcnJlY3QhXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICAvL2Fuc3dlciBpcyB3cm9uZ1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFuc3dlciBpcyB3cm9uZyFcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBAVmlld0NoaWxkKFwid2Vidmlld1wiKSB3ZWJWaWV3OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJzaG93V2Vidmlld1wiKSBzaG93V2VidmlldzogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiYW5zd2Vyc1wiKSBsaXN0VmlldzogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwic2VsZWN0QW5zd2VyXCIpIHNlbGVjdEFuc3dlcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiZ29vZ2xlRXJyb3JcIikgZ29vZ2xlRXJyb3I6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRpbWVyXCIpIHRpbWVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJmcmllbmRcIikgZnJpZW5kOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBXZWJWaWV3U1JDOiBzdHJpbmc7XG4gICAgXG4gICAgcHJpdmF0ZSBzdG9wV2Vidmlldygpe1xuICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC50ZXh0ID0gXCIyMCBzZWNvbmRzIG9mIEdvb2dsZSBhcmUgdXAuLi5cIjtcbiAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC5jb2xvciA9IFwicmVkXCI7XG4gICAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eT1cInZpc2libGVcIlxuICAgICAgdGhpcy50aW1lci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBmaXJzdENsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgICBcbiAgICBwcml2YXRlIHZpZXdXZWIoKXtcbiAgICAgIGlmKHRoaXMuZmlyc3RDbGljayl7XG4gICAgICAgIHRoaXMuZmlyc3RDbGljayA9IGZhbHNlO1xuICAgICAgICB2YXIgY291bnRkb3duID0gMjAwMDA7XG4gICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICAgICAgY291bnRkb3duIC09IDEwMDtcbiAgICAgICAgICB0aGlzLnRpbWVyLm5hdGl2ZUVsZW1lbnQudGV4dCA9IGNvdW50ZG93bi8xMDAwLjBcbiAgICAgICAgICBpZihjb3VudGRvd24gPT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgIH0gZWxzZSBpZihjb3VudGRvd24gPT0gMTAwMDApe1xuICAgICAgICAgICAgdGhpcy50aW1lci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcFdlYnZpZXcoKTtcbiAgICAgICAgfSwgMjAwMDApO1xuICAgICAgfVxuICAgICAgaWYodGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIil7XG4gICAgICAgIHRoaXMuc2hvd1dlYnZpZXcubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJTaG93IEdvb2dsZVwiO1xuICAgICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnRleHQgPSBcIkhpZGUgR29vZ2xlXCI7XG4gICAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgdGhpcy5zZWxlY3RBbnN3ZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5PVwidmlzaWJsZVwiXG4gICAgICB9XG4gICAgICB0aGlzLldlYlZpZXdTUkMgPSBcImh0dHBzOi8vZ29vZ2xlLmNhL1wiO1xuICAgICAgLy9sZXQgbGFiZWw6IExhYmVsID0gdGhpcy5sYWJlbFJlc3VsdFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgLy9sYWJlbC50ZXh0ID0gXCJXZWJWaWV3IGlzIHN0aWxsIGxvYWRpbmcuLi5cIjtcbiAgICAgIGNvbnNvbGUubG9nKFwiV2ViVmlldyBtZXNzYWdlIC0gXCIgKyBcInJlYWR5XCIpO1xuICAgICAgLyp0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IFwiV2ViVmlldyBmaW5pc2hlZCBsb2FkaW5nIG9mIFwiICsgYXJncy51cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgbG9hZGluZyBcIiArIGFyZ3MudXJsICsgXCI6IFwiICsgYXJncy5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9sYWJlbC50ZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIG1lc3NhZ2UpO1xuICAgICAgfSk7Ki9cbiAgICB9XG5cbiAgICBwcml2YXRlIGFza0FGcmllbmQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXNrZWQgYSBmcmllbmRcIik7XG4gICAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyLmNhbkFzayA9IGZhbHNlO1xuICAgICAgdGhpcy5mcmllbmQubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkMmQyZDJcIjtcbiAgICAgIHRoaXMuZnJpZW5kLm5hdGl2ZUVsZW1lbnQuaXNFbmFibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnJkcC5zcGVhayhcIllvdSBtYXkgYXNrIFwiLmNvbmNhdCh0aGlzLnJkcC5nZXRSYW5kb21GcmllbmQodGhpcy5yZHAuY3VycmVudFBsYXllcikpKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBuZXh0KGNvcnJlY3QsYW5zd2VyX2NvbnRlbnQpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFuc3dlclZhbGlkYXRpb25cIiwgY29ycmVjdCxhbnN3ZXJfY29udGVudF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pOyAgICBcbiAgICB9XG4gICAgcHJpdmF0ZSBxdWl0KCl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdGFydFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuICB9XG4gICJdfQ==