import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import {TriviaQuestion} from "../../shared/triviaQuestion" 
import {TriviaAnswer} from "../../shared/triviaAnswer" 
import {TriviaQuestionProvider} from "../../shared/providers/triviaQuestion.provider" 

@Component({
  selector: "answerValidation",
  templateUrl: "pages/answerValidation/answerValidation.html",
  styleUrls: ["pages/answerValidation/answerValidation-common.css"]
})

export class AnswerValidationComponent{
  public correct: boolean;
  
  // public correct_answer: TriviaAnswer;
  public correct_answer_content: string;
  public player_answer_content: string;
  public correctness: string;
  
  public constructor(private route: ActivatedRoute, private router: Router,private triviaQuestionProvider: TriviaQuestionProvider ) {
    this.route.params.subscribe((params) => {
      this.correct = params["correct"];
      this.player_answer_content = params["answer"];
    });
    console.log("correct: "+this.correct);
    // console.log("answer: "+this.player_answer_content);

    if(this.correct){
      this.correctness = "Right";
    }else{
      this.correctness = "Wrong";
    }
  
    this.correct_answer_content = triviaQuestionProvider.triviaQuestion.triviaCorrectAnswer.content; 
    
  }
  
  next() {
    this.router.navigate(["summary"])
  }
}
