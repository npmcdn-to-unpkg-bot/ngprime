import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Season} from '../../views/domain/seasons';
import {SeasonService} from '../service/seasonservice';
import {Column} from '../../components/column/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';

@Component({
    templateUrl: 'app/views/grids/broadcastSeasonsDatatable.html',
    directives: [DataTable, Column, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,SeasonService]
})
export class BroadcastSeasonsDatatable implements OnInit {

    msgs: Message[];

    seasons: Season[];

    cols: Column[];

    selectedSeason1: Season;

    selectedSeason2: Season;

    selectedSeasons: Season[];

    constructor(private _router: Router, private seasonService: SeasonService) { }

    ngOnInit() {
        this.seasonService.getSeasonsSmall().then(seasons => this.seasons = seasons);

        /*this.cols = [
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
        ];*/
    }
     onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Season Selected', detail: event.data.seasonName + ' - ' + event.data.fiscalYear});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Season Unselected', detail: event.data.seasonName + ' - ' + event.data.fiscalYear});
    }

    onRowDblclick(event) {
        //this._router.navigate(['Series Episodes']);
        console.log("navigate to route");
    }

}