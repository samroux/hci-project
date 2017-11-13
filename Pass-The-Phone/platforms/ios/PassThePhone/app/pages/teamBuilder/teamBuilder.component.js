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
        //this.listView.nativeElement.getItemAtIndex(0).isEnabled = false;
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
        console.log(this.selectedTeam.name);
        // list only players not associated with team and one already in that team
        this._dataItems = new observable_array_1.ObservableArray(this.roundDataProvider.getExistingAndRemainingPlayers(this.selectedTeam));
        /*this.roundDataProvider.getPlayersInTeam(this.selectedTeam).forEach(player => {
          this._dataItems.push(player);
        });
        this.listView.nativeElement.selectItemAt(0);*/
        //console.log("selected team:" + this.selectedTeam.name );     
    };
    TeamBuilderComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var triggerItem = this._dataItems.getItem(args.index);
        // push into players last added player
        if (this.selectedTeam.players.indexOf(triggerItem) > -1 && triggerItem.isSelected) {
            console.log("remove selected");
            triggerItem.isSelected = false;
            var index = this.selectedTeam.players.indexOf(triggerItem, 0);
            if (index > -1) {
                console.log("removed selected");
                this.selectedTeam.players.splice(index, 1);
                triggerItem.team = null;
                listview.deselectItemAt(args.index);
            }
        }
        else if (this.selectedTeam.players.length < this.playerPerteam) {
            console.log("item added");
            this.selectedTeam.players.push(triggerItem);
            triggerItem.team = this.selectedTeam;
        }
        else {
            listview.deselectItemAt(args.index);
        }
        //console.log("Team "+this.selectedTeam.name +" "+ this.selectedTeam.playersToString() );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbUJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbUJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNGO0FBQ3RGLDBDQUF5QztBQUN6QywyRUFBa0c7QUFFbEcsa0RBQWtFO0FBQ2xFLGdFQUE0RTtBQUc1RSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUdoRCxnRkFBNEU7QUFDNUUsMENBQXVDO0FBV3ZDO0lBaUJFLDhCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBWHZGLHFCQUFxQjtRQUNiLFlBQU8sR0FBNEIsRUFBRSxDQUFDO1FBQzlDLG1DQUFtQztRQUMzQixVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUd4QixjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBTXRCLENBQUM7SUFLRCxzQkFBSSwyQ0FBUzthQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBYTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsdUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1B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QUFvQjswREFBQztJQXBCaEQsb0JBQW9CO1FBUmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO1lBQ3ZELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBRWhELENBQUM7eUNBbUJtQyxlQUFNLEVBQTZCLHNDQUFpQjtPQWpCNUUsb0JBQW9CLENBc0poQztJQUFELDJCQUFDO0NBQUEsQUF0SkQsSUFzSkM7QUF0Slksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5LCBDaGFuZ2VkRGF0YSwgQ2hhbmdlVHlwZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcbmltcG9ydCB7IFNlZ21lbnRlZEJhciwgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ1aS9zZWdtZW50ZWQtYmFyXCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IEl0ZW1FdmVudEFyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCJcblxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiKTtcblxuXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7VGVhbX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWFtXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRlYW1CdWlsZGVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RlYW1CdWlsZGVyL3RlYW1CdWlsZGVyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90ZWFtQnVpbGRlci90ZWFtQnVpbGRlci1jb21tb24uY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxuICBcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZWFtQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgLy8gTGlzdFZpZXcgb2YgcGxheWVyc1xuICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxQbGF5ZXI+O1xuICBwcml2YXRlIF9zZWxlY3RlZEl0ZW1zOiBzdHJpbmc7XG4gIHByaXZhdGUgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyOyBcbiAgXG4gIC8vIFRlYW0gU2VnbWVudGVkIEJhclxuICBwcml2YXRlIG15SXRlbXM6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+ID0gW107XG4gIC8vIHByaXZhdGUgcHJvcDogc3RyaW5nID0gXCJJdGVtIDFcIjtcbiAgcHJpdmF0ZSB0ZWFtczogQXJyYXk8VGVhbT4gPSBbXTtcbiAgcHJpdmF0ZSBzZWxlY3RlZFRlYW06IFRlYW07XG4gIFxuICBwcml2YXRlIHRlYW1Db3VudCA9IDA7XG4gIHByaXZhdGUgcGxheWVyUGVydGVhbTtcbiAgXG4gIFxuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7ICAgIFxuICB9XG4gIFxuICBAVmlld0NoaWxkKCdteVJhZExpc3RWaWV3JykgbGlzdFZpZXc6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuICBcbiAgXG4gIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PFBsYXllcj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gIH1cbiAgXG4gIGdldCBzZWxlY3RlZEl0ZW1zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbXM7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIik7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gNjA7XG4gICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMpO1xuXG4gICAgY29uc29sZS5sb2coXCJQbGF5ZXJzXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPCB0aGlzLl9kYXRhSXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0YUl0ZW1zLmdldEl0ZW0oaSkubmFtZSk7XG4gICAgfVxuICAgIC8vdGhpcy5saXN0Vmlldy5uYXRpdmVFbGVtZW50LmdldEl0ZW1BdEluZGV4KDApLmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgXG5cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gXCJObyBTZWxlY3RlZCBpdGVtcy5cIjtcbiAgICB0aGlzLmxvYWRTZWdtZW50QmFyKCk7XG4gICAgLy8gdGhpcy5zZWxlY3RJdGVtQXQoMSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgbG9hZFNlZ21lbnRCYXIoKXtcbiAgICB0aGlzLnRlYW1Db3VudD10aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmNhbGN1bGF0ZVRlYW1Db3VudCgpO1xuICAgIGNvbnNvbGUubG9nKFwidGVhbUNvdW50IFwiK3RoaXMudGVhbUNvdW50KTtcbiAgICBcbiAgICBpZih0aGlzLnRlYW1Db3VudCA+IDEpe1xuICAgICAgLy9jcmVhdGUgdGVhbXNcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMudGVhbUNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIGl0ZW0udGl0bGUgPSBcIlRlYW0gXCIgKyBpO1xuICAgICAgICB0aGlzLm15SXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgICBsZXQgbmV3VGVhbSA9IG5ldyBUZWFtKGl0ZW0udGl0bGUsW10pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50ZWFtcy5wdXNoKG5ld1RlYW0pO1xuICAgICAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnRlYW1zLnB1c2gobmV3VGVhbSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsYXllclBlcnRlYW0gPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMubGVuZ3RoL3RoaXMudGVhbUNvdW50O1xuICAgICAgdGhpcy5zZWxlY3RlZFRlYW0gPSB0aGlzLnRlYW1zWzBdO1xuICAgICAgXG4gICAgfWVsc2V7XG4gICAgICAvLyBhbGVydChcIk51bWJlciBvZiBwbGF5ZXJzIGRvbid0IGFsbG93IHRlYW0gY3JlYXRpb25cIik7XG4gICAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiBwbGF5ZXJzIGRvbid0IGFsbG93IHRlYW0gY3JlYXRpb25cIik7XG4gICAgfVxuICB9XG4gIFxuICBwdWJsaWMgb25TZWxlY3RlZEluZGV4Q2hhbmdlKGFyZ3MpIHtcbiAgICBsZXQgc2VnbWV0ZWRCYXIgPSA8U2VnbWVudGVkQmFyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuc2VsZWN0ZWRUZWFtID0gdGhpcy50ZWFtc1tzZWdtZXRlZEJhci5zZWxlY3RlZEluZGV4XTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkVGVhbS5uYW1lKVxuICAgIC8vIGxpc3Qgb25seSBwbGF5ZXJzIG5vdCBhc3NvY2lhdGVkIHdpdGggdGVhbSBhbmQgb25lIGFscmVhZHkgaW4gdGhhdCB0ZWFtXG4gICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdldEV4aXN0aW5nQW5kUmVtYWluaW5nUGxheWVycyh0aGlzLnNlbGVjdGVkVGVhbSkpO1xuICAgIC8qdGhpcy5yb3VuZERhdGFQcm92aWRlci5nZXRQbGF5ZXJzSW5UZWFtKHRoaXMuc2VsZWN0ZWRUZWFtKS5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICB0aGlzLl9kYXRhSXRlbXMucHVzaChwbGF5ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMubGlzdFZpZXcubmF0aXZlRWxlbWVudC5zZWxlY3RJdGVtQXQoMCk7Ki9cbiAgICBcbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWQgdGVhbTpcIiArIHRoaXMuc2VsZWN0ZWRUZWFtLm5hbWUgKTsgICAgIFxuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICB2YXIgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxQbGF5ZXI+O1xuICAgIHZhciB0cmlnZ2VySXRlbSA9IHRoaXMuX2RhdGFJdGVtcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xuICAgIC8vIHB1c2ggaW50byBwbGF5ZXJzIGxhc3QgYWRkZWQgcGxheWVyXG5cbiAgICBpZih0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzLmluZGV4T2YodHJpZ2dlckl0ZW0pID4gLTEgJiYgdHJpZ2dlckl0ZW0uaXNTZWxlY3RlZCl7XG4gICAgICBjb25zb2xlLmxvZyhcInJlbW92ZSBzZWxlY3RlZFwiKVxuICAgICAgdHJpZ2dlckl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVycy5pbmRleE9mKHRyaWdnZXJJdGVtLCAwKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlZCBzZWxlY3RlZFwiKVxuICAgICAgICB0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRyaWdnZXJJdGVtLnRlYW0gPSBudWxsO1xuICAgICAgICBsaXN0dmlldy5kZXNlbGVjdEl0ZW1BdChhcmdzLmluZGV4KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzLmxlbmd0aCA8IHRoaXMucGxheWVyUGVydGVhbSl7XG4gICAgICBjb25zb2xlLmxvZyhcIml0ZW0gYWRkZWRcIilcbiAgICAgIHRoaXMuc2VsZWN0ZWRUZWFtLnBsYXllcnMucHVzaCh0cmlnZ2VySXRlbSk7XG4gICAgICB0cmlnZ2VySXRlbS50ZWFtPXRoaXMuc2VsZWN0ZWRUZWFtO1xuICAgIH0gZWxzZXtcbiAgICAgIGxpc3R2aWV3LmRlc2VsZWN0SXRlbUF0KGFyZ3MuaW5kZXgpXG4gICAgfVxuICAgIFxuICAgIC8vY29uc29sZS5sb2coXCJUZWFtIFwiK3RoaXMuc2VsZWN0ZWRUZWFtLm5hbWUgK1wiIFwiKyB0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzVG9TdHJpbmcoKSApO1xuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtRGVzZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIHZhciBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgIHZhciBzZWxlY3RlZEl0ZW1zID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIEFycmF5PFBsYXllcj47XG4gICAgdmFyIHRyaWdnZXJJdGVtID0gdGhpcy5fZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCk7XG4gICAgXG4gICAgLy8gcmVtb3ZlIGZyb20gdGVhbSBwbGF5ZXJzXG4gICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVycy5pbmRleE9mKHRyaWdnZXJJdGVtKTtcbiAgICB0aGlzLnNlbGVjdGVkVGVhbS5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdHJpZ2dlckl0ZW0udGVhbT1udWxsO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiVGVhbSBcIit0aGlzLnNlbGVjdGVkVGVhbS5uYW1lICtcIiBcIisgdGhpcy5zZWxlY3RlZFRlYW0ucGxheWVyc1RvU3RyaW5nKCkgKTtcbiAgfVxuICBcbiAgc2VsZWN0SXRlbUF0KGluZGV4Om51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0aW5nIGF0OiBcIisgaW5kZXgpO1xuICAgIHRoaXMubGlzdFZpZXcubGlzdFZpZXcuc2VsZWN0SXRlbUF0KGluZGV4KTtcbiAgfVxuICBcbiAgcmFkTGlzdExvYWRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIC8vIHZhciBsaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIC8vIGNvbnNvbGUubG9nKFwicmFkbGlzdExvYWRlZFwiKTtcbiAgICBcbiAgICAvLyAvLyBiYXNlZCBvbiB0aGUgaXNTZWxlY3RlZCBwcm9wZXJ0eSBpbiBpdGVtLnNlcnZpY2UudHNcbiAgICAvLyBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZGF0YUl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIC8vICAgdmFyIGl0ZW06UGxheWVyID0gdGhpcy5fZGF0YUl0ZW1zLmdldEl0ZW0oaW5kZXgpO1xuICAgIC8vICAgLy8gY29uc29sZS5sb2coXCJpdGVtLmlzU2VsZWN0ZWQ6IFwiICsgdGhpcy5fZGF0YUl0ZW1zW2luZGV4XS5uYW1lKTtcbiAgICAvLyAgIC8vIGlmIChpdGVtLmlzU2VsZWN0ZWQpIHtcbiAgICAvLyAgICAgbGlzdFZpZXcuc2VsZWN0SXRlbUF0KGluZGV4KTtcbiAgICAvLyAgIC8vIH1cbiAgICAvLyB9XG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCJdKTtcbiAgfVxuICBcbn0gIFxuIl19