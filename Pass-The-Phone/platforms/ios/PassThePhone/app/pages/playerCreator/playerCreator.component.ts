import { Component, ElementRef, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";

import { TextField } from "ui/text-field";


import {Group} from "../../shared/group";
import {Player} from "../../shared/player";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";

@Component({
  selector: "playerCreator",
  templateUrl: "pages/playerCreator/playerCreator.html",
  styleUrls: ["pages/playerCreator/playerCreator-common.css"]
})

export class PlayerCreatorComponent {
  
  private group: Group;
  private players: Array<Player>  = [];
  newPlayerName = "";
  @ViewChild("newPlayerTx") newPlayerTx: ElementRef;
  
  public constructor(private router: Router, private roundDataProvider: RoundDataProvider) {}
  
  private submit(groupName) {
    this.group = new Group(groupName);

    this.roundDataProvider.players = this.players;

    // console.log("this.roundDataProvider.players.length: " + this.roundDataProvider.players.length);
    // for(let i =0 ; i< this.roundDataProvider.players.length;i++){
    //   console.log("this.roundDataProvider.players" + this.roundDataProvider.players[i].name); 
    // }

    this.next(); 
  }
  
  private addPlayer(playerName) {
    let player:Player = new Player(playerName);
    this.players.push(player);    
    this.newPlayerName = "";
  }
  
  private next() {
    this.router.navigate(["modeSelector"]);
  }
}
