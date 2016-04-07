import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Season} from '../../views/domain/seasons';

@Injectable()
export class SeasonService {
    
    constructor(private http: Http) {}

    getSeasonsSmall() {
        return this.http.get('app/resources/local/data/seasons.json')
                    .toPromise()
                    .then(res => <Season[]> res.json().data)
                    .then(data => { return data; });
    }
}