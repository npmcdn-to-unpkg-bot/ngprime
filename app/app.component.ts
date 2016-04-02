import {Component, EventEmitter} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Input} from "angular2/core";
import {Injectable} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {BreadcrumbComponent} from './views/breadcrumb/breadcrumb.component';
import {GridsView} from './views/grids/grid';
import {SidenavComponent} from './views/sidenav/sidenav.component';
import {Header} from './views/header/header.component';
import {SeasonsDatatable} from "./views/grids/seriesSeasons";
import {BroadcastSeasonsDatatable} from "./views/grids/broadcastSeasons";
import {RightsDatatable} from "./views/grids/contracts";
import {ShowInfo} from "./views/edit-nodes/showInfo.component";
import {EpisodeInfo} from "./views/edit-nodes/episodeInfo.component";
import {SeasonInfo} from "./views/edit-nodes/seasonInfo.component";
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
    {path: '/', name: 'Search Results', component: SearchResultsDatatable},
    {path: 'Series Season', name: 'Series Season', component: SeasonsDatatable},
    {path: 'broadcastSeriesSeason', name: 'BroadcastSeasonsDatatable', component: BroadcastSeasonsDatatable},
    {path: 'rights', name: 'RightsDatatable', component: RightsDatatable},
    {path: 'contractAirDates', name: 'ContractAirDatesDatatable', component: ContractAirDatesDatatable},
    {path: 'Series Season/Series Episodes/', name: 'Series Episodes',component: SeriesEpisodesDatatable},
    {path: 'nonLinearSchedulingRules',name: 'NonLinearSchedulingRulesDatatable',component: NonLinearSchedulingRulesDatatable},
    {path: 'staff', name: 'StaffDatatable', component: StaffDatatable},
    {path: 'Episode Info', name: 'EpisodeInfo', component: EpisodeInfo},
    {path: 'Season Info', name: 'SeasonInfo', component: SeasonInfo},
    {path: 'Show Info', name: 'ShowInfo', component: ShowInfo}
])

@Injectable()

export class AppComponent {



    goBack() {
        window.history.back();
    }

    public routeConfig: String[];

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