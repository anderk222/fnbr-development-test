import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AreaService } from '../service/area.service';
import { Area } from '../model/area';
import { AutoCompleteEvent } from '@app/model/AutocompleteEvent';

@Component({
  selector: 'app-fnbr-area-input-filter',
  standalone: true,
  imports: [
    CommonModule,
    AutoCompleteModule
  ],
  templateUrl: './area-input-filter.component.html',
  styleUrls: ['./area-input-filter.component.css']
})
export class AreaInputFilterComponent implements OnChanges {

  items: Area[] = [];

  @Output() onSelect = new EventEmitter<Area>(); 
  @Input() disabled = false;

  constructor(private service: AreaService) { }


  ngOnChanges(changes: SimpleChanges): void {
  }

  search(event: AutoCompleteEvent) {

    this.service.search(event.query).subscribe(res => this.items = res.body);

  }

}