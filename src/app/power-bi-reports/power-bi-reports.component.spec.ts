import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBIReportsComponent } from './power-bi-reports.component';

describe('PowerBIReportsComponent', () => {
  let component: PowerBIReportsComponent;
  let fixture: ComponentFixture<PowerBIReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBIReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBIReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
