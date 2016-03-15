import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Contract} from '../../views/domain/contracts';
import {ContractService} from '../service/contractService';
import {Column} from '../../components/api/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';

@Component({
    templateUrl: 'app/views/grids/contractsDatatable.html',
    directives: [DataTable, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,ContractService]
})
export class ContractsDatatable implements OnInit {

    msgs: Message[];

    contracts: Contract[];

    cols: Column[];

    selectedContract1: Contract;

    selectedContract2: Contract;

    selectedContract: Contract[];

    constructor(private contractService: ContractService) { }

    ngOnInit() {
        this.contractService.getContractSmall().then(contracts => this.contracts = contracts);

        this.cols = [
            {field: 'ContractName', header: 'Name', sortable: true, filter: true},
            {field: 'showCode', header: 'Show Code', sortable: true, filter: true},
            {field: 'productionNumber', header: 'Production #', sortable: true, filter: true},
            {field: 'status', header: 'Status', sortable: true, filter: true},
            {field: 'note', header: 'Note', sortable: true, filter: true},
            {field: 'fiscalYear', header: 'Fiscal Year', sortable: true, filter: true},
            {field: 'broadcastContract', header: 'Broadcast Contract', sortable: true, filter: true},
            {field: 'roughFormat', header: 'Rough Format', sortable: true, filter: true},
            {field: 'episodeCount', header: 'Episode Count', sortable: true, filter: true},
            {field: 'programCategory', header: 'Program Category', sortable: true, filter: true}
        ];
    }
     onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Contract Selected', detail: event.data.ContractName + ' - ' + event.data.fiscalYear});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Contract Unselected', detail: event.data.ContractName + ' - ' + event.data.fiscalYear});
    }
}