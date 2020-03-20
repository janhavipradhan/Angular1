import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbCmpComponent } from './rgb-cmp.component';

describe('RgbCmpComponent', () => {
  let component: RgbCmpComponent;
  let fixture: ComponentFixture<RgbCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgbCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
