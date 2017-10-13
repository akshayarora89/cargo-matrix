import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProcessMopsComponent } from './sub-process-mops.component';

describe('SubProcessMopsComponent', () => {
  let component: SubProcessMopsComponent;
  let fixture: ComponentFixture<SubProcessMopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProcessMopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProcessMopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
