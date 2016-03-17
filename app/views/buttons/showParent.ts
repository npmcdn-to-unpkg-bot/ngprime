import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {DataTable} from '../../components/datatable/datatable';
import {SeasonsDatatable} from "../../views/grids/seriesSeasons";
@Component({
  selector: 'toggle-button',
  inputs: ['isDisabled'],
  directives: [NgClass, SeasonsDatatable],
  template: `
     <div class="button" (click)="toggleOpen($event)">
         Click me!
     </div>
<seasonsGrid [ngClass]="{'panel-open': isOpen}" class="parentGrid"></seasonsGrid>
     `
})
export class ShowParent {
  isOpen = false;

  toggleOpen(event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}




