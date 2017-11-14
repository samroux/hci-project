
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";


import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import { RoundDataProvider } from "./shared/providers/roundData.provider";

import { COMMON_DIRECTIVES } from './pages/navigation/directives';
import { CommonDirectivesModule } from './pages/navigation/directives/common-directives.module';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    CommonDirectivesModule,
    NativeScriptUIListViewModule,    
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent],
  providers: [RoundDataProvider]
  
})
export class AppModule {}
