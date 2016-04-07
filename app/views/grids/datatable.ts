import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/vendor/primeng/datatable/datatable';
import {CodeHighlighter} from '../../components/vendor/primeng/codehighlighter/codehighlighter';
import {TabView} from '../../components/vendor/primeng/tabview/tabview';
import {TabPanel} from '../../components/vendor/primeng/tabview/tabpanel';
import {Car} from '../../views/domain/car';
import {Column} from '../../components/vendor/primeng/api/column';
import {Header} from '../../components/vendor/primeng/common/header';
import {CarService} from '../service/carservice';

@Component({
    templateUrl: 'app/views/grids/datatablefilterdemo.html',
    directives: [DataTable,Header,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,CarService]
})
export class DataTableFilterDemo implements OnInit {

    cars: Car[];

    cols: Column[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);

        this.cols = [
            {field: 'vin', header: 'Vin (startsWith)', filter: true},
            {field: 'brand', header: 'Brand (contains)', filter: true, filterMatchMode: 'contains'},
            {field: 'year', header: 'Year (startsWith)', filter: true},
            {field: 'color', header: 'Color (endsWith)', filter: true, filterMatchMode: 'endsWith'}
        ];
    }
}