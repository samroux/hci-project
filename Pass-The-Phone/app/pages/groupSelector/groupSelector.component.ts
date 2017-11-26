import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
var Sqlite = require("nativescript-sqlite");


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
  private database: any;
  
  
  public constructor(private router: Router, private rdp: RoundDataProvider) {
    // (new Sqlite("passthephone.db")).then(db => {
    //   db.execSQL("CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, group_id TEXT)").then(id => {
    //     this.database = db;
    //   }, error => {
    //     console.log("CREATE TABLE ERROR", error);
    //   });
    // }, error => {
    //   console.log("OPEN DB ERROR", error);
    // });
    
    // (new Sqlite("passthephone.db")).then(db => {
    //   db.execSQL("CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, playersName TEXT)").then(id => {
    //     this.database = db;
    //   }, error => {
    //     console.log("CREATE TABLE ERROR", error);
    //   });
    // }, error => {
    //   console.log("OPEN DB ERROR", error);
    // });
    
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
    
    this.groups.push( new Group ("groupPlayers1", groupPlayers1));
    this.groups.push( new Group ("groupPlayers2", groupPlayers2));
    this.groups.push( new Group ("groupPlayers3", groupPlayers3));
    this.groups.push( new Group ("groupPlayers4", groupPlayers4));
    this.groups.push( new Group ("groupPlayers5", groupPlayers5));
    this.groups.push( new Group ("groupPlayers6", groupPlayers6));

    
    
    
    // // for(var group of this.groups){
    // //   this.insert_group(group);
    // // }
    
    // this.clearGroups;
    
    // for(let i = 0; i <this.groups.length;i++){
    //   delete this.groups[i];
    // }
    
    // this.groups= [];
    
    // this.fetch_groups();
    
    // console.log("fetch completed... Group count: "+this.groups.length);

    // for (var group of this.groups){
    //   group.players=this.fetch_group_players(group);
    // }
    
  }
  
  public onItemTap(args) {
    // console.log("Item Tapped at cell index: " + args.index + " " + args.name);
    if(args.index >= 0){
      this.selectedGroup = this.groups[args.index];
      console.log ("Chosen: "+this.selectedGroup.name);
      
      this.rdp.players = this.selectedGroup.players;
      
      this.rdp.group = this.selectedGroup;
      
      console.log("Group: "+ this.rdp.group.name);
      console.log("Players: "+ this.rdp.players);
      
      this.next();
    }
  }

  private deleteGroup(group:Group) {
    console.log("Player to be deleted:"+ group.name);

    var index = this.groups.indexOf(group, 0);
    if (index > -1) {
      this.groups.splice(index, 1);
    }
  }
  
  next() {
    this.router.navigate(["modeSelector"])
  }
  
  public insert_group(group:Group) {
    this.database.execSQL("INSERT INTO groups (name, playersName) VALUES (?,?)", [group.name, group.playersName]).then(id => {
      console.log("INSERT RESULT", id);
      group.id=id;
      // this.fetch();
      this.insert_group_players(group);
    }, error => {
      console.log("INSERT ERROR", error);
    });
  }
  
  private insert_group_players(group:Group) {
    
    let insert_players = group.players;
    
    for (var player of insert_players){
      this.database.execSQL("INSERT INTO players (name, group_id) VALUES (?, ?)", [player.name, group.id]).then(id => {
        console.log("INSERT RESULT", id);
        // this.fetch();
      }, error => {
        console.log("INSERT ERROR", error);
      });
    }
  }
  
  public fetch_groups() {
    //TODO. Fetch recostructs objects based on id.
    
    console.log("fetching groups...");
    
    // var that = this;
    
    this.database.all("SELECT * FROM groups").then(rows => {
      this.groups = [];
      for(var row in rows) {
        this.groups.push({
          "id":rows[row][0],
          "name":rows[row][1],
          "playersName":rows[row][2],
          "players":null
        }
      );
      let lastGroup = this.groups[this.groups.length-1];
      console.log("new group: "+lastGroup.name);
      // lastGroup.players= this.fetch_group_players(lastGroup);
      // this.updatePlayersName(lastGroup);
    }
  }, error => {
    console.log("SELECT ERROR", error);
  });
}

public fetch_group_players(group:Group){
  var group_players: Player[]=[];
  
  console.log("Fetching group players: "+group.id);
  
  
  this.database.all("SELECT * FROM players").then(rows => {
    group_players = [];
    for(var row in rows) {
      // console.log(row);
      group_players.push({
        "id":rows[row][0],
        "name":rows[row][1],
        "answerCount": 0,
        "runningPointsTotal": 0,
        "team": null,
        "isSelected":false,
        "canAsk":true
      });
    }
  }, error => {
    console.log("SELECT ERROR", error);
  });

  
  for(var player of group_players){
    console.log(player.name);
  }

  console.log("Done Fetching group players: "+group.id);
  
  
  return group_players;
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

private clearGroups(){
  
  for(let i = 0; i <this.groups.length;i++){
    delete this.groups[i];
  }
  
  this.groups= [];
}
}


