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
import {NonLinearSchedulingRulesDatatable} from "./views/grids/nonLinearSchedulingRules";
import {StaffDatatable} from "./views/grids/staff";
import {ShowParent} from "./views/buttons/showParent";
import {SharedServices} from './sharedServices';
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/layout/layout.html',
    directives: [ROUTER_DIRECTIVES, NgClass, BreadcrumbComponent, GridsView, SidenavComponent, Header, ShowParent]
})
@RouteConfig([
    {path: '/seriesSeason', name: 'SeasonsDatatable', component: SeasonsDatatable},
    {path: '/broadcastSeriesSeason', name: 'BroadcastSeasonsDatatable', component: BroadcastSeasonsDatatable},
    {path: '/contracts', name: 'ContractsDatatable', component: ContractsDatatable},
    {path: '/contractAirDates', name: 'ContractAirDatesDatatable', component: ContractAirDatesDatatable},
    {path: 'seriesSeason/seriesEpisodes', name: 'SeriesEpisodesDatatable', component: SeriesEpisodesDatatable},
    {
        path: '/nonLinearSchedulingRules',
        name: 'NonLinearSchedulingRulesDatatable',
        component: NonLinearSchedulingRulesDatatable
    },
    {path: '/staff', name: 'StaffDatatable', component: StaffDatatable},
    {path: '/1', name: 'BreadcrumbComponent', component: BreadcrumbComponent},


])
export class AppComponent {

    goBack() {
        window.history.back();
    }

    public routeConfig: String[];

    constructor(private router: Router, service:SharedServices) {
        // Read the RouteConfig annotation so we can pass it to the breadcrumb component
        let annotations = Reflect.getOwnMetadata('annotations', AppComponent);
        for (let i = 0; i < annotations.length; i += 1) {
            if (annotations[i].constructor.name === 'RouteConfig') {
                this.routeConfig = annotations[i].configs;
            }
        }
    }
}