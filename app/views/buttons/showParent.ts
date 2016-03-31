import {Component, EventEmitter} from 'angular2/core';
import {Input, Output} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SharedServices} from '../../sharedServices';

@Component({
    selector: 'show-parent',
    inputs: ['isOpen'],
    directives: [NgClass],
    templateUrl: 'app/views/buttons/showParent.html',
})

@Injectable()

export class ShowParent {
    constructor(public sharedServices: SharedServices) {

    }

    @Input() isOpen:boolean = false;
    @Input() isSplit:boolean = false;
    @Output() isOpenChanged:boolean = false;

    isOpenChanged = new EventEmitter<boolean>();

    toggleOpen(event) {
        console.log('open parent');
        this.isOpenChanged.emit(this.isOpen);
        this.isOpen = !this.isOpen;
    }

    toggleSplitScreen(event) {
        console.log('split screen');
        this.isSplit = !this.isSplit;
    }

}




