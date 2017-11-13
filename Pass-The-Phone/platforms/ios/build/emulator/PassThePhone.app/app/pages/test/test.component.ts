import { Component} from "@angular/core";
import { Router } from "@angular/router";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";
import {Player} from "../../shared/player";
import {Group} from "../../shared/group";


var Sqlite = require("nativescript-sqlite");

@Component({
  selector: "test",
  templateUrl: "pages/test/test.component.html",
  styleUrls: ["pages/test/test-common.css"]
})


export class TestComponent {
  private database: any;
  public people: Array<any>;
  private groups: Array<Group> = [];

  public constructor(private router: Router, private rdp: RoundDataProvider) {}

  public insert() {
      // this.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Nic", "Raboy"]).then(id => {
      //     console.log("INSERT RESULT", id);
      //     this.fetch();
      // }, error => {
      //     console.log("INSERT ERROR", error);
      // });
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

      for(var group of this.groups){
        this.rdp.insert_group(group);
      }
  }

  public fetch() {
      this.database.all("SELECT * FROM people").then(rows => {
          this.people = [];
          for(var row in rows) {
              this.people.push({
                  "firstname": rows[row][1],
                  "lastname": rows[row][2]
              });
          }
      }, error => {
          console.log("SELECT ERROR", error);
      });
  }
}
