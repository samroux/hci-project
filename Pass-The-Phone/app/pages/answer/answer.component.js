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
        //this.rdp.speak(this.currentQuestion.question);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFFeEYsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFTRSx5QkFBMkIsTUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBK0cxRSxlQUFVLEdBQVksSUFBSSxDQUFDO1FBOUdsQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFBO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFFLENBQUMsRUFBRSxHQUFDLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLEdBQUMsRUFBRSxFQUFDLENBQUM7WUFDOUQsMkRBQTJEO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUE7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENB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LFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDTyw4QkFBSSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFqR3FCO1FBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUFVLGlCQUFVO29EQUFDO0lBQ2hCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVO3dEQUFDO0lBQzVCO1FBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUFXLGlCQUFVO3FEQUFDO0lBQ2hCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFlLGlCQUFVO3lEQUFDO0lBQzFCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVO3dEQUFDO0lBQzlCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO2tEQUFDO0lBQ2pCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO21EQUFDO0lBNUcvQixlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBV21DLHlCQUFnQixFQUFlLHNDQUFpQjtPQVR4RSxlQUFlLENBd016QjtJQUFELHNCQUFDO0NBQUEsQUF4TUgsSUF3TUc7QUF4TVUsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiIFxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyL2Fuc3dlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyL2Fuc3dlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHVibGljIGNob2ljZXM6IEFycmF5PFRyaXZpYUFuc3dlcj47XG4gIHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIHNlbGVjdGVkQW5zd2VyOiBUcml2aWFBbnN3ZXI7XG4gIHByaXZhdGUgZHVtbXlBbnN3ZXI6IFRyaXZpYUFuc3dlcjtcbiAgXG4gIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByZHA6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJDb25zdHJ1Y3RpbmcgYW5zd2VyLmNvbXBvbmVudFwiKTtcbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcbiAgICBcbiAgICAvL25lZWQgdG8gaGF2ZSBkdW1teSBvdGhlcndpc2UsIHdvbid0IGxvYWQgb24gVUlcbiAgICAvL1RPRE8gZml4XG4gICAgdGhpcy5kdW1teUFuc3dlciA9IG5ldyBUcml2aWFBbnN3ZXIobnVsbCxcIlwiKVxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKHRoaXMuZHVtbXlBbnN3ZXIpO1xuICAgIHRoaXMuY2hvaWNlcy5wb3AoKTtcbiAgICBcbiAgICBcbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IHJkcC50cml2aWFRdWVzdGlvblxuICAgIFxuICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbjsgXG4gICAgdGhpcy5zaHVmZmxlKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpO1xuICAgIGZvciAobGV0IGkgPTA7IGk8dGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vycy5sZW5ndGg7aSsrKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVlc3Rpb246IFwiK3RoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uKTtcbiAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICB9XG4gICAgLy90aGlzLnJkcC5zcGVhayh0aGlzLmN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbik7XG4gICAgdGhpcy5yZHAuc3BlYWsoXCJDaG9vc2UgYW1vbmcgdGhlIGZvbGxvd2luZzpcIik7XG4gICAgXG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAodmFyIGFuc3dlciBvZiB0aGlzLmNob2ljZXMpe1xuICAgICAgdGhpcy5yZHAuc3BlYWsoYW5zd2VyLmNvbnRlbnQpO1xuICAgICAgaWYoaTwodGhpcy5jaG9pY2VzLmxlbmd0aC0xKSl7XG4gICAgICAgIC8vIHRoaXMucmRwLnNwZWFrKFwib3JcIik7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgY29uc29sZS5sb2coXCJsZW5ndGggXCIuY29uY2F0KHRoaXMucmRwLnRlYW1zLmxlbmd0aC50b1N0cmluZygpKSk7XG4gICAgaWYodGhpcy5yZHAudGVhbXMubGVuZ3RoIDw9IDApe1xuICAgICAgdGhpcy5mcmllbmQubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9XG4gICAgaWYoIXRoaXMucmRwLmN1cnJlbnRQbGF5ZXIuY2FuQXNrKXtcbiAgICAgIHRoaXMuZnJpZW5kLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gXCIjZDJkMmQyXCI7XG4gICAgICB0aGlzLmZyaWVuZC5uYXRpdmVFbGVtZW50LmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgcHJpdmF0ZSBzaHVmZmxlKGFycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJncy5uYW1lKTtcbiAgICBpZihhcmdzLmluZGV4ID4tMSl7XG4gICAgICB0aGlzLnNlbGVjdGVkQW5zd2VyID0gdGhpcy5jaG9pY2VzW2FyZ3MuaW5kZXhdO1xuICAgICAgLy8gY29uc29sZS5sb2cgKFwiQ2hvc2VuOiBcIit0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuICAgICAgXG4gICAgICBsZXQgY29ycmVjdCA9IHRoaXMuY2hlY2tDb3JyZWN0bmVzcyh0aGlzLnNlbGVjdGVkQW5zd2VyKTtcbiAgICAgIFxuICAgICAgLy9pbmNyZWFzaW5nIGFuc3dlciBjb3VudCBmb3IgdGhpcyBwbGF5ZXJcbiAgICAgIHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIuYW5zd2VyQ291bnQrKztcbiAgICAgIFxuICAgICAgLy8gaW5jcmVhc2UgcGxheWVyIHBvaW50cyBpZiBnb29kIGFuc3dlci5cbiAgICAgIGlmKGNvcnJlY3Qpe1xuICAgICAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCsrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIC8vIG5vIHBvaW50IGdhaW4gb3IgbG9zc1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJkcC5jdXJyZW50UGxheWVyLm5hbWUgKyBcbiAgICAgICAgXCJQbGF5ZXIgaXMgaGF2aW5nOiBcIiArIFxuICAgICAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5leHQoY29ycmVjdCwgdGhpcy5zZWxlY3RlZEFuc3dlci5jb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBjaGVja0NvcnJlY3RuZXNzKGFuc3dlcikgOiBib29sZWFue1xuICAgICAgXG4gICAgICBpZih0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFDb3JyZWN0QW5zd2VyID09IGFuc3dlcil7XG4gICAgICAgIC8vYW5zd2VyIGlzIGNvcnJlY3QhXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIGNvcnJlY3QhXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICAvL2Fuc3dlciBpcyB3cm9uZ1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFuc3dlciBpcyB3cm9uZyFcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBAVmlld0NoaWxkKFwid2Vidmlld1wiKSB3ZWJWaWV3OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJzaG93V2Vidmlld1wiKSBzaG93V2VidmlldzogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiYW5zd2Vyc1wiKSBsaXN0VmlldzogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwic2VsZWN0QW5zd2VyXCIpIHNlbGVjdEFuc3dlcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiZ29vZ2xlRXJyb3JcIikgZ29vZ2xlRXJyb3I6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRpbWVyXCIpIHRpbWVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJmcmllbmRcIikgZnJpZW5kOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBXZWJWaWV3U1JDOiBzdHJpbmc7XG4gICAgXG4gICAgcHJpdmF0ZSBzdG9wV2Vidmlldygpe1xuICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC50ZXh0ID0gXCIyMCBzZWNvbmRzIG9mIEdvb2dsZSBhcmUgdXAuLi5cIjtcbiAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC5jb2xvciA9IFwicmVkXCI7XG4gICAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eT1cInZpc2libGVcIlxuICAgICAgdGhpcy50aW1lci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBmaXJzdENsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgICBcbiAgICBwcml2YXRlIHZpZXdXZWIoKXtcbiAgICAgIGlmKHRoaXMuZmlyc3RDbGljayl7XG4gICAgICAgIHRoaXMuZmlyc3RDbGljayA9IGZhbHNlO1xuICAgICAgICB2YXIgY291bnRkb3duID0gMjAwMDA7XG4gICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICAgICAgY291bnRkb3duIC09IDEwMDtcbiAgICAgICAgICB0aGlzLnRpbWVyLm5hdGl2ZUVsZW1lbnQudGV4dCA9IGNvdW50ZG93bi8xMDAwLjBcbiAgICAgICAgICBpZihjb3VudGRvd24gPT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgIH0gZWxzZSBpZihjb3VudGRvd24gPT0gMTAwMDApe1xuICAgICAgICAgICAgdGhpcy50aW1lci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcFdlYnZpZXcoKTtcbiAgICAgICAgfSwgMjAwMDApO1xuICAgICAgfVxuICAgICAgaWYodGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIil7XG4gICAgICAgIHRoaXMuc2hvd1dlYnZpZXcubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJTaG93IEdvb2dsZVwiO1xuICAgICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnRleHQgPSBcIkhpZGUgR29vZ2xlXCI7XG4gICAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgdGhpcy5zZWxlY3RBbnN3ZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5PVwidmlzaWJsZVwiXG4gICAgICB9XG4gICAgICB0aGlzLldlYlZpZXdTUkMgPSBcImh0dHBzOi8vZ29vZ2xlLmNhL1wiO1xuICAgICAgLy9sZXQgbGFiZWw6IExhYmVsID0gdGhpcy5sYWJlbFJlc3VsdFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgLy9sYWJlbC50ZXh0ID0gXCJXZWJWaWV3IGlzIHN0aWxsIGxvYWRpbmcuLi5cIjtcbiAgICAgIGNvbnNvbGUubG9nKFwiV2ViVmlldyBtZXNzYWdlIC0gXCIgKyBcInJlYWR5XCIpO1xuICAgICAgLyp0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IFwiV2ViVmlldyBmaW5pc2hlZCBsb2FkaW5nIG9mIFwiICsgYXJncy51cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgbG9hZGluZyBcIiArIGFyZ3MudXJsICsgXCI6IFwiICsgYXJncy5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9sYWJlbC50ZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIG1lc3NhZ2UpO1xuICAgICAgfSk7Ki9cbiAgICB9XG5cbiAgICBwcml2YXRlIGFza0FGcmllbmQoKXtcbiAgICAgIGlmKCF0aGlzLnJkcC5jdXJyZW50UGxheWVyLmNhbkFzayl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FudCBhc2sgZnJpZW5kXCIpO1xuICAgICAgICBsZXQgcHJldmlvdXMgPSB0aGlzLnNlbGVjdEFuc3dlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHk7XG4gICAgICAgIGxldCBwcmV2aW91c1RleHQgPSB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudGV4dDtcbiAgICAgICAgdGhpcy5zZWxlY3RBbnN3ZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJZb3UgbWF5IG9ubHkgYXNrIG9uY2UgcGVyIGdhbWVcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocHJldmlvdXNUZXh0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcmV2aW91cyk7XG4gICAgICAgICAgaWYocHJldmlvdXNUZXh0ID09IFwiMjAgc2Vjb25kcyBvZiBHb29nbGUgYXJlIHVwLi4uXCIpe1xuICAgICAgICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LnRleHQgPSBcIjIwIHNlY29uZHMgb2YgR29vZ2xlIGFyZSB1cC4uLlwiO1xuICAgICAgICAgIH0gZWxzZSBpZihwcmV2aW91cyA9PSBcInZpc2libGVcIil7XG4gICAgICAgICAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiWW91IGhhdmUgR29vZ2xlIGZvcjogXCI7XG4gICAgICAgICAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LnRleHQgPSBcIllvdSBoYXZlIEdvb2dsZSBmb3I6IFwiO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbnN3ZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfSBlbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcImFza2VkIGEgZnJpZW5kXCIpO1xuICAgICAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyLmNhbkFzayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyaWVuZC5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IFwiI2QyZDJkMlwiO1xuICAgICAgICB0aGlzLnJkcC5zcGVhayhcIllvdSBtYXkgYXNrIFwiLmNvbmNhdCh0aGlzLnJkcC5nZXRSYW5kb21GcmllbmQodGhpcy5yZHAuY3VycmVudFBsYXllcikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBuZXh0KGNvcnJlY3QsYW5zd2VyX2NvbnRlbnQpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFuc3dlclZhbGlkYXRpb25cIiwgY29ycmVjdCxhbnN3ZXJfY29udGVudF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pOyAgICBcbiAgICB9XG4gICAgcHJpdmF0ZSBxdWl0KCl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdGFydFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuICB9XG4gICJdfQ==