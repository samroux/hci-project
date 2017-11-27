import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import {RouterExtensions} from "nativescript-angular/router";
import {RoundDataProvider} from "../../shared/providers/roundData.provider"
import { ObservableArray, ChangedData, ChangeType } from "tns-core-modules/data/observable-array";
import * as listViewModule from "tns-core-modules/ui/list-view";
import * as labelModule from "tns-core-modules/ui/label";
import { Progress } from "ui/progress";

import {TriviaCategory} from "../../shared/triviaCategory" 

@Component({
  selector: "subjectSelector",
  templateUrl: "pages/subjectSelector/subjectSelector.html",
  styleUrls: ["pages/subjectSelector/subjectSelector-common.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectSelectorComponent implements OnInit{
  //public categories: Array<TriviaCategory> = [];
  public categories = new ObservableArray<TriviaCategory>();
  public selectedCategory: TriviaCategory;
  public randomCategory: number;
  public progressValue: number;
  public returnPath: string; 
  public rdp: RoundDataProvider; 
  
  constructor(private route: ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private roundDataProvider: RoundDataProvider) { 
    // this.route.params.subscribe((params) => {
    //   this.returnPath = params.path;
    // });
    this.rdp = roundDataProvider;
  }
  
  ngOnInit() {
    this.progressValue = 80;
    this.extractData();
    //if got here restarted game
    this.rdp.hasQuestions = false;
  }
  
  public onItemTap(args) {
      console.log("Item Tapped at cell index: " + args.index + " " + args.name);
      if(args.index == 0){
        this.selectedCategory = this.categories.getItem(this.randomCategory);
      } else{
        this.selectedCategory = this.categories.getItem(args.index);
      }
      console.log ("Chosen: "+this.selectedCategory.id +" "+ this.selectedCategory.name);
      this.rdp.speak("Selected Category is ".concat(this.selectedCategory.name));

      this.rdp.subjectId = this.selectedCategory.id.toString();

      this.next(this.selectedCategory.id);
  }
  
  @ViewChild("subjects") subjects : ElementRef;
  extractData() {
    var http = require("http"); 
    // this.categories.pop();
    
    var that = this;
    
    http.request({ url: "https://opentdb.com/api_category.php", method: "GET", timeout: 1000 })
    .then(function (r) {
      //// Argument (r) is JSON!
      console.log("load")
      var json = r.content;
      var str = r.content.toString();
      
      var myObj = JSON.parse(str);
      console.log(myObj.trivia_categories.length)
      //hackz pour enlever le null du ui lol
      //that.categories.pop()
      //Add a random subject button to list
      if(myObj.trivia_categories.length > 0){
        let randId = Math.floor(Math.random()*myObj.trivia_categories.length);
        console.log("random".concat(randId.toString()))
        console.log(myObj.trivia_categories.length.toString())
        that.categories.push(new TriviaCategory(randId,"Random Subject"));
        that.randomCategory = randId;
      }
      for (let i = 0;i < myObj.trivia_categories.length;i++) {
        //console.log(myObj.trivia_categories[i].id+ " "+ myObj.trivia_categories[i].name);
        let id: number = myObj.trivia_categories[i].id;
        let name: string = myObj.trivia_categories[i].name;
        //console.log(name)
        that.categories.push(new TriviaCategory(id, name));
      }
      that.subjects.nativeElement.items = that.categories;
      /*that.subjects.nativeElement.on(listViewModule.ListView.itemLoadingEvent, function (args: listViewModule.ItemEventData) {
          if (!args.view) {
              // Create label if it is not already created.
              args.view = new labelModule.Label();
          }
          (<labelModule.Label>args.view).text = that.categories.getItem(args.index).name;
      });*/
      
    }, function (e) {
      //// Argument (e) is Error!
      console.log("Didnt load")
      console.log(e);
      that.categories.push(new TriviaCategory(-1, "Error: Click back button and try again."));
      that.subjects.nativeElement.items = that.categories;
    });
  }

  next(categoryId) {
    // console.log("Navigating to questionPresenter with id: "+ categoryId);
    // if(this.returnPath == "summary"){
    //   this.router.navigate([this.returnPath]);
    // } else{
      console.log("path ".concat(this.rdp.path));
      if(this.rdp.path && this.rdp.path !== ""){
        this.rdp.path = "subjectSelector";
        this.rdp.subjectName = this.selectedCategory.name;
        this.routerExtensions.navigate(["summary"], { clearHistory: true });
      } else{
        this.rdp.speak("Game is starting now!");
        // this.routerExtensions.navigate(["firstPlayerAnnounce", categoryId ], { clearHistory: true }); 
        this.routerExtensions.navigate(["firstPlayerAnnounce"], { clearHistory: true });        
       
      } 
  }
  
}
