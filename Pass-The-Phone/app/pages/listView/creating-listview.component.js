"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> listview-create-code
var core_1 = require("@angular/core");
var Country = /** @class */ (function () {
    function Country(name) {
        this.name = name;
    }
    return Country;
}());
var europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom"];
var CreatingListViewComponent = /** @class */ (function () {
    function CreatingListViewComponent() {
        this.countries = [];
        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
    }
    CreatingListViewComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    CreatingListViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./creating-listview.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], CreatingListViewComponent);
    return CreatingListViewComponent;
}());
exports.CreatingListViewComponent = CreatingListViewComponent;
// << listview-create-code 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRpbmctbGlzdHZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRpbmctbGlzdHZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQTBCO0FBQzFCLHNDQUFtRTtBQUVuRTtJQUNJLGlCQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDeEMsY0FBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCO0lBQzVGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTztJQUM3RixRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVU7SUFDeEcsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQU9yRDtJQUdJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNMLENBQUM7SUFFTSw2Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFiUSx5QkFBeUI7UUFMckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7O09BQ1cseUJBQXlCLENBY3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSw4REFBeUI7QUFldEMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gbGlzdHZpZXctY3JlYXRlLWNvZGVcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5jbGFzcyBDb3VudHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cbn1cblxubGV0IGV1cm9waWFuQ291bnRyaWVzID0gW1wiQXVzdHJpYVwiLCBcIkJlbGdpdW1cIiwgXCJCdWxnYXJpYVwiLCBcIkNyb2F0aWFcIiwgXCJDeXBydXNcIiwgXCJDemVjaCBSZXB1YmxpY1wiLFxuICAgIFwiRGVubWFya1wiLCBcIkVzdG9uaWFcIiwgXCJGaW5sYW5kXCIsIFwiRnJhbmNlXCIsIFwiR2VybWFueVwiLCBcIkdyZWVjZVwiLCBcIkh1bmdhcnlcIiwgXCJJcmVsYW5kXCIsIFwiSXRhbHlcIixcbiAgICBcIkxhdHZpYVwiLCBcIkxpdGh1YW5pYVwiLCBcIkx1eGVtYm91cmdcIiwgXCJNYWx0YVwiLCBcIk5ldGhlcmxhbmRzXCIsIFwiUG9sYW5kXCIsIFwiUG9ydHVnYWxcIiwgXCJSb21hbmlhXCIsIFwiU2xvdmFraWFcIixcbiAgICBcIlNsb3ZlbmlhXCIsIFwiU3BhaW5cIiwgXCJTd2VkZW5cIiwgXCJVbml0ZWQgS2luZ2RvbVwiXTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0aW5nLWxpc3R2aWV3LmNvbXBvbmVudC5odG1sXCIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRpbmdMaXN0Vmlld0NvbXBvbmVudCB7XG4gICAgcHVibGljIGNvdW50cmllczogQXJyYXk8Q291bnRyeT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb3VudHJpZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV1cm9waWFuQ291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50cmllcy5wdXNoKG5ldyBDb3VudHJ5KGV1cm9waWFuQ291bnRyaWVzW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXgpO1xuICAgIH1cbn1cbi8vIDw8IGxpc3R2aWV3LWNyZWF0ZS1jb2RlIl19