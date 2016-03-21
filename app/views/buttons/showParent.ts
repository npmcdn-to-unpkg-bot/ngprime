import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SharedServices} from '../../sharedServices';

@Component({
    selector: 'show-parent',
    inputs: ['isDisabled'],
    directives: [NgClass],
    templateUrl: 'app/views/buttons/showParent.html',
})
export class ShowParent {
    constructor(private service: SharedServices) {

    }

    isOpen = false;
    isSplit = false;

    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }

    toggleSplitScreen(event) {
        event.preventDefault();
        this.isSplit = !this.isSplit;
    }
}




