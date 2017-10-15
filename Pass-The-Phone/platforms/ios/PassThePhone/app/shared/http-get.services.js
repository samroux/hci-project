"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> http-get-service
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var MyHttpGetService = /** @class */ (function () {
    function MyHttpGetService(http) {
        this.http = http;
        this.serverUrl = "https://opentdb.com/api_category.php";
    }
    MyHttpGetService.prototype.getData = function () {
        console.log("getData");
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl)
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.getResponseInfo = function () {
        console.log("getResponseInfo");
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl)
            .do(function (res) { return res; });
    };
    MyHttpGetService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        // headers.append("AuthKey", "");
        // headers.append("AuthToken", "");
        // headers.append("Content-Type", "");
        return headers;
    };
    MyHttpGetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MyHttpGetService);
    return MyHttpGetService;
}());
exports.MyHttpGetService = MyHttpGetService;
// << http-get-service 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1nZXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLWdldC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNCQUFzQjtBQUN0QixzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBR3hELGlDQUErQjtBQUMvQixnQ0FBOEI7QUFHOUI7SUFHSSwwQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFGdEIsY0FBUyxHQUFHLHNDQUFzQyxDQUFDO0lBRXpCLENBQUM7SUFFbkMsa0NBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDL0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQy9CLEVBQUUsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sOENBQW1CLEdBQTNCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLG1DQUFtQztRQUNuQyxzQ0FBc0M7UUFFdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBM0JRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUlpQixXQUFJO09BSHJCLGdCQUFnQixDQTRCNUI7SUFBRCx1QkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDRDQUFnQjtBQTZCN0Isc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gaHR0cC1nZXQtc2VydmljZVxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXlIdHRwR2V0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpX2NhdGVnb3J5LnBocFwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RGF0YVwiKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRSZXNwb25zZUluZm8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0UmVzcG9uc2VJbmZvXCIpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybClcbiAgICAgICAgICAgIC5kbyhyZXMgPT4gcmVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXV0aEtleVwiLCBcIlwiKTtcbiAgICAgICAgLy8gaGVhZGVycy5hcHBlbmQoXCJBdXRoVG9rZW5cIiwgXCJcIik7XG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiXCIpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cbn1cbi8vIDw8IGh0dHAtZ2V0LXNlcnZpY2UiXX0=