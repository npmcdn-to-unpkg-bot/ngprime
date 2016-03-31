import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Contract} from '../../views/domain/contracts';
import {ContractService} from '../service/contractService';
import {Column} from '../../components/column/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';

@Component({
    templateUrl: 'app/views/grids/contractAirDatesDatatable.html',
    directives: [DataTable, Column, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,ContractService]
})
export class ContractAirDatesDatatable implements OnInit {

    msgs: Message[];

    contracts: Contract[];

    cols: Column[];

    selectedContract1: Contract;

    selectedContract2: Contract;

    selectedContract: Contract[];

    constructor(private _router: Router, private contractService: ContractService) { }

    ngOnInit() {
        this.contractService.getContractSmall().then(contracts => this.contracts = contracts);

        /*this.cols = [
            {field: 'numberOfRuns', header: 'Number of Runs', sortable: true, filter: true},
            {field: 'runCount', header: 'Run Count', sortable: true, filter: true},
            {field: 'adjRunCount', header: 'Adj Run Count', sortable: true, filter: true},
            {field: 'usageRestrictions', header: 'Usage Restrictions', sortable: true, filter: true},
            {field: 'airDateRestriction', header: 'Air Date Restrictions', sortable: true, filter: true},
            {field: 'restrictionByEpisodeSeason', header: 'Restriction By Episode', sortable: true, filter: true},
            {field: 'marathonRules', header: 'Marathon Rules', sortable: true, filter: true},
            {field: 'windowStartDate', header: 'Windows Start Date', sortable: true, filter: true}
        ];*/
    }
     onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Contract Selected', detail: event.data.windowStartDate + ' - ' + event.data.windowStartDate});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Contract Unselected', detail: event.data.numberOfRuns + ' - ' + event.data.numberOfRuns});
    }

    onRowDblclick(event) {
        //this._router.navigate(['Series Episodes']);
        console.log("navigate to route");
    }
}