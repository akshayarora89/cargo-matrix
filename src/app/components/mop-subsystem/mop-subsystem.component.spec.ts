import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MopSubsystemComponent } from './mop-subsystem.component';

describe('MopSubsystemComponent', () => {
  let component: MopSubsystemComponent;
  let fixture: ComponentFixture<MopSubsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MopSubsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MopSubsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
