import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap, Params } from "@angular/router";

import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";

import {TriviaQuestion} from "../../shared/triviaQuestion" 


@Component({
  selector: "questionPresenter",
  templateUrl: "pages/questionPresenter/questionPresenter.html",
  styleUrls: ["pages/questionPresenter/questionPresenter-common.css"]
})

export class QuestionPresenterComponent implements OnInit{
  
  // SubjectSelectorComponent
  
  public question: string;
  public triviaQuestion: TriviaQuestion;
  
  public selectedId: string;
  
  public constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.selectedId = params["id"];
    });
    console.log("selectedid: "+this.selectedId);
  }
  
  ngOnInit() {
    this.extractData();
    
  }
  
  extractData() {
    var http = require("http");
    
    var that = this;
    
    http.request({ url: "https://opentdb.com/api.php?amount=1&difficulty=easy&category="+this.selectedId, method: "GET" })
    .then(function (r) {
      //// Argument (r) is JSON!
      var json = r.content;
      var str = r.content.toString();
      console.log("JSON: "+str);
      
      var myObj = JSON.parse(str);
      
      var results = myObj.results;
      
      let category: string = results[0].category;
      let type: string = results[0].type;
      let question: string = results[0].question;
      let correct_answer: string = results[0].correct_answer;
      let incorrect_answers: string = results[0].incorrect_answers;
      
      console.log("question: "+ question);
      console.log("correct_answer: "+ correct_answer);
      console.log("incorrect_answers: "+ incorrect_answers);
      
      that.question = question;
      
      that.triviaQuestion = new TriviaQuestion(category,type,question,correct_answer,incorrect_answers);
      
    }, function (e) {
      //// Argument (e) is Error!
      console.log(e);
    });
  }
  
  next() {
    this.router.navigate(["questionPreAnswer"])
  }
}
