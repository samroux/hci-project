"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var utils_1 = require("tns-core-modules/utils/utils");
var action_bar_1 = require("tns-core-modules/ui/action-bar");
var page_1 = require("tns-core-modules/ui/page");
var router_2 = require("nativescript-angular/router");
var application_1 = require("application");
var TKToggleNavButtonDirective = /** @class */ (function () {
    function TKToggleNavButtonDirective(route, page, routerExtensions) {
        this.routerExtensions = routerExtensions;
        var navigationButton = this.createNavigationButton();
        page.actionBar.navigationButton = navigationButton;
    }
    TKToggleNavButtonDirective.prototype.createNavigationButton = function () {
        var _this = this;
        var navigationButton = new action_bar_1.NavigationButton();
        navigationButton.visibility = "visible";
        if (application_1.android) {
            navigationButton.icon = "res://ic_arrow_back_black_24dp";
            navigationButton.on("tap", function (args) {
                utils_1.ad.dismissSoftInput();
                _this.routerExtensions.backToPreviousPage();
            });
        }
        else {
            navigationButton.text = "Back";
        }
        return navigationButton;
    };
    TKToggleNavButtonDirective = __decorate([
        core_1.Directive({
            selector: "[tkToggleNavButton]"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, page_1.Page, router_2.RouterExtensions])
    ], TKToggleNavButtonDirective);
    return TKToggleNavButtonDirective;
}());
exports.TKToggleNavButtonDirective = TKToggleNavButtonDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLW5hdi1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9nZ2xlLW5hdi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQWlEO0FBQ2pELHNDQUEwQztBQUUxQyxzREFBa0Q7QUFDbEQsNkRBQWtFO0FBQ2xFLGlEQUFnRDtBQUNoRCxzREFBK0Q7QUFDL0QsMkNBQXNDO0FBTXRDO0lBQ0ksb0NBQVksS0FBcUIsRUFBRSxJQUFVLEVBQVUsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDckYsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQ3ZELENBQUM7SUFFRCwyREFBc0IsR0FBdEI7UUFBQSxpQkFlQztRQWRHLElBQUksZ0JBQWdCLEdBQUcsSUFBSSw2QkFBZ0IsRUFBRSxDQUFDO1FBQzlDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFFeEMsRUFBRSxDQUFDLENBQUMscUJBQU8sQ0FBQyxDQUFDLENBQUM7WUFDVixnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsZ0NBQWdDLENBQUE7WUFDeEQsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQWU7Z0JBQ3ZDLFVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN0QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLGdCQUFnQixDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkMsQ0FBQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBckJRLDBCQUEwQjtRQUp0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtTQUNsQyxDQUFDO3lDQUdxQix1QkFBYyxFQUFRLFdBQUksRUFBNEIseUJBQWdCO09BRGhGLDBCQUEwQixDQXNCdEM7SUFBRCxpQ0FBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgYWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3RrVG9nZ2xlTmF2QnV0dG9uXVwiXG59KVxuXG5leHBvcnQgY2xhc3MgVEtUb2dnbGVOYXZCdXR0b25EaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uQnV0dG9uID0gdGhpcy5jcmVhdGVOYXZpZ2F0aW9uQnV0dG9uKCk7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSBuYXZpZ2F0aW9uQnV0dG9uO1xuICAgIH1cblxuICAgIGNyZWF0ZU5hdmlnYXRpb25CdXR0b24oKTogTmF2aWdhdGlvbkJ1dHRvbiB7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uQnV0dG9uID0gbmV3IE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICAgICAgbmF2aWdhdGlvbkJ1dHRvbi52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICAgICAgaWYgKGFuZHJvaWQpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CdXR0b24uaWNvbiA9IFwicmVzOi8vaWNfYXJyb3dfYmFja19ibGFja18yNGRwXCJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CdXR0b24ub24oXCJ0YXBcIiwgKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CdXR0b24udGV4dCA9IFwiQmFja1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRpb25CdXR0b247XG4gICAgfVxufVxuIl19