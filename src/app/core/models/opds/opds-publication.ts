import { OpdsLink, OpdsMetadata } from './opds-link';

export interface IOpdsPublication {
  metadata: OpdsMetadata;
  links: OpdsLink[];
  images?: OpdsLink[];
  resources?: OpdsLink[];
  readingOrder?: OpdsLink[];
}

export class OpdsPublication implements IOpdsPublication {
  metadata: OpdsMetadata;
  links: OpdsLink[];
  images: OpdsLink[];
  resources: OpdsLink[];
  readingOrder: OpdsLink[];

  constructor(data: any) {
    this.metadata = data.metadata;
    this.links = data.links || [];
    this.images = data.images || [];
    this.resources = data.resources || [];
    this.readingOrder = data.readingOrder || [];
  }

  getSelfLink(): string | undefined {
    return this.links.find(l => l.rel === 'self')?.href;
  }

  getImages(): OpdsLink[] {
    return this.images;
  }

  // Helper to get resources by type
  getResourcesByType(type: string): OpdsLink[] {
    return this.resources.filter(r => r.type === type);
  }

  getAllResources(): OpdsLink[] {
    return this.resources;
  }
  
  // Specific helper for form resources if needed, though usually just 'text/html' or 'application/javascript'
  getMainResource(): OpdsLink | undefined {
      // In these examples, the main resource seems to be in readingOrder or resources
      // For a form, there might be a specific link rel or type we care about.
      // Based on test-form.json, readingOrder has the main html.
      return this.readingOrder.length > 0 ? this.readingOrder[0] : undefined;
  }

  getOrchestratorLink(): string | undefined {
      const link = this.links.find(l => l.rel === 'http://opds-spec.org/acquisition/open-access');
      return link ? link.href : undefined;
  }
}
