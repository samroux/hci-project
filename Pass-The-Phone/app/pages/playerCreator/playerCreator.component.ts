import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "playerCreator",
  templateUrl: "pages/playerCreator/playerCreator.html",
  styleUrls: ["pages/playerCreator/playerCreator-common.css"]
})

export class PlayerCreatorComponent {
  
  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["modeSelector"])
  }
}
