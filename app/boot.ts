import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {SharedServices} from './sharedServices';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import 'rxjs/Rx';
import {AppComponent} from './app.component';
import {ColorPickerService} from 'app/views/service/color-picker/color-picker.service'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    SharedServices,
    ColorPickerService,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
        provide(APP_BASE_HREF, {useValue : '/'})
]).catch(err => console.error(err));



/*

//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {App} from './app';

bootstrap(App, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy },
        provide(APP_BASE_HREF, {useValue : '/'}
]).catch(err => console.error(err));*/
