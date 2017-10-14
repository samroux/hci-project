import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "teamBuilder",
  templateUrl: "pages/teamBuilder/teamBuilder.html",
  styleUrls: ["pages/teamBuilder/teamBuilder-common.css"]
})

export class TeamBuilderComponent {
  
  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["subjectSelector"])
  }
}

