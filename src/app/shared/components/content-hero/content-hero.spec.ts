import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentHeroComponent } from './content-hero';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContentHeroComponent', () => {
  let component: ContentHeroComponent;
  let fixture: ComponentFixture<ContentHeroComponent>;

  const mockData = {
    currentPage: 'Quem Somos',
    subtitle: 'Nossa identidade',
    title: 'Quem Somos',
    description: 'Uma igreja que existe para amar a Deus, acolher pessoas e servir a Cristo.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentHeroComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentHeroComponent);
    component = fixture.componentInstance;

    // Definir inputs obrigatórios
    component.currentPage = mockData.currentPage;
    component.subtitle = mockData.subtitle;
    component.title = mockData.title;
    component.description = mockData.description;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current page in breadcrumb', () => {
    const breadcrumbItem = fixture.debugElement.query(By.css('.breadcrumb-item.active'));
    expect(breadcrumbItem.nativeElement.textContent.trim()).toBe(mockData.currentPage);
  });

  it('should display the subtitle with correct classes', () => {
    const subtitleElement = fixture.debugElement.query(By.css('.text-gold'));
    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement.nativeElement.textContent.trim()).toBe(mockData.subtitle);
    expect(subtitleElement.nativeElement.classList).toContain('text-uppercase');
    expect(subtitleElement.nativeElement.classList).toContain('fw-semibold');
  });

  it('should display the title correctly', () => {
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent.trim()).toBe(mockData.title);
    expect(titleElement.nativeElement.classList).toContain('display-5');
    expect(titleElement.nativeElement.classList).toContain('fw-bold');
  });

  it('should display the description correctly', () => {
    const descriptionElement = fixture.debugElement.query(By.css('.lead'));
    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement.nativeElement.textContent.trim()).toBe(mockData.description);
    expect(descriptionElement.nativeElement.classList).toContain('col-xl-8');
  });

  it('should have correct breadcrumb link to home', () => {
    const homeLink = fixture.debugElement.query(By.css('.breadcrumb-item a'));
    expect(homeLink).toBeTruthy();
    expect(homeLink.nativeElement.textContent.trim()).toBe('Início');
    expect(homeLink.nativeElement.getAttribute('href')).toBe('/');
  });

  it('should use custom homeRoute when provided', () => {
    component.homeRoute = '/home';
    fixture.detectChanges();

    const homeLink = fixture.debugElement.query(By.css('.breadcrumb-item a'));
    expect(homeLink.nativeElement.getAttribute('href')).toBe('/home');
  });

  it('should have correct ARIA attributes for accessibility', () => {
    const nav = fixture.debugElement.query(By.css('nav'));
    expect(nav.nativeElement.getAttribute('aria-label')).toBe('breadcrumb');

    const breadcrumbItem = fixture.debugElement.query(By.css('.breadcrumb-item.active'));
    expect(breadcrumbItem.nativeElement.getAttribute('aria-current')).toBe('page');
  });

  it('should render all required elements', () => {
    const header = fixture.debugElement.query(By.css('.page-hero'));
    expect(header).toBeTruthy();
    expect(header.nativeElement.classList).toContain('text-white');
    expect(header.nativeElement.classList).toContain('px-4');
    expect(header.nativeElement.classList).toContain('py-5');
  });

  it('should update content when inputs change', () => {
    const newData = {
      currentPage: 'Igrejas',
      subtitle: 'Nossas comunidades',
      title: 'Igrejas',
      description: 'Conheça nossas comunidades',
    };

    component.currentPage = newData.currentPage;
    component.subtitle = newData.subtitle;
    component.title = newData.title;
    component.description = newData.description;
    fixture.detectChanges();

    expect(
      fixture.debugElement
        .query(By.css('.breadcrumb-item.active'))
        .nativeElement.textContent.trim(),
    ).toBe(newData.currentPage);
    expect(fixture.debugElement.query(By.css('.text-gold')).nativeElement.textContent.trim()).toBe(
      newData.subtitle,
    );
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.textContent.trim()).toBe(
      newData.title,
    );
    expect(fixture.debugElement.query(By.css('.lead')).nativeElement.textContent.trim()).toBe(
      newData.description,
    );
  });
});
