import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsViewComponent } from './things-view.component';

describe('ThingsViewComponent', () => {
  let component: ThingsViewComponent;
  let fixture: ComponentFixture<ThingsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
