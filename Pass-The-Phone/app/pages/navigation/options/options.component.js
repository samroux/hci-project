"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var router_1 = require("@angular/router");
var frameModule = require("tns-core-modules/ui/frame");
var page_1 = require("tns-core-modules/ui/page");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var options_service_1 = require("../../navigation/options/options.service");
var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(_page, _route, _optionsService) {
        this._page = _page;
        this._route = _route;
        this._optionsService = _optionsService;
        this._selectedIndex = -1;
        this._dataItems = new observable_array_1.ObservableArray();
    }
    OptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.queryParams.subscribe(function (params) {
            var items = params['items'];
            _this._selectedIndex = +params['selectedIndex'];
            if (items) {
                var splitItems = items.toString().split(',');
                _this._dataItems = new observable_array_1.ObservableArray(splitItems);
                _this.tryUpdateListViewSelection();
            }
        });
    };
    OptionsComponent.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    OptionsComponent.prototype.onLoaded = function () {
        this.tryUpdateListViewSelection();
    };
    OptionsComponent.prototype.tryUpdateListViewSelection = function () {
        if (this._selectedIndex >= 0 && this._listView && this._listView.nativeElement) {
            this._listView.nativeElement.selectItemAt(this._selectedIndex);
        }
    };
    Object.defineProperty(OptionsComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    OptionsComponent.prototype.onItemTap = function (args) {
        var selectedItems = this._listView.nativeElement.getSelectedItems();
        this._optionsService.paramValue = selectedItems[0];
        frameModule.topmost().goBack();
    };
    __decorate([
        core_1.ViewChild("optionsListView"),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], OptionsComponent.prototype, "_listView", void 0);
    OptionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-options",
            templateUrl: "options.component.html",
            styleUrls: ["options.component.css"]
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [page_1.Page, router_1.ActivatedRoute, options_service_1.OptionsService])
    ], OptionsComponent);
    return OptionsComponent;
}());
exports.OptionsComponent = OptionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRjtBQUNwRiwyRUFBeUU7QUFDekUsMENBQWlEO0FBQ2pELHVEQUF5RDtBQUN6RCxpREFBZ0Q7QUFDaEQsZ0VBQTRFO0FBQzVFLDRFQUEwRTtBQVMxRTtJQUtJLDBCQUFvQixLQUFXLEVBQVUsTUFBc0IsRUFBVSxlQUErQjtRQUFwRixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFGaEcsbUJBQWMsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUdoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsRUFBVSxDQUFDO0lBQ3BELENBQUM7SUFJRCxtQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDekMsVUFBQyxNQUFXO1lBQ1IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBUyxVQUFVLENBQUMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxtQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVPLHFEQUEwQixHQUFsQztRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBSSx1Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFHTSxvQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFtQixDQUFDO1FBQ3JGLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQXZDNkI7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBWSw4QkFBb0I7dURBQUM7SUFUckQsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO1FBQ0QsaUJBQVUsRUFBRTt5Q0FNa0IsV0FBSSxFQUFrQix1QkFBYyxFQUEyQixnQ0FBYztPQUwvRixnQkFBZ0IsQ0FpRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3RhYmxlLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgT3B0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLW9wdGlvbnNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJvcHRpb25zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJvcHRpb25zLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgX3N1YjogYW55O1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9vcHRpb25zU2VydmljZTogT3B0aW9uc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxzdHJpbmc+KCk7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcIm9wdGlvbnNMaXN0Vmlld1wiKSBfbGlzdFZpZXc6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3N1YiA9IHRoaXMuX3JvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IHBhcmFtc1snaXRlbXMnXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gK3BhcmFtc1snc2VsZWN0ZWRJbmRleCddO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRJdGVtcyA9IGl0ZW1zLnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxzdHJpbmc+KHNwbGl0SXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyeVVwZGF0ZUxpc3RWaWV3U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkZWQoKSB7XG4gICAgICAgIHRoaXMudHJ5VXBkYXRlTGlzdFZpZXdTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyeVVwZGF0ZUxpc3RWaWV3U2VsZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCA+PSAwICYmIHRoaXMuX2xpc3RWaWV3ICYmIHRoaXMuX2xpc3RWaWV3Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RWaWV3Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0SXRlbUF0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkSXRlbXMgPSB0aGlzLl9saXN0Vmlldy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxzdHJpbmc+O1xuICAgICAgICB0aGlzLl9vcHRpb25zU2VydmljZS5wYXJhbVZhbHVlID0gc2VsZWN0ZWRJdGVtc1swXTtcbiAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgIH1cbn0iXX0=