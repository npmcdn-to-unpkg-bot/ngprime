import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/vendor/primeng/datatable/datatable';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {Season} from '../../views/domain/seasons';
import {SeasonService} from '../service/seasonservice';
import {Column} from '../../components/vendor/primeng/api/column';
import {Header} from '../../components/vendor/primeng/common/header';
import {Footer} from '../../components/vendor/primeng/common/footer';
import {Growl} from '../../components/vendor/primeng/growl/growl';
import {Message} from '../../components/vendor/primeng/api/message';

@Component({
    templateUrl: 'app/views/grids/datatabledemo.html',
    directives: [DataTable, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,SeasonService]
})
export class SeasonsDatatable implements OnInit {

    msgs: Message[];

    seasons: Season[];

    cols: Column[];

    selectedSeason1: Season;

    selectedSeason2: Season;

    selectedSeasons: Season[];

    constructor(private seasonService: SeasonService) { }

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
        this.msgs.push({severity: 'info', summary: 'Season Selected', detail: event.data.seasonName + ' - ' + event.data.fiscalYear});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Season Unselected', detail: event.data.seasonName + ' - ' + event.data.fiscalYear});
    }
}