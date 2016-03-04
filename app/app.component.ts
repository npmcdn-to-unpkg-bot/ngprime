import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {CarouselDemo} from './views/grids/grid';


@Component({
	selector: 'my-app',
	templateUrl: 'app/components/layout/layout.html',
	directives: [ROUTER_DIRECTIVES, BreadcrumbComponent, SidenavComponent, CarouselDemo]
})
@RouteConfig([
    
])
export class AppComponent {

    
}