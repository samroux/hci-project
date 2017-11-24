import { Component, NgModule } from "@angular/core";
import { Router } from "@angular/router";

import {RoundDataProvider} from "../../shared/providers/roundData.provider";


@Component({
  selector: "start",
  templateUrl: "pages/start/start.component.html",
  styleUrls: ["pages/start/start-common.css"]
})


export class StartComponent {

  public constructor(private router: Router, private rdp:RoundDataProvider) {
    this.rdp = rdp;
  }

  submit() {
    // this.rdp.speak("Please follow the steps for setup.");
    this.router.navigate(["groupTypeSelector"]);
  }
}
