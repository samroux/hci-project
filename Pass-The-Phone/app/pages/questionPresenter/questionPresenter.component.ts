import { Component,OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";


import {TriviaAnswer} from "../../shared/triviaAnswer";
import {TriviaQuestion} from "../../shared/triviaQuestion";
import {RoundDataProvider} from "../../shared/providers/roundData.provider";
import { ChangeDetectionStrategy} from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Progress } from "ui/progress";

import {TriviaCategory} from "../../shared/triviaCategory" 


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
  public progressValue: number;
  public selectedId: string;

  public constructor(private routerExtensions: RouterExtensions, private roundDataProvider: RoundDataProvider, private router: Router) {

    this.selectedId= roundDataProvider.subjectId ;
    console.log("selectedid: " + this.selectedId);

    this.choices = [];

    this.choices.push(new TriviaAnswer(null, ""));
  }


  @ViewChild("questionAsker") questionAsker: ElementRef;
  @ViewChild("questionFor") questionFor: ElementRef;
  @ViewChild("aloud") aloud: ElementRef;
  ngOnInit() {
    this.progressValue = this.roundDataProvider.getProgress()
    if(!this.roundDataProvider.hasQuestions){
      this.extractData();
    } else{
      console.log("reading old questions");
      var currentQuestion = this.roundDataProvider.questions.pop()
      var currentAnswers:string[] = this.roundDataProvider.answers.pop()
      this.question = "Question: ".concat(currentQuestion);
      
      this.triviaQuestion = new TriviaQuestion(this.roundDataProvider.category, this.roundDataProvider.type, this.roundDataProvider.difficulty, currentQuestion, currentAnswers.pop(), currentAnswers);

      for (const answer of this.triviaQuestion.triviaAnswers){
        this.choices.push(answer);
      }

      // this is employed to keep the current question shared among pages
      this.roundDataProvider.triviaQuestion = this.triviaQuestion;
    }
    this.definePlayer();

    this.roundDataProvider.speak(this.questionAsker.nativeElement.text)
    this.roundDataProvider.speak( " ask the question to "+ this.questionFor.nativeElement.text);
  }

  private definePlayer(){
    if(!this.roundDataProvider.hasRemainingPlayers){
      //no more elligible player
      console.log("game is over");
      this.next("summary");
    }else{
      if(this.roundDataProvider.currentPlayer && this.roundDataProvider.currentPlayer.name != ""){
        this.questionAsker.nativeElement.text = this.roundDataProvider.currentPlayer.name;
      } else{
        //initialization
        this.questionAsker.nativeElement.text = this.roundDataProvider.players[0].name;
      }
        
      let reply = this.roundDataProvider.getRandomPlayer(this.questionAsker.nativeElement.text);
      this.questionFor.nativeElement.text = reply.name;
      this.roundDataProvider.currentPlayer = reply;
    }
  }

  private extractData() {
    // extracting random question from opentdb
    var http = require("http");
    var that = this;
    var numberOfQuestions = this.roundDataProvider.players.length * this.roundDataProvider.answerCount;
    // getting all questions of difficulty easy, from selected category
    http.request({ url: "https://opentdb.com/api.php?amount="+numberOfQuestions+"&difficulty=easy&encode=base64&category="+this.selectedId, method: "GET" })
    .then(function (r) {
      //// Argument (r) is JSON!
      var json = r.content;
      var str = r.content.toString();
      // console.log("JSON: "+str);
      
      var myObj = JSON.parse(str);
      
      var results = myObj.results;
      if(myObj.results.length <= 0){
        console.log("Results not good");
        this.quit();
      }
      //console.log(that.decodeBase64(results[1].question));
      that.roundDataProvider.category = that.decodeBase64(results[0].category);
      that.roundDataProvider.type = that.decodeBase64(results[0].type);
      that.roundDataProvider.difficulty = that.decodeBase64(results[0].difficulty);
      
      //let question: string = that.decodeBase64(results[0].question);
      //let correct_answer: string = that.decodeBase64(results[0].correct_answer);
      //let incorrect_answers: string[] = results[0].incorrect_answers;

      let answers: [string[]] = [[]];
      let questions: string[] = []
      for(let i=0; i< numberOfQuestions; i++){
        questions.push(that.decodeBase64(results[i].question));
        var spec_answer:string[] = [];
        for(let j=0; j< results[i].incorrect_answers.length;j++){
          spec_answer.push(that.decodeBase64(results[i].incorrect_answers[j]));
        }
        console.log(that.decodeBase64(results[i].correct_answer))
        spec_answer.push(that.decodeBase64(results[i].correct_answer))
        answers.push(spec_answer);
      }
      that.roundDataProvider.questions = questions;
      that.roundDataProvider.answers = answers;
      
      var currentQuestion = that.roundDataProvider.questions.pop();
      var currentAnswers:string[] = that.roundDataProvider.answers.pop();
      
      // that.question = "Question: ".concat(currentQuestion);
      that.question = currentQuestion;
      
      that.triviaQuestion = new TriviaQuestion(that.roundDataProvider.category, that.roundDataProvider.type, that.roundDataProvider.difficulty, currentQuestion, currentAnswers.pop(), currentAnswers);

      for (const answer of that.triviaQuestion.triviaAnswers){
        that.choices.push(answer);
      }

      // this is employed to keep the current question shared among pages
      that.roundDataProvider.triviaQuestion=that.triviaQuestion;
      that.roundDataProvider.hasQuestions = true;
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
      this.routerExtensions.navigate(["answer"], { clearHistory: true });
    }else{
      this.routerExtensions.navigate(["summary"], { clearHistory: true });
    }
    
  }
  private quit(){
    this.routerExtensions.navigate(["start"], { clearHistory: true });
  }
}
