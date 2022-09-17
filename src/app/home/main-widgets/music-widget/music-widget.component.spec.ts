import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicWidgetComponent } from './music-widget.component';

describe('MusicWidgetComponent', () => {
  let component: MusicWidgetComponent;
  let fixture: ComponentFixture<MusicWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
