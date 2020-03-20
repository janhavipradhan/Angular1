import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsCmpComponent } from './basics-cmp.component';

describe('BasicsCmpComponent', () => {
  let component: BasicsCmpComponent;
  let fixture: ComponentFixture<BasicsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
