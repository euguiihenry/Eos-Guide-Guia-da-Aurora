import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaWidgetComponent } from './comida-widget.component';

describe('ComidaWidgetComponent', () => {
  let component: ComidaWidgetComponent;
  let fixture: ComponentFixture<ComidaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
