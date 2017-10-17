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
        console.log("gros");
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
        this.rdp.gameMode = "team";
        this.next("team");
    };
    ModeSelectorComponent.prototype.next = function (mode) {
        if (mode == "team") {
            this.router.navigate(["teamBuilder"]);
        }
        else {
            this.router.navigate(["subjectSelector", ""]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZVNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBSXpDLGdGQUE0RTtBQVM1RTtJQVVFLCtCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3JGLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDhDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxZQUFZLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTyxvQ0FBSSxHQUFaLFVBQWEsSUFBSTtRQUNmLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFyQ1UscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO1NBQzFELENBQUM7eUNBWW1DLGVBQU0sRUFBNkIsc0NBQWlCO09BVjVFLHFCQUFxQixDQXNDakM7SUFBRCw0QkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1vZGVTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tb2RlU2VsZWN0b3IvbW9kZVNlbGVjdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tb2RlU2VsZWN0b3IvbW9kZVNlbGVjdG9yLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNb2RlU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyOyBcblxuICBwcml2YXRlIHBsYXllcnNOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgZ3JvdXBOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcmRwOiBSb3VuZERhdGFQcm92aWRlcjsgXG4gIFxuICBcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge1xuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gICAgY29uc29sZS5sb2coXCJncm9zXCIpO1xuICAgIHRoaXMucGxheWVyc05hbWUgPSByb3VuZERhdGFQcm92aWRlci5ncm91cC5wbGF5ZXJzTmFtZTtcbiAgICB0aGlzLmdyb3VwTmFtZSA9IHJvdW5kRGF0YVByb3ZpZGVyLmdyb3VwLm5hbWU7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDQwOyAgICBcbiAgfVxuXG4gIGluZGl2aWR1YWxQbGF5KCkge1xuICAgIHRoaXMucmRwLmdhbWVNb2RlPVwiaW5kaXZpZHVhbFwiO1xuICAgIHRoaXMubmV4dChcImluZGl2aWR1YWxcIik7XG4gIH1cblxuICB0ZWFtUGxheSgpIHtcbiAgICB0aGlzLnJkcC5nYW1lTW9kZT1cInRlYW1cIjtcbiAgICB0aGlzLm5leHQoXCJ0ZWFtXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KG1vZGUpIHtcbiAgICBpZihtb2RlID09IFwidGVhbVwiKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRlYW1CdWlsZGVyXCJdKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCIsIFwiXCJdKVxuICAgIH1cbiAgfVxufVxuIl19