import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {Contract} from '../../views/domain/contracts';
import {ContractService} from '../service/contractService';
import {Column} from '../../components/column/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';
import {SeasonsDatatable} from "../../views/grids/seriesSeasons";

@Component({
    templateUrl: 'app/views/grids/rightsDatatable.html',
    directives: [DataTable, Column, Header,Footer,Growl,SplitButton, SplitButtonItem,TabPanel,TabView,SeasonsDatatable,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,ContractService]
})
export class RightsDatatable implements OnInit {

    msgs: Message[];

    contracts: Contract[];

    cols: Column[];

    selectedContract1: Contract;

    selectedContract2: Contract;

    selectedContract: Contract[];

    constructor(private _router: Router, private contractService: ContractService) { }

    ngOnInit() {
        this.contractService.getContractSmall().then(contracts => this.contracts = contracts);
    }
     onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Contract Selected', detail: event.data.windowStartDate + ' - ' + event.data.windowStartDate});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Contract Unselected', detail: event.data.numberOfRuns + ' - ' + event.data.numberOfRuns});
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