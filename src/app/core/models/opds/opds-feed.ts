import { OpdsLink, OpdsMetadata } from './opds-link';

export interface OpdsFeed {
  metadata: OpdsMetadata;
  links: OpdsLink[];
  navigation?: OpdsLink[]; 
  groups?: OpdsLink[]; 
  publications?: any[]; 
}
