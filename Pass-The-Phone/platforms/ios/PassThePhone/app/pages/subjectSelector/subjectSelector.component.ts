import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import {RouterExtensions} from "nativescript-angular/router";
import {RoundDataProvider} from "../../shared/providers/roundData.provider"

import { Progress } from "ui/progress";

import {TriviaCategory} from "../../shared/triviaCategory" 

@Component({
  selector: "subjectSelector",
  templateUrl: "pages/subjectSelector/subjectSelector.html",
  styleUrls: ["pages/subjectSelector/subjectSelector-common.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectSelectorComponent implements OnInit{
  public categories: Array<TriviaCategory> = [];
  public selectedCategory: TriviaCategory;
  
  public progressValue: number;
  public returnPath: string; 
  public rdp: RoundDataProvider; 
  
  constructor(private route: ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private roundDataProvider: RoundDataProvider) { 
    // this.route.params.subscribe((params) => {
    //   this.returnPath = params.path;
    // });
    this.rdp = roundDataProvider;

    this.categories.push(new TriviaCategory(null,""));
  }
  
  ngOnInit() {
    this.progressValue = 80;
    this.extractData();
  }
  
  public onItemTap(args) {
    console.log("Item Tapped at cell index: " + args.index + " " + args.name);
    if(args.index >0){
      this.selectedCategory = this.categories[args.index];
      console.log ("Chosen: "+this.selectedCategory.id +" "+ this.selectedCategory.name);
      this.next(this.selectedCategory.id);
    }
  }
  
  extractData() {
    var http = require("http");
    this.categories.push();
    
    var that = this;
    
    http.request({ url: "https://opentdb.com/api_category.php", method: "GET" })
    .then(function (r) {
      //// Argument (r) is JSON!
      var json = r.content;
      var str = r.content.toString();
      
      var myObj = JSON.parse(str);
      
      for (let i = 0;i < myObj.trivia_categories.length;i++) {
        // console.log(myObj.trivia_categories[i].id+ " "+ myObj.trivia_categories[i].name);
        
        let id: number = myObj.trivia_categories[i].id;
        let name: string = myObj.trivia_categories[i].name;
        
        that.categories.push(new TriviaCategory(id, name));
      }
      
      
      
    }, function (e) {
      //// Argument (e) is Error!
      console.log(e);
    });
  }

  next(categoryId) {
    // console.log("Navigating to questionPresenter with id: "+ categoryId);
    // if(this.returnPath == "summary"){
    //   this.router.navigate([this.returnPath]);
    // } else{
      if(this.rdp.path && this.rdp.path !== ""){
        this.rdp.path = "subjectSelector";
        this.routerExtensions.navigate(["summary"], { clearHistory: true });
      } else{
        this.routerExtensions.navigate(["questionPresenter", categoryId ], { clearHistory: true });        
      }   // }
  }
  
}
