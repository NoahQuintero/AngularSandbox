import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueThingsViewComponent } from './blue-things-view.component';

describe('BlueThingsViewComponent', () => {
  let component: BlueThingsViewComponent;
  let fixture: ComponentFixture<BlueThingsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueThingsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueThingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
