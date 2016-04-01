import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SharedServices} from '../../sharedServices';
import {SeasonsDatatable} from "../../views/grids/seriesSeasons";

@Component({
    selector: 'show-parent',
    directives: [NgClass, SeasonsDatatable],
    templateUrl: 'app/views/buttons/showParent.html'
})
export class ShowParent {
    constructor(private service: SharedServices) {

    }

    isOpen = false;
    isSplit = false;

    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
        console.log('tf');
    }

    toggleSplitScreen(event) {
        event.preventDefault();
        this.isSplit = !this.isSplit;
    }
}
