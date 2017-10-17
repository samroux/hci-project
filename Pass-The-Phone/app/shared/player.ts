import {Team} from "./team"


export class Player {
    public answerCount: number = 0;
    public runningPointsTotal: number = 0;
    public team: Team;
    public isSelected:boolean = false;
    
    constructor (public name: string){}
  }