import { Component, ElementRef, ViewChild, OnInit  } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";

import { TextField } from "ui/text-field";
import { Progress } from "ui/progress";

import {Group} from "../../shared/group";
import {Player} from "../../shared/player";
import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";

@Component({
  selector: "playerCreator",
  templateUrl: "pages/playerCreator/playerCreator.html",
  styleUrls: ["pages/playerCreator/playerCreator-common.css"]
})

export class PlayerCreatorComponent implements OnInit{
  
  private group: Group;
  private players: Array<Player>  = [];
  public progressValue: number;
  private rdp: RoundDataProvider;
  private returnPath: string;
  
  newPlayerName = "";
  @ViewChild("newPlayerTx") newPlayerTx: ElementRef;
  @ViewChild("groupNameTx") groupTextField: ElementRef;
  @ViewChild("newPlayerTx") playerTextField: ElementRef;
  
  public constructor(private route:ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private roundDataProvider: RoundDataProvider) {
    // this.route.params.subscribe((params) => {
    //   this.returnPath = params.path;
    // });  
    this.rdp = roundDataProvider;
  }
  
  ngOnInit() {
    this.progressValue = 20;
    var color = require("color");
    var colorBlack = new color.Color("#000000");
    this.groupTextField.nativeElement.borderColor = colorBlack;
    this.playerTextField.nativeElement.borderColor = colorBlack;
  }
  
  private submit(groupName) {

    if(groupName && this.players.length > 1){
      this.group = new Group(groupName, this.players);
      console.log("length players".concat(this.players.length.toString()))
      this.rdp.players = this.players;
      this.rdp.group = this.group;

      this.loadNSaveGroups(this.group);

      var color = require("color");
      var colorBlack = new color.Color("#000000");
      this.groupTextField.nativeElement.borderColor = colorBlack;
      this.playerTextField.nativeElement.borderColor = colorBlack;
      this.playerTextField.nativeElement.hint = "Enter a Player Name";
      this.next();
    } else {
      console.log("g")
      var color = require("color");
      var colorRed = new color.Color("#FF0000");
      if(!groupName || 0 === groupName.length){
        this.groupTextField.nativeElement.borderColor = colorRed;
      }
      if(this.players.length <= 0){
        this.playerTextField.nativeElement.borderColor = colorRed;
      } else if(this.players.length == 1){
        this.playerTextField.nativeElement.borderColor = colorRed;
        this.playerTextField.nativeElement.hint = "Two players needed!";
      }
    }
  }

  private loadNSaveGroups(group){
    console.log("LoadNSave...");
    this.rdp.loadGroups().then( resolve =>{
      this.rdp.groups.push(group);
      console.log("pushed group: ");
      for (let group_rdp of this.rdp.groups){
        console.log(group_rdp.name);
      }
  
      this.rdp.saveGroups();
    });

    
  }
  
  private addPlayer(playerName) {
    if(playerName==""){
      var color = require("color");
      var colorRed = new color.Color("#FF0000");
      this.playerTextField.nativeElement.borderColor = colorRed;
      this.playerTextField.nativeElement.hint = "Enter a player Name";
      return;
    }
    for(let player of this.players){
      if(player.name == playerName){
        var color = require("color");
        var colorBlack = new color.Color("#FF0000");
        this.playerTextField.nativeElement.borderColor = colorBlack;
        this.playerTextField.nativeElement.text = ""
        this.playerTextField.nativeElement.hint = "Enter a unique name.";
        return;
      }
    }
    var color = require("color");
    var colorBlack = new color.Color("#000000");
    this.groupTextField.nativeElement.borderColor = colorBlack;
    this.playerTextField.nativeElement.borderColor = colorBlack;
    this.playerTextField.nativeElement.hint = "Enter a Player Name";
    let player:Player = new Player(playerName);
    this.players.push(player);    
    this.newPlayerName = "";
  }

  private deletePlayer(player:Player) {
    console.log("Player to be deleted:"+ player.name);

    var index = this.players.indexOf(player, 0);
    if (index > -1) {
      this.players.splice(index, 1);
    }
  }
  
  private next() {
    if(this.rdp.path && this.rdp.path !== ""){
      this.rdp.path = "playerCreator";
      console.log(this.rdp.path);
      this.routerExtensions.navigate(["summary"], { clearHistory: true });
    } else{
      this.router.navigate(["modeSelector"]);
    }
    // console.log("return:" + this.returnPath); 
  }
}
