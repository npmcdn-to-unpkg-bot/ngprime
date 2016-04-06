import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {Button} from '../../components/button/button';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {InputText} from '../../components/inputtext/inputtext';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Dialog} from '../../components/dialog/dialog';
import {Contract} from '../../views/domain/contracts';
import {ContractService} from '../service/contractService';
import {Column} from '../../components/column/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';

@Component({
    templateUrl: 'app/views/grids/contractAirDatesDatatable.html',
    directives: [DataTable, Dialog, Button,SplitButton, SplitButtonItem, Column, InputText, Header,Footer,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,ContractService]
})
export class ContractAirDatesDatatable implements OnInit {

    displayDialog:boolean;

    contract:Contract = <any>new EntityContract();

    selectedContract:Contract;

    newContract:boolean;

    contracts:Contract[];

    constructor(private _router:Router, private contractService:ContractService) {
    }

    ngOnInit() {
        this.contractService.getContractSmall().then(contracts => this.contracts = contracts);
    }

    showDialogToAdd() {
        this.newContract = true;
        this.contract = <any>new EntityContract();
        this.displayDialog = true;
    }

    save() {
        if (this.newContract)
            this.contracts.push(this.contract);
        else
            this.contracts[this.findSelectedContractIndex()] = this.contract;

        this.contract = null;
        this.displayDialog = false;
    }

    delete() {
        this.contracts.splice(this.findSelectedContractIndex(), 1);
        this.contract = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newContract = false;
        this.contract = this.cloneContract(event.data);
        this.displayDialog = true;
    }

    cloneContract(c:Contract):Contract {
        let contract = <any>new EntityContract();
        for (let prop in c) {
            contract[prop] = c[prop];
        }
        return contract;
    }

    findSelectedContractIndex():number {
        return this.contracts.indexOf(this.selectedContract);
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



class EntityContract implements Contract {
    [key: string]: any;
    constructor(public numberOfRuns?, public runCount?, public adjRunCount?, public usageRestrictions?, public airDateRestriction?, public restrictionByEpisodeSeason?, public marathonRules?, public windowStartDate?) {}
}