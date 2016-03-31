import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {Button} from '../../components/button/button';
import {Growl} from '../../components/growl/growl';
import {NgClass} from 'angular2/common';
import {SharedServices} from '../../sharedServices';
import {ShowParent} from "../../views/buttons/showParent";

@Component({
    selector:'outlet',
    templateUrl: 'app/views/grids/grid.html',
    directives: [Button,Growl,NgClass, ShowParent, ROUTER_DIRECTIVES],
    styles: [`
        .ui-grid-row {
            text-align: center;
        }

        .ui-grid {
            margin: 10px 0px;
        }

        .ui-grid-row > div {
            padding: 4px 10px;
        }
    `]
})

@Injectable()

export class GridsView {

    constructor(private _router: Router, private service: SharedServices) {

    }
    @Input() isOpen:boolean = false;
    @Input() isSplit:boolean = false;

    toggleOpen(event) {
        console.log('open parent');
        this.isOpen = !this.isOpen;
    }

    toggleSplitScreen(event) {
        console.log('split screen');
        this.isSplit = !this.isSplit;
    }
}