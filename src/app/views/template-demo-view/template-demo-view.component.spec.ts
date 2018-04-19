import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDemoViewComponent } from './template-demo-view.component';

describe('TemplateDemoViewComponent', () => {
  let component: TemplateDemoViewComponent;
  let fixture: ComponentFixture<TemplateDemoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDemoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDemoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
