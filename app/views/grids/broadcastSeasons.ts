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

    }

}