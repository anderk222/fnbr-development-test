import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateInputFilterComponent } from './state-input-filter.component';

describe('StateInputFilterComponent', () => {
  let component: StateInputFilterComponent;
  let fixture: ComponentFixture<StateInputFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StateInputFilterComponent]
    });
    fixture = TestBed.createComponent(StateInputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
