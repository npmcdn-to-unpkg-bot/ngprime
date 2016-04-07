import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {MegaMenu} from '../../components/vendor/primeng/megamenu/megamenu';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {Button} from '../../components/vendor/primeng/button/button';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'topHeader',
    templateUrl: 'app/views/header/header.html',
    directives: [MegaMenu,TabPanel,TabView,CodeHighlighter, Button, ROUTER_DIRECTIVES]
})
export class Header {
goBack() {
  window.history.back();
}
    isOpen = false;
    isSplit = false;

splitScreen() {
    console.log('split screen');
    this.isSplit = !this.isSplit;
}

showParent() {
  console.log('show parent');
  this.isOpen = !this.isOpen;
}

}