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
        this.playersName = this.roundDataProvider.group.playersName;
        this.groupName = this.roundDataProvider.group.name;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZVNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBSXpDLGdGQUE0RTtBQVM1RTtJQVNFLCtCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQUUzRix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBRXJELENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVPLG9DQUFJLEdBQVosVUFBYSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBbENVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQztTQUMxRCxDQUFDO3lDQVdtQyxlQUFNLEVBQTZCLHNDQUFpQjtPQVQ1RSxxQkFBcUIsQ0FtQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcInVpL3Byb2dyZXNzXCI7XG5cbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtb2RlU2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbW9kZVNlbGVjdG9yL21vZGVTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbW9kZVNlbGVjdG9yL21vZGVTZWxlY3Rvci1jb21tb24uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgTW9kZVNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHByb2dyZXNzVmFsdWU6IG51bWJlcjsgXG5cbiAgcHJpdmF0ZSBwbGF5ZXJzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGdyb3VwTmFtZTogc3RyaW5nOyBcbiAgXG4gIFxuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gNDA7XG4gICAgdGhpcy5wbGF5ZXJzTmFtZSA9IHRoaXMucm91bmREYXRhUHJvdmlkZXIuZ3JvdXAucGxheWVyc05hbWU7XG4gICAgdGhpcy5ncm91cE5hbWUgPSB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdyb3VwLm5hbWU7XG4gICAgXG4gIH1cblxuICBpbmRpdmlkdWFsUGxheSgpIHtcbiAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdhbWVNb2RlPVwiaW5kaXZpZHVhbFwiO1xuICAgIHRoaXMubmV4dChcImluZGl2aWR1YWxcIik7XG4gIH1cblxuICB0ZWFtUGxheSgpIHtcbiAgICB0aGlzLnJvdW5kRGF0YVByb3ZpZGVyLmdhbWVNb2RlPVwidGVhbVwiO1xuICAgIHRoaXMubmV4dChcInRlYW1cIik7XG4gIH1cblxuICBwcml2YXRlIG5leHQobW9kZSkge1xuICAgIGlmKG1vZGUgPT0gXCJ0ZWFtXCIpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGVhbUJ1aWxkZXJcIl0pXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdWJqZWN0U2VsZWN0b3JcIl0pXG4gICAgfVxuICB9XG59XG4iXX0=