import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { ActivatedRoute} from "@angular/router";

import {RoundDataProvider} from "../../shared/providers/roundData.provider";

@Component({
  selector: "questionPreAnswer",
  templateUrl: "pages/questionPreAnswer/questionPreAnswer.html",
  styleUrls: ["pages/questionPreAnswer/questionPreAnswer-common.css"]
})

export class QuestionPreAnswerComponent {

  public constructor(private routerExtensions: RouterExtensions, private roundDataProvider: RoundDataProvider) {}

  private next() {
    this.routerExtensions.navigate(["answer"], { clearHistory: true });
  }
}
