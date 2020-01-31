import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOneContentComponent } from './at-one-content.component';

describe('AtOneContentComponent', () => {
  let component: AtOneContentComponent;
  let fixture: ComponentFixture<AtOneContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtOneContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtOneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
