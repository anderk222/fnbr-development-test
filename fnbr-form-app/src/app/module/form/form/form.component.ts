import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../service/form.service';
import { Area } from '@app/module/area/model/area';
import { Country } from '@app/module/country/model/country';
import { State } from '@app/module/state/model/state';
import { City } from '@app/module/city/model/city';
import { Program } from '@app/module/program/model/program';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fnbr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[]
})
export class FormComponent {

  constructor(
    private service: FormService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  loading = false;
  areaId = this.fb.control(0, { nonNullable: true, validators: Validators.min(1) });
  countryId = this.fb.control(0, { nonNullable: true, validators: Validators.min(1) });
  stateId = this.fb.control(0, { nonNullable: true, validators: Validators.min(1) });

  form = this.fb.group({
    id: this.fb.control(0, { nonNullable: true }),
    name: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(60), Validators.minLength(2)]
    }),
    lastname: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required, Validators.maxLength(60), Validators.minLength(2)]
    }),
    email: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required, Validators.email]
    }),
    phone: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(15),
      Validators.pattern("^[+]?[0-9]{1,15}$"), Validators.minLength(10)]
    }),
    address: this.fb.group({
      country: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(150)]
      }),
      state: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(30)]
      }),
      city: this.fb.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(30)]
      })
    }),
    program: this.fb.group({
      id: this.fb.control(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(1)]
      }),
      name: this.fb.control('', {
        nonNullable: true
      })
    }),
    comments: this.fb.control('', { nonNullable: true }),
    terms: this.fb.control(false, {
      nonNullable: true,
      validators: [Validators.required, Validators.requiredTrue]
    })
  });


  handlerSave() {

    this.loading = true

    this.service.save(this.form.value).subscribe(
      {
        next: (res) => {
          this.router.navigate(['/form/success'], {
            queryParams: {
              name: `${this.name.value} ${this.lastname.value}`
            }
          })
          this.loading = false;
        },
        error: (err: Error) => {

          alert(err.message);
          this.loading = false;
        },
        complete: () => this.loading = false
      }
    )

  }


  handlerSelectArea(area: Area) {

    this.areaId.setValue(area.id);

    this.areaId.markAsDirty();

  }

  handlerSelectProgram(program: Program) {


    this.program.setValue(program)


    this.programId.markAsDirty();
  }

  handlerSelectCountry(country: Country) {

    this.countryId.setValue(country.id);

    this.country = country.name;

    this.countryId.markAsDirty();

  }

  hanlderSelectState(state: State) {

    this.stateId.setValue(state.id);

    this.stateId.markAsDirty();

    this.state = state.name;

  }

  handlerSelectCity(city: City) {

    this.city = city.name;

    this.city.markAsDirty();
  }



  get id(): any { return this.form.get('id') };
  get name(): any { return this.form.get('name') };
  get lastname(): any { return this.form.get('lastname') };
  get email(): any { return this.form.get('email') };
  get phone(): any { return this.form.get('phone') };
  get address(): FormGroup { return this.form.get('address') as FormGroup };
  get program(): FormGroup { return this.form.get('program') as FormGroup };
  get comments(): any { return this.form.get('comments') };
  get terms(): any { return this.form.get('terms') };
  get programId(): any { return this.program.get('id') };
  get country(): any { return this.address.get('country') };
  get state(): any { return this.address.get('state') };
  get city(): any { return this.address.get('city') };
  get programName(): any { return this.program.get('name') };

  set id(value: any) { this.form.patchValue({ id: value }) };
  set name(value: any) { this.form.patchValue({ name: value }) };
  set lastname(value: any) { this.form.patchValue({ lastname: value }) };
  set email(value: any) { this.form.patchValue({ email: value }) };
  set phone(value: any) { this.form.patchValue({ phone: value }) };
  set comments(value: any) { this.form.patchValue({ comments: value }) };
  set terms(value: any) { this.form.patchValue({ terms: value }) };
  set programId(value: any) { this.program.patchValue({ id: value }) };
  set country(value: any) { this.address.patchValue({ country: value }) };
  set state(value: any) { this.address.patchValue({ state: value }) };
  set city(value: any) { this.address.patchValue({ city: value }) };
  set programName(value: any) { this.program.patchValue({ name: value }) };

}