import {Component} from 'angular2/core';
import {PanelMenu} from '../../components/panelmenu/panelmenu';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'sidenav',
	templateUrl: 'app/views/sidenav/sidenav.html',
	directives: [PanelMenu,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES]
})
export class SidenavComponent {



}