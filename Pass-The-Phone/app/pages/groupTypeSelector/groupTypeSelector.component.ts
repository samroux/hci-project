import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Progress } from "ui/progress";


@Component({
  selector: "groupTypeSelector",
  templateUrl: "pages/groupTypeSelector/groupTypeSelector.html",
  styleUrls: ["pages/groupTypeSelector/groupTypeSelector-common.css"]
})

export class GroupTypeSelectorComponent implements OnInit {

  public progressValue: number;

  public constructor(private router: Router) {}

  ngOnInit() {
    this.progressValue = 10;
  }

  newGroup() {
    this.router.navigate(["playerCreator", ""])
  }

  existingGroup() {
    this.router.navigate(["groupSelector"])
  }
}
