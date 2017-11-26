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
        /*for (var answer of this.choices){
          this.rdp.speak(answer.content);
          if(i<(this.choices.length-1)){
            // this.rdp.speak("or");
          }
          
        }*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFFeEYsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFTRSx5QkFBMkIsTUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBK0cxRSxlQUFVLEdBQVksSUFBSSxDQUFDO1FBOUdsQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFBO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFFLENBQUMsRUFBRSxHQUFDLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLEdBQUMsRUFBRSxFQUFDLENBQUM7WUFDOUQsMkRBQTJEO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUE7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENB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QUFVO3lEQUFDO0lBQzFCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVO3dEQUFDO0lBQzlCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO2tEQUFDO0lBQ2pCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO21EQUFDO0lBNUcvQixlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBV21DLHlCQUFnQixFQUFlLHNDQUFpQjtPQVR4RSxlQUFlLENBa0x6QjtJQUFELHNCQUFDO0NBQUEsQUFsTEgsSUFrTEc7QUFsTFUsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiIFxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyL2Fuc3dlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyL2Fuc3dlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHVibGljIGNob2ljZXM6IEFycmF5PFRyaXZpYUFuc3dlcj47XG4gIHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIHNlbGVjdGVkQW5zd2VyOiBUcml2aWFBbnN3ZXI7XG4gIHByaXZhdGUgZHVtbXlBbnN3ZXI6IFRyaXZpYUFuc3dlcjtcbiAgXG4gIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByZHA6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJDb25zdHJ1Y3RpbmcgYW5zd2VyLmNvbXBvbmVudFwiKTtcbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcbiAgICBcbiAgICAvL25lZWQgdG8gaGF2ZSBkdW1teSBvdGhlcndpc2UsIHdvbid0IGxvYWQgb24gVUlcbiAgICAvL1RPRE8gZml4XG4gICAgdGhpcy5kdW1teUFuc3dlciA9IG5ldyBUcml2aWFBbnN3ZXIobnVsbCxcIlwiKVxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKHRoaXMuZHVtbXlBbnN3ZXIpO1xuICAgIHRoaXMuY2hvaWNlcy5wb3AoKTtcbiAgICBcbiAgICBcbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IHJkcC50cml2aWFRdWVzdGlvblxuICAgIFxuICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbjsgXG4gICAgdGhpcy5zaHVmZmxlKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpO1xuICAgIGZvciAobGV0IGkgPTA7IGk8dGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vycy5sZW5ndGg7aSsrKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVlc3Rpb246IFwiK3RoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uKTtcbiAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICB9XG4gICAgdGhpcy5yZHAuc3BlYWsodGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb24pO1xuICAgIHRoaXMucmRwLnNwZWFrKFwiQ2hvb3NlIGFtb25nIHRoZSBmb2xsb3dpbmc6XCIpO1xuICAgIFxuICAgIGxldCBpID0gMDtcbiAgICAvKmZvciAodmFyIGFuc3dlciBvZiB0aGlzLmNob2ljZXMpe1xuICAgICAgdGhpcy5yZHAuc3BlYWsoYW5zd2VyLmNvbnRlbnQpO1xuICAgICAgaWYoaTwodGhpcy5jaG9pY2VzLmxlbmd0aC0xKSl7XG4gICAgICAgIC8vIHRoaXMucmRwLnNwZWFrKFwib3JcIik7XG4gICAgICB9XG4gICAgICBcbiAgICB9Ki9cbiAgfVxuICBcbiAgbmdPbkluaXQoKXtcbiAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBcIi5jb25jYXQodGhpcy5yZHAudGVhbXMubGVuZ3RoLnRvU3RyaW5nKCkpKTtcbiAgICBpZih0aGlzLnJkcC50ZWFtcy5sZW5ndGggPD0gMCl7XG4gICAgICB0aGlzLmZyaWVuZC5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH1cbiAgICBpZighdGhpcy5yZHAuY3VycmVudFBsYXllci5jYW5Bc2spe1xuICAgICAgdGhpcy5mcmllbmQubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkMmQyZDJcIjtcbiAgICAgIHRoaXMuZnJpZW5kLm5hdGl2ZUVsZW1lbnQuaXNFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIHNodWZmbGUoYXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XG4gICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPi0xKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmNob2ljZXNbYXJncy5pbmRleF07XG4gICAgICAvLyBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRBbnN3ZXIuY29udGVudCk7XG4gICAgICBcbiAgICAgIGxldCBjb3JyZWN0ID0gdGhpcy5jaGVja0NvcnJlY3RuZXNzKHRoaXMuc2VsZWN0ZWRBbnN3ZXIpO1xuICAgICAgXG4gICAgICAvL2luY3JlYXNpbmcgYW5zd2VyIGNvdW50IGZvciB0aGlzIHBsYXllclxuICAgICAgdGhpcy5yZHAuY3VycmVudFBsYXllci5hbnN3ZXJDb3VudCsrO1xuICAgICAgXG4gICAgICAvLyBpbmNyZWFzZSBwbGF5ZXIgcG9pbnRzIGlmIGdvb2QgYW5zd2VyLlxuICAgICAgaWYoY29ycmVjdCl7XG4gICAgICAgIHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsKys7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgLy8gbm8gcG9pbnQgZ2FpbiBvciBsb3NzXG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIubmFtZSArIFxuICAgICAgICBcIlBsYXllciBpcyBoYXZpbmc6IFwiICsgXG4gICAgICAgIHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubmV4dChjb3JyZWN0LCB0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGNoZWNrQ29ycmVjdG5lc3MoYW5zd2VyKSA6IGJvb2xlYW57XG4gICAgICBcbiAgICAgIGlmKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIgPT0gYW5zd2VyKXtcbiAgICAgICAgLy9hbnN3ZXIgaXMgY29ycmVjdCFcbiAgICAgICAgY29uc29sZS5sb2coXCJBbnN3ZXIgaXMgY29ycmVjdCFcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIC8vYW5zd2VyIGlzIHdyb25nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIHdyb25nIVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgIEBWaWV3Q2hpbGQoXCJ3ZWJ2aWV3XCIpIHdlYlZpZXc6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInNob3dXZWJ2aWV3XCIpIHNob3dXZWJ2aWV3OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJhbnN3ZXJzXCIpIGxpc3RWaWV3OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJzZWxlY3RBbnN3ZXJcIikgc2VsZWN0QW5zd2VyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJnb29nbGVFcnJvclwiKSBnb29nbGVFcnJvcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGltZXJcIikgdGltZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImZyaWVuZFwiKSBmcmllbmQ6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIFdlYlZpZXdTUkM6IHN0cmluZztcbiAgICBcbiAgICBwcml2YXRlIHN0b3BXZWJ2aWV3KCl7XG4gICAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LnRleHQgPSBcIjIwIHNlY29uZHMgb2YgR29vZ2xlIGFyZSB1cC4uLlwiO1xuICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIHRoaXMuZ29vZ2xlRXJyb3IubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5PVwidmlzaWJsZVwiXG4gICAgICB0aGlzLnRpbWVyLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGZpcnN0Q2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIHByaXZhdGUgdmlld1dlYigpe1xuICAgICAgaWYodGhpcy5maXJzdENsaWNrKXtcbiAgICAgICAgdGhpcy5maXJzdENsaWNrID0gZmFsc2U7XG4gICAgICAgIHZhciBjb3VudGRvd24gPSAyMDAwMDtcbiAgICAgICAgdmFyIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgICAgICBjb3VudGRvd24gLT0gMTAwO1xuICAgICAgICAgIHRoaXMudGltZXIubmF0aXZlRWxlbWVudC50ZXh0ID0gY291bnRkb3duLzEwMDAuMFxuICAgICAgICAgIGlmKGNvdW50ZG93biA9PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgfSBlbHNlIGlmKGNvdW50ZG93biA9PSAxMDAwMCl7XG4gICAgICAgICAgICB0aGlzLnRpbWVyLm5hdGl2ZUVsZW1lbnQuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9wV2VidmlldygpO1xuICAgICAgICB9LCAyMDAwMCk7XG4gICAgICB9XG4gICAgICBpZih0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID09IFwidmlzaWJsZVwiKXtcbiAgICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnRleHQgPSBcIlNob3cgR29vZ2xlXCI7XG4gICAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfSBlbHNle1xuICAgICAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiSGlkZSBHb29nbGVcIjtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICB0aGlzLnNlbGVjdEFuc3dlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHk9XCJ2aXNpYmxlXCJcbiAgICAgIH1cbiAgICAgIHRoaXMuV2ViVmlld1NSQyA9IFwiaHR0cHM6Ly9nb29nbGUuY2EvXCI7XG4gICAgICAvL2xldCBsYWJlbDogTGFiZWwgPSB0aGlzLmxhYmVsUmVzdWx0UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAvL2xhYmVsLnRleHQgPSBcIldlYlZpZXcgaXMgc3RpbGwgbG9hZGluZy4uLlwiO1xuICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIFwicmVhZHlcIik7XG4gICAgICAvKnRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBMb2FkRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICBpZiAoIWFyZ3MuZXJyb3IpIHtcbiAgICAgICAgICBtZXNzYWdlID0gXCJXZWJWaWV3IGZpbmlzaGVkIGxvYWRpbmcgb2YgXCIgKyBhcmdzLnVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlID0gXCJFcnJvciBsb2FkaW5nIFwiICsgYXJncy51cmwgKyBcIjogXCIgKyBhcmdzLmVycm9yO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2xhYmVsLnRleHQgPSBtZXNzYWdlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlYlZpZXcgbWVzc2FnZSAtIFwiICsgbWVzc2FnZSk7XG4gICAgICB9KTsqL1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNrQUZyaWVuZCgpe1xuICAgICAgY29uc29sZS5sb2coXCJhc2tlZCBhIGZyaWVuZFwiKTtcbiAgICAgIHRoaXMucmRwLmN1cnJlbnRQbGF5ZXIuY2FuQXNrID0gZmFsc2U7XG4gICAgICB0aGlzLmZyaWVuZC5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IFwiI2QyZDJkMlwiO1xuICAgICAgdGhpcy5mcmllbmQubmF0aXZlRWxlbWVudC5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmRwLnNwZWFrKFwiWW91IG1heSBhc2sgXCIuY29uY2F0KHRoaXMucmRwLmdldFJhbmRvbUZyaWVuZCh0aGlzLnJkcC5jdXJyZW50UGxheWVyKSkpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIG5leHQoY29ycmVjdCxhbnN3ZXJfY29udGVudCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYW5zd2VyVmFsaWRhdGlvblwiLCBjb3JyZWN0LGFuc3dlcl9jb250ZW50XSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7ICAgIFxuICAgIH1cbiAgICBwcml2YXRlIHF1aXQoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInN0YXJ0XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbiAgIl19