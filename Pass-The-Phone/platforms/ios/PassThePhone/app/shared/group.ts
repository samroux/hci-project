import {Player} from "./player"

export class Group {
  
  public id: number;
  public playersName: string = "";
  
  constructor(public name: string, public players: Player[]){
    for (var i = 0; i < this.players.length; i++) {
      this.playersName += this.players[i].name;
      
      if (i < this.players.length - 1) {
        this.playersName += ", ";
      }
    }
  }
}

