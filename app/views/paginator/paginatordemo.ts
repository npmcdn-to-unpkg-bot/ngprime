import {Component} from 'angular2/core';
import {Paginator} from '../../components/vendor/primeng/paginator/paginator';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {Button} from '../../components/vendor/primeng/button/button';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: 'app/views/paginator/paginatordemo.html',
    directives: [Paginator,TabPanel,TabView,Button,CodeHighlighter,ROUTER_DIRECTIVES]
})
export class PaginatorDemo {

}