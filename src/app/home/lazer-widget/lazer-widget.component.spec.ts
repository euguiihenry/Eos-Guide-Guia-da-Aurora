import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazerWidgetComponent } from './lazer-widget.component';

describe('LazerWidgetComponent', () => {
  let component: LazerWidgetComponent;
  let fixture: ComponentFixture<LazerWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazerWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
