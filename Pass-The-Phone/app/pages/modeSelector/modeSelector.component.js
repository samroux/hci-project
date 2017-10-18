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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZVNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBSXpDLGdGQUE0RTtBQVM1RTtJQVVFLCtCQUEyQixNQUFjLEVBQVUsaUJBQW9DO1FBQTVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3JGLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDhDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxZQUFZLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTyxvQ0FBSSxHQUFaLFVBQWEsSUFBSTtRQUNmLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQXJDVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7U0FDMUQsQ0FBQzt5Q0FZbUMsZUFBTSxFQUE2QixzQ0FBaUI7T0FWNUUscUJBQXFCLENBc0NqQztJQUFELDRCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibW9kZVNlbGVjdG9yXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21vZGVTZWxlY3Rvci9tb2RlU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL21vZGVTZWxlY3Rvci9tb2RlU2VsZWN0b3ItY29tbW9uLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGVTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7IFxuXG4gIHByaXZhdGUgcGxheWVyc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBncm91cE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZHA6IFJvdW5kRGF0YVByb3ZpZGVyOyBcbiAgXG4gIFxuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7XG4gICAgdGhpcy5yZHAgPSByb3VuZERhdGFQcm92aWRlcjtcbiAgICBjb25zb2xlLmxvZyhcImdyb3NcIik7XG4gICAgdGhpcy5wbGF5ZXJzTmFtZSA9IHJvdW5kRGF0YVByb3ZpZGVyLmdyb3VwLnBsYXllcnNOYW1lO1xuICAgIHRoaXMuZ3JvdXBOYW1lID0gcm91bmREYXRhUHJvdmlkZXIuZ3JvdXAubmFtZTtcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gNDA7ICAgIFxuICB9XG5cbiAgaW5kaXZpZHVhbFBsYXkoKSB7XG4gICAgdGhpcy5yZHAuZ2FtZU1vZGU9XCJpbmRpdmlkdWFsXCI7XG4gICAgdGhpcy5uZXh0KFwiaW5kaXZpZHVhbFwiKTtcbiAgfVxuXG4gIHRlYW1QbGF5KCkge1xuICAgIHRoaXMucmRwLmdhbWVNb2RlPVwidGVhbVwiO1xuICAgIHRoaXMubmV4dChcInRlYW1cIik7XG4gIH1cblxuICBwcml2YXRlIG5leHQobW9kZSkge1xuICAgIGlmKG1vZGUgPT0gXCJ0ZWFtXCIpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGVhbUJ1aWxkZXJcIl0pXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzdWJqZWN0U2VsZWN0b3JcIl0pXG4gICAgfVxuICB9XG59XG4iXX0=