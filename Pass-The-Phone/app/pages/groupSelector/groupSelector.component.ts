import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { knownFolders, File, Folder } from "file-system";


import {Team} from "../../shared/team";
import {Player} from "../../shared/player";
import {Group} from "../../shared/group";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";


@Component({
  selector: "groupSelector",
  templateUrl: "pages/groupSelector/groupSelector.html",
  styleUrls: ["pages/groupSelector/groupSelector-common.css"]
})

export class GroupSelectorComponent implements OnInit{
  private groups: Array<Group> = [];
  private progressValue: number;  
  
  private selectedGroup: Group;
  
  public constructor(private router: Router, private rdp: RoundDataProvider) {
  }
  
  ngOnInit(){
    this.progressValue = 20;
    
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
    
    let groupPlayers1 = [player1, player2, player3];
    let groupPlayers2 = [player2, player3, player4, player6];
    let groupPlayers3 = [player4, player5, player6];
    let groupPlayers4 = [player6, player7, player8, player4];
    let groupPlayers5 = [player8, player9, player10];
    let groupPlayers6 = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];
    

    // this.rdp.groups.push( new Group ("groupPlayers2", groupPlayers2));
    // this.rdp.groups.push( new Group ("groupPlayers3", groupPlayers3));
    // this.rdp.groups.push( new Group ("groupPlayers4", groupPlayers4));
    // this.rdp.groups.push( new Group ("groupPlayers5", groupPlayers5));
    // this.rdp.groups.push( new Group ("groupPlayers6", groupPlayers6));

    // TODO Load Groups
    this.rdp.loadGroups();
    
    // if(this.rdp.groups.length<1){
    //   console.log("rdp.group is empty");      
    //   this.rdp.groups.push( new Group ("groupPlayers1", groupPlayers1));
    //   this.rdp.saveGroups();
    // }

    this.updateLocalList();
  }
  
  public onItemTap(args) {
    // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
    if(args.index >= 0){
      this.selectedGroup = this.rdp.groups[args.index];
      console.log ("Chosen: "+this.selectedGroup.name);
      
      this.rdp.players = this.selectedGroup.players;
      
      this.rdp.group = this.selectedGroup;
      
      console.log("Group: "+ this.rdp.group.name);
      console.log("Players: "+ this.rdp.players);
      
      this.next();
    }
  }

  private deleteGroup(group:Group) {
    console.log("Group to be deleted:"+ group.name);

    var index = this.rdp.groups.indexOf(group, 0);
    if (index > -1) {
      this.rdp.groups.splice(index, 1);
    }

    // TODO Save Groups
    this.rdp.saveGroups();
    this.updateLocalList();
  }
  
  next() {
    // TODO Save Groups
    this.rdp.saveGroups();
    this.updateLocalList();    

    this.router.navigate(["modeSelector"])
  }

private updatePlayersName(group: Group){
  console.log("updating players name...");
  for (var i = 0; i < group.players.length; i++) {
    group.playersName += group.players[i].name;
    
    if (i < group.players.length - 1) {
      group.playersName += ", ";
    }
  }
  
}

private updateLocalList(){
  this.groups=[];
  this.groups=this.rdp.groups;

}

private clearGroups(){
  
  for(let i = 0; i <this.groups.length;i++){
    delete this.groups[i];
  }
  
  this.groups= [];
}
}


