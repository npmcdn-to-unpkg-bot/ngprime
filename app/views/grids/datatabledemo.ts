import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Message} from '../../components/api/message';
import {Car} from '../../views/domain/car';
import {CarService} from '../service/carservice';
import {Column} from '../../components/api/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';


@Component({
    templateUrl: 'app/views/grids/datatabledemo.html',
    directives: [DataTable, Header,Footer,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,CarService]
})
export class DataTableDemo implements OnInit {

    msgs: Message[];

    cars: Car[];

    cols: Column[];

    selectedCar1: Car;

    selectedCar2: Car;

    selectedCars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            {field: 'vin', header: 'Season Name', sortable: true, filter: true, editable: true},
            {field: 'brand', header: 'Brand', sortable: true, filter: true, editable: true},
            {field: 'year', header: 'Year', sortable: true, filter: true, editable: true},
            {field: 'color', header: 'Color', sortable: true, filter: true, editable: true}
        ];
    }
     onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Selected', detail: event.data.seasonName + ' - ' + event.data.brand});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Unselected', detail: event.data.seasonName + ' - ' + event.data.brand});
    }
}