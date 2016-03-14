import {Component} from 'angular2/core';
import {MegaMenu} from '../../components/megamenu/megamenu';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Button} from '../../components/button/button';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'topHeader',
    templateUrl: 'app/views/header/header.html',
    directives: [MegaMenu,TabPanel,TabView,CodeHighlighter, Button, ROUTER_DIRECTIVES]
})
export class Header {
 onclick() {
		console.log("go back");
    }
}