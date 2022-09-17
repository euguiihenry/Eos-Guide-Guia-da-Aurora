import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteWidgetComponent } from './quote-widget.component';

describe('QuoteWidgetComponent', () => {
  let component: QuoteWidgetComponent;
  let fixture: ComponentFixture<QuoteWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
