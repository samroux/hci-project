import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import {Team} from "../../shared/team";
import {Player} from "../../shared/player";

@Component({
  selector: "groupSelector",
  templateUrl: "pages/groupSelector/groupSelector.html",
  styleUrls: ["pages/groupSelector/groupSelector-common.css"]
})

export class GroupSelectorComponent implements OnInit{
  
  public constructor(private router: Router) {}

  ngOnInit(){
    let player1 = new Player("Sam");
    let player2 = new Player("Joe");
    let player3 = new Player("John");
    let player4 = new Player("Will");
    let player5 = new Player("Oli");
    let player6 = new Player("Fab");
    let player7 = new Player("Flo");
    let player8 = new Player("Ege");
    let player9 = new Player("Steve");
    let player10 = new Player("Asher");
    
    

  }
  
  next() {
    this.router.navigate(["modeSelector"])
  }
}
