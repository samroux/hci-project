"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.firstClick = true;
        // console.log("Constructing answer.component");
        this.choices = [];
        //need to have dummy otherwise, won't load on UI
        //TODO fix
        this.dummyAnswer = new triviaAnswer_1.TriviaAnswer(null, "");
        this.choices.push(this.dummyAnswer);
        this.choices.pop();
        this.currentQuestion = roundDataProvider.triviaQuestion;
        this.question = this.currentQuestion.question;
        for (var i = 0; i < this.currentQuestion.triviaAnswers.length; i++) {
            // console.log("question: "+this.currentQuestion.question);
            this.choices.push(this.currentQuestion.triviaAnswers[i]);
        }
    }
    /*ngAfterViewInit() {
      let webview: WebView = this.webView.nativeElement;
      //let label: Label = this.labelResultRef.nativeElement;
      //label.text = "WebView is still loading...";
  
      webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
          let message;
          if (!args.error) {
              message = "WebView finished loading of " + args.url;
          } else {
              message = "Error loading " + args.url + ": " + args.error;
          }
  
          //label.text = message;
          console.log("WebView message - " + message);
      });
    }*/
    AnswerComponent.prototype.onItemTap = function (args) {
        // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index > -1) {
            this.selectedAnswer = this.choices[args.index];
            // console.log ("Chosen: "+this.selectedAnswer.content);
            var correct = this.checkCorrectness(this.selectedAnswer);
            //increasing answer count for this player
            this.roundDataProvider.currentPlayer.answerCount++;
            // increase player points if good answer.
            if (correct) {
                this.roundDataProvider.currentPlayer.runningPointsTotal++;
            }
            else {
                // no point gain or loss
            }
            console.log(this.roundDataProvider.currentPlayer.name +
                "Player is having: " +
                this.roundDataProvider.currentPlayer.runningPointsTotal);
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
        this.selectAnswer.nativeElement.text = "20 seconds of Google are up...";
        this.selectAnswer.nativeElement.color = "red";
        this.selectAnswer.nativeElement.visibility = "visible";
    };
    AnswerComponent.prototype.viewWeb = function () {
        var _this = this;
        if (this.firstClick) {
            this.firstClick = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFFaEYsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFTRSx5QkFBMkIsTUFBd0IsRUFBVSxpQkFBb0M7UUFBdEUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBK0YxRixlQUFVLEdBQVksSUFBSSxDQUFDO1FBOUZoQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUE7UUFFdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUU5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzlELDJEQUEyRDtZQUUzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFFSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnQkc7SUFF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QS9JWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiIFxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyL2Fuc3dlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyL2Fuc3dlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyQ29tcG9uZW50e1xuXG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RlZEFuc3dlcjogVHJpdmlhQW5zd2VyO1xuICBwcml2YXRlIGR1bW15QW5zd2VyOiBUcml2aWFBbnN3ZXI7XG5cbiAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGluZyBhbnN3ZXIuY29tcG9uZW50XCIpO1xuICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuXG4gICAgLy9uZWVkIHRvIGhhdmUgZHVtbXkgb3RoZXJ3aXNlLCB3b24ndCBsb2FkIG9uIFVJXG4gICAgLy9UT0RPIGZpeFxuICAgIHRoaXMuZHVtbXlBbnN3ZXIgPSBuZXcgVHJpdmlhQW5zd2VyKG51bGwsXCJcIilcbiAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmR1bW15QW5zd2VyKTtcbiAgICB0aGlzLmNob2ljZXMucG9wKCk7XG4gICAgXG5cbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IHJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uXG5cbiAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb247IFxuXG4gICAgZm9yIChsZXQgaSA9MDsgaTx0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgLy8gY29uc29sZS5sb2coXCJxdWVzdGlvbjogXCIrdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb24pO1xuXG4gICAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGxldCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy9sZXQgbGFiZWw6IExhYmVsID0gdGhpcy5sYWJlbFJlc3VsdFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vbGFiZWwudGV4dCA9IFwiV2ViVmlldyBpcyBzdGlsbCBsb2FkaW5nLi4uXCI7XG5cbiAgICB3ZWJ2aWV3Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBMb2FkRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICBpZiAoIWFyZ3MuZXJyb3IpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIldlYlZpZXcgZmluaXNoZWQgbG9hZGluZyBvZiBcIiArIGFyZ3MudXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgbG9hZGluZyBcIiArIGFyZ3MudXJsICsgXCI6IFwiICsgYXJncy5lcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbGFiZWwudGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2ViVmlldyBtZXNzYWdlIC0gXCIgKyBtZXNzYWdlKTtcbiAgICB9KTtcbiAgfSovXG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgaWYoYXJncy5pbmRleCA+LTEpe1xuICAgICAgdGhpcy5zZWxlY3RlZEFuc3dlciA9IHRoaXMuY2hvaWNlc1thcmdzLmluZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZEFuc3dlci5jb250ZW50KTtcblxuICAgICAgbGV0IGNvcnJlY3QgPSB0aGlzLmNoZWNrQ29ycmVjdG5lc3ModGhpcy5zZWxlY3RlZEFuc3dlcik7XG5cbiAgICAgIC8vaW5jcmVhc2luZyBhbnN3ZXIgY291bnQgZm9yIHRoaXMgcGxheWVyXG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIuYW5zd2VyQ291bnQrKztcblxuICAgICAgLy8gaW5jcmVhc2UgcGxheWVyIHBvaW50cyBpZiBnb29kIGFuc3dlci5cbiAgICAgIGlmKGNvcnJlY3Qpe1xuICAgICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsKys7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgLy8gbm8gcG9pbnQgZ2FpbiBvciBsb3NzXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5uYW1lICsgXG4gICAgICAgIFwiUGxheWVyIGlzIGhhdmluZzogXCIgKyBcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwpO1xuICAgICAgXG5cbiAgICAgIHRoaXMubmV4dChjb3JyZWN0LCB0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDb3JyZWN0bmVzcyhhbnN3ZXIpIDogYm9vbGVhbntcblxuICAgIGlmKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIgPT0gYW5zd2VyKXtcbiAgICAgIC8vYW5zd2VyIGlzIGNvcnJlY3QhXG4gICAgICBjb25zb2xlLmxvZyhcIkFuc3dlciBpcyBjb3JyZWN0IVwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgLy9hbnN3ZXIgaXMgd3JvbmdcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIHdyb25nIVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuICBAVmlld0NoaWxkKFwid2Vidmlld1wiKSB3ZWJWaWV3OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2hvd1dlYnZpZXdcIikgc2hvd1dlYnZpZXc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJzXCIpIGxpc3RWaWV3OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2VsZWN0QW5zd2VyXCIpIHNlbGVjdEFuc3dlcjogRWxlbWVudFJlZjtcbiAgcHVibGljIFdlYlZpZXdTUkM6IHN0cmluZztcblxuICBwcml2YXRlIHN0b3BXZWJ2aWV3KCl7XG4gICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgdGhpcy5zZWxlY3RBbnN3ZXIubmF0aXZlRWxlbWVudC50ZXh0ID0gXCIyMCBzZWNvbmRzIG9mIEdvb2dsZSBhcmUgdXAuLi5cIjtcbiAgICB0aGlzLnNlbGVjdEFuc3dlci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICB0aGlzLnNlbGVjdEFuc3dlci5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHk9XCJ2aXNpYmxlXCJcbiAgfVxuXG4gIHB1YmxpYyBmaXJzdENsaWNrOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIHZpZXdXZWIoKXtcbiAgICBpZih0aGlzLmZpcnN0Q2xpY2spe1xuICAgICAgdGhpcy5maXJzdENsaWNrID0gZmFsc2U7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zdG9wV2VidmlldygpO1xuICAgICAgfSwgMjAwMDApO1xuICAgIH1cbiAgICBpZih0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID09IFwidmlzaWJsZVwiKXtcbiAgICAgIHRoaXMuc2hvd1dlYnZpZXcubmF0aXZlRWxlbWVudC50ZXh0ID0gXCJTaG93IEdvb2dsZVwiO1xuICAgICAgdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSBlbHNle1xuICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnRleHQgPSBcIkhpZGUgR29vZ2xlXCI7XG4gICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfVxuICAgIHRoaXMuV2ViVmlld1NSQyA9IFwiaHR0cHM6Ly9nb29nbGUuY2EvXCI7XG4gICAgLy9sZXQgbGFiZWw6IExhYmVsID0gdGhpcy5sYWJlbFJlc3VsdFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vbGFiZWwudGV4dCA9IFwiV2ViVmlldyBpcyBzdGlsbCBsb2FkaW5nLi4uXCI7XG4gICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIFwicmVhZHlcIik7XG4gICAgLyp0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJXZWJWaWV3IGZpbmlzaGVkIGxvYWRpbmcgb2YgXCIgKyBhcmdzLnVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIGxvYWRpbmcgXCIgKyBhcmdzLnVybCArIFwiOiBcIiArIGFyZ3MuZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvL2xhYmVsLnRleHQgPSBtZXNzYWdlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlYlZpZXcgbWVzc2FnZSAtIFwiICsgbWVzc2FnZSk7XG4gICAgfSk7Ki9cbiAgfVxuXG4gIHByaXZhdGUgbmV4dChjb3JyZWN0LGFuc3dlcl9jb250ZW50KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYW5zd2VyVmFsaWRhdGlvblwiLCBjb3JyZWN0LGFuc3dlcl9jb250ZW50XSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7ICAgIFxuICB9XG4gIHByaXZhdGUgcXVpdCgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInN0YXJ0XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxufVxuIl19