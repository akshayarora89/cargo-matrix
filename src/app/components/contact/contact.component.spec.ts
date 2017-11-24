import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingWidgetDisplayComponentComponent } from './shipping-widget-display-component.component';

describe('ShippingWidgetDisplayComponentComponent', () => {
  let component: ShippingWidgetDisplayComponentComponent;
  let fixture: ComponentFixture<ShippingWidgetDisplayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingWidgetDisplayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingWidgetDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
