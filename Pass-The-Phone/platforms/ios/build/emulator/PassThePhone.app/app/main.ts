// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";


// application variable should already be included in the app.js file
// Only do this on android
var application = require('application');
if (application.android) {
    application.android.on(application.AndroidApplication.activityBackPressedEvent, backEvent);
  }
  
  // This does the work on deciding if you want to go back
  // arg.cancel = true will cancel navigating back
  function backEvent(args) {
    //stop the back button
    args.cancel = true;
  }
platformNativeScriptDynamic().bootstrapModule(AppModule);
