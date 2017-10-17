"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var ModeSelectorComponent = /** @class */ (function () {
    function ModeSelectorComponent(router, roundDataProvider) {
        this.router = router;
        this.roundDataProvider = roundDataProvider;
    }
    ModeSelectorComponent.prototype.ngOnInit = function () {
        this.progressValue = 40;
    };
    ModeSelectorComponent.prototype.individualPlay = function () {
        this.roundDataProvider.gameMode = "individual";
        this.next("individual");
    };
    ModeSelectorComponent.prototype.teamPlay = function () {
        this.roundDataProvider.gameMode = "team";
        this.next("team");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZVNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBSXpDLGdGQUE0RTtBQVM1RTtJQUlFLCtCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQUUzRix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDhDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU8sb0NBQUksR0FBWixVQUFhLElBQUk7UUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDdkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7UUFDM0MsQ0FBQztJQUNILENBQUM7SUExQlUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO1NBQzFELENBQUM7eUNBTW1DLGVBQU0sRUFBNkIsc0NBQWlCO09BSjVFLHFCQUFxQixDQTJCakM7SUFBRCw0QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1vZGVTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tb2RlU2VsZWN0b3IvbW9kZVNlbGVjdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tb2RlU2VsZWN0b3IvbW9kZVNlbGVjdG9yLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNb2RlU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7ICBcbiAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikge31cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDQwO1xuICB9XG5cbiAgaW5kaXZpZHVhbFBsYXkoKSB7XG4gICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5nYW1lTW9kZT1cImluZGl2aWR1YWxcIjtcbiAgICB0aGlzLm5leHQoXCJpbmRpdmlkdWFsXCIpO1xuICB9XG5cbiAgdGVhbVBsYXkoKSB7XG4gICAgdGhpcy5yb3VuZERhdGFQcm92aWRlci5nYW1lTW9kZT1cInRlYW1cIjtcbiAgICB0aGlzLm5leHQoXCJ0ZWFtXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KG1vZGUpIHtcbiAgICBpZihtb2RlID09IFwidGVhbVwiKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRlYW1CdWlsZGVyXCJdKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCJdKVxuICAgIH1cbiAgfVxufVxuIl19