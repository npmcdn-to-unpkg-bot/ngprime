import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BreadcrumbComponent} from './views/breadcrumb/breadcrumb.component';
import {CarouselDemo} from './views/grids/grid';


@Component({
	selector: 'my-app',
	templateUrl: 'app/components/layout/layout.html',
	directives: [ROUTER_DIRECTIVES, BreadcrumbComponent, CarouselDemo]
})
@RouteConfig([
    
])
export class AppComponent {

    
}