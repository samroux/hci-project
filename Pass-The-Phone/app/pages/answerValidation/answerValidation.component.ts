import { Component, OnInit, ViewChild, ElementRef, NgModule } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import {TriviaQuestion} from "../../shared/triviaQuestion" 
import {TriviaAnswer} from "../../shared/triviaAnswer" 
import {RoundDataProvider} from "../../shared/providers/roundData.provider" 

@Component({
  selector: "answerValidation",
  templateUrl: "pages/answerValidation/answerValidation.html",
  styleUrls: ["pages/answerValidation/answerValidation-common.css"]
})

export class AnswerValidationComponent implements OnInit{
  public correct: boolean;
  
  // public correct_answer: TriviaAnswer;
  public correct_answer_content: string;
  public player_answer_content: string;
  public correctness: string;
  public subjectId: string;
  public playersRemaining: boolean;
  
  public constructor(private route: ActivatedRoute, private router: Router,private roundDataProvider: RoundDataProvider ) {
    this.route.params.subscribe((params) => {
      this.correct = params["correct"] == "true";
      this.player_answer_content = params["answer"];
      console.log("answer: "+roundDataProvider.subjectId);
      this.subjectId = roundDataProvider.subjectId;
      this.playersRemaining = roundDataProvider.getRandomPlayer != null;

    });
    console.log("correct: "+this.correct);
    // console.log("answer: "+this.player_answer_content);
    this.correct_answer_content = roundDataProvider.triviaQuestion.triviaCorrectAnswer.content; 
    
  }

  @ViewChild("Check") successOrFail: ElementRef;
  ngOnInit(){
    console.log("correct: "+this.correct);
    if(this.correct){
      this.successOrFail.nativeElement.src = "~/pages/answerValidation/checkmark.png";
    } else{
      this.successOrFail.nativeElement.src = "~/pages/answerValidation/x-mark.gif";
    }
  }
  
  next() {
    // TODO need to check if needs to go to summary or not.
    //Yo sam routing to questionpresenter then to summary brought the question
    //page for a second so im sending directly to summary
    if(this.playersRemaining){
      this.router.navigate(["questionPresenter", this.subjectId ]);
    } else{
      this.router.navigate(["summary"]);
    }
    
  }
}
