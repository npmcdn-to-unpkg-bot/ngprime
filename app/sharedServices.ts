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
    isSplit:boolean = false;
    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }

    toggleSplitScreen(event) {
        event.preventDefault();
        this.isSplit = !this.isSplit;
    }
    constructor() {
        console.log('hello hg');
    }
}