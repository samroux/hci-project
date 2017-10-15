import { Component } from "@angular/core";
import { Router } from "@angular/router";

import {TriviaQuestion} from "../../shared/triviaQuestion" 
import {TriviaAnswer} from "../../shared/triviaAnswer" 
import {TriviaQuestionProvider} from "../../shared/providers/triviaQuestion.provider" 


@Component({
  selector: "answer",
  templateUrl: "pages/answer/answer.html",
  styleUrls: ["pages/answer/answer-common.css"]
})

export class AnswerComponent {

  public choices: Array<TriviaAnswer>;
  

  public constructor(private router: Router, private triviaQuestionProvider: TriviaQuestionProvider ) {
    console.log("Constructing answer.component");
    // this.choices = [];

    // console.log("triviaQuestionProvider.triviaQuestion.triviaAnswers.length: "+ triviaQuestionProvider.triviaQuestion.triviaAnswers.length);

    // for (let i =0; i<triviaQuestionProvider.triviaQuestion.triviaAnswers.length;i++){
    //   console.log("question: "+triviaQuestionProvider.triviaQuestion.question);

    //   this.choices.push(triviaQuestionProvider.triviaQuestion.triviaAnswers[i]);
    // }

  }
  
  next() {
    this.router.navigate(["answerValidation"])
  }

}
