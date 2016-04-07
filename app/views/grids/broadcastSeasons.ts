import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/vendor/primeng/datatable/datatable';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {Season} from '../../views/domain/seasons';
import {SeasonService} from '../service/seasonservice';
import {Column} from '../../components/vendor/primeng/column/column';
import {Header} from '../../components/vendor/primeng/common/header';
import {Footer} from '../../components/vendor/primeng/common/footer';
import {Growl} from '../../components/vendor/primeng/growl/growl';
import {Message} from '../../components/vendor/primeng/api/message';

@Component({
    templateUrl: 'app/views/grids/broadcastSeasonsDatatable.html',
    directives: [DataTable, Column, Header,SplitButton, SplitButtonItem,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
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
    isOpen = false;
    isSplit = false;

    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
        console.log('tf');
    }

    toggleSplitScreen(event) {
        event.preventDefault();
        this.isSplit = !this.isSplit;
    }

}