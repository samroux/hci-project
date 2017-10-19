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
        this.choices.push(new triviaAnswer_1.TriviaAnswer(null, ""));
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
        if (args.index > 0) {
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
        this.selectAnswer.nativeElement.text = "Select your answer without Google...";
        this.selectAnswer.nativeElement.color = "red";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFFaEYsc0RBQTZEO0FBSTdELDBEQUFzRDtBQUN0RCxnRkFBMkU7QUFTM0U7SUFRRSx5QkFBMkIsTUFBd0IsRUFBVSxpQkFBb0M7UUFBdEUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBeUYxRixlQUFVLEdBQVksSUFBSSxDQUFDO1FBeEZoQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsY0FBYyxDQUFBO1FBRXZELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFFOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM5RCwyREFBMkQ7WUFFM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBRUgsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7O09BZ0JHO0lBRUksbUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQiw2RUFBNkU7UUFDN0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUks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b0JBQW9CLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDNUM7Ozs7Ozs7Ozs7YUFVSztJQUNQLENBQUM7SUFFTyw4QkFBSSxHQUFaLFVBQWEsT0FBTyxFQUFDLGNBQWM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBaERxQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVSxpQkFBVTtvREFBQztJQUNoQjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTt3REFBQztJQUM1QjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVyxpQkFBVTtxREFBQztJQUNoQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt5REFBQztJQXZGekMsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQVVtQyx5QkFBZ0IsRUFBNkIsc0NBQWlCO09BUnRGLGVBQWUsQ0FzSTNCO0lBQUQsc0JBQUM7Q0FBQSxBQXRJRCxJQXNJQztBQXRJWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYVF1ZXN0aW9uXCIgXG5pbXBvcnQge1RyaXZpYUFuc3dlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFBbnN3ZXJcIiBcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiIFxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyL2Fuc3dlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyL2Fuc3dlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyQ29tcG9uZW50e1xuXG4gIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxUcml2aWFBbnN3ZXI+O1xuICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RlZEFuc3dlcjogVHJpdmlhQW5zd2VyO1xuXG4gIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJDb25zdHJ1Y3RpbmcgYW5zd2VyLmNvbXBvbmVudFwiKTtcbiAgICB0aGlzLmNob2ljZXMgPSBbXTtcblxuICAgIHRoaXMuY2hvaWNlcy5wdXNoKG5ldyBUcml2aWFBbnN3ZXIobnVsbCxcIlwiKSk7XG5cbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IHJvdW5kRGF0YVByb3ZpZGVyLnRyaXZpYVF1ZXN0aW9uXG5cbiAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb247IFxuXG4gICAgZm9yIChsZXQgaSA9MDsgaTx0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgLy8gY29uc29sZS5sb2coXCJxdWVzdGlvbjogXCIrdGhpcy5jdXJyZW50UXVlc3Rpb24ucXVlc3Rpb24pO1xuXG4gICAgICB0aGlzLmNob2ljZXMucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbi50cml2aWFBbnN3ZXJzW2ldKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGxldCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy9sZXQgbGFiZWw6IExhYmVsID0gdGhpcy5sYWJlbFJlc3VsdFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vbGFiZWwudGV4dCA9IFwiV2ViVmlldyBpcyBzdGlsbCBsb2FkaW5nLi4uXCI7XG5cbiAgICB3ZWJ2aWV3Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBMb2FkRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICBpZiAoIWFyZ3MuZXJyb3IpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIldlYlZpZXcgZmluaXNoZWQgbG9hZGluZyBvZiBcIiArIGFyZ3MudXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgbG9hZGluZyBcIiArIGFyZ3MudXJsICsgXCI6IFwiICsgYXJncy5lcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbGFiZWwudGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2ViVmlldyBtZXNzYWdlIC0gXCIgKyBtZXNzYWdlKTtcbiAgICB9KTtcbiAgfSovXG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgaWYoYXJncy5pbmRleCA+MCl7XG4gICAgICB0aGlzLnNlbGVjdGVkQW5zd2VyID0gdGhpcy5jaG9pY2VzW2FyZ3MuaW5kZXhdO1xuICAgICAgLy8gY29uc29sZS5sb2cgKFwiQ2hvc2VuOiBcIit0aGlzLnNlbGVjdGVkQW5zd2VyLmNvbnRlbnQpO1xuXG4gICAgICBsZXQgY29ycmVjdCA9IHRoaXMuY2hlY2tDb3JyZWN0bmVzcyh0aGlzLnNlbGVjdGVkQW5zd2VyKTtcblxuICAgICAgLy9pbmNyZWFzaW5nIGFuc3dlciBjb3VudCBmb3IgdGhpcyBwbGF5ZXJcbiAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5hbnN3ZXJDb3VudCsrO1xuXG4gICAgICAvLyBpbmNyZWFzZSBwbGF5ZXIgcG9pbnRzIGlmIGdvb2QgYW5zd2VyLlxuICAgICAgaWYoY29ycmVjdCl7XG4gICAgICAgIHRoaXMucm91bmREYXRhUHJvdmlkZXIuY3VycmVudFBsYXllci5ydW5uaW5nUG9pbnRzVG90YWwrKztcbiAgICAgIH1lbHNle1xuICAgICAgICAvLyBubyBwb2ludCBnYWluIG9yIGxvc3NcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2codGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLm5hbWUgKyBcbiAgICAgICAgXCJQbGF5ZXIgaXMgaGF2aW5nOiBcIiArIFxuICAgICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5jdXJyZW50UGxheWVyLnJ1bm5pbmdQb2ludHNUb3RhbCk7XG4gICAgICBcblxuICAgICAgdGhpcy5uZXh0KGNvcnJlY3QsIHRoaXMuc2VsZWN0ZWRBbnN3ZXIuY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NvcnJlY3RuZXNzKGFuc3dlcikgOiBib29sZWFue1xuXG4gICAgaWYodGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQ29ycmVjdEFuc3dlciA9PSBhbnN3ZXIpe1xuICAgICAgLy9hbnN3ZXIgaXMgY29ycmVjdCFcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIGNvcnJlY3QhXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAvL2Fuc3dlciBpcyB3cm9uZ1xuICAgICAgY29uc29sZS5sb2coXCJBbnN3ZXIgaXMgd3JvbmchXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG4gIEBWaWV3Q2hpbGQoXCJ3ZWJ2aWV3XCIpIHdlYlZpZXc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzaG93V2Vidmlld1wiKSBzaG93V2VidmlldzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlcnNcIikgbGlzdFZpZXc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzZWxlY3RBbnN3ZXJcIikgc2VsZWN0QW5zd2VyOiBFbGVtZW50UmVmO1xuICBwdWJsaWMgV2ViVmlld1NSQzogc3RyaW5nO1xuXG4gIHByaXZhdGUgc3RvcFdlYnZpZXcoKXtcbiAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB0aGlzLnNlbGVjdEFuc3dlci5uYXRpdmVFbGVtZW50LnRleHQgPSBcIlNlbGVjdCB5b3VyIGFuc3dlciB3aXRob3V0IEdvb2dsZS4uLlwiO1xuICAgIHRoaXMuc2VsZWN0QW5zd2VyLm5hdGl2ZUVsZW1lbnQuY29sb3IgPSBcInJlZFwiO1xuICB9XG5cbiAgcHVibGljIGZpcnN0Q2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgdmlld1dlYigpe1xuICAgIGlmKHRoaXMuZmlyc3RDbGljayl7XG4gICAgICB0aGlzLmZpcnN0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3BXZWJ2aWV3KCk7XG4gICAgICB9LCAyMDAwMCk7XG4gICAgfVxuICAgIGlmKHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIpe1xuICAgICAgdGhpcy5zaG93V2Vidmlldy5uYXRpdmVFbGVtZW50LnRleHQgPSBcIlNob3cgR29vZ2xlXCI7XG4gICAgICB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLnNob3dXZWJ2aWV3Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IFwiSGlkZSBHb29nbGVcIjtcbiAgICAgIHRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9XG4gICAgdGhpcy5XZWJWaWV3U1JDID0gXCJodHRwczovL2dvb2dsZS5jYS9cIjtcbiAgICAvL2xldCBsYWJlbDogTGFiZWwgPSB0aGlzLmxhYmVsUmVzdWx0UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy9sYWJlbC50ZXh0ID0gXCJXZWJWaWV3IGlzIHN0aWxsIGxvYWRpbmcuLi5cIjtcbiAgICBjb25zb2xlLmxvZyhcIldlYlZpZXcgbWVzc2FnZSAtIFwiICsgXCJyZWFkeVwiKTtcbiAgICAvKnRoaXMud2ViVmlldy5uYXRpdmVFbGVtZW50Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBMb2FkRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICBpZiAoIWFyZ3MuZXJyb3IpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIldlYlZpZXcgZmluaXNoZWQgbG9hZGluZyBvZiBcIiArIGFyZ3MudXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgbG9hZGluZyBcIiArIGFyZ3MudXJsICsgXCI6IFwiICsgYXJncy5lcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbGFiZWwudGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2ViVmlldyBtZXNzYWdlIC0gXCIgKyBtZXNzYWdlKTtcbiAgICB9KTsqL1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KGNvcnJlY3QsYW5zd2VyX2NvbnRlbnQpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhbnN3ZXJWYWxpZGF0aW9uXCIsIGNvcnJlY3QsYW5zd2VyX2NvbnRlbnRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTsgICAgXG4gIH1cblxufVxuIl19