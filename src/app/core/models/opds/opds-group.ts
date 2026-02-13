import { OpdsLink, OpdsMetadata } from './opds-link';
import { OpdsForm } from './opds-form';

export interface IOpdsGroup {
  metadata: OpdsMetadata;
  links: OpdsLink[];
  forms: OpdsForm[];
}

export class OpdsGroup implements IOpdsGroup {
  metadata: OpdsMetadata;
  links: OpdsLink[];
  forms: OpdsForm[];

  constructor(data: any) {
    this.metadata = data.metadata;
    this.links = data.links || [];
    // Map 'publications' from JSON to 'forms' in our model
    this.forms = (data.publications || []).map((p: any) => new OpdsForm(p));
  }

  getSelfLink(): string | undefined {
    return this.links.find(l => l.rel === 'self')?.href;
  }
}
