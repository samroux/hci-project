
import {TriviaAnswer} from "./triviaAnswer" 


export class TriviaQuestion {
    public points: number;
    public triviaAnswers: TriviaAnswer[];

    private choices: string[];

    constructor(
        public category: string, 
        public  type: string,
        public  difficulty: string,
        public  question: string,
        public  correct_answer: string,
        public  incorrect_answers: string[]
    ){
        //TODO - To complete when programmin points
        // if(difficulty == "easy"){
        //     this.points = 1;
        // }else if(difficulty == "medium"){
        //     this.points = 2;
        // }else if(difficulty == "hard"){
        //     this.points = 3;
        // }

        console.log("Building TriviaQuestion");

        this.choices = [];
        this.triviaAnswers = [];

        //TODO. Need to shuffle where correct answer is.
        this.choices[0] = correct_answer;
        
        this.triviaAnswers[0] = new TriviaAnswer(this,this.choices[0]);

        for(let i = 0; i<incorrect_answers.length; i++ ){
            this.choices[i+1] = incorrect_answers[i];
            this.triviaAnswers[i+1] = new TriviaAnswer(this,this.choices[i+1]);
        }
    }
}