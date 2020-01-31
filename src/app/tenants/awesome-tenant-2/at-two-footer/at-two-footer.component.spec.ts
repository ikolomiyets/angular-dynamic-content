import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTwoFooterComponent } from './at-two-footer.component';

describe('AtTwoFooterComponent', () => {
  let component: AtTwoFooterComponent;
  let fixture: ComponentFixture<AtTwoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTwoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTwoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
