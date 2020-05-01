import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepStatusBarComponent } from './step-status-bar.component';

describe('StepStatusBarComponent', () => {
  let component: StepStatusBarComponent;
  let fixture: ComponentFixture<StepStatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepStatusBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
