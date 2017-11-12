import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ObservableArray, ChangedData, ChangeType } from "tns-core-modules/data/observable-array";
import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { RadListViewComponent } from "nativescript-pro-ui/listview/angular";
import { ItemEventArgs } from "nativescript-pro-ui/listview/angular"

require("nativescript-pro-ui/listview/angular");


import {RoundDataProvider} from "../../shared/providers/roundData.provider";
import {Team} from "../../shared/team";
import {Player} from "../../shared/player";

@Component({
  selector: "teamBuilder",
  templateUrl: "pages/teamBuilder/teamBuilder.html",
  styleUrls: ["pages/teamBuilder/teamBuilder-common.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})

export class TeamBuilderComponent implements OnInit{
  // ListView of players
  private _dataItems: ObservableArray<Player>;
  private _selectedItems: string;
  private progressValue: number; 
  
  // Team Segmented Bar
  private myItems: Array<SegmentedBarItem> = [];
  // private prop: string = "Item 1";
  private teams: Array<Team> = [];
  private selectedTeam: Team;
  
  private teamCount = 0;
  private playerPerteam;
  
  
  
  public constructor(private router: Router, private roundDataProvider: RoundDataProvider) {    
  }
  
  @ViewChild('myRadListView') listView: RadListViewComponent;
  
  
  get dataItems(): ObservableArray<Player> {
    return this._dataItems;
  }
  
  get selectedItems(): string {
    return this._selectedItems;
  }
  
  ngOnInit() {
    console.log("ngOnInit");
    this.progressValue = 60;
    this._dataItems = new ObservableArray(this.roundDataProvider.players);

    console.log("Players");
    for (let i = 0; i< this._dataItems.length; i++){
      console.log(this._dataItems.getItem(i).name);
    }
    //this.listView.nativeElement.getItemAtIndex(0).isEnabled = false;
      

    this._selectedItems = "No Selected items.";
    this.loadSegmentBar();
    // this.selectItemAt(1);
  }
  
  private loadSegmentBar(){
    this.teamCount=this.roundDataProvider.calculateTeamCount();
    console.log("teamCount "+this.teamCount);
    
    if(this.teamCount > 1){
      //create teams
      for (let i = 1; i <= this.teamCount; i++) {
        const item = new SegmentedBarItem();
        item.title = "Team " + i;
        this.myItems.push(item);

        let newTeam = new Team(item.title,[]);
        
        this.teams.push(newTeam);
        this.roundDataProvider.teams.push(newTeam);
      }
      this.playerPerteam = this.roundDataProvider.players.length/this.teamCount;
      this.selectedTeam = this.teams[0];
      
    }else{
      // alert("Number of players don't allow team creation");
      console.log("Number of players don't allow team creation");
    }
  }
  
  public onSelectedIndexChange(args) {
    let segmetedBar = <SegmentedBar>args.object;
    this.selectedTeam = this.teams[segmetedBar.selectedIndex];
    console.log(this.selectedTeam.name)
    // list only players not associated with team and one already in that team
    this._dataItems = new ObservableArray(this.roundDataProvider.getExistingAndRemainingPlayers(this.selectedTeam));
    /*this.roundDataProvider.getPlayersInTeam(this.selectedTeam).forEach(player => {
      this._dataItems.push(player);
    });
    this.listView.nativeElement.selectItemAt(0);*/
    
    //console.log("selected team:" + this.selectedTeam.name );     
  }
  
  public onItemSelected(args: ListViewEventData) {
    var listview = args.object as RadListView;
    var selectedItems = listview.getSelectedItems() as Array<Player>;
    var triggerItem = this._dataItems.getItem(args.index);
    // push into players last added player

    if(this.selectedTeam.players.indexOf(triggerItem) > -1 && triggerItem.isSelected){
      console.log("remove selected")
      triggerItem.isSelected = false;
      var index = this.selectedTeam.players.indexOf(triggerItem, 0);
      if (index > -1) {
        console.log("removed selected")
        this.selectedTeam.players.splice(index, 1);
        triggerItem.team = null;
        listview.deselectItemAt(args.index)
      }
    } else if(this.selectedTeam.players.length < this.playerPerteam){
      console.log("item added")
      this.selectedTeam.players.push(triggerItem);
      triggerItem.team=this.selectedTeam;
    } else{
      listview.deselectItemAt(args.index)
    }
    
    //console.log("Team "+this.selectedTeam.name +" "+ this.selectedTeam.playersToString() );
  }
  
  public onItemDeselected(args: ListViewEventData) {
    var listview = args.object as RadListView;
    var selectedItems = listview.getSelectedItems() as Array<Player>;
    var triggerItem = this._dataItems.getItem(args.index);
    
    // remove from team players
    let index = this.selectedTeam.players.indexOf(triggerItem);
    this.selectedTeam.players.splice(index, 1);
    triggerItem.team=null;
    
    console.log("Team "+this.selectedTeam.name +" "+ this.selectedTeam.playersToString() );
  }
  
  selectItemAt(index:number) {
    console.log("selecting at: "+ index);
    this.listView.listView.selectItemAt(index);
  }
  
  radListLoaded(args: ListViewEventData) {
    // var listView = args.object;
    // console.log("radlistLoaded");
    
    // // based on the isSelected property in item.service.ts
    // for (var index = 0; index < this._dataItems.length; index++) {
    //   var item:Player = this._dataItems.getItem(index);
    //   // console.log("item.isSelected: " + this._dataItems[index].name);
    //   // if (item.isSelected) {
    //     listView.selectItemAt(index);
    //   // }
    // }
  }
  
  next() {
    this.router.navigate(["subjectSelector"]);
  }
  
}  
