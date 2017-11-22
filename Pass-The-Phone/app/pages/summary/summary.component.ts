import { Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, Params} from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";


import {Team} from "../../shared/team";
import {Player} from "../../shared/player";
import {Group} from "../../shared/group";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";
import {PointsListItems} from "../../shared/pointsListItems";
import * as dialogs from "ui/dialogs";

import * as listPickerModule from "tns-core-modules/ui/list-picker";

@Component({
  selector: "summary",
  templateUrl: "pages/summary/summary.html",
  styleUrls: ["pages/summary/summary-common.css"]
})

export class SummaryComponent implements OnInit{
  
  public players : Player[] = [];
  public teams : Team[] = [];
  public gameMode: string;
  public rdp: RoundDataProvider;
  public show: string;

  public message :string;
  
  public elements: Array<PointsListItems> = [];
  
  public constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions,private roundDataProvider: RoundDataProvider ) {
    this.players = roundDataProvider.players;
    this.teams = roundDataProvider.teams;    
    this.gameMode = roundDataProvider.gameMode;
    this.rdp = roundDataProvider;
  } 
  
  @ViewChild("listpicker") listPicker : ElementRef;
  @ViewChild("go") goBtn : ElementRef;
  @ViewChild("alert") alertText : ElementRef;
  
  
  ngOnInit(){
    //Populate points list depending on game mode
    if(this.rdp.gameMode=="team"){
      console.log("Populating Teams");
      for (let i=0; i< this.teams.length; i++){
        this.elements.push(new PointsListItems(
          this.teams[i].name, this.teams[i].getTotalPoints(), this.teams[i].playersToString() ));
      }
      
    }else{
      //individual mode
      for (let i=0; i< this.players.length; i++){
        this.elements.push(new PointsListItems(this.players[i].name,this.players[i].runningPointsTotal, ""));
      }
    }
    console.log(this.rdp.path);
    if(this.rdp.path && this.rdp.path !== ""){
      if(this.rdp.path == "subjectSelector"){
        this.message = "Subject Changed!";
      } else if(this.rdp.path == "playerCreator"){
        this.message = "Players Changed!";
      } else{
        this.message = "";
      }
      this.alertText.nativeElement.visibility = "visible";
      this.alertText.nativeElement.text = this.message;
      this.rdp.path == "";
    }
  }
  
  settingsRoute() {
    this.listPicker.nativeElement.visibility = "visible";
    this.goBtn.nativeElement.visibility = "visible";
    this.listPicker.nativeElement.items = ["Change Subject", "Change Players"];
  }
  
  changeSelected(){
    // TODO need to clear here as well??
    console.log(this.listPicker.nativeElement.selectedIndex);
    if(this.listPicker.nativeElement.selectedIndex == 0){
      this.routerExtensions.navigate(["subjectSelector"], { clearHistory: true });
      this.rdp.path = "summary";
    } else{
      this.routerExtensions.navigate(["playerCreator"], { clearHistory: true });
      this.rdp.clearData();
      this.rdp.path = "summary";
    }
  }
  
  restartRoute() {
    // TODO reset points and game
    this.rdp.players.forEach(player => {
      player.answerCount = 0;
      player.runningPointsTotal = 0;
    });
    this.rdp.path = ""
    this.rdp.hasQuestions = false;
    this.rdp.currentPlayer = new Player("")
    this.rdp.hasRemainingPlayers = true;
    this.routerExtensions.navigate(["questionPresenter", this.rdp.subjectId], { clearHistory: true });
  }
  private quit(){
    this.routerExtensions.navigate(["start"], { clearHistory: true });
  }
}
