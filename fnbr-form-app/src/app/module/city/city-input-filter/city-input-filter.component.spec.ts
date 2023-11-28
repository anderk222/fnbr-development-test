import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityInputFilterComponent } from './city-input-filter.component';

describe('CityInputFilterComponent', () => {
  let component: CityInputFilterComponent;
  let fixture: ComponentFixture<CityInputFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CityInputFilterComponent]
    });
    fixture = TestBed.createComponent(CityInputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
