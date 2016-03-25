import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgClass} from 'angular2/common';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Season} from '../../views/domain/seasons';
import {SeasonService} from '../service/seasonservice';
import {Column} from '../../components/api/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';
import {SharedServices} from '../../sharedServices';
import {ShowParent} from "../../views/buttons/showParent";

@Component({
    selector: 'seasonsGrid',
    templateUrl: 'app/views/grids/seasonsDatatable.html',
    directives: [DataTable, Header, Footer, NgClass, Growl, TabPanel, TabView, CodeHighlighter, ShowParent, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES,HTTP_PROVIDERS, SeasonService, SharedServices]
})
export class SeasonsDatatable implements OnInit {

    msgs:Message[];

    seasons:Season[];

    cols:Column[];

    selectedSeason1:Season;

    selectedSeason2:Season;

    selectedSeasons:Season[];

    constructor(private seasonService:SeasonService, service: SharedServices, router: Router) {
    }

    ngOnInit() {
        this.seasonService.getSeasonsSmall().then(seasons => this.seasons = seasons);

        this.cols = [
            {field: 'seasonName', header: 'Name', sortable: true, filter: true},
            {field: 'showCode', header: 'Show Code', sortable: true, filter: true},
            {field: 'productionNumber', header: 'Production #', sortable: true, filter: true},
            {field: 'status', header: 'Status', sortable: true, filter: true},
            {field: 'note', header: 'Note', sortable: true, filter: true},
            {field: 'fiscalYear', header: 'Fiscal Year', sortable: true, filter: true},
            {field: 'broadcastSeason', header: 'Broadcast Season', sortable: true, filter: true},
            {field: 'roughFormat', header: 'Rough Format', sortable: true, filter: true},
            {field: 'episodeCount', header: 'Episode Count', sortable: true, filter: true},
            {field: 'programCategory', header: 'Program Category', sortable: true, filter: true}
        ];
    }

    onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({
            severity: 'info',
            summary: 'Season Selected',
            detail: event.data.seasonName + ' - ' + event.data.fiscalYear
        });
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({
            severity: 'info',
            summary: 'Season Unselected',
            detail: event.data.seasonName + ' - ' + event.data.fiscalYear
        });
    }

}