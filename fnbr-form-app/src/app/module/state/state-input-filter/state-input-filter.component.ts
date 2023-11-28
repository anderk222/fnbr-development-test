import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { State } from '../model/state';
import { StateService } from '../service/state.service';
import { AutoCompleteEvent } from '@app/model/AutocompleteEvent';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-fnbr-state-input-filter',
  standalone: true,
  imports: [
    CommonModule,
    AutoCompleteModule
  ],
  templateUrl: './state-input-filter.component.html',
  styleUrls: ['./state-input-filter.component.css']
})
export class StateInputFilterComponent implements OnChanges {

  constructor(private service: StateService) { }

  private items: State[] = [];
  filtered: State[] = [];

  @Input() areaId = 0;

  @Output() onSelect = new EventEmitter<State>();

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.areaId) return;

    this.service.findByCountry(this.areaId).subscribe(res => {

      this.items = res.body;

      this.filtered = res.body;

    });

  }

  search(event: AutoCompleteEvent) {

    this.filtered = this.items.filter(v => v.name.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()))


  }

}