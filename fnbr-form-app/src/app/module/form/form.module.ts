import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormRoutingModule } from './form-routing.module';
import { PrimeModule } from '@app/prime/prime.module';
import { AreaInputFilterComponent } from '../area/area-input-filter/area-input-filter.component';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramInputFilterComponent } from '../program/program-input-filter/program-input-filter.component';
import { CountryInputFilterComponent } from '../country/country-input-filter/country-input-filter.component';
import { StateInputFilterComponent } from '../state/state-input-filter/state-input-filter.component';
import { CityInputFilterComponent } from '../city/city-input-filter/city-input-filter.component';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [
    FormComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    PrimeModule,
    AreaInputFilterComponent,
    ProgramInputFilterComponent,
    NgFormsModule,
    ReactiveFormsModule,
    CountryInputFilterComponent,
    StateInputFilterComponent,
    CityInputFilterComponent,
  ],
  providers : []
})
export class FormModule { }
