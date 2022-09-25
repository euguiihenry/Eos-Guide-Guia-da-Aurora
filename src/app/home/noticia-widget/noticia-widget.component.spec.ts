import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaWidgetComponent } from './noticia-widget.component';

describe('NoticiaWidgetComponent', () => {
  let component: NoticiaWidgetComponent;
  let fixture: ComponentFixture<NoticiaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
