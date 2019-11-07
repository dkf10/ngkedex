import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesCardComponent } from './types-card.component';

describe('TypesCardComponent', () => {
  let component: TypesCardComponent;
  let fixture: ComponentFixture<TypesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
