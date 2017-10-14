import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "modeSelector",
  templateUrl: "pages/modeSelector/modeSelector.html",
  styleUrls: ["pages/modeSelector/modeSelector-common.css"]
})

export class ModeSelectorComponent {
  
  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["teamBuilder"])
  }
}
