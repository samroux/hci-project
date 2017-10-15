import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "questionPresenter",
  templateUrl: "pages/questionPresenter/questionPresenter.html",
  styleUrls: ["pages/questionPresenter/questionPresenter-common.css"]
})

export class QuestionPresenterComponent implements OnInit{

  // SubjectSelectorComponent

  public question: string;


  public constructor(private router: Router) {}

  ngOnInit() {
    this.extractData();
  }

  extractData() {
    var http = require("http");
    
    var that = this;
    
    http.request({ url: "https://opentdb.com/api.php?amount=1&difficulty=easy&category=22", method: "GET" })
    .then(function (r) {
      //// Argument (r) is JSON!
      var json = r.content;
      var str = r.content.toString();
      console.log("JSON: "+str);
      
      var myObj = JSON.parse(str);

      var results = myObj.results;

      let question: string = results[0].question;
      let correct_answer: string = results[0].correct_answer;
      let incorrect_answers: string = results[0].incorrect_answers;
      
      console.log("question: "+ question);
      console.log("correct_answer: "+ correct_answer);
      console.log("incorrect_answers: "+ incorrect_answers);

      that.question = question;
      that.choices = 

    }, function (e) {
      //// Argument (e) is Error!
      console.log(e);
    });
  }
  
  next() {
    this.router.navigate(["questionPreAnswer"])
  }
}
