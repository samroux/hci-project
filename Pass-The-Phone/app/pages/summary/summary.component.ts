import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, Params} from "@angular/router";
import {Player} from "../../shared/player";
import {Group} from "../../shared/group";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";

@Component({
  selector: "summary",
  templateUrl: "pages/summary/summary.html",
  styleUrls: ["pages/summary/summary-common.css"]
})

export class SummaryComponent {

  public players : Player[] = [];
  public gameMode: string;

  public constructor(private route: ActivatedRoute, private router: Router,private roundDataProvider: RoundDataProvider ) {
    /*this.route.params.subscribe((params) => {
      this.player_answer_content = params["answer"];
      console.log("answer: "+roundDataProvider.subjectId);
      this.subjectId = roundDataProvider.subjectId;
    });*/
    this.players = roundDataProvider.players;
    this.gameMode = roundDataProvider.gameMode;
  }

  settingsRoute() {
    this.router.navigate(["start"])
  }

  questionRoute() {
    this.router.navigate(["questionPresenter"])
  }
}
