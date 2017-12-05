import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentContactWidgetComponent } from './shipment-contact-widget.component';

describe('ShipmentContactWidgetComponent', () => {
  let component: ShipmentContactWidgetComponent;
  let fixture: ComponentFixture<ShipmentContactWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentContactWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentContactWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
