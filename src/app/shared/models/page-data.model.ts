import { PageType } from './page.model';
import { SiteSection } from './site-section.model';

export interface PageData {
  section: SiteSection;
  pageType: PageType;
  churchSlug?: string;
  churchName?: string;
}
