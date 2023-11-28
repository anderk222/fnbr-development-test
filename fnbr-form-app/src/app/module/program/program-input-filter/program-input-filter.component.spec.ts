import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramInputFilterComponent } from './program-input-filter.component';

describe('ProgramInputFilterComponent', () => {
  let component: ProgramInputFilterComponent;
  let fixture: ComponentFixture<ProgramInputFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProgramInputFilterComponent]
    });
    fixture = TestBed.createComponent(ProgramInputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
