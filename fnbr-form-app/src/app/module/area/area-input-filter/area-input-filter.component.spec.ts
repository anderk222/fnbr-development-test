import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInputFilterComponent } from './area-input-filter.component';

describe('AreaInputFilterComponent', () => {
  let component: AreaInputFilterComponent;
  let fixture: ComponentFixture<AreaInputFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AreaInputFilterComponent]
    });
    fixture = TestBed.createComponent(AreaInputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
