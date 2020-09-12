import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPolicyComponent } from './about-policy.component';

describe('AboutPolicyComponent', () => {
  let component: AboutPolicyComponent;
  let fixture: ComponentFixture<AboutPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
