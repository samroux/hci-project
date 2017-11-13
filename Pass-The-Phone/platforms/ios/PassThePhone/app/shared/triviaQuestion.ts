
import {TriviaAnswer} from "./triviaAnswer" 


export class TriviaQuestion {
    public points: number;
    public triviaAnswers: TriviaAnswer[];
    public triviaCorrectAnswer: TriviaAnswer;
    
    constructor(
        private category: string, 
        public  type: string,
        public  difficulty: string,
        public  question: string,
        private  correct_answer: string,
        private  incorrect_answers: string[]
    ){
        //TODO - To complete when programmin points
        // if(difficulty == "easy"){
        //     this.points = 1;
        // }else if(difficulty == "medium"){
        //     this.points = 2;
        // }else if(difficulty == "hard"){
        //     this.points = 3;
        // }

        this.triviaCorrectAnswer = new TriviaAnswer(this,correct_answer);

        //TODO. Need to shuffle where correct answer is.
        //pupulating possible answers array
        this.triviaAnswers = [];
        this.triviaAnswers[0] = this.triviaCorrectAnswer ;
        for(let i = 0; i<incorrect_answers.length; i++ ){
            this.triviaAnswers[i+1] = new TriviaAnswer(this,incorrect_answers[i]);
        }
    }
}