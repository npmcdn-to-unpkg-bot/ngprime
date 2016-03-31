import {Component, EventEmitter} from 'angular2/core';
import {Input, Output} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgClass} from 'angular2/common';
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
import {SharedServices} from '../../sharedServices';
import {ShowParent} from "../../views/buttons/showParent";

@Component({
    templateUrl: 'app/views/grids/seriesEpisodeDatatable.html',
    directives: [DataTable, Column, Header, Footer, Growl, TabPanel, TabView, CodeHighlighter, NgClass, SeasonsDatatable, ShowParent, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES,HTTP_PROVIDERS, EpisodeService],
    inputs: ['isOpen']
})

@Injectable()

export class SeriesEpisodesDatatable implements OnInit {

    msgs:Message[];

    episodes:Episode[];

    cols:Column[];

    selectedEpisode1:Episode;

    selectedEpisode2:Episode;

    selectedEpisodes:Episode[];

    @Input() isOpen:boolean = false;
    @Input() isSplit:boolean = false;
    @Output() isOpenChanged:boolean = false;

    isOpenChanged = new EventEmitter<boolean>();

    toggleOpen(event) {
        console.log('open parent');
        this.isOpenChanged.emit(this.isOpen);
        this.isOpen = !this.isOpen;
    }

    constructor(private _router: Router, private episodeService:EpisodeService, private service: SharedServices) {

    }

    ngOnInit() {
        this.episodeService.getEpisodesSmall().then(episodes => this.episodes = episodes);

        /*this.cols = [
            {field: 'episodeTitle', header: 'Episode Title', sortable: true, filter: true},
            {field: 'code', header: 'Code', sortable: true, filter: true},
            {field: 'linkCode', header: 'Link Code', sortable: true, filter: true},
            {field: 'episodeNumber', header: 'Episode Number', sortable: true, filter: true},
            {field: 'seriesEpisodeNumber', header: 'Series Episode Number', sortable: true, filter: true},
            {field: 'days', header: 'Days', sortable: true, filter: true},
            {field: 'runTimeDuration', header: 'Run Time Duration', sortable: true, filter: true},
            {field: 'origAirDate', header: 'Original Air Date Format', sortable: true, filter: true}
        ];*/
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
        //this._router.navigate(['Series Episodes']);
        console.log("navigate to route");
    }

}