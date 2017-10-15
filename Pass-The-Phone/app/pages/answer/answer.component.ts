import { Component } from "@angular/core";
import { Router } from "@angular/router";

import {TriviaQuestion} from "../../shared/triviaQuestion" 
import {TriviaAnswer} from "../../shared/triviaAnswer" 
import {QuestionPresenterComponent} from "../questionPresenter/questionPresenter.component" 


@Component({
  selector: "answer",
  templateUrl: "pages/answer/answer.html",
  styleUrls: ["pages/answer/answer-common.css"]
})

export class AnswerComponent {

  public choices: Array<TriviaAnswer>;
  

  public constructor(private router: Router, public questionPresenter: QuestionPresenterComponent ) {
    this.choices= questionPresenter.choices;
  }
  
  next() {
    this.router.navigate(["answerValidation"])
  }

}
