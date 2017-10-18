import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MopProcessesComponent } from './mop-processes.component';

describe('MopProcessesComponent', () => {
  let component: MopProcessesComponent;
  let fixture: ComponentFixture<MopProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MopProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MopProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
