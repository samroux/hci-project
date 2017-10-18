import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { StartComponent } from "./pages/start/start.component";
import { GroupTypeSelectorComponent } from "./pages/groupTypeSelector/groupTypeSelector.component";
import { PlayerCreatorComponent } from "./pages/playerCreator/playerCreator.component";
import { GroupSelectorComponent } from "./pages/groupSelector/groupSelector.component";
import { ModeSelectorComponent } from "./pages/modeSelector/modeSelector.component";
import { TeamBuilderComponent } from "./pages/teamBuilder/teamBuilder.component";
import { SubjectSelectorComponent } from "./pages/subjectSelector/subjectSelector.component";
import { QuestionPresenterComponent } from "./pages/questionPresenter/questionPresenter.component";
import { QuestionPreAnswerComponent } from "./pages/questionPreAnswer/questionPreAnswer.component";
import { AnswerComponent } from "./pages/answer/answer.component";
import { AnswerValidationComponent } from "./pages/answerValidation/answerValidation.component";
import { SummaryComponent } from "./pages/summary/summary.component";
 
// import {ListViewGettingStartedComponent} from "./pages/listview/getting-started/listview-getting-started.component";



export const routes = [
    { path: "", redirectTo: "/start", pathMatch: "full" },    
    { path: "start", component: StartComponent },
    { path: "groupTypeSelector", component: GroupTypeSelectorComponent },
    { path: "playerCreator", component: PlayerCreatorComponent },
    { path: "groupSelector", component: GroupSelectorComponent },
    { path: "modeSelector", component: ModeSelectorComponent },
    { path: "teamBuilder", component: TeamBuilderComponent },
    { path: "subjectSelector", component: SubjectSelectorComponent },
    { path: "questionPresenter/:id", component: QuestionPresenterComponent },
    { path: "questionPreAnswer", component: QuestionPreAnswerComponent },
    { path: "answer", component: AnswerComponent },
    { path: "answerValidation/:correct/:answer", component: AnswerValidationComponent },
    { path: "summary", component: SummaryComponent }

    // { path: "listView", component: ListViewGettingStartedComponent }
];

export const navigatableComponents = [
    StartComponent,
    GroupTypeSelectorComponent,
    PlayerCreatorComponent,
    GroupSelectorComponent,
    ModeSelectorComponent,
    TeamBuilderComponent,
    SubjectSelectorComponent,
    QuestionPresenterComponent,
    QuestionPreAnswerComponent,
    AnswerComponent,
    AnswerValidationComponent,
    SummaryComponent

    // ListViewGettingStartedComponent
];

