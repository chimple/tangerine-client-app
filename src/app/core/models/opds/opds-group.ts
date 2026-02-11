import { OpdsLink, OpdsMetadata } from './opds-link';
import { OpdsPublication } from './opds-publication';

export interface IOpdsGroup {
  metadata: OpdsMetadata;
  links: OpdsLink[];
  publications: OpdsPublication[];
}

export class OpdsGroup implements IOpdsGroup {
  metadata: OpdsMetadata;
  links: OpdsLink[];
  publications: OpdsPublication[];

  constructor(data: any) {
    this.metadata = data.metadata;
    this.links = data.links || [];
    this.publications = (data.publications || []).map((p: any) => new OpdsPublication(p));
  }

  getSelfLink(): string | undefined {
    return this.links.find(l => l.rel === 'self')?.href;
  }
}
