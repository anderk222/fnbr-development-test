import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Country } from '../model/country';
import { CountryService } from '../service/country.service';
import { AutoCompleteEvent } from '@app/model/AutocompleteEvent';
import { AutoCompleteModule } from 'primeng/autocomplete';


@Component({
  selector: 'app-fnbr-country-input-filter',
  templateUrl: './country-input-filter.component.html',
  styleUrls: ['./country-input-filter.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    AutoCompleteModule
  ]
})
export class CountryInputFilterComponent implements OnChanges {
 
  items: Country[] = [];

  @Output() onSelect = new EventEmitter<Country>(); 
  @Input() disabled = false;

  constructor(private service: CountryService) { }

  ngOnChanges(changes: SimpleChanges): void {}

  search(event: AutoCompleteEvent) {

    this.service.search(event.query).subscribe(res => this.items = res.body);

  }
}
