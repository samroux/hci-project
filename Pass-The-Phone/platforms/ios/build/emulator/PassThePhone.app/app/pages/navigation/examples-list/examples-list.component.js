"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var exampleItemService_service_1 = require("../exampleItemService.service");
var frameModule = require("tns-core-modules/ui/frame");
var router_1 = require("@angular/router");
var ExamplesListDepth1Component = /** @class */ (function () {
    function ExamplesListDepth1Component(_router, _route, _exampleItemsService) {
        this._router = _router;
        this._route = _route;
        this._exampleItemsService = _exampleItemsService;
    }
    ExamplesListDepth1Component.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.params.subscribe(function (params) {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            _this.hasBack = false;
            _this._currentExample = _this._exampleItemsService.getParentExampleItem(0);
        });
    };
    ExamplesListDepth1Component.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    Object.defineProperty(ExamplesListDepth1Component.prototype, "currentExample", {
        get: function () {
            return this._currentExample;
        },
        set: function (value) {
            this._currentExample = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExamplesListDepth1Component.prototype, "hasBack", {
        get: function () {
            return this._hasBack;
        },
        set: function (value) {
            this._hasBack = value;
        },
        enumerable: true,
        configurable: true
    });
    ExamplesListDepth1Component.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length === 0) {
            this._router.navigateByUrl(tappedItem.path);
        }
        else {
            this._router.navigate(['/examples-depth-2', this._currentExample.title, tappedItem.title]);
        }
    };
    ExamplesListDepth1Component.prototype.onNavigationButtonTap = function () {
        frameModule.topmost().goBack();
    };
    ExamplesListDepth1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-examples",
            templateUrl: "examples-list.component.html",
            styleUrls: ["examples-list.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, exampleItemService_service_1.ExampleItemService])
    ], ExamplesListDepth1Component);
    return ExamplesListDepth1Component;
}());
exports.ExamplesListDepth1Component = ExamplesListDepth1Component;
var ExamplesListDepth2Component = /** @class */ (function () {
    function ExamplesListDepth2Component(_router, _route, _exampleItemsService) {
        this._router = _router;
        this._route = _route;
        this._exampleItemsService = _exampleItemsService;
    }
    ExamplesListDepth2Component.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.params.subscribe(function (params) {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            _this.hasBack = true;
            _this._currentExample = _this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, _this._exampleItemsService.getAllExampleItems());
        });
    };
    ExamplesListDepth2Component.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    Object.defineProperty(ExamplesListDepth2Component.prototype, "currentExample", {
        get: function () {
            return this._currentExample;
        },
        set: function (value) {
            this._currentExample = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExamplesListDepth2Component.prototype, "hasBack", {
        get: function () {
            return this._hasBack;
        },
        set: function (value) {
            this._hasBack = value;
        },
        enumerable: true,
        configurable: true
    });
    ExamplesListDepth2Component.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length === 0) {
            this._router.navigateByUrl(tappedItem.path);
        }
        else {
            this._router.navigate(['/examples-depth-3', this._currentExample.title, tappedItem.title]);
        }
    };
    ExamplesListDepth2Component.prototype.onNavigationButtonTap = function () {
        frameModule.topmost().goBack();
    };
    ExamplesListDepth2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-examples-depth-2",
            templateUrl: "examples-list.component.html",
            styleUrls: ["examples-list.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, exampleItemService_service_1.ExampleItemService])
    ], ExamplesListDepth2Component);
    return ExamplesListDepth2Component;
}());
exports.ExamplesListDepth2Component = ExamplesListDepth2Component;
var ExamplesListDepth3Component = /** @class */ (function () {
    function ExamplesListDepth3Component(_router, _route, _exampleItemsService) {
        this._router = _router;
        this._route = _route;
        this._exampleItemsService = _exampleItemsService;
    }
    ExamplesListDepth3Component.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.params.subscribe(function (params) {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            _this.hasBack = true;
            _this._currentExample = _this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, _this._exampleItemsService.getAllExampleItems());
        });
    };
    ExamplesListDepth3Component.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    Object.defineProperty(ExamplesListDepth3Component.prototype, "currentExample", {
        get: function () {
            return this._currentExample;
        },
        set: function (value) {
            this._currentExample = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExamplesListDepth3Component.prototype, "hasBack", {
        get: function () {
            return this._hasBack;
        },
        set: function (value) {
            this._hasBack = value;
        },
        enumerable: true,
        configurable: true
    });
    ExamplesListDepth3Component.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        this._router.navigateByUrl(tappedItem.path);
    };
    ExamplesListDepth3Component.prototype.onNavigationButtonTap = function () {
        frameModule.topmost().goBack();
    };
    ExamplesListDepth3Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-examples-depth-3",
            templateUrl: "examples-list.component.html",
            styleUrls: ["examples-list.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, exampleItemService_service_1.ExampleItemService])
    ], ExamplesListDepth3Component);
    return ExamplesListDepth3Component;
}());
exports.ExamplesListDepth3Component = ExamplesListDepth3Component;
exports.ExamplesListDepthComponents = [ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtcGxlcy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUU3RCw0RUFBbUU7QUFDbkUsdURBQXlEO0FBQ3pELDBDQUF5RDtBQVN6RDtJQUtJLHFDQUFvQixPQUFlLEVBQVUsTUFBc0IsRUFBVSxvQkFBd0M7UUFBakcsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQjtJQUVySCxDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzNDLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFXLHVEQUFjO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzthQUVELFVBQTBCLEtBQWtCO1lBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQUpBO0lBTUQsc0JBQVcsZ0RBQU87YUFBbEI7WUFDSSxNQUFNLENB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QU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUEvQ1EsMkJBQTJCO1FBTnZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBTStCLGVBQU0sRUFBa0IsdUJBQWMsRUFBZ0MsK0NBQWtCO09BTDVHLDJCQUEyQixDQWdEdkM7SUFBRCxrQ0FBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLGtFQUEyQjtBQWtEM0IsUUFBQSwyQkFBMkIsR0FBRyxDQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV4YW1wbGVJdGVtIH0gZnJvbSBcIi4uL2V4YW1wbGVJdGVtXCI7XG5pbXBvcnQgeyBFeGFtcGxlSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZXhhbXBsZUl0ZW1TZXJ2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstZXhhbXBsZXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJleGFtcGxlcy1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJleGFtcGxlcy1saXN0LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRXhhbXBsZXNMaXN0RGVwdGgxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2N1cnJlbnRFeGFtcGxlOiBFeGFtcGxlSXRlbTtcbiAgICBwcml2YXRlIF9oYXNCYWNrOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3N1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfZXhhbXBsZUl0ZW1zU2VydmljZTogRXhhbXBsZUl0ZW1TZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fc3ViID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdmFyIHBhcmVudFRpdGxlID0gcGFyYW1zWydwYXJlbnRUaXRsZSddO1xuICAgICAgICAgICAgdmFyIHRhcHBlZFRpdGxlID0gcGFyYW1zWyd0YXBwZWRUaXRsZSddO1xuICAgICAgICAgICAgdGhpcy5oYXNCYWNrID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RXhhbXBsZSA9IHRoaXMuX2V4YW1wbGVJdGVtc1NlcnZpY2UuZ2V0UGFyZW50RXhhbXBsZUl0ZW0oMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRFeGFtcGxlKCk6IEV4YW1wbGVJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRFeGFtcGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY3VycmVudEV4YW1wbGUodmFsdWU6IEV4YW1wbGVJdGVtKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRFeGFtcGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoYXNCYWNrKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzQmFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhhc0JhY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzQmFjayA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICB2YXIgdGFwcGVkSXRlbSA9IHRoaXMuX2N1cnJlbnRFeGFtcGxlLnN1Ykl0ZW1zW2l0ZW1JbmRleF07XG4gICAgICAgIGlmICh0YXBwZWRJdGVtLnN1Ykl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwodGFwcGVkSXRlbS5wYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9leGFtcGxlcy1kZXB0aC0yJywgdGhpcy5fY3VycmVudEV4YW1wbGUudGl0bGUsIHRhcHBlZEl0ZW0udGl0bGVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1leGFtcGxlcy1kZXB0aC0yXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiZXhhbXBsZXMtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiZXhhbXBsZXMtbGlzdC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVzTGlzdERlcHRoMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9jdXJyZW50RXhhbXBsZTogRXhhbXBsZUl0ZW07XG4gICAgcHJpdmF0ZSBfaGFzQmFjazogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9zdWI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2V4YW1wbGVJdGVtc1NlcnZpY2U6IEV4YW1wbGVJdGVtU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3N1YiA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRUaXRsZSA9IHBhcmFtc1sncGFyZW50VGl0bGUnXTtcbiAgICAgICAgICAgIHZhciB0YXBwZWRUaXRsZSA9IHBhcmFtc1sndGFwcGVkVGl0bGUnXTtcbiAgICAgICAgICAgIHRoaXMuaGFzQmFjayA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RXhhbXBsZSA9IHRoaXMuX2V4YW1wbGVJdGVtc1NlcnZpY2UuZ2V0Q2hpbGRFeGFtcGxlSXRlbShwYXJlbnRUaXRsZSwgdGFwcGVkVGl0bGUsIHRoaXMuX2V4YW1wbGVJdGVtc1NlcnZpY2UuZ2V0QWxsRXhhbXBsZUl0ZW1zKCkpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRFeGFtcGxlKCk6IEV4YW1wbGVJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRFeGFtcGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY3VycmVudEV4YW1wbGUodmFsdWU6IEV4YW1wbGVJdGVtKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRFeGFtcGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoYXNCYWNrKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzQmFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhhc0JhY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzQmFjayA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICB2YXIgdGFwcGVkSXRlbSA9IHRoaXMuX2N1cnJlbnRFeGFtcGxlLnN1Ykl0ZW1zW2l0ZW1JbmRleF07XG4gICAgICAgIGlmICh0YXBwZWRJdGVtLnN1Ykl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwodGFwcGVkSXRlbS5wYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9leGFtcGxlcy1kZXB0aC0zJywgdGhpcy5fY3VycmVudEV4YW1wbGUudGl0bGUsIHRhcHBlZEl0ZW0udGl0bGVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstZXhhbXBsZXMtZGVwdGgtM1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcImV4YW1wbGVzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImV4YW1wbGVzLWxpc3QuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlc0xpc3REZXB0aDNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfY3VycmVudEV4YW1wbGU6IEV4YW1wbGVJdGVtO1xuICAgIHByaXZhdGUgX2hhc0JhY2s6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfc3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9leGFtcGxlSXRlbXNTZXJ2aWNlOiBFeGFtcGxlSXRlbVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB2YXIgcGFyZW50VGl0bGUgPSBwYXJhbXNbJ3BhcmVudFRpdGxlJ107XG4gICAgICAgICAgICB2YXIgdGFwcGVkVGl0bGUgPSBwYXJhbXNbJ3RhcHBlZFRpdGxlJ107XG4gICAgICAgICAgICB0aGlzLmhhc0JhY2sgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEV4YW1wbGUgPSB0aGlzLl9leGFtcGxlSXRlbXNTZXJ2aWNlLmdldENoaWxkRXhhbXBsZUl0ZW0ocGFyZW50VGl0bGUsIHRhcHBlZFRpdGxlLCB0aGlzLl9leGFtcGxlSXRlbXNTZXJ2aWNlLmdldEFsbEV4YW1wbGVJdGVtcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjdXJyZW50RXhhbXBsZSgpOiBFeGFtcGxlSXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50RXhhbXBsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRFeGFtcGxlKHZhbHVlOiBFeGFtcGxlSXRlbSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50RXhhbXBsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzQmFjaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc0JhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNCYWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0JhY2sgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICB2YXIgaXRlbUluZGV4ID0gYXJncy5pbmRleDtcbiAgICAgICAgdmFyIHRhcHBlZEl0ZW0gPSB0aGlzLl9jdXJyZW50RXhhbXBsZS5zdWJJdGVtc1tpdGVtSW5kZXhdO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCh0YXBwZWRJdGVtLnBhdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpb25CdXR0b25UYXAoKSB7XG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlc0xpc3REZXB0aENvbXBvbmVudHMgPSBbIEV4YW1wbGVzTGlzdERlcHRoMUNvbXBvbmVudCwgRXhhbXBsZXNMaXN0RGVwdGgyQ29tcG9uZW50LCBFeGFtcGxlc0xpc3REZXB0aDNDb21wb25lbnRdO1xuIl19