import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Episode} from '../../views/domain/episodes';
import {SharedServices} from '../../sharedServices';
@Injectable()
export class EpisodeService {

    constructor(private http: Http, sharedServices: SharedServices) {}

    getEpisodesSmall() {
        return this.http.get('app/resources/data/episodes.json')
                    .toPromise()
                    .then(res => <Episode[]> res.json().data)
                    .then(data => { return data; });
    }
}