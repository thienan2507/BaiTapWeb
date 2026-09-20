import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceProductImageEven } from './service-product-image-even';

describe('ServiceProductImageEven', () => {
  let component: ServiceProductImageEven;
  let fixture: ComponentFixture<ServiceProductImageEven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductImageEven],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
