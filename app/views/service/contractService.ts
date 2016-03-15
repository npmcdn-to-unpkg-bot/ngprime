import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Contract} from '../../views/domain/contracts';

@Injectable()
export class ContractService {
    
    constructor(private http: Http) {}

    getContractSmall() {
        return this.http.get('app/resources/data/contracts.json')
                    .toPromise()
                    .then(res => <Contract[]> res.json().data)
                    .then(data => { return data; });
    }
}