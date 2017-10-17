"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
require("nativescript-pro-ui/listview/angular");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var TeamBuilderComponent = /** @class */ (function () {
    function TeamBuilderComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
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
        this.progressValue = 60;
        this._dataItems = new observable_array_1.ObservableArray(this.roundDataProvider.players);
        this._selectedItems = "No Selected items.";
    };
    TeamBuilderComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var selectedTitles = "Selected items: ";
        for (var i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i].name;
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        this._selectedItems = selectedTitles;
        console.log("Item selected. " + selectedTitles);
    };
    TeamBuilderComponent.prototype.onItemDeselected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        if (selectedItems.length > 0) {
            var selectedTitles = "Selected items: ";
            for (var i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i].name;
                if (i < selectedItems.length - 1) {
                    selectedTitles += ", ";
                }
            }
            this._selectedItems = selectedTitles;
        }
        else {
            this._selectedItems = "No Selected items.";
        }
        console.log("Item deselected. " + selectedTitles);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbUJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbUJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QywyRUFBa0c7QUFFbEcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFHaEQsZ0ZBQTRFO0FBVTVFO0lBS0UsOEJBQTJCLE1BQWMsRUFBVSxpQkFBb0M7UUFBNUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBRTNGLHNCQUFJLDJDQUFTO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFhO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDN0MsQ0FBQztJQUVPLDZDQUFjLEdBQXRCLFVBQXVCLElBQXVCO1FBQzVDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFxQixDQUFDO1FBQzFDLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBbUIsQ0FBQztRQUNqRSxJQUFJLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQztRQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxjQUFjLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUV4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxjQUFjLElBQUksSUFBSSxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRSxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sK0NBQWdCLEdBQXhCLFVBQXlCLElBQXVCO1FBQzlDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFxQixDQUFDO1FBQzFDLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBbUIsQ0FBQztRQUNqRSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxjQUFjLEdBQUcsa0JBQWtCLENBQUM7WUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlDLGNBQWMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUV4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxjQUFjLElBQUksSUFBSSxDQUFDO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7UUFDN0MsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUUsY0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBNURVLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztTQUN4RCxDQUFDO3lDQU9tQyxlQUFNLEVBQTZCLHNDQUFpQjtPQUw1RSxvQkFBb0IsQ0E4RGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTlERCxJQThEQztBQTlEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiKTtcblxuXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcbmltcG9ydCB7VGVhbX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWFtXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRlYW1CdWlsZGVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RlYW1CdWlsZGVyL3RlYW1CdWlsZGVyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90ZWFtQnVpbGRlci90ZWFtQnVpbGRlci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgVGVhbUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PFBsYXllcj47XG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbXM6IHN0cmluZztcbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgIFxuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuICBcbiAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8UGxheWVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgfVxuICBcbiAgZ2V0IHNlbGVjdGVkSXRlbXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtcztcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gNjA7XG4gICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLnBsYXllcnMpO1xuICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBcIk5vIFNlbGVjdGVkIGl0ZW1zLlwiO1xuICB9XG4gIFxuICBwcml2YXRlIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgdmFyIGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgdmFyIHNlbGVjdGVkSXRlbXMgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgQXJyYXk8UGxheWVyPjtcbiAgICB2YXIgc2VsZWN0ZWRUaXRsZXMgPSBcIlNlbGVjdGVkIGl0ZW1zOiBcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlbGVjdGVkVGl0bGVzICs9IHNlbGVjdGVkSXRlbXNbaV0ubmFtZTtcbiAgICAgIFxuICAgICAgaWYgKGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgc2VsZWN0ZWRUaXRsZXMgKz0gXCIsIFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRUaXRsZXM7XG4gICAgY29uc29sZS5sb2coXCJJdGVtIHNlbGVjdGVkLiBcIisgc2VsZWN0ZWRUaXRsZXMpO1xuICB9XG4gIFxuICBwcml2YXRlIG9uSXRlbURlc2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICB2YXIgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxQbGF5ZXI+O1xuICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBzZWxlY3RlZFRpdGxlcyA9IFwiU2VsZWN0ZWQgaXRlbXM6IFwiO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGVjdGVkVGl0bGVzICs9IHNlbGVjdGVkSXRlbXNbaV0ubmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmIChpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc2VsZWN0ZWRUaXRsZXMgKz0gXCIsIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBzZWxlY3RlZFRpdGxlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFwiTm8gU2VsZWN0ZWQgaXRlbXMuXCI7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiSXRlbSBkZXNlbGVjdGVkLiBcIisgc2VsZWN0ZWRUaXRsZXMpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdWJqZWN0U2VsZWN0b3JcIl0pXG4gIH1cbiAgXG59ICBcbiJdfQ==