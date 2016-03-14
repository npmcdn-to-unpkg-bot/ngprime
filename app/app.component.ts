import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BreadcrumbComponent} from './views/breadcrumb/breadcrumb.component';
import {GridsView} from './views/grids/grid';
import {SidenavComponent} from './views/sidenav/sidenav.component';
import {Header} from './views/header/header.component';
import {PaginatorDemo} from "./views/paginator/paginatordemo";
import {DataTableDemo} from "./views/grids/datatabledemo";
import {DataTableEditableDemo} from "./views/grids/datatableeditabledemo";
import {DataTableFacetsDemo} from "./views/grids/datatablefacetsdemo";
import {DataTablePaginatorDemo} from "./views/grids/datatablepaginatordemo";
import {DataTableSortDemo} from "./views/grids/datatablesortdemo";
import {DataTableResponsiveDemo} from "./views/grids/datatableresponsivedemo";
import {DataTableSelectionDemo} from "./views/grids/datatableselectiondemo";
import {DataTableFilterDemo} from "./views/grids/datatablefilterdemo";
import {DataTableColResizeDemo} from "./views/grids/datatablecolresizedemo";
import {DataTableScrollDemo} from "./views/grids/datatablescrolldemo";
import {DataTableGroupDemo} from "./views/grids/datatablegroupdemo";
import {DataTableCrudDemo} from "./views/grids/datatablecruddemo";
import {DataTableLazyDemo} from "./views/grids/datatablelazydemo";

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/layout/layout.html',
	directives: [ROUTER_DIRECTIVES, BreadcrumbComponent, GridsView, SidenavComponent, Header]
})
@RouteConfig([
	{path: '/datatable', name: 'DataTableDemo', component: DataTableDemo},
    
    
])
export class AppComponent {

    
}