import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentWidgetComponent } from './entertainment-widget.component';

describe('EntertainmentWidgetComponent', () => {
  let component: EntertainmentWidgetComponent;
  let fixture: ComponentFixture<EntertainmentWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
