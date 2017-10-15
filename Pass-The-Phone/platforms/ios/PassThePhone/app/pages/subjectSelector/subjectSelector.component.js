"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaCategory_1 = require("../../shared/triviaCategory");
var SubjectSelectorComponent = /** @class */ (function () {
    function SubjectSelectorComponent(router) {
        this.router = router;
        // console.log("Constructing subject Selector");
        this.categories = [];
        this.categories.push(new triviaCategory_1.TriviaCategory(null, ""));
    }
    SubjectSelectorComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index > 0) {
            this.selectedCategory = this.categories[args.index];
            console.log("Chosen: " + this.selectedCategory.id + " " + this.selectedCategory.name);
            this.next(this.selectedCategory.id);
        }
    };
    SubjectSelectorComponent.prototype.next = function (categoryId) {
        // console.log("Navigating to questionPresenter with id: "+ categoryId);
        this.router.navigate(["questionPresenter", categoryId]);
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
                // console.log(myObj.trivia_categories[i].id+ " "+ myObj.trivia_categories[i].name);
                var id = myObj.trivia_categories[i].id;
                var name_1 = myObj.trivia_categories[i].name;
                that.categories.push(new triviaCategory_1.TriviaCategory(id, name_1));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0UsMENBQXlDO0FBR3pDLDhEQUEwRDtBQVMxRDtJQUlFLGtDQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSw0Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQUksR0FBSixVQUFLLFVBQVU7UUFDYix3RUFBd0U7UUFFeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzNFLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDZiwwQkFBMEI7WUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNyQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRS9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RELG9GQUFvRjtnQkFFcEYsSUFBSSxFQUFFLEdBQVcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxNQUFJLEdBQVcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFFbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLEVBQUUsRUFBRSxNQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFJSCxDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1osMkJBQTJCO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0RVLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO1lBQy9ELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBTTRCLGVBQU07T0FKdkIsd0JBQXdCLENBNkRwQztJQUFELCtCQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHtUcml2aWFDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFDYXRlZ29yeVwiIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic3ViamVjdFNlbGVjdG9yXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3N1YmplY3RTZWxlY3Rvci9zdWJqZWN0U2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N1YmplY3RTZWxlY3Rvci9zdWJqZWN0U2VsZWN0b3ItY29tbW9uLmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWJqZWN0U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBjYXRlZ29yaWVzOiBBcnJheTxUcml2aWFDYXRlZ29yeT47XG4gIHB1YmxpYyBzZWxlY3RlZENhdGVnb3J5OiBUcml2aWFDYXRlZ29yeTtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGluZyBzdWJqZWN0IFNlbGVjdG9yXCIpO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuICAgIFxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeShudWxsLFwiXCIpKTtcbiAgfVxuICBcbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgaWYoYXJncy5pbmRleCA+MCl7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbYXJncy5pbmRleF07XG4gICAgICBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRDYXRlZ29yeS5pZCArXCIgXCIrIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKTtcbiAgICAgIHRoaXMubmV4dCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuaWQpO1xuICAgIH1cbiAgfVxuICBcbiAgbmV4dChjYXRlZ29yeUlkKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOYXZpZ2F0aW5nIHRvIHF1ZXN0aW9uUHJlc2VudGVyIHdpdGggaWQ6IFwiKyBjYXRlZ29yeUlkKTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInF1ZXN0aW9uUHJlc2VudGVyXCIsIGNhdGVnb3J5SWQgXSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgfVxuICBcbiAgZXh0cmFjdERhdGEoKSB7XG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCgpO1xuICAgIFxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBodHRwLnJlcXVlc3QoeyB1cmw6IFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGlfY2F0ZWdvcnkucGhwXCIsIG1ldGhvZDogXCJHRVRcIiB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgdmFyIGpzb24gPSByLmNvbnRlbnQ7XG4gICAgICB2YXIgc3RyID0gci5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICBcbiAgICAgIHZhciBteU9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0uaWQrIFwiIFwiKyBteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpZDogbnVtYmVyID0gbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0uaWQ7XG4gICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5uYW1lO1xuICAgICAgICBcbiAgICAgICAgdGhhdC5jYXRlZ29yaWVzLnB1c2gobmV3IFRyaXZpYUNhdGVnb3J5KGlkLCBuYW1lKSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cbiAgXG59XG4iXX0=