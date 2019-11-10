import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCardComponent } from './vaccine-card.component';

describe('CardComponent', () => {
  let component: VaccineCardComponent;
  let fixture: ComponentFixture<VaccineCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
