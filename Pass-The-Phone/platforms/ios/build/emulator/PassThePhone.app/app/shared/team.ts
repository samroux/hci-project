import {Player} from "./player"

export class Team {
  
  public playersName: string = "";
  
  constructor (public name: string, public players: Array<Player>){

    for (var i = 0; i < this.players.length; i++) {
      this.playersName += this.players[i].name;
      
      if (i < this.players.length - 1) {
        this.playersName += ", ";
      }
    }
  }

  public playersToString(){
    let playersName = "";
    for (let i = 0; i < this.players.length; i++) {
      playersName += this.players[i].name;
      
      if (i < this.players.length - 1) {
        playersName += ", ";
      }
    }
    return playersName;
  }

  public getTotalPoints(){
    console.log("Getting Total points");
    let points = 0;
    for (let i = 0; i < this.players.length; i++) {
      points += this.players[i].runningPointsTotal;
    }
    console.log("Points: "+ points);
    
    return points;
  }
    
}