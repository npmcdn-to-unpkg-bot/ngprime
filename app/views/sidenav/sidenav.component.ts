import {Component} from 'angular2/core';
import {Calendar} from '../../components/vendor/primeng/calendar/calendar';
import {PanelMenu} from '../../components/vendor/primeng/panelmenu/panelmenu';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {MultiSelect} from '../../components/vendor/primeng/multiselect/multiselect';
import {Dropdown} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'sidenav',
	templateUrl: 'app/views/sidenav/sidenav.html',
	directives: [PanelMenu,TabPanel,MultiSelect, Dropdown, TabView,CodeHighlighter, Calendar,ROUTER_DIRECTIVES]
})
export class SidenavComponent {

	dateValue:string;


	networks: SelectItem[];

	selectedNetwork: string[];

	constructor() {
		this.networks = [];
		this.networks.push({label:'FOX', value:'FOX'});
		this.networks.push({label:'FS', value:'FS'});
		this.networks.push({label:'CBS', value:'CBS'});
		this.networks.push({label:'NBC', value:'NBC'});
		this.networks.push({label:'AMC', value:'AMC'});


		this.multiNetworks = [];
		this.multiNetworks.push({label:'FOX', value:'FOX'});
		this.multiNetworks.push({label:'FS', value:'FS'});
		this.multiNetworks.push({label:'CBS', value:'CBS'});
		this.multiNetworks.push({label:'NBC', value:'NBC'});
		this.multiNetworks.push({label:'AMC', value:'AMC'});

	}

	multiNetworks: SelectItem[];

	selectedMultiNetwork: string[];


}