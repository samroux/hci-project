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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFFeEYsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFTRSx5QkFBMkIsTUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBd0cxRSxlQUFVLEdBQVksSUFBSSxDQUFDO1FBdkdsQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFBO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFFLENBQUMsRUFBRSxHQUFDLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLEdBQUMsRUFBRSxFQUFDLENBQUM7WUFDOUQsMkRBQTJEO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUE7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENB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Q0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFsRXFCO1FBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUFVLGlCQUFVO29EQUFDO0lBQ2hCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVO3dEQUFDO0lBQzVCO1FBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUFXLGlCQUFVO3FEQUFDO0lBQ2hCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFlLGlCQUFVO3lEQUFDO0lBQzFCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVO3dEQUFDO0lBQzlCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO2tEQUFDO0lBckc3QixlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBV21DLHlCQUFnQixFQUFlLHNDQUFpQjtPQVR4RSxlQUFlLENBbUt6QjtJQUFELHNCQUFDO0NBQUEsQUFuS0gsSUFtS0c7QUFuS1UsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiIFxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyL2Fuc3dlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyL2Fuc3dlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBcbiAgcHVibGljIGNob2ljZXM6IEFycmF5PFRyaXZpYUFuc3dlcj47XG4gIHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIHNlbGVjdGVkQW5zd2VyOiBUcml2aWFBbnN3ZXI7XG4gIHByaXZhdGUgZHVtbXlBbnN3ZXI6IFRyaXZpYUFuc3dlcjtcbiAgXG4gIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByZHA6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJDb25zdHJ1Y3RpbmcgYW5zd2VyLmNvbXBvbmVudFwiKTtcbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcbiAgICBcbiAgICAvL25lZWQgdG8gaGF2ZSBkdW1teSBvdGhlcndpc2UsIHdvbid0IGxvYWQgb24gVUlcbiAgICAvL1RPRE8gZml4XG4gICAgdGhpcy5kdW1teUFuc3dlciA9IG5ldyBUcml2aWFBbnN3ZXIobnVsbCxcIlwiKVxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKHRoaXMuZHVtbXlBbnN3ZXIpO1xuICAgIHRoaXMuY2hvaWNlcy5wb3AoKTtcbiAgICBcbiAgICBcbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IHJkcC50cml2aWFRdWVzdGlvblxuICAgIFxuICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLmN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbjsgXG4gICAgdGhpcy5zaHVmZmxlKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUFuc3dlcnMpO1xuICAgIGZvciAobGV0IGkgPTA7IGk8dGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vycy5sZW5ndGg7aSsrKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVlc3Rpb246IFwiK3RoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uKTtcbiAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5yZHAuc3BlYWsoXCJDaG9vc2UgYW1vbmcgdGhlIGZvbGxvd2luZzpcIik7XG4gICAgXG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAodmFyIGFuc3dlciBvZiB0aGlzLmNob2ljZXMpe1xuICAgICAgdGhpcy5yZHAuc3BlYWsoYW5zd2VyLmNvbnRlbnQpO1xuICAgICAgaWYoaTwodGhpcy5jaG9pY2VzLmxlbmd0aC0xKSl7XG4gICAgICAgIC8vIHRoaXMucmRwLnNwZWFrKFwib3JcIik7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgXG4gICAgXG4gIH1cbiAgXG4gIHByaXZhdGUgc2h1ZmZsZShhcnJheSkge1xuICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgaWYoYXJncy5pbmRleCA+LTEpe1xuICAgICAgdGhpcy5zZWxlY3RlZEFuc3dlciA9IHRoaXMuY2hvaWNlc1thcmdzLmluZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZEFuc3dlci5jb250ZW50KTtcbiAgICAgIFxuICAgICAgbGV0IGNvcnJlY3QgPSB0aGlzLmNoZWNrQ29ycmVjdG5lc3ModGhpcy5zZWxlY3RlZEFuc3dlcik7XG4gICAgICBcbiAgICAgIC8vaW5jcmVhc2luZyBhbnN3ZXIgY291bnQgZm9yIHRoaXMgcGxheWVyXG4gICAgICB0aGlzLnJkcC5jdXJyZW50UGxheWVyLmFuc3dlckNvdW50Kys7XG4gICAgICBcbiAgICAgIC8vIGluY3JlYXNlIHBsYXllciBwb2ludHMgaWYgZ29vZCBhbnN3ZXIuXG4gICAgICBpZihjb3JyZWN0KXtcbiAgICAgICAgdGhpcy5yZHAuY3VycmVudFBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwrKztcbiAgICAgIH1lbHNle1xuICAgICAgICAvLyBubyBwb2ludCBnYWluIG9yIGxvc3NcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc29sZS5sb2codGhpcy5yZHAuY3VycmVudFBsYXllci5uYW1lICsgXG4gICAgICAgIFwiUGxheWVyIGlzIGhhdmluZzogXCIgKyBcbiAgICAgICAgdGhpcy5yZHAuY3VycmVudFBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uZXh0KGNvcnJlY3QsIHRoaXMuc2VsZWN0ZWRBbnN3ZXIuY29udGVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgY2hlY2tDb3JyZWN0bmVzcyhhbnN3ZXIpIDogYm9vbGVhbntcbiAgICAgIFxuICAgICAgaWYodGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQ29ycmVjdEFuc3dlciA9PSBhbnN3ZXIpe1xuICAgICAgICAvL2Fuc3dlciBpcyBjb3JyZWN0IVxuICAgICAgICBjb25zb2xlLmxvZyhcIkFuc3dlciBpcyBjb3JyZWN0IVwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgLy9hbnN3ZXIgaXMgd3JvbmdcbiAgICAgICAgY29uc29sZS5sb2coXCJBbnN3ZXIgaXMgd3JvbmchXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgQFZpZXdDaGlsZChcIndlYnZpZXdcIikgd2ViVmlldzogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwic2hvd1dlYnZpZXdcIikgc2hvd1dlYnZpZXc6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImFuc3dlcnNcIikgbGlzdFZpZXc6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInNlbGVjdEFuc3dlclwiKSBzZWxlY3RBbnN3ZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImdvb2dsZUVycm9yXCIpIGdvb2dsZUVycm9yOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJ0aW1lclwiKSB0aW1lcjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgV2ViVmlld1NSQzogc3RyaW5nO1xuICAgIFxuICAgIHByaXZhdGUgc3RvcFdlYnZpZXcoKXtcbiAgICAgIHRoaXMuc2hvd1dlYnZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiMjAgc2Vjb25kcyBvZiBHb29nbGUgYXJlIHVwLi4uXCI7XG4gICAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQuY29sb3IgPSBcInJlZFwiO1xuICAgICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHk9XCJ2aXNpYmxlXCJcbiAgICAgIHRoaXMudGltZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZmlyc3RDbGljazogYm9vbGVhbiA9IHRydWU7XG4gICAgXG4gICAgcHJpdmF0ZSB2aWV3V2ViKCl7XG4gICAgICBpZih0aGlzLmZpcnN0Q2xpY2spe1xuICAgICAgICB0aGlzLmZpcnN0Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvdW50ZG93biA9IDIwMDAwO1xuICAgICAgICB2YXIgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpPT4ge1xuICAgICAgICAgIGNvdW50ZG93biAtPSAxMDA7XG4gICAgICAgICAgdGhpcy50aW1lci5uYXRpdmVFbGVtZW50LnRleHQgPSBjb3VudGRvd24vMTAwMC4wXG4gICAgICAgICAgaWYoY291bnRkb3duID09IDApe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICB9IGVsc2UgaWYoY291bnRkb3duID09IDEwMDAwKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIubmF0aXZlRWxlbWVudC5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0b3BXZWJ2aWV3KCk7XG4gICAgICAgIH0sIDIwMDAwKTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIpe1xuICAgICAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiU2hvdyBHb29nbGVcIjtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIHRoaXMuc2hvd1dlYnZpZXcubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJIaWRlIEdvb2dsZVwiO1xuICAgICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIHRoaXMuc2VsZWN0QW5zd2VyLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eT1cInZpc2libGVcIlxuICAgICAgfVxuICAgICAgdGhpcy5XZWJWaWV3U1JDID0gXCJodHRwczovL2dvb2dsZS5jYS9cIjtcbiAgICAgIC8vbGV0IGxhYmVsOiBMYWJlbCA9IHRoaXMubGFiZWxSZXN1bHRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIC8vbGFiZWwudGV4dCA9IFwiV2ViVmlldyBpcyBzdGlsbCBsb2FkaW5nLi4uXCI7XG4gICAgICBjb25zb2xlLmxvZyhcIldlYlZpZXcgbWVzc2FnZSAtIFwiICsgXCJyZWFkeVwiKTtcbiAgICAgIC8qdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgIGlmICghYXJncy5lcnJvcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBcIldlYlZpZXcgZmluaXNoZWQgbG9hZGluZyBvZiBcIiArIGFyZ3MudXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIGxvYWRpbmcgXCIgKyBhcmdzLnVybCArIFwiOiBcIiArIGFyZ3MuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vbGFiZWwudGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2ViVmlldyBtZXNzYWdlIC0gXCIgKyBtZXNzYWdlKTtcbiAgICAgIH0pOyovXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgbmV4dChjb3JyZWN0LGFuc3dlcl9jb250ZW50KSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhbnN3ZXJWYWxpZGF0aW9uXCIsIGNvcnJlY3QsYW5zd2VyX2NvbnRlbnRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTsgICAgXG4gICAgfVxuICAgIHByaXZhdGUgcXVpdCgpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3RhcnRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuICAiXX0=