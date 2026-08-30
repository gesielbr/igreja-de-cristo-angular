import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFeatureRight } from './gallery-feature-right';

describe('GalleryFeatureRight', () => {
  let component: GalleryFeatureRight;
  let fixture: ComponentFixture<GalleryFeatureRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryFeatureRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryFeatureRight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
