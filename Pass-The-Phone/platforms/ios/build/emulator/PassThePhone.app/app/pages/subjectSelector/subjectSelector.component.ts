import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";

import {TriviaCategory} from "../../shared/triviaCategory" 



@Component({
  selector: "subjectSelector",
  templateUrl: "pages/subjectSelector/subjectSelector.html",
  styleUrls: ["pages/subjectSelector/subjectSelector-common.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectSelectorComponent implements OnInit{
  public categories: Array<TriviaCategory>;
  public selectedCategory: TriviaCategory;
  
  constructor(private router: Router) {
    // console.log("Constructing subject Selector");
    this.categories = [];
    
    this.categories.push(new TriviaCategory(null,""));
  }
  
  public onItemTap(args) {
    console.log("Item Tapped at cell index: " + args.index + " " + args.name);
    if(args.index >0){
      this.selectedCategory = this.categories[args.index];
      console.log ("Chosen: "+this.selectedCategory.id +" "+ this.selectedCategory.name);
      this.next(this.selectedCategory.id);
    }
  }
  
  next(categoryId) {
    // console.log("Navigating to questionPresenter with id: "+ categoryId);

    this.router.navigate(["questionPresenter", categoryId ]);
  }
  
  ngOnInit() {
    this.extractData();
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
  
}
