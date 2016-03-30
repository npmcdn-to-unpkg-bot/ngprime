import {Injectable} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()

export class SharedServices {

    //In this class, you can implements for example:
    //  get and set keyword, you'll access it like a property. or
    //  get and set method/function.

    isOpen = false;
    isSplit = false;

    toggleOpen(event) {
        console.log('open parent');
        this.isOpen = !this.isOpen;
    }

    toggleSplitScreen(event) {
        console.log('split screen');
        this.isSplit = !this.isSplit;
    }

    constructor() {
        let isOpen = false;
        console.log('hello hg');
    }
}