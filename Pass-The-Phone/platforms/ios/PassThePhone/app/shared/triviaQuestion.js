"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TriviaQuestion = /** @class */ (function () {
    function TriviaQuestion(category, type, question, correct_answer, incorrect_answers) {
        this.category = category;
        this.type = type;
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers;
        this.choices = [];
        console.log("Constructing...");
        this.choices[0] = correct_answer;
        console.log("Choice_0:" + this.choices[0]);
        for (var i = 1; i < incorrect_answers.length; i++) {
            this.choices[i] = correct_answer;
            console.log("Choice_" + i + ": " + this.choices[i]);
        }
    }
    return TriviaQuestion;
}());
exports.TriviaQuestion = TriviaQuestion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpdmlhUXVlc3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cml2aWFRdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0lBRUksd0JBQ1csUUFBZ0IsRUFDZixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsY0FBc0IsRUFDdEIsaUJBQXlCO1FBSjFCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUN0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVE7UUFFakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLENBQUMsR0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFFTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgVHJpdmlhUXVlc3Rpb24ge1xuICAgIHB1YmxpYyBjaG9pY2VzOiBzdHJpbmdbXTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmcsIFxuICAgICAgICBwdWJsaWMgIHR5cGU6IHN0cmluZyxcbiAgICAgICAgcHVibGljICBxdWVzdGlvbjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgIGNvcnJlY3RfYW5zd2VyOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyAgaW5jb3JyZWN0X2Fuc3dlcnM6IHN0cmluZ1xuICAgICl7XG4gICAgICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25zdHJ1Y3RpbmcuLi5cIik7XG4gICAgICAgIHRoaXMuY2hvaWNlc1swXSA9IGNvcnJlY3RfYW5zd2VyO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hvaWNlXzA6XCIgKyB0aGlzLmNob2ljZXNbMF0pO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGk8aW5jb3JyZWN0X2Fuc3dlcnMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlc1tpXSA9IGNvcnJlY3RfYW5zd2VyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaG9pY2VfXCIraStcIjogXCIgKyB0aGlzLmNob2ljZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICB9XG59Il19