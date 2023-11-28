import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProgramService } from '../service/program.service';
import { Program } from '../model/program';
import { AutoCompleteEvent } from '@app/model/AutocompleteEvent';

@Component({
  selector: 'app-fnbr-program-input-filter',
  standalone: true,
  imports: [
    CommonModule,
    AutoCompleteModule
  ],
  templateUrl: './program-input-filter.component.html',
  styleUrls: ['./program-input-filter.component.css']
})
export class ProgramInputFilterComponent implements OnChanges {

  constructor(private service: ProgramService){}

  private items : Program[] = [];
  filtered: Program[] = [];

  @Input() areaId = 0;

  @Output() onSelect= new EventEmitter<Program>();

  ngOnChanges(changes: SimpleChanges): void {

    if(!this.areaId) return;

    this.service.findByArea(this.areaId).subscribe(res=>{
    
      this.items=res.body;

      this.filtered=res.body;

    });

  }

  search(event : AutoCompleteEvent){

  this.filtered = this.items.filter(v=>v.name.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()))


  }

  

}