import {Component, OnInit} from 'angular2/core';
import {Input} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgClass} from 'angular2/common';
import {DataTable} from '../../components/vendor/primeng/datatable/datatable';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {Season} from '../../views/domain/seasons';
import {SeasonService} from '../service/seasonservice';
import {Column} from '../../components/vendor/primeng/column/column';
import {Header} from '../../components/vendor/primeng/common/header';
import {Footer} from '../../components/vendor/primeng/common/footer';
import {Growl} from '../../components/vendor/primeng/growl/growl';
import {Message} from '../../components/vendor/primeng/api/message';

@Component({
    selector: 'seasonsGrid',
    templateUrl: 'app/views/grids/seasonsDatatable.html',
    directives: [DataTable, Column, Header, Footer, SplitButton, SplitButtonItem, NgClass, Growl, TabPanel, TabView, CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES, HTTP_PROVIDERS, SeasonService]
})

@Injectable()

export class SeasonsDatatable implements OnInit {
    

    msgs:Message[];

    seasons:Season[];

    cols:Column[];

    selectedSeason1:Season;

    selectedSeason2:Season;

    selectedSeasons:Season[];

    constructor(private _router:Router, private seasonService:SeasonService) {
    }

    ngOnInit() {
        this.seasonService.getSeasonsSmall().then(seasons => this.seasons = seasons);
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

    onRowDblclick(event) {
        this._router.navigate(['Series Episodes']);
        console.log("navigate to route");
    }

    editInfo(event){
        this._router.navigate(['SeasonInfo']);
    }

    isOpen = false;
    isSplit = false;

    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
        console.log('toggleOpen');
    }

    toggleSplitScreen(event) {
        event.preventDefault();
        this.isSplit = !this.isSplit;
        console.log('splitScreen');
    }
}