import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Episode} from '../../views/domain/episodes';

@Injectable()
export class EpisodeService {
    
    constructor(private http: Http) {}

    getEpisodesSmall() {
        return this.http.get('app/resources/data/episodes.json')
                    .toPromise()
                    .then(res => <Episode[]> res.json().data)
                    .then(data => { return data; });
    }
}