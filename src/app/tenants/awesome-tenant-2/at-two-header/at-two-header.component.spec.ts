import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTwoHeaderComponent } from './at-two-header.component';

describe('AtTwoHeaderComponent', () => {
  let component: AtTwoHeaderComponent;
  let fixture: ComponentFixture<AtTwoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTwoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTwoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
