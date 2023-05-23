import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashbaordComponent } from './customer-dashbaord.component';

describe('CustomerDashbaordComponent', () => {
  let component: CustomerDashbaordComponent;
  let fixture: ComponentFixture<CustomerDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
