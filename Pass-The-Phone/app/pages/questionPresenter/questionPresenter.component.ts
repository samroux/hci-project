import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "questionPresenter",
  templateUrl: "pages/questionPresenter/questionPresenter.html",
  styleUrls: ["pages/questionPresenter/questionPresenter-common.css"]
})

export class QuestionPresenterComponent {

  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["questionPreAnswer"])
  }
}
