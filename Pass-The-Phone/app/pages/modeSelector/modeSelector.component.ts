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

  private progressValue: number; 

  private playersName: string;
  private groupName: string; 
  
  
  
  public constructor(private router: Router, private roundDataProvider: RoundDataProvider) {}

  ngOnInit(){
    this.progressValue = 40;
    this.playersName = this.roundDataProvider.group.playersName;
    this.groupName = this.roundDataProvider.group.name;
    
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
