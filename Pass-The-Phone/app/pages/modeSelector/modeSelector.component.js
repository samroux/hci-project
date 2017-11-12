"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var ModeSelectorComponent = /** @class */ (function () {
    function ModeSelectorComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
        this.rdp = roundDataProvider;
        this.playersName = roundDataProvider.group.playersName;
        this.groupName = roundDataProvider.group.name;
    }
    ModeSelectorComponent.prototype.ngOnInit = function () {
        this.progressValue = 40;
    };
    ModeSelectorComponent.prototype.individualPlay = function () {
        this.rdp.gameMode = "individual";
        this.next("individual");
    };
    ModeSelectorComponent.prototype.teamPlay = function () {
        var teamCount = this.roundDataProvider.calculateTeamCount();
        if (teamCount > 1) {
            this.rdp.gameMode = "team";
            this.next("team");
        }
        else {
            var options = {
                title: "Error",
                message: "Team play is not allowed given the number of players",
                okButtonText: "OK"
            };
            alert(options);
        }
    };
    ModeSelectorComponent.prototype.next = function (mode) {
        if (mode == "team") {
            this.router.navigate(["teamBuilder"]);
        }
        else {
            this.router.navigate(["subjectSelector"]);
        }
    };
    ModeSelectorComponent = __decorate([
        core_1.Component({
            selector: "modeSelector",
            templateUrl: "pages/modeSelector/modeSelector.html",
            styleUrls: ["pages/modeSelector/modeSelector-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], ModeSelectorComponent);
    return ModeSelectorComponent;
}());
exports.ModeSelectorComponent = ModeSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZVNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBSXpDLGdGQUE0RTtBQVM1RTtJQVVFLCtCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3JGLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsWUFBWSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLFNBQVMsR0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxRCxFQUFFLENBQUEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLE9BQU8sR0FBRztnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsc0RBQXNEO2dCQUMvRCxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDO1lBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRU8sb0NBQUksR0FBWixVQUFhLElBQUk7UUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDdkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7UUFDM0MsQ0FBQztJQUNILENBQUM7SUEvQ1UscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO1NBQzFELENBQUM7eUNBWW1DLGVBQU0sRUFBNkIsc0NBQWlCO09BVjVFLHFCQUFxQixDQWdEakM7SUFBRCw0QkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1vZGVTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tb2RlU2VsZWN0b3IvbW9kZVNlbGVjdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tb2RlU2VsZWN0b3IvbW9kZVNlbGVjdG9yLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNb2RlU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgcHJpdmF0ZSBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7IFxuICBcbiAgcHJpdmF0ZSBwbGF5ZXJzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGdyb3VwTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHJkcDogUm91bmREYXRhUHJvdmlkZXI7IFxuICBcbiAgXG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHtcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuICAgIHRoaXMucGxheWVyc05hbWUgPSByb3VuZERhdGFQcm92aWRlci5ncm91cC5wbGF5ZXJzTmFtZTtcbiAgICB0aGlzLmdyb3VwTmFtZSA9IHJvdW5kRGF0YVByb3ZpZGVyLmdyb3VwLm5hbWU7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gNDA7ICAgIFxuICB9XG4gIFxuICBpbmRpdmlkdWFsUGxheSgpIHtcbiAgICB0aGlzLnJkcC5nYW1lTW9kZT1cImluZGl2aWR1YWxcIjtcbiAgICB0aGlzLm5leHQoXCJpbmRpdmlkdWFsXCIpO1xuICB9XG4gIFxuICB0ZWFtUGxheSgpIHtcbiAgICBsZXQgdGVhbUNvdW50PXRoaXMucm91bmREYXRhUHJvdmlkZXIuY2FsY3VsYXRlVGVhbUNvdW50KCk7XG4gICAgXG4gICAgaWYodGVhbUNvdW50ID4gMSl7XG4gICAgICB0aGlzLnJkcC5nYW1lTW9kZT1cInRlYW1cIjtcbiAgICAgIHRoaXMubmV4dChcInRlYW1cIik7XG4gICAgfWVsc2V7XG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgbWVzc2FnZTogXCJUZWFtIHBsYXkgaXMgbm90IGFsbG93ZWQgZ2l2ZW4gdGhlIG51bWJlciBvZiBwbGF5ZXJzXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICB9O1xuICAgICAgYWxlcnQob3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIG5leHQobW9kZSkge1xuICAgIGlmKG1vZGUgPT0gXCJ0ZWFtXCIpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGVhbUJ1aWxkZXJcIl0pXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdWJqZWN0U2VsZWN0b3JcIl0pXG4gICAgfVxuICB9XG59XG4iXX0=