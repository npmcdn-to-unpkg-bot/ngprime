import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BreadcrumbComponent} from './views/breadcrumb/breadcrumb.component';
import {GridsView} from './views/grids/grid';
import {SidenavComponent} from './views/sidenav/sidenav.component';
import {Header} from './views/header/header.component';
import {PaginatorDemo} from "./views/paginator/paginatordemo";
import {SeasonsDatatable} from "./views/grids/seriesSeasons";
import {BroadcastSeasonsDatatable} from "./views/grids/broadcastSeasons";
import {ContractsDatatable} from "./views/grids/contracts";
import {ContractAirDatesDatatable} from "./views/grids/contractAirDates";
import {SeriesEpisodesDatatable} from "./views/grids/seriesEpisodes";
import {NonLinearSchedulingRulesDatatable} from "./views/grids/nonLinearSchedulingRules";
import {StaffDatatable} from "./views/grids/staff";

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/layout/layout.html',
	directives: [ROUTER_DIRECTIVES, BreadcrumbComponent, GridsView, SidenavComponent, Header]
})
@RouteConfig([
	{path: '/seriesSeason', name: 'SeasonsDatatable', component: SeasonsDatatable},
	{path: '/broadcastSeriesSeason', name: 'BroadcastSeasonsDatatable', component: BroadcastSeasonsDatatable},
	{path: '/contracts', name: 'ContractsDatatable', component: ContractsDatatable},
	{path: '/contractAirDates', name: 'ContractAirDatesDatatable', component: ContractAirDatesDatatable},
	{path: '/seriesEpisodes', name: 'SeriesEpisodesDatatable', component: SeriesEpisodesDatatable},
	{path: '/nonLinearSchedulingRules', name: 'NonLinearSchedulingRulesDatatable', component: NonLinearSchedulingRulesDatatable},
	{path: '/staff', name: 'StaffDatatable', component: StaffDatatable},
	{path: '/1', name: 'BreadcrumbComponent', component: BreadcrumbComponent},
    
    
])
export class AppComponent {

    
}