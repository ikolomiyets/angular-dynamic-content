import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTwoContentComponent } from './at-two-content.component';

describe('AtTwoContentComponent', () => {
  let component: AtTwoContentComponent;
  let fixture: ComponentFixture<AtTwoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTwoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTwoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
