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
        this.rdp.subjectName = this.selectedCategory.name;
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
                var randId = Math.floor(Math.random() * (myObj.trivia_categories.length - 1) + 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsMENBQXdEO0FBRXhELHNEQUE2RDtBQUM3RCxnRkFBMkU7QUFDM0UsMkVBQWtHO0FBS2xHLDhEQUEwRDtBQVMxRDtJQVNFLGtDQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxpQkFBb0M7UUFBdkksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSM0osZ0RBQWdEO1FBQ3pDLGVBQVUsR0FBRyxJQUFJLGtDQUFlLEVBQWtCLENBQUM7UUFReEQsNENBQTRDO1FBQzVDLG1DQUFtQztRQUNuQyxNQUFNO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTSw0Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FB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WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN4QyxpR0FBaUc7WUFDakcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVsRixDQUFDO0lBQ0wsQ0FBQztJQWxFc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVksaUJBQVU7OERBQUM7SUF0Q2xDLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO1lBQy9ELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBVzJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCLEVBQTZCLHNDQUFpQjtPQVRoSix3QkFBd0IsQ0EwR3BDO0lBQUQsK0JBQUM7Q0FBQSxBQTFHRCxJQTBHQztBQTFHWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgKiBhcyBsaXN0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIGxhYmVsTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1RyaXZpYUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUNhdGVnb3J5XCIgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdWJqZWN0U2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci1jb21tb24uY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN1YmplY3RTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgLy9wdWJsaWMgY2F0ZWdvcmllczogQXJyYXk8VHJpdmlhQ2F0ZWdvcnk+ID0gW107XG4gIHB1YmxpYyBjYXRlZ29yaWVzID0gbmV3IE9ic2VydmFibGVBcnJheTxUcml2aWFDYXRlZ29yeT4oKTtcbiAgcHVibGljIHNlbGVjdGVkQ2F0ZWdvcnk6IFRyaXZpYUNhdGVnb3J5O1xuICBwdWJsaWMgcmFuZG9tQ2F0ZWdvcnk6IG51bWJlcjtcbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcbiAgcHVibGljIHJldHVyblBhdGg6IHN0cmluZzsgXG4gIHB1YmxpYyByZHA6IFJvdW5kRGF0YVByb3ZpZGVyOyBcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7IFxuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgLy8gICB0aGlzLnJldHVyblBhdGggPSBwYXJhbXMucGF0aDtcbiAgICAvLyB9KTtcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSA4MDtcbiAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgLy9pZiBnb3QgaGVyZSByZXN0YXJ0ZWQgZ2FtZVxuICAgIHRoaXMucmRwLmhhc1F1ZXN0aW9ucyA9IGZhbHNlO1xuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgICAgaWYoYXJncy5pbmRleCA9PSAwKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzLmdldEl0ZW0odGhpcy5yYW5kb21DYXRlZ29yeSk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cgKFwiQ2hvc2VuOiBcIit0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuaWQgK1wiIFwiKyB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSk7XG4gICAgICB0aGlzLnJkcC5zcGVhayhcIlNlbGVjdGVkIENhdGVnb3J5IGlzIFwiLmNvbmNhdCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSkpO1xuXG4gICAgICB0aGlzLnJkcC5zdWJqZWN0SWQgPSB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuaWQudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMucmRwLnN1YmplY3ROYW1lID0gdGhpcy5zZWxlY3RlZENhdGVnb3J5Lm5hbWU7XG4gICAgICB0aGlzLm5leHQodGhpcy5zZWxlY3RlZENhdGVnb3J5LmlkKTtcbiAgfVxuICBcbiAgQFZpZXdDaGlsZChcInN1YmplY3RzXCIpIHN1YmplY3RzIDogRWxlbWVudFJlZjtcbiAgZXh0cmFjdERhdGEoKSB7XG4gICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTsgXG4gICAgLy8gdGhpcy5jYXRlZ29yaWVzLnBvcCgpO1xuICAgIFxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBodHRwLnJlcXVlc3QoeyB1cmw6IFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGlfY2F0ZWdvcnkucGhwXCIsIG1ldGhvZDogXCJHRVRcIiwgdGltZW91dDogMTAwMCB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBKU09OIVxuICAgICAgY29uc29sZS5sb2coXCJsb2FkXCIpXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgY29uc29sZS5sb2cobXlPYmoudHJpdmlhX2NhdGVnb3JpZXMubGVuZ3RoKVxuICAgICAgLy9oYWNreiBwb3VyIGVubGV2ZXIgbGUgbnVsbCBkdSB1aSBsb2xcbiAgICAgIC8vdGhhdC5jYXRlZ29yaWVzLnBvcCgpXG4gICAgICAvL0FkZCBhIHJhbmRvbSBzdWJqZWN0IGJ1dHRvbiB0byBsaXN0XG4gICAgICBpZihteU9iai50cml2aWFfY2F0ZWdvcmllcy5sZW5ndGggPiAwKXtcbiAgICAgICAgbGV0IHJhbmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobXlPYmoudHJpdmlhX2NhdGVnb3JpZXMubGVuZ3RoLTEpKzEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJhbmRvbVwiLmNvbmNhdChyYW5kSWQudG9TdHJpbmcoKSkpXG4gICAgICAgIGNvbnNvbGUubG9nKG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aC50b1N0cmluZygpKVxuICAgICAgICB0aGF0LmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkocmFuZElkLFwiUmFuZG9tIFN1YmplY3RcIikpO1xuICAgICAgICB0aGF0LnJhbmRvbUNhdGVnb3J5ID0gcmFuZElkO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5pZCsgXCIgXCIrIG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLm5hbWUpO1xuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLmlkO1xuICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0ubmFtZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuYW1lKVxuICAgICAgICB0aGF0LmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkoaWQsIG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHRoYXQuc3ViamVjdHMubmF0aXZlRWxlbWVudC5pdGVtcyA9IHRoYXQuY2F0ZWdvcmllcztcbiAgICAgIC8qdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lm9uKGxpc3RWaWV3TW9kdWxlLkxpc3RWaWV3Lml0ZW1Mb2FkaW5nRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBsaXN0Vmlld01vZHVsZS5JdGVtRXZlbnREYXRhKSB7XG4gICAgICAgICAgaWYgKCFhcmdzLnZpZXcpIHtcbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGFyZ3MudmlldyA9IG5ldyBsYWJlbE1vZHVsZS5MYWJlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoPGxhYmVsTW9kdWxlLkxhYmVsPmFyZ3MudmlldykudGV4dCA9IHRoYXQuY2F0ZWdvcmllcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLm5hbWU7XG4gICAgICB9KTsqL1xuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coXCJEaWRudCBsb2FkXCIpXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoYXQuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeSgtMSwgXCJFcnJvcjogQ2xpY2sgYmFjayBidXR0b24gYW5kIHRyeSBhZ2Fpbi5cIikpO1xuICAgICAgdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdGhhdC5jYXRlZ29yaWVzO1xuICAgIH0pO1xuICB9XG5cbiAgbmV4dChjYXRlZ29yeUlkKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOYXZpZ2F0aW5nIHRvIHF1ZXN0aW9uUHJlc2VudGVyIHdpdGggaWQ6IFwiKyBjYXRlZ29yeUlkKTtcbiAgICAvLyBpZih0aGlzLnJldHVyblBhdGggPT0gXCJzdW1tYXJ5XCIpe1xuICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuUGF0aF0pO1xuICAgIC8vIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwicGF0aCBcIi5jb25jYXQodGhpcy5yZHAucGF0aCkpO1xuICAgICAgaWYodGhpcy5yZHAucGF0aCAmJiB0aGlzLnJkcC5wYXRoICE9PSBcIlwiKXtcbiAgICAgICAgdGhpcy5yZHAucGF0aCA9IFwic3ViamVjdFNlbGVjdG9yXCI7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdW1tYXJ5XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgdGhpcy5yZHAuc3BlYWsoXCJHYW1lIGlzIHN0YXJ0aW5nIG5vdyFcIik7XG4gICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJmaXJzdFBsYXllckFubm91bmNlXCIsIGNhdGVnb3J5SWQgXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7IFxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZmlyc3RQbGF5ZXJBbm5vdW5jZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7ICAgICAgICBcbiAgICAgICBcbiAgICAgIH0gXG4gIH1cbiAgXG59XG4iXX0=