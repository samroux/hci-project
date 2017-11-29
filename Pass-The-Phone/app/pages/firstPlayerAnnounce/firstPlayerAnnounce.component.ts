import { Component, NgModule, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";

import {RoundDataProvider} from "../../shared/providers/roundData.provider";


@Component({
  selector: "firstPlayerAnnounce",
  templateUrl: "pages/firstPlayerAnnounce/firstPlayerAnnounce.component.html",
  styleUrls: ["pages/firstPlayerAnnounce/firstPlayerAnnounce-common.css"]
})

export class FirstPlayerAnnounceComponent {

  public constructor(private routerExtensions: RouterExtensions, private rdp:RoundDataProvider) {
    this.rdp.currentPlayer= this.rdp.players[0];
  }
  @ViewChild("subject") subjectLabel: ElementRef;
  ngOnInit(){
    this.subjectLabel.nativeElement.text = "Selected subject is: ".concat(this.rdp.subjectName);
  }

  submit() {
    // this.rdp.speak("Please follow the steps for setup.");
    this.routerExtensions.navigate(["questionPresenter"], { clearHistory: true });
  }
}
