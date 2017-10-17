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
}