import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParallaxComponent } from './home-parallax.component';

describe('HomeParallaxComponent', () => {
  let component: HomeParallaxComponent;
  let fixture: ComponentFixture<HomeParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeParallaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
