import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/vendor/primeng/datatable/datatable';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {Staff} from '../../views/domain/staff';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {StaffService} from '../service/staff';
import {Column} from '../../components/vendor/primeng/column/column';
import {Header} from '../../components/vendor/primeng/common/header';
import {Footer} from '../../components/vendor/primeng/common/footer';
import {Growl} from '../../components/vendor/primeng/growl/growl';
import {Message} from '../../components/vendor/primeng/api/message';
import {SeasonsDatatable} from "../../views/grids/seriesSeasons";

@Component({
    templateUrl: 'app/views/grids/staffDatatable.html',
    directives: [DataTable, Column, Header,Footer,Growl,SplitButton, SplitButtonItem,TabPanel,TabView,SeasonsDatatable,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,StaffService]
})
export class StaffDatatable implements OnInit {

    msgs: Message[];

    staff: Staff[];

    cols: Column[];

    selectedSeason1: Staff;

    selectedSeason2: Staff;

    selectedSeasons: Staff[];

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