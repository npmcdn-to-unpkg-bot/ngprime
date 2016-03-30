import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NgClass} from 'angular2/common';
import {BreadcrumbComponent} from './views/breadcrumb/breadcrumb.component';
import {GridsView} from './views/grids/grid';
import {SidenavComponent} from './views/sidenav/sidenav.component';
import {Header} from './views/header/header.component';
import {SeasonsDatatable} from "./views/grids/seriesSeasons";
import {BroadcastSeasonsDatatable} from "./views/grids/broadcastSeasons";
import {ContractsDatatable} from "./views/grids/contracts";
import {ContractAirDatesDatatable} from "./views/grids/contractAirDates";
import {SeriesEpisodesDatatable} from "./views/grids/seriesEpisodes";
import {SearchResultsDatatable} from "./views/search-results/search.component";
import {NonLinearSchedulingRulesDatatable} from "./views/grids/nonLinearSchedulingRules";
import {StaffDatatable} from "./views/grids/staff";
import {ShowParent} from "./views/buttons/showParent";
import {SharedServices} from './sharedServices';
@Component({
    providers: [],
    selector: 'my-app',
    templateUrl: 'app/views/layout/layout.html',
    directives: [ROUTER_DIRECTIVES, NgClass, BreadcrumbComponent, GridsView, SidenavComponent, Header, ShowParent]
})

/*@RouteConfig([
    { path: 'comp1', component: Component1, as: 'Comp 1', useAsDefault: true},
    { path: 'comp1/comp2', component: Component2, as: 'Comp 2'},
    { path: 'comp1/comp2/comp3', component: Component3, as: 'Comp 3'}
])*/

@RouteConfig([
    {path: '/', as: 'Search Results', component: SearchResultsDatatable},
    {path: 'Series Season:showId', name: 'Series Season:showId', component: SeasonsDatatable},
    {path: 'broadcastSeriesSeason', as: 'BroadcastSeasonsDatatable', component: BroadcastSeasonsDatatable},
    {path: 'contracts', as: 'ContractsDatatable', component: ContractsDatatable},
    {path: 'contractAirDates', as: 'ContractAirDatesDatatable', component: ContractAirDatesDatatable},
    {path: 'Series Season/Series Episodes/', as: 'Series Episodes',component: SeriesEpisodesDatatable},
    {path: 'nonLinearSchedulingRules',as: 'NonLinearSchedulingRulesDatatable',component: NonLinearSchedulingRulesDatatable},
    {path: 'staff', as: 'StaffDatatable', component: StaffDatatable}
])
export class AppComponent {

    goBack() {
        window.history.back();
    }

    public routeConfig: String[];
    public showId: String[];

    constructor(private router: Router, service:SharedServices) {
        // Read the RouteConfig annotation so we can pass it to the breadcrumb component
        let annotations = <any>Reflect.getOwnMetadata('annotations', AppComponent);
        for (let i = 0; i < annotations.length; i += 1) {
            if (annotations[i].constructor.name === 'RouteConfig') {
                this.routeConfig = annotations[i].configs;
            }
        }
    }
}