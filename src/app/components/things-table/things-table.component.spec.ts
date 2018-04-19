import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsTableComponent } from './things-table.component';

describe('ThingsTableComponent', () => {
  let component: ThingsTableComponent;
  let fixture: ComponentFixture<ThingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
