import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SharedServices} from '../../sharedServices';

@Component({
    selector: 'season-info',
    templateUrl: 'app/views/edit-nodes/season-info.html',
    directives: [NgClass]
})
export class SeasonInfo {
    constructor(private service: SharedServices) {  }

}
