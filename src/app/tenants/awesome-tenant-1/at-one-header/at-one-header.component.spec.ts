import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOneHeaderComponent } from './at-one-header.component';

describe('AtOneHeaderComponent', () => {
  let component: AtOneHeaderComponent;
  let fixture: ComponentFixture<AtOneHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtOneHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtOneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
