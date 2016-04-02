import {Component, EventEmitter} from 'angular2/core';
import {Input, Output} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgClass} from 'angular2/common';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Episode} from '../../views/domain/episodes';
import {EpisodeService} from '../service/episodeService';
import {Column} from '../../components/column/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';
import {SeasonsDatatable} from "../../views/grids/seriesSeasons";
import {ShowParent} from "../../views/buttons/showParent";

@Component({
    templateUrl: 'app/views/grids/seriesEpisodeDatatable.html',
    directives: [DataTable, Column, Header, Footer, Growl, SplitButton, SplitButtonItem, TabPanel, TabView, CodeHighlighter, NgClass, SeasonsDatatable, ShowParent, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES,HTTP_PROVIDERS, EpisodeService],
    inputs: ['isOpen']
})

/*@RouteConfig([
    {path: 'Episode Info', name: 'EpisodeInfo', component: EpisodeInfo}
])*/
@Injectable()

export class SeriesEpisodesDatatable  {

    msgs:Message[];

    episodes:Episode[];

    cols:Column[];

    selectedEpisode1:Episode;

    selectedEpisode2:Episode;

    selectedEpisodes:Episode[];

    constructor(private _router: Router, private episodeService:EpisodeService) {

    }

    ngOnInit() {
        this.episodeService.getEpisodesSmall().then(episodes => this.episodes = episodes);
    }

    onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({
            severity: 'info',
            summary: 'Episode Selected',
            detail: event.data.episodeTitle + ' - ' + event.data.episodeNumber
        });
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({
            severity: 'info',
            summary: 'Episode Unselected',
            detail: event.data.episodeTitle + ' - ' + event.data.episodeNumber
        });
    }

    onRowDblclick(event) {
        this._router.navigate(['EpisodeInfo']);
        console.log("navigate to route");
    }
    editInfo(event){
        this._router.navigate(['EpisodeInfo']);
    }

}