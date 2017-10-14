import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "questionPreAnswer",
  templateUrl: "pages/questionPreAnswer/questionPreAnswer.html",
  styleUrls: ["pages/questionPreAnswer/questionPreAnswer-common.css"]
})

export class QuestionPreAnswerComponent {
  
  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["answer"])
  }
}
