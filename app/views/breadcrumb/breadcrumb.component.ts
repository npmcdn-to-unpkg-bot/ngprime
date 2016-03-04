import {Component} from 'angular2/core';
import {Breadcrumb} from 'primeng/primeng';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
selector: 'breadcrumb',
	templateUrl: 'app/views/breadcrumb/breadcrumb.html',
	directives: [ROUTER_DIRECTIVES, Breadcrumb]
})
export class BreadcrumbComponent {



}