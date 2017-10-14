import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "subjectSelector",
  templateUrl: "pages/subjectSelector/subjectSelector.html",
  styleUrls: ["pages/subjectSelector/subjectSelector-common.css"]
})

export class SubjectSelectorComponent {
  
  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["questionPresenter"])
  }
}
