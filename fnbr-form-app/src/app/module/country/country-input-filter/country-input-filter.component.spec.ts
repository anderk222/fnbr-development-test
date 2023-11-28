import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInputFilterComponent } from './country-input-filter.component';

describe('CountryInputFilterComponent', () => {
  let component: CountryInputFilterComponent;
  let fixture: ComponentFixture<CountryInputFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryInputFilterComponent]
    });
    fixture = TestBed.createComponent(CountryInputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
