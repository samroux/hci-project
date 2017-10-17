import { Injectable } from '@angular/core';

import {TriviaQuestion} from "../triviaQuestion";
import {Player} from "../player";
import {Group} from "../group";

@Injectable()
export class RoundDataProvider {
    
    public triviaQuestion: TriviaQuestion; 
    public currentPlayer: Player;
    public group: Group;
    public players : Array<Player> = [];
    
    public gameMode: string;
    
    readonly answerCount:number = 2;
    
    public constructor() {}
    
    // Return a player that haven't played more than authorizes times
    // Returns null if no elligible player. Hence need to go to summary page
    public getRandomPlayer(){
        var elligiblePlayers : Player[] = [];
        let j = 0;

        //populate elligible players array
        for(let i = 0; i <this.players.length;i++){
            if(this.players[i].answerCount<this.answerCount){
                elligiblePlayers[j]=this.players[i];
                j++;
            }
        }

        if(j == 0){
            return null;
        }else{
            let random = Math.floor(Math.random() * j);  
            
            return elligiblePlayers[random];
        }
    }
}