import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SharedServices} from '../../sharedServices';

@Component({
    selector: 'episode-info',
    templateUrl: 'app/views/edit-nodes/episode-info.html',
    directives: [NgClass]
})
export class EpisodeInfo {
    constructor(private service: SharedServices) {  }

}
