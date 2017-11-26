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
    }
    SubjectSelectorComponent.prototype.ngOnInit = function () {
        this.progressValue = 80;
        this.extractData();
        //if got here restarted game
        this.rdp.hasQuestions = false;
    };
    SubjectSelectorComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        if (args.index == 0) {
            this.selectedCategory = this.categories.getItem(this.randomCategory);
        }
        else {
            this.selectedCategory = this.categories.getItem(args.index);
        }
        console.log("Chosen: " + this.selectedCategory.id + " " + this.selectedCategory.name);
        this.rdp.speak("Selected Category is ".concat(this.selectedCategory.name));
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
            //Add a random subject button to list
            if (myObj.trivia_categories.length > 0) {
                var randId = Math.floor(Math.random() * myObj.trivia_categories.length);
                console.log("random".concat(randId.toString()));
                console.log(myObj.trivia_categories.length.toString());
                that.categories.push(new triviaCategory_1.TriviaCategory(randId, "Random Subject"));
                that.randomCategory = randId;
            }
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
        console.log("path ".concat(this.rdp.path));
        if (this.rdp.path && this.rdp.path !== "") {
            this.rdp.path = "subjectSelector";
            this.rdp.subjectName = this.selectedCategory.name;
            this.routerExtensions.navigate(["summary"], { clearHistory: true });
        }
        else {
            this.rdp.speak("Game is starting now!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsMENBQXdEO0FBRXhELHNEQUE2RDtBQUM3RCxnRkFBMkU7QUFDM0UsMkVBQWtHO0FBS2xHLDhEQUEwRDtBQVMxRDtJQVNFLGtDQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxpQkFBb0M7UUFBdkksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSM0osZ0RBQWdEO1FBQ3pDLGVBQVUsR0FBRyxJQUFJLGtDQUFlLEVBQWtCLENBQUM7UUFReEQsNENBQTRDO1FBQzVDLG1DQUFtQztRQUNuQyxNQUFNO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTSw0Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FB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LENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLFVBQVUsQ0FBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0YsQ0FBQyxDQUFHLElBQUk7SUFDWixDQUFDO0lBakVzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBWSxpQkFBVTs4REFBQztJQW5DbEMsd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsU0FBUyxFQUFFLENBQUMsa0RBQWtELENBQUM7WUFDL0QsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzt5Q0FXMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBNkIsc0NBQWlCO09BVGhKLHdCQUF3QixDQXNHcEM7SUFBRCwrQkFBQztDQUFBLEFBdEdELElBc0dDO0FBdEdZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3VuZERhdGFQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvcm91bmREYXRhLnByb3ZpZGVyXCJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSwgQ2hhbmdlZERhdGEsIENoYW5nZVR5cGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCAqIGFzIGxpc3RWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuaW1wb3J0ICogYXMgbGFiZWxNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcInVpL3Byb2dyZXNzXCI7XG5cbmltcG9ydCB7VHJpdmlhQ2F0ZWdvcnl9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpdmlhQ2F0ZWdvcnlcIiBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInN1YmplY3RTZWxlY3RvclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdWJqZWN0U2VsZWN0b3Ivc3ViamVjdFNlbGVjdG9yLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9zdWJqZWN0U2VsZWN0b3Ivc3ViamVjdFNlbGVjdG9yLWNvbW1vbi5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgU3ViamVjdFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAvL3B1YmxpYyBjYXRlZ29yaWVzOiBBcnJheTxUcml2aWFDYXRlZ29yeT4gPSBbXTtcbiAgcHVibGljIGNhdGVnb3JpZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFRyaXZpYUNhdGVnb3J5PigpO1xuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogVHJpdmlhQ2F0ZWdvcnk7XG4gIHB1YmxpYyByYW5kb21DYXRlZ29yeTogbnVtYmVyO1xuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwdWJsaWMgcmV0dXJuUGF0aDogc3RyaW5nOyBcbiAgcHVibGljIHJkcDogUm91bmREYXRhUHJvdmlkZXI7IFxuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3VuZERhdGFQcm92aWRlcjogUm91bmREYXRhUHJvdmlkZXIpIHsgXG4gICAgLy8gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAvLyAgIHRoaXMucmV0dXJuUGF0aCA9IHBhcmFtcy5wYXRoO1xuICAgIC8vIH0pO1xuICAgIHRoaXMucmRwID0gcm91bmREYXRhUHJvdmlkZXI7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDgwO1xuICAgIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICAvL2lmIGdvdCBoZXJlIHJlc3RhcnRlZCBnYW1lXG4gICAgdGhpcy5yZHAuaGFzUXVlc3Rpb25zID0gZmFsc2U7XG4gIH1cbiAgXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiBcIiArIGFyZ3MubmFtZSk7XG4gICAgICBpZihhcmdzLmluZGV4ID09IDApe1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXMuZ2V0SXRlbSh0aGlzLnJhbmRvbUNhdGVnb3J5KTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzLmdldEl0ZW0oYXJncy5pbmRleCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRDYXRlZ29yeS5pZCArXCIgXCIrIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKTtcbiAgICAgIHRoaXMucmRwLnNwZWFrKFwiU2VsZWN0ZWQgQ2F0ZWdvcnkgaXMgXCIuY29uY2F0KHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKSk7XG4gICAgICB0aGlzLm5leHQodGhpcy5zZWxlY3RlZENhdGVnb3J5LmlkKTtcbiAgfVxuICBcbiAgQFZpZXdDaGlsZChcInN1YmplY3RzXCIpIHN1YmplY3RzIDogRWxlbWVudFJlZjtcbiAgZXh0cmFjdERhdGEoKSB7XG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTsgXG4gICAgLy8gdGhpcy5jYXRlZ29yaWVzLnBvcCgpO1xuICAgIFxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBodHRwLnJlcXVlc3QoeyB1cmw6IFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGlfY2F0ZWdvcnkucGhwXCIsIG1ldGhvZDogXCJHRVRcIiwgdGltZW91dDogMTAwMCB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgY29uc29sZS5sb2coXCJsb2FkXCIpXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgY29uc29sZS5sb2cobXlPYmoudHJpdmlhX2NhdGVnb3JpZXMubGVuZ3RoKVxuICAgICAgLy9oYWNreiBwb3VyIGVubGV2ZXIgbGUgbnVsbCBkdSB1aSBsb2xcbiAgICAgIC8vdGhhdC5jYXRlZ29yaWVzLnBvcCgpXG4gICAgICAvL0FkZCBhIHJhbmRvbSBzdWJqZWN0IGJ1dHRvbiB0byBsaXN0XG4gICAgICBpZihteU9iai50cml2aWFfY2F0ZWdvcmllcy5sZW5ndGggPiAwKXtcbiAgICAgICAgbGV0IHJhbmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpteU9iai50cml2aWFfY2F0ZWdvcmllcy5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJhbmRvbVwiLmNvbmNhdChyYW5kSWQudG9TdHJpbmcoKSkpXG4gICAgICAgIGNvbnNvbGUubG9nKG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aC50b1N0cmluZygpKVxuICAgICAgICB0aGF0LmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkocmFuZElkLFwiUmFuZG9tIFN1YmplY3RcIikpO1xuICAgICAgICB0aGF0LnJhbmRvbUNhdGVnb3J5ID0gcmFuZElkO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5pZCsgXCIgXCIrIG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLm5hbWUpO1xuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLmlkO1xuICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0ubmFtZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuYW1lKVxuICAgICAgICB0aGF0LmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkoaWQsIG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHRoYXQuc3ViamVjdHMubmF0aXZlRWxlbWVudC5pdGVtcyA9IHRoYXQuY2F0ZWdvcmllcztcbiAgICAgIC8qdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lm9uKGxpc3RWaWV3TW9kdWxlLkxpc3RWaWV3Lml0ZW1Mb2FkaW5nRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBsaXN0Vmlld01vZHVsZS5JdGVtRXZlbnREYXRhKSB7XG4gICAgICAgICAgaWYgKCFhcmdzLnZpZXcpIHtcbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGFyZ3MudmlldyA9IG5ldyBsYWJlbE1vZHVsZS5MYWJlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoPGxhYmVsTW9kdWxlLkxhYmVsPmFyZ3MudmlldykudGV4dCA9IHRoYXQuY2F0ZWdvcmllcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLm5hbWU7XG4gICAgICB9KTsqL1xuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coXCJEaWRudCBsb2FkXCIpXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoYXQuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeSgtMSwgXCJFcnJvcjogQ2xpY2sgYmFjayBidXR0b24gYW5kIHRyeSBhZ2Fpbi5cIikpO1xuICAgICAgdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdGhhdC5jYXRlZ29yaWVzO1xuICAgIH0pO1xuICB9XG5cbiAgbmV4dChjYXRlZ29yeUlkKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOYXZpZ2F0aW5nIHRvIHF1ZXN0aW9uUHJlc2VudGVyIHdpdGggaWQ6IFwiKyBjYXRlZ29yeUlkKTtcbiAgICAvLyBpZih0aGlzLnJldHVyblBhdGggPT0gXCJzdW1tYXJ5XCIpe1xuICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuUGF0aF0pO1xuICAgIC8vIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwicGF0aCBcIi5jb25jYXQodGhpcy5yZHAucGF0aCkpO1xuICAgICAgaWYodGhpcy5yZHAucGF0aCAmJiB0aGlzLnJkcC5wYXRoICE9PSBcIlwiKXtcbiAgICAgICAgdGhpcy5yZHAucGF0aCA9IFwic3ViamVjdFNlbGVjdG9yXCI7XG4gICAgICAgIHRoaXMucmRwLnN1YmplY3ROYW1lID0gdGhpcy5zZWxlY3RlZENhdGVnb3J5Lm5hbWU7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5yZHAuc3BlYWsoXCJHYW1lIGlzIHN0YXJ0aW5nIG5vdyFcIik7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiLCBjYXRlZ29yeUlkIF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pOyAgICAgICAgXG4gICAgICB9ICAgLy8gfVxuICB9XG4gIFxufVxuIl19