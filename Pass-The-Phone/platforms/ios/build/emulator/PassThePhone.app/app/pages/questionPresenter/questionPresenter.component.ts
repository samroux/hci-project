import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import {TriviaQuestion} from "../../shared/triviaQuestion" 
import {TriviaAnswer} from "../../shared/triviaAnswer" 
import {TriviaQuestionProvider} from "../../shared/providers/triviaQuestion.provider" 

import * as  base64 from "base64";
import * as utf8 from "utf8";

@Component({
  selector: "questionPresenter",
  templateUrl: "pages/questionPresenter/questionPresenter.html",
  styleUrls: ["pages/questionPresenter/questionPresenter-common.css"]
})

export class QuestionPresenterComponent implements OnInit{
  
  public question: string;
  public triviaQuestion: TriviaQuestion;
  public choices: Array<TriviaAnswer>;
  
  
  public selectedId: string;
  
  public constructor(private route: ActivatedRoute, private router: Router, private triviaQuestionProvider: TriviaQuestionProvider) {
    this.route.params.subscribe((params) => {
      this.selectedId = params["id"];
    });
    console.log("selectedid: "+this.selectedId);

    this.choices = [];

    this.choices.push(new TriviaAnswer(null,""));
  }
  
  ngOnInit() {
    this.extractData();
  }
  
  extractData() {
    //extracting random question from opentdb
    var http = require("http");
    
    var that = this;
    
    //getting 1 question of difficulty easy, from selected category
    http.request({ url: "https://opentdb.com/api.php?amount=1&difficulty=easy&category="+this.selectedId, method: "GET" })
    .then(function (r) {
      //// Argument (r) is JSON!
      var json = r.content;
      var str = r.content.toString();
      // console.log("JSON: "+str);
      
      var myObj = JSON.parse(str);
      
      var results = myObj.results;
      
      let category: string = results[0].category;
      let type: string = results[0].type;
      let difficulty: string = results[0].difficulty;
      let question: string = results[0].question;
      let correct_answer: string = results[0].correct_answer;
      let incorrect_answers: string[] = results[0].incorrect_answers;

      //deconding base 64
      var bytes = base64.decode(question);
      var text = utf8.decode(bytes);
      console.log(text);
      
      
      // console.log("correct_answer: "+ correct_answer);
      // console.log("incorrect_answers: "+ incorrect_answers);
      
      that.question = question;
      
      that.triviaQuestion = new TriviaQuestion(category,type,difficulty,question,correct_answer,incorrect_answers);

      for (let i = 0; i < that.triviaQuestion.triviaAnswers.length;i++){
        that.choices.push(that.triviaQuestion.triviaAnswers[i]);
      }

      //this is employed to keep the current question shared among pages
      that.triviaQuestionProvider.triviaQuestion=that.triviaQuestion;
      
    }, function (e) {
      //// Argument (e) is Error!
      console.log(e);
    });
  }
  
  next() {
    this.router.navigate(["questionPreAnswer"])
  }
}
