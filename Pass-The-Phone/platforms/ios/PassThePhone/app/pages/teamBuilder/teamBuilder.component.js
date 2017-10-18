"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var segmented_bar_1 = require("ui/segmented-bar");
var angular_1 = require("nativescript-pro-ui/listview/angular");
require("nativescript-pro-ui/listview/angular");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var team_1 = require("../../shared/team");
var TeamBuilderComponent = /** @class */ (function () {
    function TeamBuilderComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.loading = false;
        // Team Segmented Bar
        this.myItems = [];
        // private prop: string = "Item 1";
        this.teams = [];
        this.teamCount = 0;
    }
    Object.defineProperty(TeamBuilderComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamBuilderComponent.prototype, "selectedItems", {
        get: function () {
            return this._selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    TeamBuilderComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.progressValue = 60;
        this._dataItems = new observable_array_1.ObservableArray(this.roundDataProvider.players);
        console.log("Players");
        for (var i = 0; i < this._dataItems.length; i++) {
            console.log(this._dataItems.getItem(i).name);
        }
        this._selectedItems = "No Selected items.";
        this.loadSegmentBar();
        // this.selectItemAt(1);
    };
    TeamBuilderComponent.prototype.loadSegmentBar = function () {
        this.teamCount = this.roundDataProvider.calculateTeamCount();
        console.log("teamCount " + this.teamCount);
        if (this.teamCount > 1) {
            //create teams
            for (var i = 1; i <= this.teamCount; i++) {
                var item = new segmented_bar_1.SegmentedBarItem();
                item.title = "Team " + i;
                this.myItems.push(item);
                var newTeam = new team_1.Team(item.title, []);
                this.teams.push(newTeam);
                this.roundDataProvider.teams.push(newTeam);
            }
            this.playerPerteam = this.roundDataProvider.players.length / this.teamCount;
            this.selectedTeam = this.teams[0];
        }
        else {
            // alert("Number of players don't allow team creation");
            console.log("Number of players don't allow team creation");
        }
    };
    TeamBuilderComponent.prototype.onSelectedIndexChange = function (args) {
        var segmetedBar = args.object;
        this.selectedTeam = this.teams[segmetedBar.selectedIndex];
        // list only players not associated with team and one already in that team
        this._dataItems = new observable_array_1.ObservableArray(this.roundDataProvider.getExistingAndRemainingPlayers(this.selectedTeam));
        // now mark the existing as selected
        // for(let i = 0; i < this.selectedTeam.players.length; i++ ){
        //   let index = this._dataItems.indexOf(this.selectedTeam.players[i]);
        //   this.loading = true;
        //   this.selectItemAt(index);
        //   this.loading=false;
        // }
        console.log("selected team:" + this.selectedTeam.name);
    };
    TeamBuilderComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var triggerItem = this._dataItems.getItem(args.index);
        console.log("OnItemSelected.");
        // push into players last added player
        if (!this.loading) {
            this.selectedTeam.players.push(triggerItem);
            triggerItem.team = this.selectedTeam;
        }
        console.log("Team " + this.selectedTeam.name + " " + this.selectedTeam.playersToString());
    };
    TeamBuilderComponent.prototype.onItemDeselected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var triggerItem = this._dataItems.getItem(args.index);
        // remove from team players
        var index = this.selectedTeam.players.indexOf(triggerItem);
        this.selectedTeam.players.splice(index, 1);
        triggerItem.team = null;
        console.log("Team " + this.selectedTeam.name + " " + this.selectedTeam.playersToString());
    };
    TeamBuilderComponent.prototype.selectItemAt = function (index) {
        console.log("selecting at: " + index);
        this.listView.listView.selectItemAt(index);
    };
    TeamBuilderComponent.prototype.radListLoaded = function (args) {
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
    };
    TeamBuilderComponent.prototype.next = function () {
        this.router.navigate(["subjectSelector"]);
    };
    __decorate([
        core_1.ViewChild('myRadListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], TeamBuilderComponent.prototype, "listView", void 0);
    TeamBuilderComponent = __decorate([
        core_1.Component({
            selector: "teamBuilder",
            templateUrl: "pages/teamBuilder/teamBuilder.html",
            styleUrls: ["pages/teamBuilder/teamBuilder-common.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], TeamBuilderComponent);
    return TeamBuilderComponent;
}());
exports.TeamBuilderComponent = TeamBuilderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbUJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbUJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNGO0FBQ3RGLDBDQUF5QztBQUN6QywyRUFBa0c7QUFFbEcsa0RBQWtFO0FBQ2xFLGdFQUE0RTtBQUc1RSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUdoRCxnRkFBNEU7QUFDNUUsMENBQXVDO0FBV3ZDO0lBa0JFLDhCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBYi9FLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFakMscUJBQXFCO1FBQ2IsWUFBTyxHQUE0QixFQUFFLENBQUM7UUFDOUMsbUNBQW1DO1FBQzNCLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBR3hCLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFNdEIsQ0FBQztJQUtELHNCQUFJLDJDQUFTO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFhO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxH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LENBQUMsZ0JBQWdCLEdBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsSUFBdUI7UUFDbkMsOEJBQThCO1FBQzlCLGdDQUFnQztRQUVoQyx5REFBeUQ7UUFDekQsaUVBQWlFO1FBQ2pFLHNEQUFzRDtRQUN0RCx1RUFBdUU7UUFDdkUsOEJBQThCO1FBQzlCLG9DQUFvQztRQUNwQyxTQUFTO1FBQ1QsSUFBSTtJQUNOLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQXZIMkI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQVcsOEJBQW9COzBEQUFDO0lBckJoRCxvQkFBb0I7UUFSaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7WUFDdkQsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FFaEQsQ0FBQzt5Q0FvQm1DLGVBQU0sRUFBNkIsc0NBQWlCO09BbEI1RSxvQkFBb0IsQ0E4SWhDO0lBQUQsMkJBQUM7Q0FBQSxBQTlJRCxJQThJQztBQTlJWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgSXRlbUV2ZW50QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIlxuXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCIpO1xuXG5cbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuaW1wb3J0IHtUZWFtfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlYW1cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGVhbUJ1aWxkZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdGVhbUJ1aWxkZXIvdGVhbUJ1aWxkZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RlYW1CdWlsZGVyL3RlYW1CdWlsZGVyLWNvbW1vbi5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG4gIFxufSlcblxuZXhwb3J0IGNsYXNzIFRlYW1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAvLyBMaXN0VmlldyBvZiBwbGF5ZXJzXG4gIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PFBsYXllcj47XG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbXM6IHN0cmluZztcbiAgcHJpdmF0ZSBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7IFxuICBwcml2YXRlIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTsgXG4gIFxuICAvLyBUZWFtIFNlZ21lbnRlZCBCYXJcbiAgcHJpdmF0ZSBteUl0ZW1zOiBBcnJheTxTZWdtZW50ZWRCYXJJdGVtPiA9IFtdO1xuICAvLyBwcml2YXRlIHByb3A6IHN0cmluZyA9IFwiSXRlbSAxXCI7XG4gIHByaXZhdGUgdGVhbXM6IEFycmF5PFRlYW0+ID0gW107XG4gIHByaXZhdGUgc2VsZWN0ZWRUZWFtOiBUZWFtO1xuICBcbiAgcHJpdmF0ZSB0ZWFtQ291bnQgPSAwO1xuICBwcml2YXRlIHBsYXllclBlcnRlYW07XG4gIFxuICBcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikgeyAgICBcbiAgfVxuICBcbiAgQFZpZXdDaGlsZCgnbXlSYWRMaXN0VmlldycpIGxpc3RWaWV3OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcbiAgXG4gIFxuICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxQbGF5ZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICB9XG4gIFxuICBnZXQgc2VsZWN0ZWRJdGVtcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW1zO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0XCIpO1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDYwO1xuICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzKTtcblxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVyc1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTwgdGhpcy5fZGF0YUl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGFJdGVtcy5nZXRJdGVtKGkpLm5hbWUpO1xuICAgIH1cbiAgICAgIFxuXG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFwiTm8gU2VsZWN0ZWQgaXRlbXMuXCI7XG4gICAgdGhpcy5sb2FkU2VnbWVudEJhcigpO1xuICAgIC8vIHRoaXMuc2VsZWN0SXRlbUF0KDEpO1xuICB9XG4gIFxuICBwcml2YXRlIGxvYWRTZWdtZW50QmFyKCl7XG4gICAgdGhpcy50ZWFtQ291bnQ9dGhpcy5yb3VuZERhdGFQcm92aWRlci5jYWxjdWxhdGVUZWFtQ291bnQoKTtcbiAgICBjb25zb2xlLmxvZyhcInRlYW1Db3VudCBcIit0aGlzLnRlYW1Db3VudCk7XG4gICAgXG4gICAgaWYodGhpcy50ZWFtQ291bnQgPiAxKXtcbiAgICAgIC8vY3JlYXRlIHRlYW1zXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnRlYW1Db3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBpdGVtLnRpdGxlID0gXCJUZWFtIFwiICsgaTtcbiAgICAgICAgdGhpcy5teUl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgbGV0IG5ld1RlYW0gPSBuZXcgVGVhbShpdGVtLnRpdGxlLFtdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGVhbXMucHVzaChuZXdUZWFtKTtcbiAgICAgICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci50ZWFtcy5wdXNoKG5ld1RlYW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wbGF5ZXJQZXJ0ZWFtID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzLmxlbmd0aC90aGlzLnRlYW1Db3VudDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUZWFtID0gdGhpcy50ZWFtc1swXTtcbiAgICAgIFxuICAgIH1lbHNle1xuICAgICAgLy8gYWxlcnQoXCJOdW1iZXIgb2YgcGxheWVycyBkb24ndCBhbGxvdyB0ZWFtIGNyZWF0aW9uXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJOdW1iZXIgb2YgcGxheWVycyBkb24ndCBhbGxvdyB0ZWFtIGNyZWF0aW9uXCIpO1xuICAgIH1cbiAgfVxuICBcbiAgcHVibGljIG9uU2VsZWN0ZWRJbmRleENoYW5nZShhcmdzKSB7XG4gICAgbGV0IHNlZ21ldGVkQmFyID0gPFNlZ21lbnRlZEJhcj5hcmdzLm9iamVjdDtcbiAgICB0aGlzLnNlbGVjdGVkVGVhbSA9IHRoaXMudGVhbXNbc2VnbWV0ZWRCYXIuc2VsZWN0ZWRJbmRleF07XG4gICAgLy8gbGlzdCBvbmx5IHBsYXllcnMgbm90IGFzc29jaWF0ZWQgd2l0aCB0ZWFtIGFuZCBvbmUgYWxyZWFkeSBpbiB0aGF0IHRlYW1cbiAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ2V0RXhpc3RpbmdBbmRSZW1haW5pbmdQbGF5ZXJzKHRoaXMuc2VsZWN0ZWRUZWFtKSk7XG4gICAgXG4gICAgLy8gbm93IG1hcmsgdGhlIGV4aXN0aW5nIGFzIHNlbGVjdGVkXG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnMubGVuZ3RoOyBpKysgKXtcbiAgICAvLyAgIGxldCBpbmRleCA9IHRoaXMuX2RhdGFJdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnNbaV0pO1xuICAgICAgXG4gICAgLy8gICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vICAgdGhpcy5zZWxlY3RJdGVtQXQoaW5kZXgpO1xuICAgIC8vICAgdGhpcy5sb2FkaW5nPWZhbHNlO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIHRlYW06XCIgKyB0aGlzLnNlbGVjdGVkVGVhbS5uYW1lICk7ICAgICBcbiAgfVxuICBcbiAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgdmFyIGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgdmFyIHNlbGVjdGVkSXRlbXMgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgQXJyYXk8UGxheWVyPjtcbiAgICB2YXIgdHJpZ2dlckl0ZW0gPSB0aGlzLl9kYXRhSXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIk9uSXRlbVNlbGVjdGVkLlwiKTtcbiAgICBcbiAgICAvLyBwdXNoIGludG8gcGxheWVycyBsYXN0IGFkZGVkIHBsYXllclxuICAgIGlmKCF0aGlzLmxvYWRpbmcpe1xuICAgICAgdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVycy5wdXNoKHRyaWdnZXJJdGVtKTtcbiAgICAgIHRyaWdnZXJJdGVtLnRlYW09dGhpcy5zZWxlY3RlZFRlYW07XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiVGVhbSBcIit0aGlzLnNlbGVjdGVkVGVhbS5uYW1lICtcIiBcIisgdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVyc1RvU3RyaW5nKCkgKTtcbiAgfVxuICBcbiAgcHVibGljIG9uSXRlbURlc2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICB2YXIgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxQbGF5ZXI+O1xuICAgIHZhciB0cmlnZ2VySXRlbSA9IHRoaXMuX2RhdGFJdGVtcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xuICAgIFxuICAgIC8vIHJlbW92ZSBmcm9tIHRlYW0gcGxheWVyc1xuICAgIGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnMuaW5kZXhPZih0cmlnZ2VySXRlbSk7XG4gICAgdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRyaWdnZXJJdGVtLnRlYW09bnVsbDtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIlRlYW0gXCIrdGhpcy5zZWxlY3RlZFRlYW0ubmFtZSArXCIgXCIrIHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnNUb1N0cmluZygpICk7XG4gIH1cbiAgXG4gIHNlbGVjdEl0ZW1BdChpbmRleDpudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGluZyBhdDogXCIrIGluZGV4KTtcbiAgICB0aGlzLmxpc3RWaWV3Lmxpc3RWaWV3LnNlbGVjdEl0ZW1BdChpbmRleCk7XG4gIH1cbiAgXG4gIHJhZExpc3RMb2FkZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAvLyB2YXIgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAvLyBjb25zb2xlLmxvZyhcInJhZGxpc3RMb2FkZWRcIik7XG4gICAgXG4gICAgLy8gLy8gYmFzZWQgb24gdGhlIGlzU2VsZWN0ZWQgcHJvcGVydHkgaW4gaXRlbS5zZXJ2aWNlLnRzXG4gICAgLy8gZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2RhdGFJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAvLyAgIHZhciBpdGVtOlBsYXllciA9IHRoaXMuX2RhdGFJdGVtcy5nZXRJdGVtKGluZGV4KTtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbS5pc1NlbGVjdGVkOiBcIiArIHRoaXMuX2RhdGFJdGVtc1tpbmRleF0ubmFtZSk7XG4gICAgLy8gICAvLyBpZiAoaXRlbS5pc1NlbGVjdGVkKSB7XG4gICAgLy8gICAgIGxpc3RWaWV3LnNlbGVjdEl0ZW1BdChpbmRleCk7XG4gICAgLy8gICAvLyB9XG4gICAgLy8gfVxuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInN1YmplY3RTZWxlY3RvclwiXSk7XG4gIH1cbiAgXG59ICBcbiJdfQ==