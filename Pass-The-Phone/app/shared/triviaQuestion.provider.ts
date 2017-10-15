import { Injectable } from '@angular/core';
import {TriviaQuestion} from "./triviaQuestion" 


@Injectable()
export class TriviaQuestionProvider {

    public triviaQuestion: TriviaQuestion;

    public constructor() {}
}