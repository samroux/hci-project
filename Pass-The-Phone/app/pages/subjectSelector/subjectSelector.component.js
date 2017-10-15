"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TriviaCategory = /** @class */ (function () {
    function TriviaCategory(id, name) {
        this.id = id;
        this.name = name;
    }
    return TriviaCategory;
}());
var SubjectSelectorComponent = /** @class */ (function () {
    function SubjectSelectorComponent(router) {
        this.router = router;
        console.log("Constructing subject Selector");
        this.categories = [];
        this.categories.push(new TriviaCategory(null, ""));
    }
    SubjectSelectorComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index > 0) {
            this.selectedCategory = this.categories[args.index];
            console.log("Chosen: " + this.selectedCategory.id + " " + this.selectedCategory.name);
            this.next();
        }
    };
    SubjectSelectorComponent.prototype.next = function () {
        this.router.navigate(["questionPresenter"]);
    };
    SubjectSelectorComponent.prototype.ngOnInit = function () {
        this.extractData();
    };
    SubjectSelectorComponent.prototype.extractData = function () {
        var http = require("http");
        this.categories.push();
        var that = this;
        http.request({ url: "https://opentdb.com/api_category.php", method: "GET" })
            .then(function (r) {
            //// Argument (r) is JSON!
            var json = r.content;
            var str = r.content.toString();
            var myObj = JSON.parse(str);
            for (var i = 0; i < myObj.trivia_categories.length; i++) {
                console.log(myObj.trivia_categories[i].id + " " + myObj.trivia_categories[i].name);
                var id = myObj.trivia_categories[i].id;
                var name_1 = myObj.trivia_categories[i].name;
                that.categories.push(new TriviaCategory(id, name_1));
            }
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });
    };
    SubjectSelectorComponent = __decorate([
        core_1.Component({
            selector: "subjectSelector",
            templateUrl: "pages/subjectSelector/subjectSelector.html",
            styleUrls: ["pages/subjectSelector/subjectSelector-common.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SubjectSelectorComponent);
    return SubjectSelectorComponent;
}());
exports.SubjectSelectorComponent = SubjectSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0UsMENBQXlDO0FBSXpDO0lBQ0Usd0JBQW1CLEVBQVUsRUFBVSxJQUFZO1FBQWhDLE9BQUUsR0FBRixFQUFFLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUUsQ0FBQztJQUN4RCxxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBU0Q7SUFJRSxrQ0FBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSw0Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0lBRTdDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzNFLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDZiwwQkFBMEI7WUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNyQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRS9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRSxHQUFHLEdBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqRixJQUFJLEVBQUUsR0FBVyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLE1BQUksR0FBVyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUVuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEVBQUUsTUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBSUgsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNaLDJCQUEyQjtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTFEVSx3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDRDQUE0QztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxrREFBa0QsQ0FBQztZQUMvRCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO3lDQU00QixlQUFNO09BSnZCLHdCQUF3QixDQTREcEM7SUFBRCwrQkFBQztDQUFBLEFBNURELElBNERDO0FBNURZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cblxuY2xhc3MgVHJpdmlhQ2F0ZWdvcnkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljICBuYW1lOiBzdHJpbmcpe31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN1YmplY3RTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdWJqZWN0U2VsZWN0b3Ivc3ViamVjdFNlbGVjdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9zdWJqZWN0U2VsZWN0b3Ivc3ViamVjdFNlbGVjdG9yLWNvbW1vbi5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgU3ViamVjdFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgY2F0ZWdvcmllczogQXJyYXk8VHJpdmlhQ2F0ZWdvcnk+O1xuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogVHJpdmlhQ2F0ZWdvcnk7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgY29uc29sZS5sb2coXCJDb25zdHJ1Y3Rpbmcgc3ViamVjdCBTZWxlY3RvclwiKTtcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcbiAgICBcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkobnVsbCxcIlwiKSk7XG4gIH1cbiAgXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgIGlmKGFyZ3MuaW5kZXggPjApe1xuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzW2FyZ3MuaW5kZXhdO1xuICAgICAgY29uc29sZS5sb2cgKFwiQ2hvc2VuOiBcIit0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuaWQgK1wiIFwiKyB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSk7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIl0pXG4gICAgXG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgfVxuICBcbiAgZXh0cmFjdERhdGEoKSB7XG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCgpO1xuICAgIFxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBodHRwLnJlcXVlc3QoeyB1cmw6IFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGlfY2F0ZWdvcnkucGhwXCIsIG1ldGhvZDogXCJHRVRcIiB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgdmFyIGpzb24gPSByLmNvbnRlbnQ7XG4gICAgICB2YXIgc3RyID0gci5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICBcbiAgICAgIHZhciBteU9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2cobXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0uaWQrIFwiIFwiKyBteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpZDogbnVtYmVyID0gbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0uaWQ7XG4gICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5uYW1lO1xuICAgICAgICBcbiAgICAgICAgdGhhdC5jYXRlZ29yaWVzLnB1c2gobmV3IFRyaXZpYUNhdGVnb3J5KGlkLCBuYW1lKSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cbiAgXG59XG4iXX0=