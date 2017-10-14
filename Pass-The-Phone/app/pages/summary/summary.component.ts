import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "summary",
  templateUrl: "pages/summary/summary.html",
  styleUrls: ["pages/summary/summary-common.css"]
})

export class SummaryComponent {

  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["start"])
  }
}
