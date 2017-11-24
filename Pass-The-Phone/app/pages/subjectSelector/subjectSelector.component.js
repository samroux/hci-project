"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var roundData_provider_1 = require("../../shared/providers/roundData.provider");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var triviaCategory_1 = require("../../shared/triviaCategory");
var SubjectSelectorComponent = /** @class */ (function () {
    function SubjectSelectorComponent(route, router, routerExtensions, roundDataProvider) {
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.roundDataProvider = roundDataProvider;
        //public categories: Array<TriviaCategory> = [];
        this.categories = new observable_array_1.ObservableArray();
        // this.route.params.subscribe((params) => {
        //   this.returnPath = params.path;
        // });
        this.rdp = roundDataProvider;
        this.categories.push(new triviaCategory_1.TriviaCategory(null, ""));
        // this.categories.pop();
    }
    SubjectSelectorComponent.prototype.ngOnInit = function () {
        this.progressValue = 80;
        this.extractData();
        //if got here restarted game
        this.rdp.hasQuestions = false;
    };
    SubjectSelectorComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        this.selectedCategory = this.categories.getItem(args.index);
        console.log("Chosen: " + this.selectedCategory.id + " " + this.selectedCategory.name);
        this.rdp.speak("Game is starting now!");
        this.next(this.selectedCategory.id);
    };
    SubjectSelectorComponent.prototype.extractData = function () {
        var http = require("http");
        // this.categories.pop();
        var that = this;
        http.request({ url: "https://opentdb.com/api_category.php", method: "GET", timeout: 1000 })
            .then(function (r) {
            //// Argument (r) is JSON!
            console.log("load");
            var json = r.content;
            var str = r.content.toString();
            var myObj = JSON.parse(str);
            console.log(myObj.trivia_categories.length);
            //hackz pour enlever le null du ui lol
            //that.categories.pop()
            for (var i = 0; i < myObj.trivia_categories.length; i++) {
                //console.log(myObj.trivia_categories[i].id+ " "+ myObj.trivia_categories[i].name);
                var id = myObj.trivia_categories[i].id;
                var name_1 = myObj.trivia_categories[i].name;
                //console.log(name)
                that.categories.push(new triviaCategory_1.TriviaCategory(id, name_1));
            }
            that.subjects.nativeElement.items = that.categories;
            /*that.subjects.nativeElement.on(listViewModule.ListView.itemLoadingEvent, function (args: listViewModule.ItemEventData) {
                if (!args.view) {
                    // Create label if it is not already created.
                    args.view = new labelModule.Label();
                }
                (<labelModule.Label>args.view).text = that.categories.getItem(args.index).name;
            });*/
        }, function (e) {
            //// Argument (e) is Error!
            console.log("Didnt load");
            console.log(e);
            that.categories.push(new triviaCategory_1.TriviaCategory(-1, "Error: Click back button and try again."));
            that.subjects.nativeElement.items = that.categories;
        });
    };
    SubjectSelectorComponent.prototype.next = function (categoryId) {
        // console.log("Navigating to questionPresenter with id: "+ categoryId);
        // if(this.returnPath == "summary"){
        //   this.router.navigate([this.returnPath]);
        // } else{
        if (this.rdp.path && this.rdp.path !== "") {
            this.rdp.path = "subjectSelector";
            this.routerExtensions.navigate(["summary"], { clearHistory: true });
        }
        else {
            this.routerExtensions.navigate(["questionPresenter", categoryId], { clearHistory: true });
        } // }
    };
    __decorate([
        core_1.ViewChild("subjects"),
        __metadata("design:type", core_1.ElementRef)
    ], SubjectSelectorComponent.prototype, "subjects", void 0);
    SubjectSelectorComponent = __decorate([
        core_1.Component({
            selector: "subjectSelector",
            templateUrl: "pages/subjectSelector/subjectSelector.html",
            styleUrls: ["pages/subjectSelector/subjectSelector-common.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, router_2.RouterExtensions, roundData_provider_1.RoundDataProvider])
    ], SubjectSelectorComponent);
    return SubjectSelectorComponent;
}());
exports.SubjectSelectorComponent = SubjectSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsMENBQXdEO0FBRXhELHNEQUE2RDtBQUM3RCxnRkFBMkU7QUFDM0UsMkVBQWtHO0FBS2xHLDhEQUEwRDtBQVMxRDtJQVNFLGtDQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxpQkFBb0M7UUFBdkksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSM0osZ0RBQWdEO1FBQ3pDLGVBQVUsR0FBRyxJQUFJLGtDQUFlLEVBQWtCLENBQUM7UUFReEQsNENBQTRDO1FBQzVDLG1DQUFtQztRQUNuQyxNQUFNO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztRQUU3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQseUJBQXlCO0lBQzNCLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVNLDRDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxD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RyxpQkFBaUIsQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxDQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3RixDQUFDLENBQUcsSUFBSTtJQUNaLENBQUM7SUF0RHNCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFZLGlCQUFVOzhEQUFDO0lBbENsQyx3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDRDQUE0QztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxrREFBa0QsQ0FBQztZQUMvRCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO3lDQVcyQix1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUE2QixzQ0FBaUI7T0FUaEosd0JBQXdCLENBMEZwQztJQUFELCtCQUFDO0NBQUEsQUExRkQsSUEwRkM7QUExRlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdW5kRGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9yb3VuZERhdGEucHJvdmlkZXJcIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5LCBDaGFuZ2VkRGF0YSwgQ2hhbmdlVHlwZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0ICogYXMgbGlzdFZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5pbXBvcnQgKiBhcyBsYWJlbE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHtUcml2aWFDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cml2aWFDYXRlZ29yeVwiIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic3ViamVjdFNlbGVjdG9yXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3N1YmplY3RTZWxlY3Rvci9zdWJqZWN0U2VsZWN0b3IuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3N1YmplY3RTZWxlY3Rvci9zdWJqZWN0U2VsZWN0b3ItY29tbW9uLmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWJqZWN0U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIC8vcHVibGljIGNhdGVnb3JpZXM6IEFycmF5PFRyaXZpYUNhdGVnb3J5PiA9IFtdO1xuICBwdWJsaWMgY2F0ZWdvcmllcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8VHJpdmlhQ2F0ZWdvcnk+KCk7XG4gIHB1YmxpYyBzZWxlY3RlZENhdGVnb3J5OiBUcml2aWFDYXRlZ29yeTtcbiAgXG4gIHB1YmxpYyBwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XG4gIHB1YmxpYyByZXR1cm5QYXRoOiBzdHJpbmc7IFxuICBwdWJsaWMgcmRwOiBSb3VuZERhdGFQcm92aWRlcjsgXG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdW5kRGF0YVByb3ZpZGVyOiBSb3VuZERhdGFQcm92aWRlcikgeyBcbiAgICAvLyB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgIC8vICAgdGhpcy5yZXR1cm5QYXRoID0gcGFyYW1zLnBhdGg7XG4gICAgLy8gfSk7XG4gICAgdGhpcy5yZHAgPSByb3VuZERhdGFQcm92aWRlcjtcblxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeShudWxsLFwiXCIpKTtcbiAgICAvLyB0aGlzLmNhdGVnb3JpZXMucG9wKCk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDgwO1xuICAgIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICAvL2lmIGdvdCBoZXJlIHJlc3RhcnRlZCBnYW1lXG4gICAgdGhpcy5yZHAuaGFzUXVlc3Rpb25zID0gZmFsc2U7XG4gIH1cbiAgXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcbiAgICAgIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZENhdGVnb3J5LmlkICtcIiBcIisgdGhpcy5zZWxlY3RlZENhdGVnb3J5Lm5hbWUpO1xuICAgICAgdGhpcy5yZHAuc3BlYWsoXCJHYW1lIGlzIHN0YXJ0aW5nIG5vdyFcIik7XG4gICAgICB0aGlzLm5leHQodGhpcy5zZWxlY3RlZENhdGVnb3J5LmlkKTtcbiAgfVxuICBcbiAgQFZpZXdDaGlsZChcInN1YmplY3RzXCIpIHN1YmplY3RzIDogRWxlbWVudFJlZjtcbiAgZXh0cmFjdERhdGEoKSB7XG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTsgXG4gICAgLy8gdGhpcy5jYXRlZ29yaWVzLnBvcCgpO1xuICAgIFxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBodHRwLnJlcXVlc3QoeyB1cmw6IFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGlfY2F0ZWdvcnkucGhwXCIsIG1ldGhvZDogXCJHRVRcIiwgdGltZW91dDogMTAwMCB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgY29uc29sZS5sb2coXCJsb2FkXCIpXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgY29uc29sZS5sb2cobXlPYmoudHJpdmlhX2NhdGVnb3JpZXMubGVuZ3RoKVxuICAgICAgLy9oYWNreiBwb3VyIGVubGV2ZXIgbGUgbnVsbCBkdSB1aSBsb2xcbiAgICAgIC8vdGhhdC5jYXRlZ29yaWVzLnBvcCgpXG4gICAgICBmb3IgKGxldCBpID0gMDtpIDwgbXlPYmoudHJpdmlhX2NhdGVnb3JpZXMubGVuZ3RoO2krKykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLmlkKyBcIiBcIisgbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0ubmFtZSk7XG4gICAgICAgIGxldCBpZDogbnVtYmVyID0gbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0uaWQ7XG4gICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5uYW1lO1xuICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUpXG4gICAgICAgIHRoYXQuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeShpZCwgbmFtZSkpO1xuICAgICAgfVxuICAgICAgdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdGhhdC5jYXRlZ29yaWVzO1xuICAgICAgLyp0aGF0LnN1YmplY3RzLm5hdGl2ZUVsZW1lbnQub24obGlzdFZpZXdNb2R1bGUuTGlzdFZpZXcuaXRlbUxvYWRpbmdFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IGxpc3RWaWV3TW9kdWxlLkl0ZW1FdmVudERhdGEpIHtcbiAgICAgICAgICBpZiAoIWFyZ3Mudmlldykge1xuICAgICAgICAgICAgICAvLyBDcmVhdGUgbGFiZWwgaWYgaXQgaXMgbm90IGFscmVhZHkgY3JlYXRlZC5cbiAgICAgICAgICAgICAgYXJncy52aWV3ID0gbmV3IGxhYmVsTW9kdWxlLkxhYmVsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICg8bGFiZWxNb2R1bGUuTGFiZWw+YXJncy52aWV3KS50ZXh0ID0gdGhhdC5jYXRlZ29yaWVzLmdldEl0ZW0oYXJncy5pbmRleCkubmFtZTtcbiAgICAgIH0pOyovXG4gICAgICBcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8vLyBBcmd1bWVudCAoZSkgaXMgRXJyb3IhXG4gICAgICBjb25zb2xlLmxvZyhcIkRpZG50IGxvYWRcIilcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgdGhhdC5jYXRlZ29yaWVzLnB1c2gobmV3IFRyaXZpYUNhdGVnb3J5KC0xLCBcIkVycm9yOiBDbGljayBiYWNrIGJ1dHRvbiBhbmQgdHJ5IGFnYWluLlwiKSk7XG4gICAgICB0aGF0LnN1YmplY3RzLm5hdGl2ZUVsZW1lbnQuaXRlbXMgPSB0aGF0LmNhdGVnb3JpZXM7XG4gICAgfSk7XG4gIH1cblxuICBuZXh0KGNhdGVnb3J5SWQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5hdmlnYXRpbmcgdG8gcXVlc3Rpb25QcmVzZW50ZXIgd2l0aCBpZDogXCIrIGNhdGVnb3J5SWQpO1xuICAgIC8vIGlmKHRoaXMucmV0dXJuUGF0aCA9PSBcInN1bW1hcnlcIil7XG4gICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5yZXR1cm5QYXRoXSk7XG4gICAgLy8gfSBlbHNle1xuICAgICAgaWYodGhpcy5yZHAucGF0aCAmJiB0aGlzLnJkcC5wYXRoICE9PSBcIlwiKXtcbiAgICAgICAgdGhpcy5yZHAucGF0aCA9IFwic3ViamVjdFNlbGVjdG9yXCI7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInF1ZXN0aW9uUHJlc2VudGVyXCIsIGNhdGVnb3J5SWQgXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7ICAgICAgICBcbiAgICAgIH0gICAvLyB9XG4gIH1cbiAgXG59XG4iXX0=