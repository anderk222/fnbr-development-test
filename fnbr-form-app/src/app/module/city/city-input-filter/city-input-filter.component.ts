import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CityService } from '../service/city.service';
import { City } from '../model/city';
import { AutoCompleteEvent } from '@app/model/AutocompleteEvent';

@Component({
  selector: 'app-fnbr-city-input-filter',
  standalone: true,
  imports: [
    CommonModule,
    AutoCompleteModule],
  templateUrl: './city-input-filter.component.html',
  styleUrls: ['./city-input-filter.component.css']
})
export class CityInputFilterComponent implements OnChanges {

  constructor(private service: CityService) { }

  private items: City[] = [];
  filtered: City[] = [];

  @Input() areaId = 0;

  @Output() onSelect = new EventEmitter<City>();

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