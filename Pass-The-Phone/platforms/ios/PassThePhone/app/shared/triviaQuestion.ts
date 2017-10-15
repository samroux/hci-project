
export class TriviaQuestion {
    public choices: string[];
    constructor(
        public category: string, 
        public  type: string,
        public  question: string,
        public  correct_answer: string,
        public  incorrect_answers: string
    ){
        this.choices = [];
        
        console.log("Constructing...");
        this.choices[0] = correct_answer;

        console.log("Choice_0:" + this.choices[0]);

        for(let i = 1; i<incorrect_answers.length; i++ ){
            this.choices[i] = correct_answer;
            console.log("Choice_"+i+": " + this.choices[i]);
        }

    }
}