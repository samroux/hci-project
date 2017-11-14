"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var example_directive_1 = require("./example.directive");
var toggle_nav_button_directive_1 = require("./toggle-nav-button.directive");
var platform_directives_1 = require("./platform.directives");
var CommonDirectivesModule = /** @class */ (function () {
    function CommonDirectivesModule() {
    }
    CommonDirectivesModule = __decorate([
        core_1.NgModule({
            declarations: [
                example_directive_1.TKExampleTitleDirective,
                toggle_nav_button_directive_1.TKToggleNavButtonDirective,
                platform_directives_1.TKIfAndroidDirective,
                platform_directives_1.TKIfIOSDirective
            ],
            exports: [
                example_directive_1.TKExampleTitleDirective,
                toggle_nav_button_directive_1.TKToggleNavButtonDirective,
                platform_directives_1.TKIfAndroidDirective,
                platform_directives_1.TKIfIOSDirective
            ]
        })
    ], CommonDirectivesModule);
    return CommonDirectivesModule;
}());
exports.CommonDirectivesModule = CommonDirectivesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRpcmVjdGl2ZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLWRpcmVjdGl2ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBSXpDLHlEQUE4RDtBQUM5RCw2RUFBMkU7QUFDM0UsNkRBQStFO0FBZ0IvRTtJQUFBO0lBQXNDLENBQUM7SUFBMUIsc0JBQXNCO1FBZGxDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViwyQ0FBdUI7Z0JBQ3ZCLHdEQUEwQjtnQkFDMUIsMENBQW9CO2dCQUNwQixzQ0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsMkNBQXVCO2dCQUN2Qix3REFBMEI7Z0JBQzFCLDBDQUFvQjtnQkFDcEIsc0NBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztBQUExQix3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRLRXhhbXBsZVRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9leGFtcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUS1RvZ2dsZU5hdkJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vdG9nZ2xlLW5hdi1idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IFRLSWZBbmRyb2lkRGlyZWN0aXZlLCBUS0lmSU9TRGlyZWN0aXZlIH0gZnJvbSAnLi9wbGF0Zm9ybS5kaXJlY3RpdmVzJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVEtFeGFtcGxlVGl0bGVEaXJlY3RpdmUsXG4gICAgICAgIFRLVG9nZ2xlTmF2QnV0dG9uRGlyZWN0aXZlLFxuICAgICAgICBUS0lmQW5kcm9pZERpcmVjdGl2ZSxcbiAgICAgICAgVEtJZklPU0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUS0V4YW1wbGVUaXRsZURpcmVjdGl2ZSxcbiAgICAgICAgVEtUb2dnbGVOYXZCdXR0b25EaXJlY3RpdmUsXG4gICAgICAgIFRLSWZBbmRyb2lkRGlyZWN0aXZlLFxuICAgICAgICBUS0lmSU9TRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25EaXJlY3RpdmVzTW9kdWxlIHsgfSJdfQ==