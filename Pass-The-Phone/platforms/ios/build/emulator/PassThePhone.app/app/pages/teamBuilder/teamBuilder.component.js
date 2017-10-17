"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
// import {ListViewEventData} from ""
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var TeamBuilderComponent = /** @class */ (function () {
    function TeamBuilderComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
    }
    TeamBuilderComponent.prototype.ngOnInit = function () {
        this.progressValue = 60;
        this._dataItems = new observable_array_1.ObservableArray(this.roundDataProvider.players);
        this._selectedItems = "No Selected items.";
    };
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
    // public onItemSelected(args: ListViewEventData) {
    //   var listview = args.object as RadListView;
    //   var selectedItems = listview.getSelectedItems() as Array<Player>;
    //   var selectedTitles = "Selected items: ";
    //   for (var i = 0; i < selectedItems.length; i++) {
    //     selectedTitles += selectedItems[i].name;
    //     if (i < selectedItems.length - 1) {
    //       selectedTitles += ", ";
    //     }
    //   }
    //   this._selectedItems = selectedTitles;
    //   console.log("Item selected.");
    // }
    // public onItemDeselected(args: ListViewEventData) {
    //   var listview = args.object as RadListView;
    //   var selectedItems = listview.getSelectedItems() as Array<Player>;
    //   if (selectedItems.length > 0) {
    //     var selectedTitles = "Selected items: ";
    //     for (var i = 0; i < selectedItems.length; i++) {
    //       selectedTitles += selectedItems[i].name;
    //       if (i < selectedItems.length - 1) {
    //         selectedTitles += ", ";
    //       }
    //     }
    //     this._selectedItems = selectedTitles;
    //   } else {
    //     this._selectedItems = "No Selected items.";
    //   }
    //   console.log("Item deselected.");
    // }
    TeamBuilderComponent.prototype.next = function () {
        this.router.navigate(["subjectSelector"]);
    };
    TeamBuilderComponent = __decorate([
        core_1.Component({
            selector: "teamBuilder",
            templateUrl: "pages/teamBuilder/teamBuilder.html",
            styleUrls: ["pages/teamBuilder/teamBuilder-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], TeamBuilderComponent);
    return TeamBuilderComponent;
}());
exports.TeamBuilderComponent = TeamBuilderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbUJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbUJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QywyRUFBa0c7QUFDbEcscUNBQXFDO0FBRXJDLGdGQUE0RTtBQVU1RTtJQU1FLDhCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQUUzRix1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDN0MsQ0FBQztJQUVELHNCQUFJLDJDQUFTO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFhO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxtREFBbUQ7SUFDbkQsK0NBQStDO0lBQy9DLHNFQUFzRTtJQUN0RSw2Q0FBNkM7SUFDN0MscURBQXFEO0lBQ3JELCtDQUErQztJQUUvQywwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLFFBQVE7SUFDUixNQUFNO0lBRU4sMENBQTBDO0lBQzFDLG1DQUFtQztJQUNuQyxJQUFJO0lBRUoscURBQXFEO0lBQ3JELCtDQUErQztJQUMvQyxzRUFBc0U7SUFDdEUsb0NBQW9DO0lBQ3BDLCtDQUErQztJQUMvQyx1REFBdUQ7SUFDdkQsaURBQWlEO0lBRWpELDRDQUE0QztJQUM1QyxrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLFFBQVE7SUFFUiw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCxNQUFNO0lBRU4scUNBQXFDO0lBQ3JDLElBQUk7SUFJSixtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQS9EVSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7U0FDeEQsQ0FBQzt5Q0FRbUMsZUFBTSxFQUE2QixzQ0FBaUI7T0FONUUsb0JBQW9CLENBZ0VoQztJQUFELDJCQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5LCBDaGFuZ2VkRGF0YSwgQ2hhbmdlVHlwZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuLy8gaW1wb3J0IHtMaXN0Vmlld0V2ZW50RGF0YX0gZnJvbSBcIlwiXG5cbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuaW1wb3J0IHtUZWFtfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlYW1cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGVhbUJ1aWxkZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdGVhbUJ1aWxkZXIvdGVhbUJ1aWxkZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RlYW1CdWlsZGVyL3RlYW1CdWlsZGVyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUZWFtQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8UGxheWVyPjtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtczogc3RyaW5nO1xuICBcbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgIFxuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuICBcbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSA2MDtcbiAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMucm91bmREYXRhUHJvdmlkZXIucGxheWVycyk7XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFwiTm8gU2VsZWN0ZWQgaXRlbXMuXCI7XG4gIH1cbiAgXG4gIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PFBsYXllcj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gIH1cbiAgXG4gIGdldCBzZWxlY3RlZEl0ZW1zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbXM7XG4gIH1cbiAgXG4gIC8vIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAvLyAgIHZhciBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAvLyAgIHZhciBzZWxlY3RlZEl0ZW1zID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIEFycmF5PFBsYXllcj47XG4gIC8vICAgdmFyIHNlbGVjdGVkVGl0bGVzID0gXCJTZWxlY3RlZCBpdGVtczogXCI7XG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBzZWxlY3RlZFRpdGxlcyArPSBzZWxlY3RlZEl0ZW1zW2ldLm5hbWU7XG4gICAgICBcbiAgLy8gICAgIGlmIChpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gIC8vICAgICAgIHNlbGVjdGVkVGl0bGVzICs9IFwiLCBcIjtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gICAgXG4gIC8vICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IHNlbGVjdGVkVGl0bGVzO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiSXRlbSBzZWxlY3RlZC5cIik7XG4gIC8vIH1cbiAgXG4gIC8vIHB1YmxpYyBvbkl0ZW1EZXNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gIC8vICAgdmFyIGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gIC8vICAgdmFyIHNlbGVjdGVkSXRlbXMgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgQXJyYXk8UGxheWVyPjtcbiAgLy8gICBpZiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gIC8vICAgICB2YXIgc2VsZWN0ZWRUaXRsZXMgPSBcIlNlbGVjdGVkIGl0ZW1zOiBcIjtcbiAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBzZWxlY3RlZEl0ZW1zW2ldLm5hbWU7XG4gICAgICAgIFxuICAvLyAgICAgICBpZiAoaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSkge1xuICAvLyAgICAgICAgIHNlbGVjdGVkVGl0bGVzICs9IFwiLCBcIjtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAgICAgXG4gIC8vICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRUaXRsZXM7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBcIk5vIFNlbGVjdGVkIGl0ZW1zLlwiO1xuICAvLyAgIH1cbiAgICBcbiAgLy8gICBjb25zb2xlLmxvZyhcIkl0ZW0gZGVzZWxlY3RlZC5cIik7XG4gIC8vIH1cbiAgXG4gIFxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdWJqZWN0U2VsZWN0b3JcIl0pXG4gIH1cbn1cblxuIl19