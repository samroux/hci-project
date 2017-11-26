import { Injectable } from '@angular/core';
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';
var Sqlite = require("nativescript-sqlite");

import {TriviaQuestion} from "../triviaQuestion";
import {Team} from "../team";
import {Player} from "../player";
import {Group} from "../group";



@Injectable()
export class RoundDataProvider {
    
    public triviaQuestion: TriviaQuestion;
    public currentPlayer: Player;
    public group: Group;
    public players : Player[] = [];
    public groups : Group[] = [];    
    public teams : Team[] = [];
    public hasQuestions: boolean = false;
    public path: string;
    public questions:string[];
    public answers:[string[]];
    public subjectId: string;
    public subjectName: string;
    public category:string;
    public type:string;
    public difficulty:string;
    
    public gameMode: string;
    
    readonly answerCount:number = 2;

    public playersInRound: string[] = []
    
    private database: any;

    public groupFetch_completed: boolean = false;

    //set a default boolean for a button to animate when the tts plugin 'speaks'
    isSpeaking: boolean = false;
    private TTS: TNSTextToSpeech;
    
    
    public constructor() {
        this.TTS = new TNSTextToSpeech();
    }
    
    public hasRemainingPlayers: boolean = true;

    // Return a player that haven't played more than authorizes times
    // Returns null if no elligible player. Hence need to go to summary page
    public getRandomPlayer(questionAsker){
        var elligiblePlayers : Player[] = [];
        let j = 0;
        let k = 0;
        //populate elligible players array
        console.log("question asker: ".concat(questionAsker))
        for(let i = 0; i <this.players.length;i++){
            if(this.players[i].answerCount<this.answerCount){
                console.log("question asker: ".concat(this.players[i].name))
                if(this.players[i].name != questionAsker && this.playersInRound.indexOf(this.players[i].name) < 0 && (this.currentPlayer == null || this.players[i].name != this.currentPlayer.name)){
                    elligiblePlayers[k]=this.players[i];
                    k++;
                }
                j++;
            }
        }
        if(j == 0){
            return null;
        }else{
            this.hasRemainingPlayers = j > 1;
            console.log(j > 1)
            let random = Math.floor(Math.random() * k); 
            console.log("random ".concat((random).toString()))
            console.log("elligible ".concat((elligiblePlayers.length).toString()))
            this.playersInRound.push(elligiblePlayers[random].name)
            if(this.playersInRound.length == this.players.length){
                console.log("round done")
                this.playersInRound = []
            }
            return elligiblePlayers[random];
        }
    }
    //trouver un ami pour demander une question, code beurk
    public getRandomFriend(player: Player){
        let friends = [];
        player.team.players.forEach(p => {
            if(p.name != player.name){
                friends.push(p);
            }
        });
        let index = Math.floor(Math.random()*friends.length);
        if(index > 0){
            return friends[index].name;
        } else{
            return friends[0].name;
        }
    }

    public speak(text: string){
        this.isSpeaking = true;
        let speakOptions: SpeakOptions = {
            text: text,
            speakRate: 0.5,
            pitch: 1,
            queue: true,
            finishedCallback: (() => {
                this.isSpeaking = false;
            })  
        }
        this.TTS.speak(speakOptions);
    }

    public stopSpeaking(){
        this.isSpeaking = false;
        this.TTS.destroy();
    }
    
    public calculateTeamCount(){
        let teamCount = 0;
        if( (this.players.length%2 == 0 || this.players.length%3 == 0 ) && this.players.length > 3) {
            //team creation of 2 or 3 player is possible
            if(this.players.length%3 == 0 ){
                //teams of 3 will be created
                teamCount = this.players.length/3;
            }else{
                //teams of 2 will be created
                teamCount = this.players.length/2;
            }
            return teamCount;
            
        }else{
            // no team creation is possible
            return 0;
        }
        
    }

    public getProgress(){
        var questionsAnswered : number = 0;
        this.players.forEach(player =>{
            questionsAnswered += player.answerCount;
        });
        return (questionsAnswered/(this.answerCount * this.players.length)) * 100;
    }

    public getPlayersInTeam(team: Team): Player[]{
        return team.players;
    }
    
    public getExistingAndRemainingPlayers(team: Team): Player[]{
        var noTeamPlayers : Player[] = [];
        let j = 0;
        
        //populate elligible players array
        for(let i = 0; i <this.players.length;i++){
            if(this.players[i].team == null /*|| this.players[i].team == team*/ ){
                noTeamPlayers[j]=this.players[i];
                j++;
            } else if(this.players[i].team.name ==  team.name){
                this.players[i].isSelected = true;
                noTeamPlayers[j]=this.players[i];
                j++;
            }
        }
        
        return noTeamPlayers;
    }
    
    
    public clearData(){
        console.log("Clearing Data...");
        this.triviaQuestion = null; 
        this.currentPlayer= null;
        this.group= null;
        
        for(let i = 0; i <this.players.length;i++){
            delete this.players[i];
        }
        
        for(let i = 0; i <this.teams.length;i++){
            delete this.teams[i];
        }
        
        this.players= [];
        this.teams= [];
        
        this.subjectId= "";
        
        this.gameMode= "";
    }
    
    // public clearGroups(){
        
    //     for(let i = 0; i <this.groups.length;i++){
    //         delete this.groups[i];
    //     }
        
    //     this.groups= [];
    // }
    
//     public insert_group(group:Group) {        
//         this.database.execSQL("INSERT INTO groups (name) VALUES (?)", [group.name]).then(id => {
//             console.log("INSERT RESULT", id);
//             group.id=id;
//             // this.fetch();
//             this.insert_group_players(group);
//         }, error => {
//             console.log("INSERT ERROR", error);
//         });
//     }
    
//     private insert_group_players(group:Group) {
        
//         let insert_players = group.players;
        
//         for (var player of insert_players){
//             this.database.execSQL("INSERT INTO players (name, group_id) VALUES (?, ?)", [player.name, group.id]).then(id => {
//                 console.log("INSERT RESULT", id);
//                 // this.fetch();
//             }, error => {
//                 console.log("INSERT ERROR", error);
//             });
//         }
//     }
    
//     public fetch_groups() {
//         //TODO. Fetch recostructs objects based on id.
        
//         console.log("fetching groups...");
        
//         // var that = this;
        
//         this.database.all("SELECT * FROM groups").then(rows => {
//             this.groups = [];
//             for(var row in rows) {
//                 this.groups.push({
//                     "id":rows[row][0],
//                     "name":rows[row][1],
//                     "playersName":"",
//                     "players":null
//                 }
//             );
//             let lastGroup = this.groups[this.groups.length-1];
//             console.log("new group: "+lastGroup.name);
//             lastGroup.players= this.fetch_group_players(lastGroup);
//         }
//     }, error => {
//         console.log("SELECT ERROR", error);
//     });
//     this.groupFetch_completed=true;
// }

// public fetch_group_players(group:Group){
//     let group_players: Player[]=[];
    
//     console.log("Fetching group players: "+group.id);

    
//     this.database.all("SELECT * FROM players where id = 1").then(rows => {
//         group_players = [];
//         for(var row in rows) {
//             group_players.push({
//                 "id":rows[row][0],
//                 "name":rows[row][1],
//                 "answerCount": 0,
//                 "runningPointsTotal": 0,
//                 "team": null,
//                 "isSelected":false
//             });
//         }
//     }, error => {
//         console.log("SELECT ERROR", error);
//     });
    
//     return group_players;
// }

}