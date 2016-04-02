import {Component, OnInit} from 'angular2/core';
import {Input} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgClass} from 'angular2/common';
import {DataTable} from '../../components/datatable/datatable';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
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
    selector: 'seasonsGrid',
    templateUrl: 'app/views/grids/seasonsDatatable.html',
    directives: [DataTable, Column, Header, Footer,  SplitButton, SplitButtonItem, NgClass, Growl, TabPanel, TabView, CodeHighlighter,ROUTER_DIRECTIVES],
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
}