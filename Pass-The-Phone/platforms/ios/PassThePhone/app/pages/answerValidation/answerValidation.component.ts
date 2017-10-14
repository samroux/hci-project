import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "answerValidation",
  templateUrl: "pages/answerValidation/answerValidation.html",
  styleUrls: ["pages/answerValidation/answerValidation-common.css"]
})

export class AnswerValidationComponent {
  
  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["summary"])
  }
}
