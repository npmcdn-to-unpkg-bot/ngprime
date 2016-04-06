import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Shows} from '../../views/domain/shows';
import {ShowsService} from '../service/shows';
import {Column} from '../../components/column/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';

@Component({
    selector: 'search-results',
    templateUrl: 'app/views/search-results/search-results.html',
    directives: [DataTable,Column, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,ShowsService]
})
export class SearchResultsDatatable implements OnInit {

    msgs: Message[];
    private tableDataColor: string = "green";
    shows: Shows[];
    cols: Column[];

    selectedShows1: Shows;

    selectedShows2: Shows;

    selectedShows: Shows[];

    constructor(private _router: Router, private showsService: ShowsService) { }

    ngOnInit() {
        this.showsService.getShows().then(shows => this.shows = shows);


    }
    
    onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Show Selected', detail: event.data.showName + ' - ' + event.data.showCode});
        console.log("Row Clicked");
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Season Unselected', detail: event.data.showName + ' - ' + event.data.showCode});
    }

    onRowDblclick(event) {
        this._router.navigate(['Series Season']);
        console.log("navigate to route");
    }
}