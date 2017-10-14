import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "groupTypeSelector",
  templateUrl: "pages/groupTypeSelector/groupTypeSelector.html",
  styleUrls: ["pages/groupTypeSelector/groupTypeSelector-common.css"]
})

export class GroupTypeSelectorComponent {

  public constructor(private router: Router) {}

  newGroup() {
    this.router.navigate(["playerCreator"])
  }

  existingGroup() {
    this.router.navigate(["groupSelector"])
  }
}
