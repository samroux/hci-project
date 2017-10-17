import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ObservableArray, ChangedData, ChangeType } from "tns-core-modules/data/observable-array";
import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
require("nativescript-pro-ui/listview/angular");


import {RoundDataProvider} from "../../shared/providers/roundData.provider";
import {Team} from "../../shared/team";
import {Player} from "../../shared/player";

@Component({
  selector: "teamBuilder",
  templateUrl: "pages/teamBuilder/teamBuilder.html",
  styleUrls: ["pages/teamBuilder/teamBuilder-common.css"]
})

export class TeamBuilderComponent implements OnInit{
  private _dataItems: ObservableArray<Player>;
  private _selectedItems: string;
  public progressValue: number;  
  
  public constructor(private router: Router, private roundDataProvider: RoundDataProvider) {}
  
  get dataItems(): ObservableArray<Player> {
    return this._dataItems;
  }
  
  get selectedItems(): string {
    return this._selectedItems;
  }
  
  ngOnInit() {
    this.progressValue = 60;
    this._dataItems = new ObservableArray(this.roundDataProvider.players);
    this._selectedItems = "No Selected items.";
  }
  
  private onItemSelected(args: ListViewEventData) {
    var listview = args.object as RadListView;
    var selectedItems = listview.getSelectedItems() as Array<Player>;
    var selectedTitles = "Selected items: ";
    for (var i = 0; i < selectedItems.length; i++) {
      selectedTitles += selectedItems[i].name;
      
      if (i < selectedItems.length - 1) {
        selectedTitles += ", ";
      }
    }
    
    this._selectedItems = selectedTitles;
    console.log("Item selected. "+ selectedTitles);
  }
  
  private onItemDeselected(args: ListViewEventData) {
    var listview = args.object as RadListView;
    var selectedItems = listview.getSelectedItems() as Array<Player>;
    if (selectedItems.length > 0) {
      var selectedTitles = "Selected items: ";
      for (var i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i].name;
        
        if (i < selectedItems.length - 1) {
          selectedTitles += ", ";
        }
      }
      
      this._selectedItems = selectedTitles;
    } else {
      this._selectedItems = "No Selected items.";
    }
    
    console.log("Item deselected. "+ selectedTitles);
  }

  next() {
    this.router.navigate(["subjectSelector"])
  }
  
}  
