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
  private rdp: RoundDataProvider; 
  
  
  
  public constructor(private router: Router, private roundDataProvider: RoundDataProvider) {
    this.rdp = roundDataProvider;
    console.log("gros");
    this.playersName = roundDataProvider.group.playersName;
    this.groupName = roundDataProvider.group.name;
  }

  ngOnInit(){
    this.progressValue = 40;    
  }

  individualPlay() {
    this.rdp.gameMode="individual";
    this.next("individual");
  }

  teamPlay() {
    this.rdp.gameMode="team";
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