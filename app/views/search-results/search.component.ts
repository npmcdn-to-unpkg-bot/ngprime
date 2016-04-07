import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/vendor/primeng/datatable/datatable';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {Button} from '../../components/vendor/primeng/button/button';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {Shows} from '../../views/domain/shows';
import {ShowsService} from '../service/shows';
import {Column} from '../../components/vendor/primeng/column/column';
import {Header} from '../../components/vendor/primeng/common/header';
import {Footer} from '../../components/vendor/primeng/common/footer';
import {Growl} from '../../components/vendor/primeng/growl/growl';
import {Message} from '../../components/vendor/primeng/api/message';

@Component({
    selector: 'search-results',
    templateUrl: 'app/views/search-results/search-results.html',
    directives: [DataTable,Column, Button,SplitButton, SplitButtonItem, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
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

    stacked: boolean;
    isSplit = false;

    constructor(private _router: Router, private showsService: ShowsService) { }

    ngOnInit() {
        this.showsService.getShows().then(shows => this.shows = shows);


    }
    editInfo(event){
        this._router.navigate(['ShowInfo']);
    }
    toggle() {
        console.log('toggled card');
        this.stacked = !this.stacked;
    }
    toggleSplitScreen(event) {
        event.preventDefault();
        this.isSplit = !this.isSplit;
        console.log('splitScreen');
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