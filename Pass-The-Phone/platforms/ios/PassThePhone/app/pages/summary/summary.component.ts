import { Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, Params} from "@angular/router";
import {Player} from "../../shared/player";
import {Group} from "../../shared/group";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";
import * as listPickerModule from "tns-core-modules/ui/list-picker";

@Component({
  selector: "summary",
  templateUrl: "pages/summary/summary.html",
  styleUrls: ["pages/summary/summary-common.css"]
})

export class SummaryComponent{

  public players : Player[] = [];
  public gameMode: string;
  public rdp: RoundDataProvider;
  public show: string;

  public constructor(private route: ActivatedRoute, private router: Router,private roundDataProvider: RoundDataProvider ) {
    /*this.route.params.subscribe((params) => {
      this.player_answer_content = params["answer"];
      console.log("answer: "+roundDataProvider.subjectId);
      this.subjectId = roundDataProvider.subjectId;
    });*/

    this.players = roundDataProvider.players;
    this.gameMode = roundDataProvider.gameMode;
    this.rdp = roundDataProvider;
  }

  @ViewChild("listpicker") listPicker : ElementRef;
  @ViewChild("go") goBtn : ElementRef;
  settingsRoute() {
    this.listPicker.nativeElement.visibility = "visible";
    this.goBtn.nativeElement.visibility = "visible";
    this.listPicker.nativeElement.items = ["Change Subject", "Change Players"];
    //this.router.navigate(["start"])
  }

  changeSelected(){
    console.log(this.listPicker.nativeElement.selectedIndex);
    if(this.listPicker.nativeElement.selectedIndex == 0){
      this.router.navigate(["subjectSelector", "summary"]);
    } else{
      this.router.navigate(["playerCreator", "summary"]);
    }
  }

  questionRoute() {
    //reset points and game
    this.rdp.players.forEach(player => {
      player.answerCount = 0;
      player.runningPointsTotal = 0;
    });
    this.router.navigate(["questionPresenter", this.rdp.subjectId]);
  }
}
