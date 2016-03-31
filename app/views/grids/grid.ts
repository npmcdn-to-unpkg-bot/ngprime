import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {Button} from '../../components/button/button';
import {Growl} from '../../components/growl/growl';
import {NgClass} from 'angular2/common';

@Component({
    selector:'outlet',
    templateUrl: 'app/views/grids/grid.html',
    directives: [Button,Growl,NgClass, ROUTER_DIRECTIVES],
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

    constructor(private _router: Router) {    }

}