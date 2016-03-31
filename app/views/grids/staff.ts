import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Season} from '../../views/domain/seasons';
import {StaffService} from '../service/staff';
import {Column} from '../../components/column/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';

@Component({
    templateUrl: 'app/views/grids/staffDatatable.html',
    directives: [DataTable, Column, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,StaffService]
})
export class StaffDatatable implements OnInit {

    msgs: Message[];

    staff: Season[];

    cols: Column[];

    selectedSeason1: Season;

    selectedSeason2: Season;

    selectedSeasons: Season[];

    constructor(private _router:Router, private staffService: StaffService) { }

    ngOnInit() {
        this.staffService.getStaff().then(staff => this.staff = staff);

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