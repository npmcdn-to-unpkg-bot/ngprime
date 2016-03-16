import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {NonLinearSchedulingRules} from '../../views/domain/nonLinearSchedulingRules';
import {NonLinearSchedulingRulesService} from '../service/nonLinearSchedulingRulesService';
import {Column} from '../../components/api/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';

@Component({
    templateUrl: 'app/views/grids/nonLinearSchedulingRulesDatatable.html',
    directives: [DataTable, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,NonLinearSchedulingRulesService]
})
export class NonLinearSchedulingRulesDatatable implements OnInit {

    msgs: Message[];

    nonLinearSchedulingRules: NonLinearSchedulingRules[];

    cols: Column[];

    selectedNonLinearSchedulingRules1: NonLinearSchedulingRules;

    selectedNonLinearSchedulingRules2: NonLinearSchedulingRules;

    selectedNonLinearSchedulingRules: NonLinearSchedulingRules[];

    constructor(private nonLinearSchedulingRulesService: NonLinearSchedulingRulesService) { }

    ngOnInit() {
        this.nonLinearSchedulingRulesService.getNonLinearSchedulingRules().then(nonLinearSchedulingRules => this.nonLinearSchedulingRules = nonLinearSchedulingRules);

        this.cols = [
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
        ];
    }
     onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Season Selected', detail: event.data.status + ' - ' + event.data.status});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Season Unselected', detail: event.data.networkTargets + ' - ' + event.data.networkTargets});
    }
}