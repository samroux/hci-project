import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Progress } from "ui/progress";

import {RoundDataProvider} from "../../shared/providers/roundData.provider";


@Component({
  selector: "modeSelector",
  templateUrl: "pages/modeSelector/modeSelector.html",
  styleUrls: ["pages/modeSelector/modeSelector-common.css"]
})

export class ModeSelectorComponent implements OnInit {

  public progressValue: number;  
  
  public constructor(private router: Router, private roundDataProvider: RoundDataProvider) {}

  ngOnInit(){
    this.progressValue = 40;
  }

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
