import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOneFooterComponent } from './at-one-footer.component';

describe('AtOneFooterComponent', () => {
  let component: AtOneFooterComponent;
  let fixture: ComponentFixture<AtOneFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtOneFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtOneFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
