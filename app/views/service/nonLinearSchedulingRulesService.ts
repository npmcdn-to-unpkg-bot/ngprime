import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {NonLinearSchedulingRules} from '../../views/domain/nonLinearSchedulingRules';

@Injectable()
export class NonLinearSchedulingRulesService {
    
    constructor(private http: Http) {}

    getNonLinearSchedulingRules() {
        return this.http.get('app/resources/data/nonLinearSchedulingRules.json')
                    .toPromise()
                    .then(res => <NonLinearSchedulingRules[]> res.json().data)
                    .then(data => { return data; });
    }
}