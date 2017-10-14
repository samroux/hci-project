import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "groupSelector",
  templateUrl: "pages/groupSelector/groupSelector.html",
  styleUrls: ["pages/groupSelector/groupSelector-common.css"]
})

export class GroupSelectorComponent {
  
  public constructor(private router: Router) {}
  
  next() {
    this.router.navigate(["modeSelector"])
  }
}
