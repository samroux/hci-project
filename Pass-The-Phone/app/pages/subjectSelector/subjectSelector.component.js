"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var triviaCategory_1 = require("../../shared/triviaCategory");
var SubjectSelectorComponent = /** @class */ (function () {
    function SubjectSelectorComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.categories = [];
        this.route.params.subscribe(function (params) {
            _this.returnPath = params.path;
        });
        this.categories.push(new triviaCategory_1.TriviaCategory(null, ""));
    }
    SubjectSelectorComponent.prototype.ngOnInit = function () {
        this.progressValue = 80;
        this.extractData();
    };
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
        if (this.returnPath == "summary") {
            this.router.navigate([this.returnPath]);
        }
        else {
            this.router.navigate(["questionPresenter", categoryId]);
        }
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], SubjectSelectorComponent);
    return SubjectSelectorComponent;
}());
exports.SubjectSelectorComponent = SubjectSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0UsMENBQXlEO0FBS3pELDhEQUEwRDtBQVMxRDtJQU9FLGtDQUFvQixLQUFxQixFQUFVLE1BQWM7UUFBakUsaUJBS0M7UUFMbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTjFELGVBQVUsR0FBMEIsRUFBRSxDQUFDO1FBTzVDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSw0Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQUksR0FBSixVQUFLLFVBQVU7UUFDYix3RUFBd0U7UUFDeEUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFDSCxDQUFDO0lBSUQsOENBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2YsMEJBQTBCO1lBQzFCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUUvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN0RCxvRkFBb0Y7Z0JBRXBGLElBQUksRUFBRSxHQUFXLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLElBQUksTUFBSSxHQUFXLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBRW5ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBQyxFQUFFLEVBQUUsTUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBSUgsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNaLDJCQUEyQjtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXBFVSx3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDRDQUE0QztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxrREFBa0QsQ0FBQztZQUMvRCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO3lDQVMyQix1QkFBYyxFQUFrQixlQUFNO09BUHRELHdCQUF3QixDQXNFcEM7SUFBRCwrQkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1RyaXZpYUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUNhdGVnb3J5XCIgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdWJqZWN0U2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci1jb21tb24uY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN1YmplY3RTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGNhdGVnb3JpZXM6IEFycmF5PFRyaXZpYUNhdGVnb3J5PiA9IFtdO1xuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogVHJpdmlhQ2F0ZWdvcnk7XG4gIFxuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwdWJsaWMgcmV0dXJuUGF0aDogc3RyaW5nOyAgXG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyBcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5yZXR1cm5QYXRoID0gcGFyYW1zLnBhdGg7XG4gICAgfSk7ICBcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkobnVsbCxcIlwiKSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDgwO1xuICAgIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgfVxuICBcbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgaWYoYXJncy5pbmRleCA+MCl7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbYXJncy5pbmRleF07XG4gICAgICBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRDYXRlZ29yeS5pZCArXCIgXCIrIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKTtcbiAgICAgIHRoaXMubmV4dCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuaWQpO1xuICAgIH1cbiAgfVxuICBcbiAgbmV4dChjYXRlZ29yeUlkKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOYXZpZ2F0aW5nIHRvIHF1ZXN0aW9uUHJlc2VudGVyIHdpdGggaWQ6IFwiKyBjYXRlZ29yeUlkKTtcbiAgICBpZih0aGlzLnJldHVyblBhdGggPT0gXCJzdW1tYXJ5XCIpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuUGF0aF0pO1xuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInF1ZXN0aW9uUHJlc2VudGVyXCIsIGNhdGVnb3J5SWQgXSk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgXG4gIGV4dHJhY3REYXRhKCkge1xuICAgIHZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG4gICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goKTtcbiAgICBcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgXG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpX2NhdGVnb3J5LnBocFwiLCBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgLy8vLyBBcmd1bWVudCAocikgaXMgSlNPTiFcbiAgICAgIHZhciBqc29uID0gci5jb250ZW50O1xuICAgICAgdmFyIHN0ciA9IHIuY29udGVudC50b1N0cmluZygpO1xuICAgICAgXG4gICAgICB2YXIgbXlPYmogPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwO2kgPCBteU9iai50cml2aWFfY2F0ZWdvcmllcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLmlkKyBcIiBcIisgbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0ubmFtZSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLmlkO1xuICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0ubmFtZTtcbiAgICAgICAgXG4gICAgICAgIHRoYXQuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeShpZCwgbmFtZSkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChlKSBpcyBFcnJvciFcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0pO1xuICB9XG4gIFxufVxuIl19