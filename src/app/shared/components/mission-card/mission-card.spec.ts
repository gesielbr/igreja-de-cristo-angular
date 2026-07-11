import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionCard } from './mission-card';
import { By } from '@angular/platform-browser';

describe('MissionCard', () => {
  let component: MissionCard;
  let fixture: ComponentFixture<MissionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionCard);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon when provided', () => {
    const testIcon = 'bi bi-compass';
    fixture.componentRef.setInput('icon', testIcon);
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('.mission-icon i'));
    expect(iconElement).toBeTruthy();
    expect(iconElement.nativeElement.className).toContain('bi-compass');
  });

  it('should render title when provided', () => {
    const testTitle = 'Missão';
    fixture.componentRef.setInput('title', testTitle);
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.card-body h3'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent.trim()).toBe(testTitle);
  });

  it('should render description when provided', () => {
    const testDescription = 'Levar pessoas a conhecer Cristo';
    fixture.componentRef.setInput('description', testDescription);
    fixture.detectChanges();

    const descElement = fixture.debugElement.query(By.css('.card-body p'));
    expect(descElement).toBeTruthy();
    expect(descElement.nativeElement.textContent.trim()).toBe(testDescription);
  });

  it('should have mission-card class', () => {
    const cardElement = fixture.debugElement.query(By.css('.mission-card'));
    expect(cardElement).toBeTruthy();
    expect(cardElement.nativeElement.className).toContain('mission-card');
    expect(cardElement.nativeElement.className).toContain('rounded-4');
  });

  it('should have mission-icon class with correct styles', () => {
    const iconContainer = fixture.debugElement.query(By.css('.mission-icon'));
    expect(iconContainer).toBeTruthy();
    expect(iconContainer.nativeElement.className).toContain('rounded-circle');
    expect(iconContainer.nativeElement.className).toContain('d-inline-flex');
    expect(iconContainer.nativeElement.className).toContain('align-items-center');
    expect(iconContainer.nativeElement.className).toContain('justify-content-center');
  });
});
