import { OpdsLink, OpdsMetadata } from './opds-link';

export interface OpdsFeed {
  metadata: OpdsMetadata;
  links: OpdsLink[];
  navigation?: OpdsLink[]; // For the root feed pointing to groups
  groups?: OpdsLink[]; // Alternative name
  publications?: any[]; // Usually groups are in navigation in OPDS 1.2/2.0 context but here it seems they are navigation links
}
