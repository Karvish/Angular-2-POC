"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var library_routes_1 = require('./library.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    http_1.HTTP_PROVIDERS,
    router_1.provideRouter(library_routes_1.LibraryRoutes)
]);
//# sourceMappingURL=main.js.map