import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePropCardComponent } from './base-prop-card.component';

describe('BasePropCardComponent', () => {
  let component: BasePropCardComponent;
  let fixture: ComponentFixture<BasePropCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePropCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePropCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
