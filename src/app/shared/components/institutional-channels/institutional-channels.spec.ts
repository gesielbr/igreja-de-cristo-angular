import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalChannels } from './institutional-channels';

describe('InstitutionalChannels', () => {
  let component: InstitutionalChannels;
  let fixture: ComponentFixture<InstitutionalChannels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalChannels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionalChannels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
