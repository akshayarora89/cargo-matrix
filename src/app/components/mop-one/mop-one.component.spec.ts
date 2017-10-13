import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MopOneComponent } from './mop-one.component';

describe('MopOneComponent', () => {
  let component: MopOneComponent;
  let fixture: ComponentFixture<MopOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MopOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MopOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
