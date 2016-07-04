import { bootstrap }  from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { provideRouter  } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { HashLocationStrategy, LocationStrategy, APP_BASE_HREF} from '@angular/common';  
import { AppComponent } from './app.component';
import { LibraryRoutes } from './library.routes';


bootstrap(AppComponent, [
		provide(LocationStrategy, {useClass: HashLocationStrategy}),
		HTTP_PROVIDERS,
		provideRouter(LibraryRoutes)
]);
