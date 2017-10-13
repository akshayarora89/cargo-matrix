import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MopsComponent } from './mops.component';

describe('MopsComponent', () => {
  let component: MopsComponent;
  let fixture: ComponentFixture<MopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
