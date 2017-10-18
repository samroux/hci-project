import { Component, ElementRef, ViewChild, OnInit  } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { TextField } from "ui/text-field";
import { Progress } from "ui/progress";

import {Group} from "../../shared/group";
import {Player} from "../../shared/player";
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
  
  public constructor(private route:ActivatedRoute, private router: Router, private roundDataProvider: RoundDataProvider) {
    // this.route.params.subscribe((params) => {
    //   this.returnPath = params.path;
    // });  
    this.rdp = roundDataProvider;
  }
  
  ngOnInit() {
    this.progressValue = 20;
  }
  
  private submit(groupName) {
    this.group = new Group(groupName, this.players);
    this.rdp.players = this.players;
    this.rdp.group = this.group;
    this.next(); 
  }
  
  private addPlayer(playerName) {
    let player:Player = new Player(playerName);
    this.players.push(player);    
    this.newPlayerName = "";
  }
  
  private next() {
    this.router.navigate(["modeSelector"]);
    // console.log("return:" + this.returnPath); 
  }
}
