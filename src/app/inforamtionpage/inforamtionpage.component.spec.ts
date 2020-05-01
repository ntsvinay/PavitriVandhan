import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InforamtionpageComponent } from './inforamtionpage.component';

describe('InforamtionpageComponent', () => {
  let component: InforamtionpageComponent;
  let fixture: ComponentFixture<InforamtionpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforamtionpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforamtionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
