import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/vendor/primeng/datatable/datatable';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {NonLinearSchedulingRules} from '../../views/domain/nonLinearSchedulingRules';
import {NonLinearSchedulingRulesService} from '../service/nonLinearSchedulingRulesService';
import {Column} from '../../components/vendor/primeng/column/column';
import {Header} from '../../components/vendor/primeng/common/header';
import {Footer} from '../../components/vendor/primeng/common/footer';
import {Growl} from '../../components/vendor/primeng/growl/growl';
import {Message} from '../../components/vendor/primeng/api/message';
import {SeasonsDatatable} from "../../views/grids/seriesSeasons";

@Component({
    templateUrl: 'app/views/grids/nonLinearSchedulingRulesDatatable.html',
    directives: [DataTable,Column, Header,Footer,Growl,TabPanel,SplitButton, SplitButtonItem,TabView,SeasonsDatatable,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,NonLinearSchedulingRulesService]
})
export class NonLinearSchedulingRulesDatatable implements OnInit {

    msgs: Message[];

    nonLinearSchedulingRules: NonLinearSchedulingRules[];

    cols: Column[];

    selectedNonLinearSchedulingRules1: NonLinearSchedulingRules;

    selectedNonLinearSchedulingRules2: NonLinearSchedulingRules;

    selectedNonLinearSchedulingRules: NonLinearSchedulingRules[];

    constructor(private _router: Router, private nonLinearSchedulingRulesService: NonLinearSchedulingRulesService) { }

    ngOnInit() {
        this.nonLinearSchedulingRulesService.getNonLinearSchedulingRules().then(nonLinearSchedulingRules => this.nonLinearSchedulingRules = nonLinearSchedulingRules);

        /*this.cols = [
            {field: 'status', header: 'Status', sortable: true, filter: true},
            {field: 'networkTargets', header: 'Network Targets', sortable: true, filter: true},
            {field: 'ruleType', header: 'Rule Type', sortable: true, filter: true},
            {field: 'windowGroup', header: 'Window Group', sortable: true, filter: true},
            {field: 'maxStreamingDays', header: 'Max Streaming Days', sortable: true, filter: true},
            {field: 'rollingCount', header: 'Rolling Count', sortable: true, filter: true},
            {field: 'broadcastSeason', header: 'Broadcast Season', sortable: true, filter: true},
            {field: 'roughFormat', header: 'Rough Format', sortable: true, filter: true},
            {field: 'sunsetRule', header: 'Sunset Rule', sortable: true, filter: true},
            {field: 'numberOfDays', header: 'Number of Days', sortable: true, filter: true}
        ];*/
    }
     onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Season Selected', detail: event.data.status + ' - ' + event.data.status});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Season Unselected', detail: event.data.networkTargets + ' - ' + event.data.networkTargets});
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