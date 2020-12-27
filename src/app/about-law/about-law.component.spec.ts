import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLawComponent } from './about-law.component';

describe('AboutLawComponent', () => {
  let component: AboutLawComponent;
  let fixture: ComponentFixture<AboutLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
