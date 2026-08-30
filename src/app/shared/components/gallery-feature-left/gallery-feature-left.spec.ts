import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFeatureLeft } from './gallery-feature-left';

describe('GalleryFeatureLeft', () => {
  let component: GalleryFeatureLeft;
  let fixture: ComponentFixture<GalleryFeatureLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryFeatureLeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryFeatureLeft);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
