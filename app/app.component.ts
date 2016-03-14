import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BreadcrumbComponent} from './views/breadcrumb/breadcrumb.component';
import {GridsView} from './views/grids/grid';
import {SidenavComponent} from './views/sidenav/sidenav.component';
import {Header} from './views/header/header.component';
import {PaginatorDemo} from "./views/paginator/paginatordemo";
import {DataTableDemo} from "./views/grids/datatabledemo";

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/layout/layout.html',
	directives: [ROUTER_DIRECTIVES, BreadcrumbComponent, GridsView, SidenavComponent, Header]
})
@RouteConfig([
	{path: '/datatable', name: 'DataTableDemo', component: DataTableDemo},
	{path: '/1', name: 'BreadcrumbComponent', component: BreadcrumbComponent},
    
    
])
export class AppComponent {

    
}