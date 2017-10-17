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
            for (var i = 1; i <= this.teamCount; i++) {
                var item = new segmented_bar_1.SegmentedBarItem();
                item.title = "Team " + i;
                this.myItems.push(item);
                this.teams.push(new team_1.Team(item.title, []));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbUJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbUJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNGO0FBQ3RGLDBDQUF5QztBQUN6QywyRUFBa0c7QUFFbEcsa0RBQWtFO0FBQ2xFLGdFQUE0RTtBQUc1RSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUdoRCxnRkFBNEU7QUFDNUUsMENBQXVDO0FBV3ZDO0lBa0JFLDhCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBYi9FLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFakMscUJBQXFCO1FBQ2IsWUFBTyxHQUE0QixFQUFFLENBQUM7UUFDOUMsbUNBQW1DO1FBQzNCLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBR3hCLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFNdEIsQ0FBQztJQUtELHNCQUFJLDJDQUFTO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFhO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxH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QUVELDRDQUFhLEdBQWIsVUFBYyxJQUF1QjtRQUNuQyw4QkFBOEI7UUFDOUIsZ0NBQWdDO1FBRWhDLHlEQUF5RDtRQUN6RCxpRUFBaUU7UUFDakUsc0RBQXNEO1FBQ3RELHVFQUF1RTtRQUN2RSw4QkFBOEI7UUFDOUIsb0NBQW9DO1FBQ3BDLFNBQVM7UUFDVCxJQUFJO0lBQ04sQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBckgyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBVyw4QkFBb0I7MERBQUM7SUFyQmhELG9CQUFvQjtRQVJoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztZQUN2RCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUVoRCxDQUFDO3lDQW9CbUMsZUFBTSxFQUE2QixzQ0FBaUI7T0FsQjVFLG9CQUFvQixDQTRJaEM7SUFBRCwyQkFBQztDQUFBLEFBNUlELElBNElDO0FBNUlZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSwgQ2hhbmdlZERhdGEsIENoYW5nZVR5cGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIsIFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidWkvc2VnbWVudGVkLWJhclwiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnRBcmdzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiXG5cbnJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIik7XG5cblxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5pbXBvcnQge1RlYW19IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVhbVwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0ZWFtQnVpbGRlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy90ZWFtQnVpbGRlci90ZWFtQnVpbGRlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdGVhbUJ1aWxkZXIvdGVhbUJ1aWxkZXItY29tbW9uLmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbiAgXG59KVxuXG5leHBvcnQgY2xhc3MgVGVhbUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIC8vIExpc3RWaWV3IG9mIHBsYXllcnNcbiAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8UGxheWVyPjtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtczogc3RyaW5nO1xuICBwcml2YXRlIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgXG4gIHByaXZhdGUgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlOyBcbiAgXG4gIC8vIFRlYW0gU2VnbWVudGVkIEJhclxuICBwcml2YXRlIG15SXRlbXM6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+ID0gW107XG4gIC8vIHByaXZhdGUgcHJvcDogc3RyaW5nID0gXCJJdGVtIDFcIjtcbiAgcHJpdmF0ZSB0ZWFtczogQXJyYXk8VGVhbT4gPSBbXTtcbiAgcHJpdmF0ZSBzZWxlY3RlZFRlYW06IFRlYW07XG4gIFxuICBwcml2YXRlIHRlYW1Db3VudCA9IDA7XG4gIHByaXZhdGUgcGxheWVyUGVydGVhbTtcbiAgXG4gIFxuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7ICAgIFxuICB9XG4gIFxuICBAVmlld0NoaWxkKCdteVJhZExpc3RWaWV3JykgbGlzdFZpZXc6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuICBcbiAgXG4gIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PFBsYXllcj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gIH1cbiAgXG4gIGdldCBzZWxlY3RlZEl0ZW1zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbXM7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIik7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gNjA7XG4gICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMpO1xuXG4gICAgY29uc29sZS5sb2coXCJQbGF5ZXJzXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPCB0aGlzLl9kYXRhSXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0YUl0ZW1zLmdldEl0ZW0oaSkubmFtZSk7XG4gICAgfVxuICAgICAgXG5cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gXCJObyBTZWxlY3RlZCBpdGVtcy5cIjtcbiAgICB0aGlzLmxvYWRTZWdtZW50QmFyKCk7XG4gICAgLy8gdGhpcy5zZWxlY3RJdGVtQXQoMSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgbG9hZFNlZ21lbnRCYXIoKXtcbiAgICB0aGlzLnRlYW1Db3VudD10aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmNhbGN1bGF0ZVRlYW1Db3VudCgpO1xuICAgIGNvbnNvbGUubG9nKFwidGVhbUNvdW50IFwiK3RoaXMudGVhbUNvdW50KTtcbiAgICBcbiAgICBpZih0aGlzLnRlYW1Db3VudCA+IDEpe1xuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnRlYW1Db3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBpdGVtLnRpdGxlID0gXCJUZWFtIFwiICsgaTtcbiAgICAgICAgdGhpcy5teUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRlYW1zLnB1c2gobmV3IFRlYW0oaXRlbS50aXRsZSxbXSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5wbGF5ZXJQZXJ0ZWFtID0gdGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzLmxlbmd0aC90aGlzLnRlYW1Db3VudDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUZWFtID0gdGhpcy50ZWFtc1swXTtcbiAgICAgIFxuICAgIH1lbHNle1xuICAgICAgLy8gYWxlcnQoXCJOdW1iZXIgb2YgcGxheWVycyBkb24ndCBhbGxvdyB0ZWFtIGNyZWF0aW9uXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJOdW1iZXIgb2YgcGxheWVycyBkb24ndCBhbGxvdyB0ZWFtIGNyZWF0aW9uXCIpO1xuICAgIH1cbiAgICBcbiAgfVxuICBcbiAgcHVibGljIG9uU2VsZWN0ZWRJbmRleENoYW5nZShhcmdzKSB7XG4gICAgbGV0IHNlZ21ldGVkQmFyID0gPFNlZ21lbnRlZEJhcj5hcmdzLm9iamVjdDtcbiAgICB0aGlzLnNlbGVjdGVkVGVhbSA9IHRoaXMudGVhbXNbc2VnbWV0ZWRCYXIuc2VsZWN0ZWRJbmRleF07XG4gICAgLy8gbGlzdCBvbmx5IHBsYXllcnMgbm90IGFzc29jaWF0ZWQgd2l0aCB0ZWFtIGFuZCBvbmUgYWxyZWFkeSBpbiB0aGF0IHRlYW1cbiAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ2V0RXhpc3RpbmdBbmRSZW1haW5pbmdQbGF5ZXJzKHRoaXMuc2VsZWN0ZWRUZWFtKSk7XG4gICAgXG4gICAgLy8gbm93IG1hcmsgdGhlIGV4aXN0aW5nIGFzIHNlbGVjdGVkXG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnMubGVuZ3RoOyBpKysgKXtcbiAgICAvLyAgIGxldCBpbmRleCA9IHRoaXMuX2RhdGFJdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnNbaV0pO1xuICAgICAgXG4gICAgLy8gICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vICAgdGhpcy5zZWxlY3RJdGVtQXQoaW5kZXgpO1xuICAgIC8vICAgdGhpcy5sb2FkaW5nPWZhbHNlO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIHRlYW06XCIgKyB0aGlzLnNlbGVjdGVkVGVhbS5uYW1lICk7ICAgICBcbiAgfVxuICBcbiAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgdmFyIGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgdmFyIHNlbGVjdGVkSXRlbXMgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgQXJyYXk8UGxheWVyPjtcbiAgICB2YXIgdHJpZ2dlckl0ZW0gPSB0aGlzLl9kYXRhSXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIk9uSXRlbVNlbGVjdGVkLlwiKTtcbiAgICBcbiAgICAvLyBwdXNoIGludG8gcGxheWVycyBsYXN0IGFkZGVkIHBsYXllclxuICAgIGlmKCF0aGlzLmxvYWRpbmcpe1xuICAgICAgdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVycy5wdXNoKHRyaWdnZXJJdGVtKTtcbiAgICAgIHRyaWdnZXJJdGVtLnRlYW09dGhpcy5zZWxlY3RlZFRlYW07XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiVGVhbSBcIit0aGlzLnNlbGVjdGVkVGVhbS5uYW1lICtcIiBcIisgdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVyc1RvU3RyaW5nKCkgKTtcbiAgfVxuICBcbiAgcHVibGljIG9uSXRlbURlc2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICB2YXIgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxQbGF5ZXI+O1xuICAgIHZhciB0cmlnZ2VySXRlbSA9IHRoaXMuX2RhdGFJdGVtcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xuICAgIFxuICAgIC8vIHJlbW92ZSBmcm9tIHRlYW0gcGxheWVyc1xuICAgIGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnMuaW5kZXhPZih0cmlnZ2VySXRlbSk7XG4gICAgdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRyaWdnZXJJdGVtLnRlYW09bnVsbDtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIlRlYW0gXCIrdGhpcy5zZWxlY3RlZFRlYW0ubmFtZSArXCIgXCIrIHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnNUb1N0cmluZygpICk7XG4gIH1cbiAgXG4gIHNlbGVjdEl0ZW1BdChpbmRleDpudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGluZyBhdDogXCIrIGluZGV4KTtcbiAgICB0aGlzLmxpc3RWaWV3Lmxpc3RWaWV3LnNlbGVjdEl0ZW1BdChpbmRleCk7XG4gIH1cbiAgXG4gIHJhZExpc3RMb2FkZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAvLyB2YXIgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAvLyBjb25zb2xlLmxvZyhcInJhZGxpc3RMb2FkZWRcIik7XG4gICAgXG4gICAgLy8gLy8gYmFzZWQgb24gdGhlIGlzU2VsZWN0ZWQgcHJvcGVydHkgaW4gaXRlbS5zZXJ2aWNlLnRzXG4gICAgLy8gZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2RhdGFJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAvLyAgIHZhciBpdGVtOlBsYXllciA9IHRoaXMuX2RhdGFJdGVtcy5nZXRJdGVtKGluZGV4KTtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbS5pc1NlbGVjdGVkOiBcIiArIHRoaXMuX2RhdGFJdGVtc1tpbmRleF0ubmFtZSk7XG4gICAgLy8gICAvLyBpZiAoaXRlbS5pc1NlbGVjdGVkKSB7XG4gICAgLy8gICAgIGxpc3RWaWV3LnNlbGVjdEl0ZW1BdChpbmRleCk7XG4gICAgLy8gICAvLyB9XG4gICAgLy8gfVxuICB9XG4gIFxuICBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInN1YmplY3RTZWxlY3RvclwiXSlcbiAgfVxuICBcbn0gIFxuIl19