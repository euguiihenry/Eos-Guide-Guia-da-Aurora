import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWidgetComponent } from './food-widget.component';

describe('FoodWidgetComponent', () => {
  let component: FoodWidgetComponent;
  let fixture: ComponentFixture<FoodWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
