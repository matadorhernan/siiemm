import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrosoftComponent } from './cuadrosoft.component';

describe('CuadrosoftComponent', () => {
  let component: CuadrosoftComponent;
  let fixture: ComponentFixture<CuadrosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
