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
        this.router.navigate(["subjectSelector", ""]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbUJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbUJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNGO0FBQ3RGLDBDQUF5QztBQUN6QywyRUFBa0c7QUFFbEcsa0RBQWtFO0FBQ2xFLGdFQUE0RTtBQUc1RSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUdoRCxnRkFBNEU7QUFDNUUsMENBQXVDO0FBV3ZDO0lBa0JFLDhCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBYi9FLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFakMscUJBQXFCO1FBQ2IsWUFBTyxHQUE0QixFQUFFLENBQUM7UUFDOUMsbUNBQW1DO1FBQzNCLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBR3hCLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFNdEIsQ0FBQztJQUtELHNCQUFJLDJDQUFTO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFhO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxH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QUVELDRDQUFhLEdBQWIsVUFBYyxJQUF1QjtRQUNuQyw4QkFBOEI7UUFDOUIsZ0NBQWdDO1FBRWhDLHlEQUF5RDtRQUN6RCxpRUFBaUU7UUFDakUsc0RBQXNEO1FBQ3RELHVFQUF1RTtRQUN2RSw4QkFBOEI7UUFDOUIsb0NBQW9DO1FBQ3BDLFNBQVM7UUFDVCxJQUFJO0lBQ04sQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXJIMkI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQVcsOEJBQW9COzBEQUFDO0lBckJoRCxvQkFBb0I7UUFSaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7WUFDdkQsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FFaEQsQ0FBQzt5Q0FvQm1DLGVBQU0sRUFBNkIsc0NBQWlCO09BbEI1RSxvQkFBb0IsQ0E0SWhDO0lBQUQsMkJBQUM7Q0FBQSxBQTVJRCxJQTRJQztBQTVJWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgSXRlbUV2ZW50QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIlxuXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCIpO1xuXG5cbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuaW1wb3J0IHtUZWFtfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlYW1cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGVhbUJ1aWxkZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdGVhbUJ1aWxkZXIvdGVhbUJ1aWxkZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RlYW1CdWlsZGVyL3RlYW1CdWlsZGVyLWNvbW1vbi5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG4gIFxufSlcblxuZXhwb3J0IGNsYXNzIFRlYW1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAvLyBMaXN0VmlldyBvZiBwbGF5ZXJzXG4gIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PFBsYXllcj47XG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbXM6IHN0cmluZztcbiAgcHJpdmF0ZSBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7IFxuICBwcml2YXRlIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTsgXG4gIFxuICAvLyBUZWFtIFNlZ21lbnRlZCBCYXJcbiAgcHJpdmF0ZSBteUl0ZW1zOiBBcnJheTxTZWdtZW50ZWRCYXJJdGVtPiA9IFtdO1xuICAvLyBwcml2YXRlIHByb3A6IHN0cmluZyA9IFwiSXRlbSAxXCI7XG4gIHByaXZhdGUgdGVhbXM6IEFycmF5PFRlYW0+ID0gW107XG4gIHByaXZhdGUgc2VsZWN0ZWRUZWFtOiBUZWFtO1xuICBcbiAgcHJpdmF0ZSB0ZWFtQ291bnQgPSAwO1xuICBwcml2YXRlIHBsYXllclBlcnRlYW07XG4gIFxuICBcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikgeyAgICBcbiAgfVxuICBcbiAgQFZpZXdDaGlsZCgnbXlSYWRMaXN0VmlldycpIGxpc3RWaWV3OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcbiAgXG4gIFxuICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxQbGF5ZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICB9XG4gIFxuICBnZXQgc2VsZWN0ZWRJdGVtcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW1zO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0XCIpO1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDYwO1xuICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5yb3VuZERhdGFQcm92aWRlci5wbGF5ZXJzKTtcblxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVyc1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTwgdGhpcy5fZGF0YUl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGFJdGVtcy5nZXRJdGVtKGkpLm5hbWUpO1xuICAgIH1cbiAgICAgIFxuXG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFwiTm8gU2VsZWN0ZWQgaXRlbXMuXCI7XG4gICAgdGhpcy5sb2FkU2VnbWVudEJhcigpO1xuICAgIC8vIHRoaXMuc2VsZWN0SXRlbUF0KDEpO1xuICB9XG4gIFxuICBwcml2YXRlIGxvYWRTZWdtZW50QmFyKCl7XG4gICAgdGhpcy50ZWFtQ291bnQ9dGhpcy5yb3VuZERhdGFQcm92aWRlci5jYWxjdWxhdGVUZWFtQ291bnQoKTtcbiAgICBjb25zb2xlLmxvZyhcInRlYW1Db3VudCBcIit0aGlzLnRlYW1Db3VudCk7XG4gICAgXG4gICAgaWYodGhpcy50ZWFtQ291bnQgPiAxKXtcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy50ZWFtQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgaXRlbS50aXRsZSA9IFwiVGVhbSBcIiArIGk7XG4gICAgICAgIHRoaXMubXlJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50ZWFtcy5wdXNoKG5ldyBUZWFtKGl0ZW0udGl0bGUsW10pKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGxheWVyUGVydGVhbSA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVycy5sZW5ndGgvdGhpcy50ZWFtQ291bnQ7XG4gICAgICB0aGlzLnNlbGVjdGVkVGVhbSA9IHRoaXMudGVhbXNbMF07XG4gICAgICBcbiAgICB9ZWxzZXtcbiAgICAgIC8vIGFsZXJ0KFwiTnVtYmVyIG9mIHBsYXllcnMgZG9uJ3QgYWxsb3cgdGVhbSBjcmVhdGlvblwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIHBsYXllcnMgZG9uJ3QgYWxsb3cgdGVhbSBjcmVhdGlvblwiKTtcbiAgICB9XG4gICAgXG4gIH1cbiAgXG4gIHB1YmxpYyBvblNlbGVjdGVkSW5kZXhDaGFuZ2UoYXJncykge1xuICAgIGxldCBzZWdtZXRlZEJhciA9IDxTZWdtZW50ZWRCYXI+YXJncy5vYmplY3Q7XG4gICAgdGhpcy5zZWxlY3RlZFRlYW0gPSB0aGlzLnRlYW1zW3NlZ21ldGVkQmFyLnNlbGVjdGVkSW5kZXhdO1xuICAgIC8vIGxpc3Qgb25seSBwbGF5ZXJzIG5vdCBhc3NvY2lhdGVkIHdpdGggdGVhbSBhbmQgb25lIGFscmVhZHkgaW4gdGhhdCB0ZWFtXG4gICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdldEV4aXN0aW5nQW5kUmVtYWluaW5nUGxheWVycyh0aGlzLnNlbGVjdGVkVGVhbSkpO1xuICAgIFxuICAgIC8vIG5vdyBtYXJrIHRoZSBleGlzdGluZyBhcyBzZWxlY3RlZFxuICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzLmxlbmd0aDsgaSsrICl7XG4gICAgLy8gICBsZXQgaW5kZXggPSB0aGlzLl9kYXRhSXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzW2ldKTtcbiAgICAgIFxuICAgIC8vICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyAgIHRoaXMuc2VsZWN0SXRlbUF0KGluZGV4KTtcbiAgICAvLyAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCB0ZWFtOlwiICsgdGhpcy5zZWxlY3RlZFRlYW0ubmFtZSApOyAgICAgXG4gIH1cbiAgXG4gIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIHZhciBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgIHZhciBzZWxlY3RlZEl0ZW1zID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIEFycmF5PFBsYXllcj47XG4gICAgdmFyIHRyaWdnZXJJdGVtID0gdGhpcy5fZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCk7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJPbkl0ZW1TZWxlY3RlZC5cIik7XG4gICAgXG4gICAgLy8gcHVzaCBpbnRvIHBsYXllcnMgbGFzdCBhZGRlZCBwbGF5ZXJcbiAgICBpZighdGhpcy5sb2FkaW5nKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnMucHVzaCh0cmlnZ2VySXRlbSk7XG4gICAgICB0cmlnZ2VySXRlbS50ZWFtPXRoaXMuc2VsZWN0ZWRUZWFtO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIlRlYW0gXCIrdGhpcy5zZWxlY3RlZFRlYW0ubmFtZSArXCIgXCIrIHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnNUb1N0cmluZygpICk7XG4gIH1cbiAgXG4gIHB1YmxpYyBvbkl0ZW1EZXNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgdmFyIGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgdmFyIHNlbGVjdGVkSXRlbXMgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgQXJyYXk8UGxheWVyPjtcbiAgICB2YXIgdHJpZ2dlckl0ZW0gPSB0aGlzLl9kYXRhSXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcbiAgICBcbiAgICAvLyByZW1vdmUgZnJvbSB0ZWFtIHBsYXllcnNcbiAgICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzLmluZGV4T2YodHJpZ2dlckl0ZW0pO1xuICAgIHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0cmlnZ2VySXRlbS50ZWFtPW51bGw7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJUZWFtIFwiK3RoaXMuc2VsZWN0ZWRUZWFtLm5hbWUgK1wiIFwiKyB0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzVG9TdHJpbmcoKSApO1xuICB9XG4gIFxuICBzZWxlY3RJdGVtQXQoaW5kZXg6bnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RpbmcgYXQ6IFwiKyBpbmRleCk7XG4gICAgdGhpcy5saXN0Vmlldy5saXN0Vmlldy5zZWxlY3RJdGVtQXQoaW5kZXgpO1xuICB9XG4gIFxuICByYWRMaXN0TG9hZGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgLy8gdmFyIGxpc3RWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgLy8gY29uc29sZS5sb2coXCJyYWRsaXN0TG9hZGVkXCIpO1xuICAgIFxuICAgIC8vIC8vIGJhc2VkIG9uIHRoZSBpc1NlbGVjdGVkIHByb3BlcnR5IGluIGl0ZW0uc2VydmljZS50c1xuICAgIC8vIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9kYXRhSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgLy8gICB2YXIgaXRlbTpQbGF5ZXIgPSB0aGlzLl9kYXRhSXRlbXMuZ2V0SXRlbShpbmRleCk7XG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhcIml0ZW0uaXNTZWxlY3RlZDogXCIgKyB0aGlzLl9kYXRhSXRlbXNbaW5kZXhdLm5hbWUpO1xuICAgIC8vICAgLy8gaWYgKGl0ZW0uaXNTZWxlY3RlZCkge1xuICAgIC8vICAgICBsaXN0Vmlldy5zZWxlY3RJdGVtQXQoaW5kZXgpO1xuICAgIC8vICAgLy8gfVxuICAgIC8vIH1cbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdWJqZWN0U2VsZWN0b3JcIixcIlwiXSk7XG4gIH1cbiAgXG59ICBcbiJdfQ==