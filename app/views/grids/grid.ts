import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Carousel} from '../../components/carousel/carousel';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Button} from '../../components/button/button';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';
import {DataTableDemo} from "../../views/grids/datatabledemo";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Car} from '../../views/domain/car';

@Component({
    selector:'outlet',
    templateUrl: 'app/views/grids/grid.html',
    directives: [Carousel, DataTableDemo, TabPanel,TabView,Button,Growl,CodeHighlighter,  ROUTER_DIRECTIVES],
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


export class GridsView {

   
}