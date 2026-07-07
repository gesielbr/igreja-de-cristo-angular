import { CtaAsideLink } from './cta-aside-link.model';

export interface CtaAsideSection {
  title: string;
  id: string;
  description?: string[];
  links: CtaAsideLink[];
}
