import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Staff} from '../../views/domain/staff';

@Injectable()
export class StaffService {

    constructor(private http: Http) {}

    getStaff() {
        return this.http.get('app/resources/local/data/staff.json')
            .toPromise()
            .then(res => <Staff[]> res.json().data)
            .then(data => { return data; });
    }
}