import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseWidgetComponent } from './frase-widget.component';

describe('FraseWidgetComponent', () => {
  let component: FraseWidgetComponent;
  let fixture: ComponentFixture<FraseWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraseWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraseWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
