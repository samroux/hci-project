"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var TKExampleTitleDirective = /** @class */ (function () {
    function TKExampleTitleDirective(route, page) {
        page.actionBar.title = route.snapshot.data["title"];
    }
    TKExampleTitleDirective = __decorate([
        core_1.Directive({
            selector: "[tkExampleTitle]"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, page_1.Page])
    ], TKExampleTitleDirective);
    return TKExampleTitleDirective;
}());
exports.TKExampleTitleDirective = TKExampleTitleDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtcGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBaUQ7QUFDakQsaURBQWdEO0FBTWhEO0lBQ0ssaUNBQVksS0FBcUIsRUFBRSxJQUFVO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFIUSx1QkFBdUI7UUFKbkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7U0FDL0IsQ0FBQzt5Q0FHc0IsdUJBQWMsRUFBUSxXQUFJO09BRHJDLHVCQUF1QixDQUluQztJQUFELDhCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3RrRXhhbXBsZVRpdGxlXVwiXG59KVxuXG5leHBvcnQgY2xhc3MgVEtFeGFtcGxlVGl0bGVEaXJlY3RpdmUge1xuICAgICBjb25zdHJ1Y3Rvcihyb3V0ZTogQWN0aXZhdGVkUm91dGUsIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXIudGl0bGUgPSByb3V0ZS5zbmFwc2hvdC5kYXRhW1widGl0bGVcIl07XG4gICAgfVxufSJdfQ==