"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TeamBuilderComponent = /** @class */ (function () {
    function TeamBuilderComponent(router) {
        this.router = router;
    }
    TeamBuilderComponent.prototype.ngOnInit = function () {
        this.progressValue = 60;
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
        __metadata("design:paramtypes", [router_1.Router])
    ], TeamBuilderComponent);
    return TeamBuilderComponent;
}());
exports.TeamBuilderComponent = TeamBuilderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbUJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbUJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQVF6QztJQUlFLDhCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFN0MsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBRTFCLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQWJVLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztTQUN4RCxDQUFDO3lDQU1tQyxlQUFNO09BSjlCLG9CQUFvQixDQWNoQztJQUFELDJCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGVhbUJ1aWxkZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdGVhbUJ1aWxkZXIvdGVhbUJ1aWxkZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RlYW1CdWlsZGVyL3RlYW1CdWlsZGVyLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUZWFtQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyOyAgXG4gICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gNjA7XG4gICAgXG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3ViamVjdFNlbGVjdG9yXCJdKVxuICB9XG59XG5cbiJdfQ==