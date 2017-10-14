import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "answer",
  templateUrl: "pages/answer/answer.html",
  styleUrls: ["pages/answer/answer-common.css"]
})

export class AnswerComponent {

  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["answerValidation"])
  }

}
