import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaWidgetComponent } from './musica-widget.component';

describe('MusicaWidgetComponent', () => {
  let component: MusicaWidgetComponent;
  let fixture: ComponentFixture<MusicaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicaWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
