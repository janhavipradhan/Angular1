import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwdCmpComponent } from './rwd-cmp.component';

describe('RwdCmpComponent', () => {
  let component: RwdCmpComponent;
  let fixture: ComponentFixture<RwdCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwdCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwdCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
