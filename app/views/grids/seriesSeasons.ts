import {Component, OnInit} from 'angular2/core';
import {Input} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgClass} from 'angular2/common';
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
import {SharedServices} from '../../sharedServices';
import {ShowParent} from "../../views/buttons/showParent";

@Component({
    selector: 'seasonsGrid',
    templateUrl: 'app/views/grids/seasonsDatatable.html',
    directives: [DataTable, Column, Header, Footer, NgClass, Growl, TabPanel, TabView, CodeHighlighter, ShowParent, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES, HTTP_PROVIDERS, SeasonService]
})

@Injectable()

export class SeasonsDatatable implements OnInit {

    @Input() isOpen:boolean = false;
    @Input() isSplit:boolean = false;

    msgs:Message[];

    seasons:Season[];

    cols:Column[];

    selectedSeason1:Season;

    selectedSeason2:Season;

    selectedSeasons:Season[];

    constructor(private _router:Router, private seasonService:SeasonService, private service:SharedServices) {
    }

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

    toggleOpen(event) {
        console.log('open parent');
        this.isOpen = !this.isOpen;
    }

    toggleSplitScreen(event) {
        console.log('split screen');
        this.isSplit = !this.isSplit;
    }
}