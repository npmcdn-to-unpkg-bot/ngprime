import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Shows} from '../../views/domain/shows';

@Injectable()
export class ShowsService {

    constructor(private http: Http) {}

    getShows() {
        return this.http.get('app/resources/data/shows.json')
            .toPromise()
            .then(res => <Shows[]> res.json().data)
            .then(data => { return data; });
    }
}