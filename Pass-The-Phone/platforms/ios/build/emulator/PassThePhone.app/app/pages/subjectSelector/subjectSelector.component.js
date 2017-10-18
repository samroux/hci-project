"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var triviaCategory_1 = require("../../shared/triviaCategory");
var SubjectSelectorComponent = /** @class */ (function () {
    function SubjectSelectorComponent(route, router, routerExtensions) {
        // this.route.params.subscribe((params) => {
        //   this.returnPath = params.path;
        // });
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.categories = [];
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
    SubjectSelectorComponent.prototype.next = function (categoryId) {
        // console.log("Navigating to questionPresenter with id: "+ categoryId);
        // if(this.returnPath == "summary"){
        //   this.router.navigate([this.returnPath]);
        // } else{
        this.routerExtensions.navigate(["questionPresenter", categoryId], { clearHistory: true });
        // }
    };
    SubjectSelectorComponent = __decorate([
        core_1.Component({
            selector: "subjectSelector",
            templateUrl: "pages/subjectSelector/subjectSelector.html",
            styleUrls: ["pages/subjectSelector/subjectSelector-common.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, router_2.RouterExtensions])
    ], SubjectSelectorComponent);
    return SubjectSelectorComponent;
}());
exports.SubjectSelectorComponent = SubjectSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdFNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmplY3RTZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0UsMENBQXdEO0FBRXhELHNEQUE2RDtBQUs3RCw4REFBMEQ7QUFTMUQ7SUFPRSxrQ0FBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDO1FBQzNHLDRDQUE0QztRQUM1QyxtQ0FBbUM7UUFDbkMsTUFBTTtRQUhZLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEcsZUFBVSxHQUEwQixFQUFFLENBQUM7UUFXNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSw0Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2YsMEJBQTBCO1lBQzFCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUUvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN0RCxvRkFBb0Y7Z0JBRXBGLElBQUksRUFBRSxHQUFXLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLElBQUksTUFBSSxHQUFXLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBRW5ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQWMsQ0FBQyxFQUFFLEVBQUUsTUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBSUgsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNaLDJCQUEyQjtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFJLEdBQUosVUFBSyxVQUFVO1FBQ2Isd0VBQXdFO1FBQ3hFLG9DQUFvQztRQUNwQyw2Q0FBNkM7UUFDN0MsVUFBVTtRQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLElBQUk7SUFDTixDQUFDO0lBbkVVLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO1lBQy9ELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBUzJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCO09BUGxHLHdCQUF3QixDQXFFcEM7SUFBRCwrQkFBQztDQUFBLEFBckVELElBcUVDO0FBckVZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xuXG5pbXBvcnQge1RyaXZpYUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXZpYUNhdGVnb3J5XCIgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdWJqZWN0U2VsZWN0b3JcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc3ViamVjdFNlbGVjdG9yL3N1YmplY3RTZWxlY3Rvci1jb21tb24uY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN1YmplY3RTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGNhdGVnb3JpZXM6IEFycmF5PFRyaXZpYUNhdGVnb3J5PiA9IFtdO1xuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogVHJpdmlhQ2F0ZWdvcnk7XG4gIFxuICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xuICBwdWJsaWMgcmV0dXJuUGF0aDogc3RyaW5nOyAgXG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgLy8gICB0aGlzLnJldHVyblBhdGggPSBwYXJhbXMucGF0aDtcbiAgICAvLyB9KTtcblxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKG5ldyBUcml2aWFDYXRlZ29yeShudWxsLFwiXCIpKTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gODA7XG4gICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICB9XG4gIFxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJncy5uYW1lKTtcbiAgICBpZihhcmdzLmluZGV4ID4wKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllc1thcmdzLmluZGV4XTtcbiAgICAgIGNvbnNvbGUubG9nIChcIkNob3NlbjogXCIrdGhpcy5zZWxlY3RlZENhdGVnb3J5LmlkICtcIiBcIisgdGhpcy5zZWxlY3RlZENhdGVnb3J5Lm5hbWUpO1xuICAgICAgdGhpcy5uZXh0KHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5pZCk7XG4gICAgfVxuICB9XG4gIFxuICBleHRyYWN0RGF0YSgpIHtcbiAgICB2YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKCk7XG4gICAgXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFxuICAgIGh0dHAucmVxdWVzdCh7IHVybDogXCJodHRwczovL29wZW50ZGIuY29tL2FwaV9jYXRlZ29yeS5waHBcIiwgbWV0aG9kOiBcIkdFVFwiIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIEpTT04hXG4gICAgICB2YXIganNvbiA9IHIuY29udGVudDtcbiAgICAgIHZhciBzdHIgPSByLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIFxuICAgICAgdmFyIG15T2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMDtpIDwgbXlPYmoudHJpdmlhX2NhdGVnb3JpZXMubGVuZ3RoO2krKykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5pZCsgXCIgXCIrIG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLm5hbWUpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGlkOiBudW1iZXIgPSBteU9iai50cml2aWFfY2F0ZWdvcmllc1tpXS5pZDtcbiAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IG15T2JqLnRyaXZpYV9jYXRlZ29yaWVzW2ldLm5hbWU7XG4gICAgICAgIFxuICAgICAgICB0aGF0LmNhdGVnb3JpZXMucHVzaChuZXcgVHJpdmlhQ2F0ZWdvcnkoaWQsIG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8vLyBBcmd1bWVudCAoZSkgaXMgRXJyb3IhXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5leHQoY2F0ZWdvcnlJZCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiTmF2aWdhdGluZyB0byBxdWVzdGlvblByZXNlbnRlciB3aXRoIGlkOiBcIisgY2F0ZWdvcnlJZCk7XG4gICAgLy8gaWYodGhpcy5yZXR1cm5QYXRoID09IFwic3VtbWFyeVwiKXtcbiAgICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnJldHVyblBhdGhdKTtcbiAgICAvLyB9IGVsc2V7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25QcmVzZW50ZXJcIiwgY2F0ZWdvcnlJZCBdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAvLyB9XG4gIH1cbiAgXG59XG4iXX0=