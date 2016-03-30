import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Shows} from '../../views/domain/shows';
import {ShowsService} from '../service/shows';
import {Column} from '../../components/api/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';

@Component({
    selector: 'search-results',
    templateUrl: 'app/views/search-results/search-results.html',
    directives: [DataTable, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,ShowsService]
})
export class SearchResultsDatatable implements OnInit {

    msgs: Message[];

    shows: Shows[];

    cols: Column[];

    selectedShows1: Shows;

    selectedShows2: Shows;

    selectedShows: Shows[];

    constructor(private showsService: ShowsService) { }

    ngOnInit() {
        this.showsService.getShows().then(shows => this.shows = shows);

        this.cols = [
            {field: 'showName', header: 'Show Name', sortable: true, filter: true},
            {field: 'showNetwork', header: 'Show Network', sortable: true, filter: true},
            {field: 'showCode', header: 'Show Code', sortable: true, filter: true},
            {field: 'showStatus', header: 'Show Status', sortable: true, filter: true},
            {field: 'runTimeDuration', header: 'Run Time Duration', sortable: true, filter: true},
            {field: 'showDescription', header: 'Show Description', sortable: true, filter: true},
            {field: 'showCategory', header: 'Show Category', sortable: true, filter: true},
            {field: 'showProductionCompany', header: 'Show Production Company', sortable: true, filter: true},
            {field: 'showSupplier', header: 'Show Supplier', sortable: true, filter: true}
        ];
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
        console.log("navigate to route");
    }


}