import { Component } from "@angular/core";
import { Router } from "@angular/router";

import {RoundDataProvider} from "../../shared/providers/roundData.provider";


@Component({
  selector: "modeSelector",
  templateUrl: "pages/modeSelector/modeSelector.html",
  styleUrls: ["pages/modeSelector/modeSelector-common.css"]
})

export class ModeSelectorComponent {
  
  public constructor(private router: Router, private roundDataProvider: RoundDataProvider) {}

  individualPlay() {
    this.roundDataProvider.gameMode="individual";
    this.next("individual");
  }

  teamPlay() {
    this.roundDataProvider.gameMode="team";
    this.next("team");
  }

  private next(mode) {
    if(mode == "team"){
      this.router.navigate(["teamBuilder"])
    }else{
      this.router.navigate(["subjectSelector"])
    }
  }
}
