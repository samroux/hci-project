import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Progress } from "ui/progress";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";


@Component({
  selector: "groupTypeSelector",
  templateUrl: "pages/groupTypeSelector/groupTypeSelector.html",
  styleUrls: ["pages/groupTypeSelector/groupTypeSelector-common.css"]
})

export class GroupTypeSelectorComponent implements OnInit {

  public progressValue: number;

  public constructor(private router: Router, private rdp: RoundDataProvider) {}

  ngOnInit() {
    console.log("init page");
    this.progressValue = 10;
    this.error.nativeElement.visibility = "hidden";
    this.error.nativeElement.color = "red";
    var that = this;
    this.rdp.checkForData(function(a){
      if(a){
        that.submit.nativeElement.backgroundColor = "#d2d2d2";
      } 
    });
  }

  newGroup() {
    this.router.navigate(["playerCreator"])
  }
  @ViewChild("submit") submit: ElementRef;
  @ViewChild("error") error: ElementRef;
  existingGroup() {
    var that = this;
    this.rdp.checkForData(function(a){
      if(!a){
        that.router.navigate(["groupSelector"]);
      } else{
        that.submit.nativeElement.backgroundColor = "#d2d2d2";
        that.error.nativeElement.visibility = "visible";
        setInterval(()=> {
          that.error.nativeElement.visibility = "hidden";
        }, 5000);
      }
    });
  }
}
