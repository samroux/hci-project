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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFFaEYsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFTRSx5QkFBMkIsTUFBd0IsRUFBVSxpQkFBb0M7UUFBdEUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBa0cxRixlQUFVLEdBQVksSUFBSSxDQUFDO1FBakdoQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUE7UUFFdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUU5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzlELDJEQUEyRDtZQUUzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFFSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnQkc7SUFF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SUFDN0YsQ0FBQztJQUNPLDhCQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWxFcUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVUsaUJBQVU7b0RBQUM7SUFDaEI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7d0RBQUM7SUFDNUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVcsaUJBQVU7cURBQUM7SUFDaEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7eURBQUM7SUFDMUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7d0RBQUM7SUFDOUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7a0RBQUM7SUEvRjNCLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FXbUMseUJBQWdCLEVBQTZCLHNDQUFpQjtPQVR0RixlQUFlLENBNkozQjtJQUFELHNCQUFDO0NBQUEsQUE3SkQsSUE2SkM7QUE3SlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFRdWVzdGlvblwiIFxuaW1wb3J0IHtUcml2aWFBbnN3ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQW5zd2VyXCIgXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIiBcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5zd2VyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Fuc3dlci9hbnN3ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Fuc3dlci9hbnN3ZXItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFuc3dlckNvbXBvbmVudHtcblxuICBwdWJsaWMgY2hvaWNlczogQXJyYXk8VHJpdmlhQW5zd2VyPjtcbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgc2VsZWN0ZWRBbnN3ZXI6IFRyaXZpYUFuc3dlcjtcbiAgcHJpdmF0ZSBkdW1teUFuc3dlcjogVHJpdmlhQW5zd2VyO1xuXG4gIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJDb25zdHJ1Y3RpbmcgYW5zd2VyLmNvbXBvbmVudFwiKTtcbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcblxuICAgIC8vbmVlZCB0byBoYXZlIGR1bW15IG90aGVyd2lzZSwgd29uJ3QgbG9hZCBvbiBVSVxuICAgIC8vVE9ETyBmaXhcbiAgICB0aGlzLmR1bW15QW5zd2VyID0gbmV3IFRyaXZpYUFuc3dlcihudWxsLFwiXCIpXG4gICAgdGhpcy5jaG9pY2VzLnB1c2godGhpcy5kdW1teUFuc3dlcik7XG4gICAgdGhpcy5jaG9pY2VzLnBvcCgpO1xuICAgIFxuXG4gICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSByb3VuZERhdGFQcm92aWRlci50cml2aWFRdWVzdGlvblxuXG4gICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uOyBcblxuICAgIGZvciAobGV0IGkgPTA7IGk8dGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vycy5sZW5ndGg7aSsrKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVlc3Rpb246IFwiK3RoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uKTtcblxuICAgICAgdGhpcy5jaG9pY2VzLnB1c2godGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vyc1tpXSk7XG4gICAgfVxuXG4gIH1cblxuICAvKm5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBsZXQgd2VidmlldzogV2ViVmlldyA9IHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50O1xuICAgIC8vbGV0IGxhYmVsOiBMYWJlbCA9IHRoaXMubGFiZWxSZXN1bHRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAvL2xhYmVsLnRleHQgPSBcIldlYlZpZXcgaXMgc3RpbGwgbG9hZGluZy4uLlwiO1xuXG4gICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJXZWJWaWV3IGZpbmlzaGVkIGxvYWRpbmcgb2YgXCIgKyBhcmdzLnVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIGxvYWRpbmcgXCIgKyBhcmdzLnVybCArIFwiOiBcIiArIGFyZ3MuZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvL2xhYmVsLnRleHQgPSBtZXNzYWdlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlYlZpZXcgbWVzc2FnZSAtIFwiICsgbWVzc2FnZSk7XG4gICAgfSk7XG4gIH0qL1xuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPi0xKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmNob2ljZXNbYXJncy5pbmRleF07XG4gICAgICAvLyBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRBbnN3ZXIuY29udGVudCk7XG5cbiAgICAgIGxldCBjb3JyZWN0ID0gdGhpcy5jaGVja0NvcnJlY3RuZXNzKHRoaXMuc2VsZWN0ZWRBbnN3ZXIpO1xuXG4gICAgICAvL2luY3JlYXNpbmcgYW5zd2VyIGNvdW50IGZvciB0aGlzIHBsYXllclxuICAgICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLmFuc3dlckNvdW50Kys7XG5cbiAgICAgIC8vIGluY3JlYXNlIHBsYXllciBwb2ludHMgaWYgZ29vZCBhbnN3ZXIuXG4gICAgICBpZihjb3JyZWN0KXtcbiAgICAgICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCsrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIC8vIG5vIHBvaW50IGdhaW4gb3IgbG9zc1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIubmFtZSArIFxuICAgICAgICBcIlBsYXllciBpcyBoYXZpbmc6IFwiICsgXG4gICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmN1cnJlbnRQbGF5ZXIucnVubmluZ1BvaW50c1RvdGFsKTtcbiAgICAgIFxuXG4gICAgICB0aGlzLm5leHQoY29ycmVjdCwgdGhpcy5zZWxlY3RlZEFuc3dlci5jb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ29ycmVjdG5lc3MoYW5zd2VyKSA6IGJvb2xlYW57XG5cbiAgICBpZih0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFDb3JyZWN0QW5zd2VyID09IGFuc3dlcil7XG4gICAgICAvL2Fuc3dlciBpcyBjb3JyZWN0IVxuICAgICAgY29uc29sZS5sb2coXCJBbnN3ZXIgaXMgY29ycmVjdCFcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIC8vYW5zd2VyIGlzIHdyb25nXG4gICAgICBjb25zb2xlLmxvZyhcIkFuc3dlciBpcyB3cm9uZyFcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cbiAgQFZpZXdDaGlsZChcIndlYnZpZXdcIikgd2ViVmlldzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInNob3dXZWJ2aWV3XCIpIHNob3dXZWJ2aWV3OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2Vyc1wiKSBsaXN0VmlldzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInNlbGVjdEFuc3dlclwiKSBzZWxlY3RBbnN3ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJnb29nbGVFcnJvclwiKSBnb29nbGVFcnJvcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInRpbWVyXCIpIHRpbWVyOiBFbGVtZW50UmVmO1xuICBwdWJsaWMgV2ViVmlld1NSQzogc3RyaW5nO1xuXG4gIHByaXZhdGUgc3RvcFdlYnZpZXcoKXtcbiAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiMjAgc2Vjb25kcyBvZiBHb29nbGUgYXJlIHVwLi4uXCI7XG4gICAgdGhpcy5nb29nbGVFcnJvci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICB0aGlzLmdvb2dsZUVycm9yLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eT1cInZpc2libGVcIlxuICAgIHRoaXMudGltZXIubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICB9XG5cbiAgcHVibGljIGZpcnN0Q2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgdmlld1dlYigpe1xuICAgIGlmKHRoaXMuZmlyc3RDbGljayl7XG4gICAgICB0aGlzLmZpcnN0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHZhciBjb3VudGRvd24gPSAyMDAwMDtcbiAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICAgIGNvdW50ZG93biAtPSAxMDA7XG4gICAgICAgIHRoaXMudGltZXIubmF0aXZlRWxlbWVudC50ZXh0ID0gY291bnRkb3duLzEwMDAuMFxuICAgICAgICBpZihjb3VudGRvd24gPT0gMCl7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgfSBlbHNlIGlmKGNvdW50ZG93biA9PSAxMDAwMCl7XG4gICAgICAgICAgdGhpcy50aW1lci5uYXRpdmVFbGVtZW50LmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3BXZWJ2aWV3KCk7XG4gICAgICB9LCAyMDAwMCk7XG4gICAgfVxuICAgIGlmKHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIpe1xuICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnRleHQgPSBcIlNob3cgR29vZ2xlXCI7XG4gICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiSGlkZSBHb29nbGVcIjtcbiAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHRoaXMuc2VsZWN0QW5zd2VyLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eT1cInZpc2libGVcIlxuICAgIH1cbiAgICB0aGlzLldlYlZpZXdTUkMgPSBcImh0dHBzOi8vZ29vZ2xlLmNhL1wiO1xuICAgIC8vbGV0IGxhYmVsOiBMYWJlbCA9IHRoaXMubGFiZWxSZXN1bHRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAvL2xhYmVsLnRleHQgPSBcIldlYlZpZXcgaXMgc3RpbGwgbG9hZGluZy4uLlwiO1xuICAgIGNvbnNvbGUubG9nKFwiV2ViVmlldyBtZXNzYWdlIC0gXCIgKyBcInJlYWR5XCIpO1xuICAgIC8qdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgIGlmICghYXJncy5lcnJvcikge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiV2ViVmlldyBmaW5pc2hlZCBsb2FkaW5nIG9mIFwiICsgYXJncy51cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJFcnJvciBsb2FkaW5nIFwiICsgYXJncy51cmwgKyBcIjogXCIgKyBhcmdzLmVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9sYWJlbC50ZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIG1lc3NhZ2UpO1xuICAgIH0pOyovXG4gIH1cblxuICBwcml2YXRlIG5leHQoY29ycmVjdCxhbnN3ZXJfY29udGVudCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFuc3dlclZhbGlkYXRpb25cIiwgY29ycmVjdCxhbnN3ZXJfY29udGVudF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pOyAgICBcbiAgfVxuICBwcml2YXRlIHF1aXQoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdGFydFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cbn1cbiJdfQ==