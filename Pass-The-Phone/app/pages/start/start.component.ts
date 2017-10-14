import { Component, NgModule } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "start",
  templateUrl: "pages/start/start.html",
  styleUrls: ["pages/start/start-common.css"]
})


export class StartComponent {
  public constructor(private router: Router) {}

  submit() {
    this.router.navigate(["groupTypeSelector"])
  }
}
