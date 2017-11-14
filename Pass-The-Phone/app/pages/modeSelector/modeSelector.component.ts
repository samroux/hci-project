import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
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
    this.playersName = roundDataProvider.group.playersName;
    this.groupName = roundDataProvider.group.name;
  }
  @ViewChild("teamBtn") teamBtn: ElementRef;
  @ViewChild("warning") warning: ElementRef;
  ngOnInit(){
    if(this.rdp.players.length % 2 != 0 || this.rdp.players.length == 2){
      this.teamBtn.nativeElement.backgroundColor = "#d2d2d2";
    }
    this.progressValue = 40;
  }
  
  individualPlay() {
    this.rdp.gameMode="individual";
    this.next("individual");
  }
  
  teamPlay() {
    console.log("players")
    console.log(this.rdp.players.length)
    if(this.rdp.players.length % 2 != 0 || this.rdp.players.length == 2){
      this.warning.nativeElement.color = "red";
      this.warning.nativeElement.visibility = "visible";
      return;
    }
    let teamCount=this.roundDataProvider.calculateTeamCount();
    
    if(teamCount > 1){
      this.rdp.gameMode="team";
      this.next("team");
    }
  }
  
  private next(mode) {
    if(mode == "team"){
      this.router.navigate(["teamBuilder"])
    }else{
      this.router.navigate(["subjectSelector"])
    }
  }
}
