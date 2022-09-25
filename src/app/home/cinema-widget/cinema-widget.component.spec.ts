import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaWidgetComponent } from './cinema-widget.component';

describe('CinemaWidgetComponent', () => {
  let component: CinemaWidgetComponent;
  let fixture: ComponentFixture<CinemaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
