import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaWidgetComponent } from './clima-widget.component';

describe('ClimaWidgetComponent', () => {
  let component: ClimaWidgetComponent;
  let fixture: ComponentFixture<ClimaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
