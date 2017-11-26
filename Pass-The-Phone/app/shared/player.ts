import {Team} from "./team"


export class Player {
    public id: number;
    public answerCount: number = 0;
    public runningPointsTotal: number = 0;
    public team: Team;
    public isSelected:boolean = false;
    //if in teams, has 1 chance to ask a friend
    public canAsk:boolean = true;
    constructor (public name: string){}
  }