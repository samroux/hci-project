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
    };
    SubjectSelectorComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index + " " + args.name);
        this.selectedCategory = this.categories.getItem(args.index);
        console.log("Chosen: " + this.selectedCategory.id + " " + this.selectedCategory.name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsMENBQXdEO0FBRXhELHNEQUE2RDtBQUM3RCxnRkFBMkU7QUFDM0UsMkVBQWtHO0FBS2xHLDhEQUEwRDtBQVMxRDtJQVNFLGtDQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxpQkFBb0M7UUFBdkksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSM0osZ0RBQWdEO1FBQ3pDLGVBQVUsR0FBRyxJQUFJLGtDQUFlLEVBQWtCLENBQUM7UUFReEQsNENBQTRDO1FBQzVDLG1DQUFtQztRQUNuQyxNQUFNO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztRQUU3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQseUJBQXlCO0lBQzNCLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSw0Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FB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LENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBRyxJQUFJO0lBQ1osQ0FBQztJQXREc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVksaUJBQVU7OERBQUM7SUE5QmxDLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO1lBQy9ELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBVzJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCLEVBQTZCLHNDQUFpQjtPQVRoSix3QkFBd0IsQ0FzRnBDO0lBQUQsK0JBQUM7Q0FBQSxBQXRGRCxJQXNGQztBQXRGWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91bmREYXRhUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL3JvdW5kRGF0YS5wcm92aWRlclwiXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgKiBhcyBsaXN0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIGxhYmVsTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1RyaXZpYUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUNhdGVnb3J5XCIgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdWJqZWN0U2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci1jb21tb24uY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN1YmplY3RTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgLy9wdWJsaWMgY2F0ZWdvcmllczogQXJyYXk8VHJpdmlhQ2F0ZWdvcnk+ID0gW107XG4gIHB1YmxpYyBjYXRlZ29yaWVzID0gbmV3IE9ic2VydmFibGVBcnJheTxUcml2aWFDYXRlZ29yeT4oKTtcbiAgcHVibGljIHNlbGVjdGVkQ2F0ZWdvcnk6IFRyaXZpYUNhdGVnb3J5O1xuICBcbiAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcbiAgcHVibGljIHJldHVyblBhdGg6IHN0cmluZzsgXG4gIHB1YmxpYyByZHA6IFJvdW5kRGF0YVByb3ZpZGVyOyBcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91bmREYXRhUHJvdmlkZXI6IFJvdW5kRGF0YVByb3ZpZGVyKSB7IFxuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgLy8gICB0aGlzLnJldHVyblBhdGggPSBwYXJhbXMucGF0aDtcbiAgICAvLyB9KTtcbiAgICB0aGlzLnJkcCA9IHJvdW5kRGF0YVByb3ZpZGVyO1xuXG4gICAgdGhpcy5jYXRlZ29yaWVzLnB1c2gobmV3IFRyaXZpYUNhdGVnb3J5KG51bGwsXCJcIikpO1xuICAgIC8vIHRoaXMuY2F0ZWdvcmllcy5wb3AoKTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gODA7XG4gICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBhcmdzLm5hbWUpO1xuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzLmdldEl0ZW0oYXJncy5pbmRleCk7XG4gICAgICBjb25zb2xlLmxvZyAoXCJDaG9zZW46IFwiK3RoaXMuc2VsZWN0ZWRDYXRlZ29yeS5pZCArXCIgXCIrIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKTtcbiAgICAgIHRoaXMubmV4dCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuaWQpO1xuICB9XG4gIEBWaWV3Q2hpbGQoXCJzdWJqZWN0c1wiKSBzdWJqZWN0cyA6IEVsZW1lbnRSZWY7XG4gIGV4dHJhY3REYXRhKCkge1xuICAgIHZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7IFxuICAgIC8vIHRoaXMuY2F0ZWdvcmllcy5wb3AoKTtcbiAgICBcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgXG4gICAgaHR0cC5yZXF1ZXN0KHsgdXJsOiBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpX2NhdGVnb3J5LnBocFwiLCBtZXRob2Q6IFwiR0VUXCIsIHRpbWVvdXQ6IDEwMDAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgLy8vLyBBcmd1bWVudCAocikgaXMgSlNPTiFcbiAgICAgIGNvbnNvbGUubG9nKFwibG9hZFwiKVxuICAgICAgdmFyIGpzb24gPSByLmNvbnRlbnQ7XG4gICAgICB2YXIgc3RyID0gci5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICBcbiAgICAgIHZhciBteU9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIGNvbnNvbGUubG9nKG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aClcbiAgICAgIC8vaGFja3ogcG91ciBlbmxldmVyIGxlIG51bGwgZHUgdWkgbG9sXG4gICAgICAvL3RoYXQuY2F0ZWdvcmllcy5wb3AoKVxuICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5pZCsgXCIgXCIrIG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLm5hbWUpO1xuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLmlkO1xuICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gbXlPYmoudHJpdmlhX2NhdGVnb3JpZXNbaV0ubmFtZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuYW1lKVxuICAgICAgICB0aGF0LmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkoaWQsIG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHRoYXQuc3ViamVjdHMubmF0aXZlRWxlbWVudC5pdGVtcyA9IHRoYXQuY2F0ZWdvcmllcztcbiAgICAgIC8qdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lm9uKGxpc3RWaWV3TW9kdWxlLkxpc3RWaWV3Lml0ZW1Mb2FkaW5nRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBsaXN0Vmlld01vZHVsZS5JdGVtRXZlbnREYXRhKSB7XG4gICAgICAgICAgaWYgKCFhcmdzLnZpZXcpIHtcbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGFyZ3MudmlldyA9IG5ldyBsYWJlbE1vZHVsZS5MYWJlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoPGxhYmVsTW9kdWxlLkxhYmVsPmFyZ3MudmlldykudGV4dCA9IHRoYXQuY2F0ZWdvcmllcy5nZXRJdGVtKGFyZ3MuaW5kZXgpLm5hbWU7XG4gICAgICB9KTsqL1xuICAgICAgXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKGUpIGlzIEVycm9yIVxuICAgICAgY29uc29sZS5sb2coXCJEaWRudCBsb2FkXCIpXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoYXQuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeSgtMSwgXCJFcnJvcjogQ2xpY2sgYmFjayBidXR0b24gYW5kIHRyeSBhZ2Fpbi5cIikpO1xuICAgICAgdGhhdC5zdWJqZWN0cy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdGhhdC5jYXRlZ29yaWVzO1xuICAgIH0pO1xuICB9XG5cbiAgbmV4dChjYXRlZ29yeUlkKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOYXZpZ2F0aW5nIHRvIHF1ZXN0aW9uUHJlc2VudGVyIHdpdGggaWQ6IFwiKyBjYXRlZ29yeUlkKTtcbiAgICAvLyBpZih0aGlzLnJldHVyblBhdGggPT0gXCJzdW1tYXJ5XCIpe1xuICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuUGF0aF0pO1xuICAgIC8vIH0gZWxzZXtcbiAgICAgIGlmKHRoaXMucmRwLnBhdGggJiYgdGhpcy5yZHAucGF0aCAhPT0gXCJcIil7XG4gICAgICAgIHRoaXMucmRwLnBhdGggPSBcInN1YmplY3RTZWxlY3RvclwiO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3VtbWFyeVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJxdWVzdGlvblByZXNlbnRlclwiLCBjYXRlZ29yeUlkIF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pOyAgICAgICAgXG4gICAgICB9ICAgLy8gfVxuICB9XG4gIFxufVxuIl19