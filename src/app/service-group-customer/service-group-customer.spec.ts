import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceGroupCustomer } from './service-group-customer';

describe('ServiceGroupCustomer', () => {
  let component: ServiceGroupCustomer;
  let fixture: ComponentFixture<ServiceGroupCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceGroupCustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceGroupCustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
