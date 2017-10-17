import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "teamBuilder",
  templateUrl: "pages/teamBuilder/teamBuilder.html",
  styleUrls: ["pages/teamBuilder/teamBuilder-common.css"]
})

export class TeamBuilderComponent implements OnInit{

  public progressValue: number;  
    
  public constructor(private router: Router) {}

  ngOnInit(){
    this.progressValue = 60;
    
  }
  
  next() {
    this.router.navigate(["subjectSelector"])
  }
}

