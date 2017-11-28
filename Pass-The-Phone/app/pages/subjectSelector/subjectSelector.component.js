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
        this.rdp.subjectId = this.selectedCategory.id.toString();
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
            // this.routerExtensions.navigate(["firstPlayerAnnounce", categoryId ], { clearHistory: true }); 
            this.routerExtensions.navigate(["firstPlayerAnnounce"], { clearHistory: true });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsMENBQXdEO0FBRXhELHNEQUE2RDtBQUM3RCxnRkFBMkU7QUFDM0UsMkVBQWtHO0FBS2xHLDhEQUEwRDtBQVMxRDtJQVNFLGtDQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxpQkFBb0M7UUFBdkksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSM0osZ0RBQWdEO1FBQ3pDLGVBQVUsR0FBRyxJQUFJLGtDQUFlLEVBQWtCLENBQUM7UUFReEQsNENBQTRDO1FBQzVDLG1DQUFtQztRQUNuQyxNQUFNO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTSw0Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUUsVUFBVSxHQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBR0QsOENBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQix5QkFBeUI7UUFFekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNmLDBCQUEwQjtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUUvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzNDLHNDQUFzQztZQUN0Qyx1QkFBdUI7WUFDdkIscUNBQXFDO1lBQ3JDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBQyxNQUFNLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztZQUMvQixDQUFDO1lBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RELG1GQUFtRjtnQkFDbkYsSUFBSSxFQUFFLEdBQVcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxNQUFJLEdBQVcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkQsbUJBQW1CO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFjLENBQUMsRUFBRSxFQUFFLE1BQUksQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BEOzs7Ozs7aUJBTUs7UUFFUCxDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1osMkJBQTJCO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQUksR0FBSixVQUFLLFVBQVU7UUFDYix3RUFBd0U7UUFDeEUsb0NBQW9DO1FBQ3BDLDZDQUE2QztRQUM3QyxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN4QyxpR0FBaUc7WUFDakcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVsRixDQUFDO0lBQ0wsQ0FBQztJQXBFc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVksaUJBQVU7OERBQUM7SUF0Q2xDLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO1lBQy9ELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBVzJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCLEVBQTZCLHNDQUFpQjtPQVRoSix3QkFBd0IsQ0E0R3BDO0lBQUQsK0JBQUM7Q0FBQSxBQTVHRCxJQTRHQztBQTVHWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgKiBhcyBsaXN0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIGxhYmVsTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1RyaXZpYUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUNhdGVnb3J5XCIgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdWJqZWN0U2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci1jb21tb24uY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN1YmplY3RTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgLy9wdWJsaWMgY2F0ZWdvcmllczogQXJyYXk8VHJpdmlhQ2F0ZWdvcnk+ID0gW107XG4gIHB1YmxpYyBjYXRlZ29yaWVzID0gbmV3IE9ic2VydmFibGVBcnJheTxUcml2aWFDYXRlZ29yeT4oKTtcbiAgcHVibGljIHNlbGVjdGVkQ2F0ZWdvcnk6IFRyaXZpYUNhdGVnb3J5O1xuICBwdWJsaWMgcmFuZG9tQ2F0ZWdvcnk6IG51bWJlcjtcbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcbiAgcHVibGljIHJldHVyblBhdGg6IHN0cmluZzsgXG4gIHB1YmxpYyByZHA6IFJvdW5kRGF0YVByb3ZpZGVyOyBcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7IFxuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgLy8gICB0aGlzLnJldHVyblBhdGggPSBwYXJhbXMucGF0aDtcbiAgICAvLyB9KTtcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSA4MDtcbiAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgLy9pZiBnb3QgaGVyZSByZXN0YXJ0ZWQgZ2FtZVxuICAgIHRoaXMucmRwLmhhc1F1ZXN0aW9ucyA9IGZhbHNlO1xuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgICAgaWYoYXJncy5pbmRleCA9PSAwKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzLmdldEl0ZW0odGhpcy5yYW5kb21DYXRlZ29yeSk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cgKFwiQ2hvc2VuOiBcIit0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuaWQgK1wiIFwiKyB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSk7XG4gICAgICB0aGlzLnJkcC5zcGVhayhcIlNlbGVjdGVkIENhdGVnb3J5IGlzIFwiLmNvbmNhdCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSkpO1xuXG4gICAgICB0aGlzLnJkcC5zdWJqZWN0SWQgPSB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuaWQudG9TdHJpbmcoKTtcblxuICAgICAgdGhpcy5uZXh0KHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5pZCk7XG4gIH1cbiAgXG4gIEBWaWV3Q2hpbGQoXCJzdWJqZWN0c1wiKSBzdWJqZWN0cyA6IEVsZW1lbnRSZWY7XG4gIGV4dHJhY3REYXRhKCkge1xuICAgIHZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7IFxuICAgIC8vIHRoaXMuY2F0ZWdvcmllcy5wb3AoKTtcbiAgICBcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgXG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpX2NhdGVnb3J5LnBocFwiLCBtZXRob2Q6IFwiR0VUXCIsIHRpbWVvdXQ6IDEwMDAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgLy8vLyBBcmd1bWVudCAocikgaXMgSlNPTiFcbiAgICAgIGNvbnNvbGUubG9nKFwibG9hZFwiKVxuICAgICAgdmFyIGpzb24gPSByLmNvbnRlbnQ7XG4gICAgICB2YXIgc3RyID0gci5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICBcbiAgICAgIHZhciBteU9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIGNvbnNvbGUubG9nKG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aClcbiAgICAgIC8vaGFja3ogcG91ciBlbmxldmVyIGxlIG51bGwgZHUgdWkgbG9sXG4gICAgICAvL3RoYXQuY2F0ZWdvcmllcy5wb3AoKVxuICAgICAgLy9BZGQgYSByYW5kb20gc3ViamVjdCBidXR0b24gdG8gbGlzdFxuICAgICAgaWYobXlPYmoudHJpdmlhX2NhdGVnb3JpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgIGxldCByYW5kSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbXlPYmoudHJpdmlhX2NhdGVnb3JpZXMubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyYW5kb21cIi5jb25jYXQocmFuZElkLnRvU3RyaW5nKCkpKVxuICAgICAgICBjb25zb2xlLmxvZyhteU9iai50cml2aWFfY2F0ZWdvcmllcy5sZW5ndGgudG9TdHJpbmcoKSlcbiAgICAgICAgdGhhdC5jYXRlZ29yaWVzLnB1c2gobmV3IFRyaXZpYUNhdGVnb3J5KHJhbmRJZCxcIlJhbmRvbSBTdWJqZWN0XCIpKTtcbiAgICAgICAgdGhhdC5yYW5kb21DYXRlZ29yeSA9IHJhbmRJZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5pZCsgXCIgXCIrIG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLm5hbWUpO1xuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLmlkO1xuICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0ubmFtZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuYW1lKVxuICAgICAgICB0aGF0LmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkoaWQsIG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHRoYXQuc3ViamVjdHMubmF0aXZlRWxlbWVudC5pdGVtcyA9IHRoYXQuY2F0ZWdvcmllcztcbiAgICAgIC8qdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lm9uKGxpc3RWaWV3TW9kdWxlLkxpc3RWaWV3Lml0ZW1Mb2FkaW5nRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBsaXN0Vmlld01vZHVsZS5JdGVtRXZlbnREYXRhKSB7XG4gICAgICAgICAgaWYgKCFhcmdzLnZpZXcpIHtcbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGFyZ3MudmlldyA9IG5ldyBsYWJlbE1vZHVsZS5MYWJlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoPGxhYmVsTW9kdWxlLkxhYmVsPmFyZ3MudmlldykudGV4dCA9IHRoYXQuY2F0ZWdvcmllcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLm5hbWU7XG4gICAgICB9KTsqL1xuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coXCJEaWRudCBsb2FkXCIpXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoYXQuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeSgtMSwgXCJFcnJvcjogQ2xpY2sgYmFjayBidXR0b24gYW5kIHRyeSBhZ2Fpbi5cIikpO1xuICAgICAgdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdGhhdC5jYXRlZ29yaWVzO1xuICAgIH0pO1xuICB9XG5cbiAgbmV4dChjYXRlZ29yeUlkKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOYXZpZ2F0aW5nIHRvIHF1ZXN0aW9uUHJlc2VudGVyIHdpdGggaWQ6IFwiKyBjYXRlZ29yeUlkKTtcbiAgICAvLyBpZih0aGlzLnJldHVyblBhdGggPT0gXCJzdW1tYXJ5XCIpe1xuICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuUGF0aF0pO1xuICAgIC8vIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwicGF0aCBcIi5jb25jYXQodGhpcy5yZHAucGF0aCkpO1xuICAgICAgaWYodGhpcy5yZHAucGF0aCAmJiB0aGlzLnJkcC5wYXRoICE9PSBcIlwiKXtcbiAgICAgICAgdGhpcy5yZHAucGF0aCA9IFwic3ViamVjdFNlbGVjdG9yXCI7XG4gICAgICAgIHRoaXMucmRwLnN1YmplY3ROYW1lID0gdGhpcy5zZWxlY3RlZENhdGVnb3J5Lm5hbWU7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5yZHAuc3BlYWsoXCJHYW1lIGlzIHN0YXJ0aW5nIG5vdyFcIik7XG4gICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJmaXJzdFBsYXllckFubm91bmNlXCIsIGNhdGVnb3J5SWQgXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7IFxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZmlyc3RQbGF5ZXJBbm5vdW5jZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7ICAgICAgICBcbiAgICAgICBcbiAgICAgIH0gXG4gIH1cbiAgXG59XG4iXX0=