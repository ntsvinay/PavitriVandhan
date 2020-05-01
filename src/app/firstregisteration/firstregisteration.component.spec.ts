import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstregisterationComponent } from './firstregisteration.component';

describe('FirstregisterationComponent', () => {
  let component: FirstregisterationComponent;
  let fixture: ComponentFixture<FirstregisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstregisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
