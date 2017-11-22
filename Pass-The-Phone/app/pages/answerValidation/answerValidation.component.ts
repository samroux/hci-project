import { Component, OnInit, ViewChild, ElementRef, NgModule } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";

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
  public player_answer_content: string;
  public correctness: string;
  public subjectId: string;
  public playersRemaining: boolean = true;
  public constructor(private route: ActivatedRoute, private router: RouterExtensions,private roundDataProvider: RoundDataProvider ) {
    this.route.params.subscribe((params) => {
      this.correct = params["correct"] == "true";
      this.player_answer_content = params["answer"];
      console.log("answer: "+roundDataProvider.subjectId);
      this.subjectId = roundDataProvider.subjectId;
      this.playersRemaining = roundDataProvider.hasRemainingPlayers;
    });
    // console.log("answer: "+this.player_answer_content);
  }

  @ViewChild("answer") answerRef: ElementRef;
  @ViewChild("Check") successOrFail: ElementRef;
  ngOnInit(){
    console.log("correct: "+this.correct);
    if(this.correct){
      this.successOrFail.nativeElement.src = "~/pages/answerValidation/checkmark.png";
    } else{
      this.answerRef.nativeElement.visibility = "visible";
      this.answerRef.nativeElement.text = "Correct answer: ".concat(this.roundDataProvider.triviaQuestion.triviaCorrectAnswer.content); 
      this.successOrFail.nativeElement.src = "~/pages/answerValidation/x-mark.gif";
    }
  }
  
  next() {
    // TODO need to check if needs to go to summary or not.
    //Yo sam routing to questionpresenter then to summary brought the question
    //page for a second so im sending directly to summary
    if(this.playersRemaining){
      this.router.navigate(["questionPresenter", this.subjectId ], { clearHistory: true });
    } else{
      this.router.navigate(["summary"], { clearHistory: true });
    }
    
  }
  private quit(){
    this.router.navigate(["start"], { clearHistory: true });
  }
}
