import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenCentralComponent } from './imagen-central.component';

describe('ImagenCentralComponent', () => {
  let component: ImagenCentralComponent;
  let fixture: ComponentFixture<ImagenCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenCentralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
