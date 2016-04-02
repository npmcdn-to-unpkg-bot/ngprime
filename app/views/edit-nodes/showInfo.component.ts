import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SharedServices} from '../../sharedServices';

@Component({
    selector: 'show-info',
    templateUrl: 'app/views/edit-nodes/show-info.html',
    directives: [NgClass]
})
export class ShowInfo {
    constructor(private service: SharedServices) {  }

}
