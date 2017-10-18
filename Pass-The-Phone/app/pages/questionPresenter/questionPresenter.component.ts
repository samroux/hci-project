import { Component,OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";


import {TriviaAnswer} from "../../shared/triviaAnswer";
import {TriviaQuestion} from "../../shared/triviaQuestion";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";

import * as  base64 from "base-64";
import * as utf8 from "utf8";

@Component({
  selector: "questionPresenter",
  templateUrl: "pages/questionPresenter/questionPresenter.html",
  styleUrls: ["pages/questionPresenter/questionPresenter-common.css"]
})

export class QuestionPresenterComponent implements OnInit{

  public question: string;
  public triviaQuestion: TriviaQuestion;
  public choices: TriviaAnswer[];

  public selectedId: string;

  public constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private roundDataProvider: RoundDataProvider) {
    this.route.params.subscribe((params) => {
      this.selectedId = params.id;
    });
    console.log("selectedid: " + this.selectedId);
    roundDataProvider.subjectId = this.selectedId;

    this.choices = [];

    this.choices.push(new TriviaAnswer(null, ""));
  }

  ngOnInit() {
    this.definePlayer();
    this.extractData();
  }

  private definePlayer(){

    let reply = this.roundDataProvider.getRandomPlayer();

    if(reply == null){
      //no more elligible player
      console.log("game is over");
      this.next("summary");
    }else{
      this.roundDataProvider.currentPlayer = reply;
      console.log("Current Player is: " + this.roundDataProvider.currentPlayer.name );
    }
  }
    

  private extractData() {
    // extracting random question from opentdb
    var http = require("http");
    var that = this;

    // getting 1 question of difficulty easy, from selected category
    http.request({ url: "https://opentdb.com/api.php?amount=1&difficulty=easy&encode=base64&category="+this.selectedId, method: "GET" })
    .then(function (r) {
      //// Argument (r) is JSON!
      var json = r.content;
      var str = r.content.toString();
      // console.log("JSON: "+str);
      
      var myObj = JSON.parse(str);
      
      var results = myObj.results;
      
      let category: string = that.decodeBase64(results[0].category);
      let type: string = that.decodeBase64(results[0].type);
      let difficulty: string = that.decodeBase64(results[0].difficulty);
      let question: string = that.decodeBase64(results[0].question);
      let correct_answer: string = that.decodeBase64(results[0].correct_answer);
      let incorrect_answers: string[] = results[0].incorrect_answers;

      // decode all elements of incorrect answers
      for(let i=0; i< incorrect_answers.length;i++){
        incorrect_answers[i] =that.decodeBase64(incorrect_answers[i]);
      }
      
      that.question = question;
      
      that.triviaQuestion = new TriviaQuestion(category, type, difficulty, question, correct_answer, incorrect_answers);

      for (const answer of that.triviaQuestion.triviaAnswers){
        that.choices.push(answer);
      }

      // this is employed to keep the current question shared among pages
      that.roundDataProvider.triviaQuestion=that.triviaQuestion;
      
    }, function (e) {
      //// Argument (e) is Error!
      console.log(e);
    });
  }

  private decodeBase64(input: string) {
     // deconding base 64
     const bytes = base64.decode(input);
     const text = utf8.decode(bytes);
     return text;
  }

  private next(page) {
    if(page == "questionPreAnswer"){
      this.routerExtensions.navigate(["questionPreAnswer"], { clearHistory: true });
    }else{
      this.routerExtensions.navigate(["summary"], { clearHistory: true });
    }
    
  }
}
