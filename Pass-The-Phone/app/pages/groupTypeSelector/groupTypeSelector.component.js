"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var GroupTypeSelectorComponent = /** @class */ (function () {
    function GroupTypeSelectorComponent(router, rdp) {
        this.router = router;
        this.rdp = rdp;
    }
    GroupTypeSelectorComponent.prototype.ngOnInit = function () {
        console.log("init page");
        this.progressValue = 10;
        this.error.nativeElement.visibility = "hidden";
        this.error.nativeElement.color = "red";
        var that = this;
        this.rdp.checkForData(function (a) {
            if (a) {
                that.submit.nativeElement.backgroundColor = "#d2d2d2";
            }
        });
    };
    GroupTypeSelectorComponent.prototype.newGroup = function () {
        this.router.navigate(["playerCreator"]);
    };
    GroupTypeSelectorComponent.prototype.existingGroup = function () {
        var that = this;
        this.rdp.checkForData(function (a) {
            if (!a) {
                that.router.navigate(["groupSelector"]);
            }
            else {
                that.submit.nativeElement.backgroundColor = "#d2d2d2";
                that.error.nativeElement.visibility = "visible";
                setInterval(function () {
                    that.error.nativeElement.visibility = "hidden";
                }, 5000);
            }
        });
    };
    __decorate([
        core_1.ViewChild("submit"),
        __metadata("design:type", core_1.ElementRef)
    ], GroupTypeSelectorComponent.prototype, "submit", void 0);
    __decorate([
        core_1.ViewChild("error"),
        __metadata("design:type", core_1.ElementRef)
    ], GroupTypeSelectorComponent.prototype, "error", void 0);
    GroupTypeSelectorComponent = __decorate([
        core_1.Component({
            selector: "groupTypeSelector",
            templateUrl: "pages/groupTypeSelector/groupTypeSelector.html",
            styleUrls: ["pages/groupTypeSelector/groupTypeSelector-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, roundData_provider_1.RoundDataProvider])
    ], GroupTypeSelectorComponent);
    return GroupTypeSelectorComponent;
}());
exports.GroupTypeSelectorComponent = GroupTypeSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBUeXBlU2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXBUeXBlU2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6QyxnRkFBNEU7QUFTNUU7SUFJRSxvQ0FBMkIsTUFBYyxFQUFVLEdBQXNCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUFHLENBQUM7SUFFN0UsNkNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFTLENBQUM7WUFDOUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDSixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ3hELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFHRCxrREFBYSxHQUFiO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVMsQ0FBQztZQUM5QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFBQyxJQUFJLENBQUEsQ0FBQztnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO2dCQUNoRCxXQUFXLENBQUM7b0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFDakQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWZvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTs4REFBQztJQUNwQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTs2REFBQztJQXZCM0IsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7U0FDcEUsQ0FBQzt5Q0FNbUMsZUFBTSxFQUFlLHNDQUFpQjtPQUo5RCwwQkFBMEIsQ0FzQ3RDO0lBQUQsaUNBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcInVpL3Byb2dyZXNzXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3JvdXBUeXBlU2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZ3JvdXBUeXBlU2VsZWN0b3IvZ3JvdXBUeXBlU2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2dyb3VwVHlwZVNlbGVjdG9yL2dyb3VwVHlwZVNlbGVjdG9yLWNvbW1vbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHcm91cFR5cGVTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZHA6IFJvdW5kRGF0YVByb3ZpZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdCBwYWdlXCIpO1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDEwO1xuICAgIHRoaXMuZXJyb3IubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB0aGlzLmVycm9yLm5hdGl2ZUVsZW1lbnQuY29sb3IgPSBcInJlZFwiO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLnJkcC5jaGVja0ZvckRhdGEoZnVuY3Rpb24oYSl7XG4gICAgICBpZihhKXtcbiAgICAgICAgdGhhdC5zdWJtaXQubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkMmQyZDJcIjtcbiAgICAgIH0gXG4gICAgfSk7XG4gIH1cblxuICBuZXdHcm91cCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwbGF5ZXJDcmVhdG9yXCJdKVxuICB9XG4gIEBWaWV3Q2hpbGQoXCJzdWJtaXRcIikgc3VibWl0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZXJyb3JcIikgZXJyb3I6IEVsZW1lbnRSZWY7XG4gIGV4aXN0aW5nR3JvdXAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoaXMucmRwLmNoZWNrRm9yRGF0YShmdW5jdGlvbihhKXtcbiAgICAgIGlmKCFhKXtcbiAgICAgICAgdGhhdC5yb3V0ZXIubmF2aWdhdGUoW1wiZ3JvdXBTZWxlY3RvclwiXSk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIHRoYXQuc3VibWl0Lm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gXCIjZDJkMmQyXCI7XG4gICAgICAgIHRoYXQuZXJyb3IubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIHNldEludGVydmFsKCgpPT4ge1xuICAgICAgICAgIHRoYXQuZXJyb3IubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==