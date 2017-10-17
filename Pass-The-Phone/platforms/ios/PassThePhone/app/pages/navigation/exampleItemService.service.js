"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_exampleItems_1 = require("./mock-exampleItems");
var ExampleItemService = /** @class */ (function () {
    function ExampleItemService() {
    }
    ExampleItemService.prototype.getAllExampleItems = function () {
        return mock_exampleItems_1.EXAMPLEITEMS;
    };
    ExampleItemService.prototype.getParentExampleItem = function (index) {
        return mock_exampleItems_1.EXAMPLEITEMS[index];
    };
    ExampleItemService.prototype.getChildExampleItem = function (parentTitle, subItemTitle, exampleItems) {
        if (exampleItems) {
            for (var index = 0; index < exampleItems.length; index++) {
                var element = exampleItems[index];
                if (element.title === parentTitle) {
                    var parentExampleItem = element;
                    if (parentExampleItem && parentExampleItem.subItems.length >= 0) {
                        var childItem = parentExampleItem.subItems.filter(function (item) { return item.title === subItemTitle; })[0];
                        return childItem;
                    }
                }
                else {
                    if (element.subItems.length >= 0) {
                        var result = this.getChildExampleItem(parentTitle, subItemTitle, element.subItems);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
        }
    };
    ExampleItemService = __decorate([
        core_1.Injectable()
    ], ExampleItemService);
    return ExampleItemService;
}());
exports.ExampleItemService = ExampleItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZUl0ZW1TZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtcGxlSXRlbVNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx5REFBbUQ7QUFJbkQ7SUFBQTtJQWdDQSxDQUFDO0lBL0JHLCtDQUFrQixHQUFsQjtRQUNJLE1BQU0sQ0FBQyxnQ0FBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpREFBb0IsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixNQUFNLENBQUMsZ0NBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLFdBQW1CLEVBQUUsWUFBb0IsRUFBRSxZQUFZO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDO29CQUNoQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELElBQUksU0FBUyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxLQUFLLFlBQVksRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUUxRixNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNyQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNULE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQ2xCLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBL0JRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO09BQ0Esa0JBQWtCLENBZ0M5QjtJQUFELHlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRVhBTVBMRUlURU1TIH0gZnJvbSBcIi4vbW9jay1leGFtcGxlSXRlbXNcIjtcbmltcG9ydCB7IEV4YW1wbGVJdGVtIH0gZnJvbSBcIi4vZXhhbXBsZUl0ZW1cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVJdGVtU2VydmljZSB7XG4gICAgZ2V0QWxsRXhhbXBsZUl0ZW1zKCk6IEV4YW1wbGVJdGVtW10ge1xuICAgICAgICByZXR1cm4gRVhBTVBMRUlURU1TO1xuICAgIH1cblxuICAgIGdldFBhcmVudEV4YW1wbGVJdGVtKGluZGV4OiBudW1iZXIpOiBFeGFtcGxlSXRlbSB7XG4gICAgICAgIHJldHVybiBFWEFNUExFSVRFTVNbaW5kZXhdO1xuICAgIH1cblxuICAgIGdldENoaWxkRXhhbXBsZUl0ZW0ocGFyZW50VGl0bGU6IHN0cmluZywgc3ViSXRlbVRpdGxlOiBzdHJpbmcsIGV4YW1wbGVJdGVtcyk6IEV4YW1wbGVJdGVtIHtcbiAgICAgICAgaWYgKGV4YW1wbGVJdGVtcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGV4YW1wbGVJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGV4YW1wbGVJdGVtc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IHBhcmVudFRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRFeGFtcGxlSXRlbSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRFeGFtcGxlSXRlbSAmJiBwYXJlbnRFeGFtcGxlSXRlbS5zdWJJdGVtcy5sZW5ndGggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkSXRlbSA9IHBhcmVudEV4YW1wbGVJdGVtLnN1Ykl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udGl0bGUgPT09IHN1Ykl0ZW1UaXRsZSlbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZEl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN1Ykl0ZW1zLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRDaGlsZEV4YW1wbGVJdGVtKHBhcmVudFRpdGxlLCBzdWJJdGVtVGl0bGUsIGVsZW1lbnQuc3ViSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=