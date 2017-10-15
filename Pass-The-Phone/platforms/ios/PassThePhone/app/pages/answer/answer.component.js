"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaAnswer_1 = require("../../shared/triviaAnswer");
var triviaQuestion_provider_1 = require("../../shared/providers/triviaQuestion.provider");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(router, triviaQuestionProvider) {
        this.router = router;
        this.triviaQuestionProvider = triviaQuestionProvider;
        console.log("Constructing answer.component");
        this.choices = [];
        this.choices.push(new triviaAnswer_1.TriviaAnswer(null, ""));
        this.currentQuestion = triviaQuestionProvider.triviaQuestion;
        this.question = this.currentQuestion.question;
        for (var i = 0; i < this.currentQuestion.triviaAnswers.length; i++) {
            console.log("question: " + this.currentQuestion.question);
            this.choices.push(this.currentQuestion.triviaAnswers[i]);
        }
    }
    AnswerComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index > 0) {
            this.selectedAnswer = this.choices[args.index];
            console.log("Chosen: " + this.selectedAnswer.content);
            var correct = this.checkCorrectness(this.selectedAnswer);
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
    AnswerComponent.prototype.next = function (correct, answer_content) {
        this.router.navigate(["answerValidation", correct, answer_content]);
    };
    AnswerComponent = __decorate([
        core_1.Component({
            selector: "answer",
            templateUrl: "pages/answer/answer.html",
            styleUrls: ["pages/answer/answer-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, triviaQuestion_provider_1.TriviaQuestionProvider])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBR3pDLDBEQUFzRDtBQUN0RCwwRkFBcUY7QUFTckY7SUFRRSx5QkFBMkIsTUFBYyxFQUFVLHNCQUE4QztRQUF0RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUMvRixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsY0FBYyxDQUFBO1FBRTVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFFOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXhELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUVILENBQUM7SUFFTSxtQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUUsVUFBVSxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUV6RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLE1BQU07UUFFN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ3JELG9CQUFvQjtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLGlCQUFpQjtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFFSCxDQUFDO0lBRU8sOEJBQUksR0FBWixVQUFhLE9BQU8sRUFBQyxjQUFjO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQXREVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBVW1DLGVBQU0sRUFBa0MsZ0RBQXNCO09BUnRGLGVBQWUsQ0F3RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7VHJpdmlhUXVlc3Rpb259IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhUXVlc3Rpb25cIiBcbmltcG9ydCB7VHJpdmlhQW5zd2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUFuc3dlclwiIFxuaW1wb3J0IHtUcml2aWFRdWVzdGlvblByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy90cml2aWFRdWVzdGlvbi5wcm92aWRlclwiIFxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhbnN3ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYW5zd2VyL2Fuc3dlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5zd2VyL2Fuc3dlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyQ29tcG9uZW50IHtcblxuICBwdWJsaWMgY2hvaWNlczogQXJyYXk8VHJpdmlhQW5zd2VyPjtcbiAgcHVibGljIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgc2VsZWN0ZWRBbnN3ZXI6IFRyaXZpYUFuc3dlcjtcblxuICBwcml2YXRlIGN1cnJlbnRRdWVzdGlvbjogVHJpdmlhUXVlc3Rpb247XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdHJpdmlhUXVlc3Rpb25Qcm92aWRlcjogVHJpdmlhUXVlc3Rpb25Qcm92aWRlciApIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGluZyBhbnN3ZXIuY29tcG9uZW50XCIpO1xuICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuXG4gICAgdGhpcy5jaG9pY2VzLnB1c2gobmV3IFRyaXZpYUFuc3dlcihudWxsLFwiXCIpKTtcblxuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gdHJpdmlhUXVlc3Rpb25Qcm92aWRlci50cml2aWFRdWVzdGlvblxuXG4gICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uOyBcblxuICAgIGZvciAobGV0IGkgPTA7IGk8dGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vycy5sZW5ndGg7aSsrKXtcbiAgICAgIGNvbnNvbGUubG9nKFwicXVlc3Rpb246IFwiK3RoaXMuY3VycmVudFF1ZXN0aW9uLnF1ZXN0aW9uKTtcblxuICAgICAgdGhpcy5jaG9pY2VzLnB1c2godGhpcy5jdXJyZW50UXVlc3Rpb24udHJpdmlhQW5zd2Vyc1tpXSk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJncy5uYW1lKTtcbiAgICBpZihhcmdzLmluZGV4ID4wKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmNob2ljZXNbYXJncy5pbmRleF07XG4gICAgICBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRBbnN3ZXIuY29udGVudCk7XG5cbiAgICAgIGxldCBjb3JyZWN0ID0gdGhpcy5jaGVja0NvcnJlY3RuZXNzKHRoaXMuc2VsZWN0ZWRBbnN3ZXIpO1xuXG4gICAgICB0aGlzLm5leHQoY29ycmVjdCwgdGhpcy5zZWxlY3RlZEFuc3dlci5jb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ29ycmVjdG5lc3MoYW5zd2VyKXtcblxuICAgIGlmKHRoaXMuY3VycmVudFF1ZXN0aW9uLnRyaXZpYUNvcnJlY3RBbnN3ZXIgPT0gYW5zd2VyKXtcbiAgICAgIC8vYW5zd2VyIGlzIGNvcnJlY3QhXG4gICAgICBjb25zb2xlLmxvZyhcIkFuc3dlciBpcyBjb3JyZWN0IVwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgLy9hbnN3ZXIgaXMgd3JvbmdcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5zd2VyIGlzIHdyb25nIVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgbmV4dChjb3JyZWN0LGFuc3dlcl9jb250ZW50KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYW5zd2VyVmFsaWRhdGlvblwiLCBjb3JyZWN0LGFuc3dlcl9jb250ZW50XSk7ICAgIFxuICB9XG5cbn1cbiJdfQ==