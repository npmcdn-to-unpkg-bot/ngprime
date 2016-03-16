import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataTable} from '../../components/datatable/datatable';
import {CodeHighlighter} from '../../components/codehighlighter/codehighlighter';
import {TabView} from '../../components/tabview/tabview';
import {TabPanel} from '../../components/tabview/tabpanel';
import {Episode} from '../../views/domain/episodes';
import {EpisodeService} from '../service/episodeService';
import {SeasonsDatatable} from "../../views/grids/seriesSeasons";
import {Column} from '../../components/api/column';
import {Header} from '../../components/common/header';
import {Footer} from '../../components/common/footer';
import {Growl} from '../../components/growl/growl';
import {Message} from '../../components/api/message';

@Component({
    templateUrl: 'app/views/grids/seriesEpisodeDatatable.html',
    directives: [DataTable, Header,Footer,Growl,TabPanel,TabView,CodeHighlighter,SeasonsDatatable,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,EpisodeService]
})
export class SeriesEpisodesDatatable implements OnInit {

    msgs: Message[];

    episodes: Episode[];

    cols: Column[];

    selectedEpisode1: Episode;

    selectedEpisode2: Episode;

    selectedEpisodes: Episode[];

    constructor(private episodeService: EpisodeService) { }

    ngOnInit() {
        this.episodeService.getEpisodesSmall().then(episodes => this.episodes = episodes);

        this.cols = [
            {field: 'episodeTitle', header: 'Episode Title', sortable: true, filter: true},
            {field: 'code', header: 'Code', sortable: true, filter: true},
            {field: 'linkCode', header: 'Link Code', sortable: true, filter: true},
            {field: 'episodeNumber', header: 'Episode Number', sortable: true, filter: true},
            {field: 'seriesEpisodeNumber', header: 'Series Episode Number', sortable: true, filter: true},
            {field: 'days', header: 'Days', sortable: true, filter: true},
            {field: 'runTimeDuration', header: 'Run Time Duration', sortable: true, filter: true},
            {field: 'origAirDate', header: 'Original Air Date Format', sortable: true, filter: true}
        ];
    }
     onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Episode Selected', detail: event.data.episodeTitle + ' - ' + event.data.episodeNumber});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Episode Unselected', detail: event.data.episodeTitle + ' - ' + event.data.episodeNumber});
    }
}