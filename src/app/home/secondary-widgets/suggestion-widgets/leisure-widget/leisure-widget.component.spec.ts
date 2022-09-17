import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisureWidgetComponent } from './leisure-widget.component';

describe('LeisureWidgetComponent', () => {
  let component: LeisureWidgetComponent;
  let fixture: ComponentFixture<LeisureWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisureWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeisureWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
